---
description: "Guidelines for data-auth"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "angelstreet/automai"
__meta__service: "Supabase"
__meta__tags: ["Authentication","Security","Supabase","Role-based Access Control","Session Management"]
__meta__rate: 8
---
# Authentication Patterns

## AI Guidelines
Implement secure authentication using Supabase Auth with proper session management, role-based access control, and tenant isolation. Create middleware for route protection, validate user identity in all actions, and follow secure token handling practices. Ensure consistent error handling for authentication failures.

## Key Patterns

### Authentication Flow
- **Supabase Auth**: Use Supabase for all authentication
- **Email/Password**: Primary authentication method
- **Social Auth**: Optional OAuth providers (Google, GitHub)
- **Magic Link**: Passwordless email authentication
- **Multi-tenant**: User associated with specific tenant
- **Role Assignment**: Role-based access control

### Session Management
- **Token Storage**: Secure cookie-based token storage
- **Session Refresh**: Automatic token refresh mechanism
- **Session Validation**: Middleware validation on all protected routes
- **Session Termination**: Proper logout handling

### User Context
- **Authentication Check**: `getUser()` helper for server actions
- **User Provider**: Client-side user context provider
- **Permission Helpers**: Role-based permission checking

### Tenant Isolation
- **Tenant Identifier**: Use `tenant_id` in all user operations
- **Row-Level Security**: Supabase RLS policies for tenant isolation
- **Default Tenant**: First-time login tenant assignment
- **Cross-Tenant Prevention**: Block cross-tenant access attempts

## Examples

### Authentication Implementation

```typescript
// In /src/lib/supabase/auth.ts
import { createClient } from '@/lib/supabase/supabase-server';
import { cookies } from 'next/headers';

export async function signIn(email: string, password: string): Promise<DbResponse<User>> {
  try {
    const supabase = createClient(cookies());

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      return { success: false, error: error.message };
    }

    // Fetch user profile with tenant and role info
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', data.user.id)
      .single();

    if (profileError) {
      return { success: false, error: 'Failed to fetch user profile' };
    }

    return {
      success: true,
      data: {
        id: data.user.id,
        email: data.user.email!,
        name: profile.name,
        tenant_id: profile.tenant_id,
        role: profile.role
      }
    };
  } catch (error) {
    console.error('Error in signIn:', error);
    return { success: false, error: 'Authentication failed' };
  }
}

export async function signOut(): Promise<DbResponse<void>> {
  try {
    const supabase = createClient(cookies());
    const { error } = await supabase.auth.signOut();

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Error in signOut:', error);
    return { success: false, error: 'Failed to sign out' };
  }
}

export async function getCurrentUser(): Promise<DbResponse<User>> {
  try {
    const supabase = createClient(cookies());

    const { data: { session }, error: sessionError } = await supabase.auth.getSession();

    if (sessionError || !session) {
      return { success: false, error: 'No active session' };
    }

    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', session.user.id)
      .single();

    if (profileError) {
      return { success: false, error: 'Failed to fetch user profile' };
    }

    return {
      success: true,
      data: {
        id: session.user.id,
        email: session.user.email!,
        name: profile.name,
        tenant_id: profile.tenant_id,
        role: profile.role
      }
    };
  } catch (error) {
    console.error('Error in getCurrentUser:', error);
    return { success: false, error: 'Failed to get current user' };
  }
}
```

### Server-Side Authentication Action

```typescript
// In /src/app/actions/user.ts
'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/supabase/auth';
import { serverCache } from '@/lib/cache';

export async function getUser(): Promise<ActionResult<AuthUser>> {
  try {
    // Check cache first (short TTL for security)
    const cacheKey = 'current_user';
    const cachedUser = serverCache.get<AuthUser>(cacheKey);

    if (cachedUser) {
      return { success: true, data: cachedUser };
    }

    // Get user from Supabase
    const result = await getCurrentUser();

    if (!result.success) {
      return { success: false, error: 'Authentication required' };
    }

    // Cache user data (short TTL)
    serverCache.set(cacheKey, result.data, { ttl: 60 }); // 60 seconds

    return { success: true, data: result.data };
  } catch (error) {
    console.error('Error in getUser:', error);
    return { success: false, error: 'Failed to authenticate user' };
  }
}

export async function requireAuth(redirectTo: string = '/login') {
  const userResult = await getUser();

  if (!userResult.success) {
    // If client-side, return data for client-side redirect
    if (typeof window !== 'undefined') {
      return { authenticated: false, redirectUrl: redirectTo };
    }

    // If server-side, redirect immediately
    redirect(redirectTo);
  }

  return { authenticated: true, user: userResult.data };
}

export async function requireRole(
  requiredRoles: string[],
  redirectTo: string = '/unauthorized'
) {
  const { authenticated, user, redirectUrl } = await requireAuth();

  if (!authenticated) {
    return { authorized: false, redirectUrl };
  }

  if (!requiredRoles.includes(user.role)) {
    // If client-side, return data for client-side redirect
    if (typeof window !== 'undefined') {
      return { authorized: false, redirectUrl: redirectTo };
    }

    // If server-side, redirect immediately
    redirect(redirectTo);
  }

  return { authorized: true, user };
}
```

### Authentication Middleware

```typescript
// In /src/middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/supabase-server';

export async function middleware(request: NextRequest) {
  // Get the pathname of the request
  const { pathname } = request.nextUrl;

  // Skip authentication check for public routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api/auth') ||
    pathname === '/login' ||
    pathname === '/register' ||
    pathname === '/forgot-password'
  ) {
    return NextResponse.next();
  }

  // Create supabase server client
  const supabase = createClient();

  // Check if user is authenticated
  const { data: { session }, error } = await supabase.auth.getSession();

  // If no session or error, redirect to login
  if (error || !session) {
    const url = new URL('/login', request.url);
    url.searchParams.set('redirect', pathname);
    return NextResponse.redirect(url);
  }

  // For tenant-specific paths, verify tenant access
  if (pathname.includes('/[tenant]/')) {
    // Extract tenant from URL (based on your URL structure)
    const tenantMatch = pathname.match(/\/([^\/]+)\/dashboard/);
    if (tenantMatch && tenantMatch[1]) {
      const requestedTenant = tenantMatch[1];

      // Fetch user's tenant
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('tenant_id')
        .eq('id', session.user.id)
        .single();

      // If error or tenant mismatch, redirect to unauthorized
      if (profileError || profile.tenant_id !== requestedTenant) {
        return NextResponse.redirect(new URL('/unauthorized', request.url));
      }
    }
  }

  // Continue with the request
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)']
};
```

### Client-Side Authentication

```typescript
// In /src/context/auth/AuthProvider.tsx
'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/supabase-browser';
import { useRouter } from 'next/navigation';

interface AuthContextValue {
  user: AuthUser | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<ActionResult<AuthUser>>;
  signOut: () => Promise<void>;
  isRole: (role: string | string[]) => boolean;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    // Fetch initial session
    const initAuth = async () => {
      setLoading(true);

      try {
        const { data: { session } } = await supabase.auth.getSession();

        if (session) {
          // Fetch user profile
          const { data } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .single();

          setUser({
            id: session.user.id,
            email: session.user.email!,
            name: data.name,
            tenant_id: data.tenant_id,
            role: data.role
          });
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
      } finally {
        setLoading(false);
      }
    };

    initAuth();

    // Set up auth state change listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_IN' && session) {
          // Fetch user profile
          const { data } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .single();

          setUser({
            id: session.user.id,
            email: session.user.email!,
            name: data.name,
            tenant_id: data.tenant_id,
            role: data.role
          });
        } else if (event === 'SIGNED_OUT') {
          setUser(null);
          router.push('/login');
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase, router]);

  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        return { success: false, error: error.message };
      }

      // Fetch user profile
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', data.user.id)
        .single();

      if (profileError) {
        return { success: false, error: 'Failed to fetch user profile' };
      }

      const user = {
        id: data.user.id,
        email: data.user.email!,
        name: profile.name,
        tenant_id: profile.tenant_id,
        role: profile.role
      };

      setUser(user);
      return { success: true, data: user };
    } catch (error) {
      console.error('Error signing in:', error);
      return { success: false, error: 'Authentication failed' };
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push('/login');
  };

  const isRole = (roleOrRoles: string | string[]) => {
    if (!user) return false;

    const roles = Array.isArray(roleOrRoles) ? roleOrRoles : [roleOrRoles];
    return roles.includes(user.role);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut, isRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
```

## Security Best Practices

1. **Token Management**
   - Store tokens only in HTTPOnly, Secure cookies
   - Never store tokens in localStorage
   - Implement short token expiration times
   - Use refresh tokens for longer sessions

2. **Password Security**
   - Enforce strong password policies
   - Implement rate limiting for login attempts
   - Use Supabase's password hashing (Argon2)
   - Support two-factor authentication

3. **Multi-Tenancy**
   - Associate users with specific tenants
   - Use RLS policies based on tenant_id
   - Validate tenant access in middleware
   - Prevent tenant ID manipulation

4. **Permission Management**
   - Implement granular RBAC permissions
   - Check permissions in all actions
   - Keep permission checks consistent
   - Log access violations

## Related Rules
- core-architecture.mdc - Three-layer architecture
- api-design.mdc - API design patterns
- data-supabase.mdc - Database access patterns
- api-implementation.mdc - API implementation
- ui-state.mdc - State management