---
description: "Stack Auth is the authentication service of choice for creating and managing user authentication and authorization."
globs: "*.tsx, *.ts"
__meta__type: "guideline"
__meta__repo: "neondatabase-labs/neon-auth-nextjs-template"
__meta__service: "Stack Auth"
__meta__framework: "NextJS"
__meta__tags: ["Authentication","Authorization","NextJS","User Management","React"]
__meta__rate: 8
---
# Stack Auth Guidelines
## Setup Guidelines
- Run the installation wizard with:  
  `npx @stackframe/init-stack@latest`
- Update your API keys in your `.env.local` file:  
  - `NEXT_PUBLIC_STACK_PROJECT_ID`  
  - `NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY`  
  - `STACK_SECRET_SERVER_KEY`
- Key files created/updated include:  
  - `app/handler/[...stack]/page.tsx` (default auth pages)  
  - `app/layout.tsx` (wrapped with StackProvider and StackTheme)  
  - `app/loading.tsx` (provides a Suspense fallback)  
  - `stack.ts` (initializes your Stack server app)
## Components Guidelines
- Use pre-built components from `@stackframe/stack` like `<UserButton />`, `<SignIn />`, and `<SignUp />` to quickly set up auth UI.
- You can also compose smaller pieces like `<OAuthButtonGroup />`, `<MagicLinkSignIn />`, and `<CredentialSignIn />` for custom flows.
- Example:
  
  ```tsx
  import { SignIn } from '@stackframe/stack';
  export default function Page() {
    return <SignIn />;
  }
  ```
## User Management Guidelines
- In Client Components, use the `useUser()` hook to retrieve the current user (it returns `null` when not signed in).
- Update user details using `user.update({...})` and sign out via `user.signOut()`.
- For pages that require a user, call `useUser({ or: "redirect" })` so unauthorized visitors are automatically redirected.
## Client Component Guidelines
- Client Components rely on hooks like `useUser()` and `useStackApp()`.
- Example:
  
  ```tsx
  "use client";
  import { useUser } from "@stackframe/stack";
  export function MyComponent() {
    const user = useUser();
    return <div>{user ? `Hello, ${user.displayName}` : "Not logged in"}</div>;
  }
  ```
## Server Component Guidelines
- For Server Components, use `stackServerApp.getUser()` from your `stack.ts` file.
- Example:
  
  ```tsx
  import { stackServerApp } from "@/stack";
  export default async function ServerComponent() {
    const user = await stackServerApp.getUser();
    return <div>{user ? `Hello, ${user.displayName}` : "Not logged in"}</div>;
  }
  ```
## Page Protection Guidelines
- Protect pages by:
  - Using `useUser({ or: "redirect" })` in Client Components.
  - Using `await stackServerApp.getUser({ or: "redirect" })` in Server Components.
  - Implementing middleware that checks for a user and redirects to `/handler/sign-in` if not found.
- Example middleware:
  
  ```tsx
  export async function middleware(request: NextRequest) {
    const user = await stackServerApp.getUser();
    if (!user) {
      return NextResponse.redirect(new URL('/handler/sign-in', request.url));
    }
    return NextResponse.next();
  }
  export const config = { matcher: '/protected/:path*' };
  ```
## Stack App Object Guidelines
- The StackApp object provides core functionality:
  - Use `useStackApp()` in Client Components (StackClientApp) which requires a publishable client key.
  - Use `stackServerApp` in Server Components (StackServerApp) which needs your secret server key.
- Methods come in two flavors: promise-based (`getXyz`) and hook-based (`useXyz`), so choose based on your component type.
## SDK Reference
Below are some of the types available in Stack Auth:
```tsx
type StackClientApp = {
  new(options): StackClientApp;
  getUser([options]): Promise<User>;
  useUser([options]): User;
  getProject(): Promise<Project>;
  useProject(): Project;
  signInWithOAuth(provider): void;
  signInWithCredential([options]): Promise<...>;
  signUpWithCredential([options]): Promise<...>;
  sendForgotPasswordEmail(email): Promise<...>;
  sendMagicLinkEmail(email): Promise<...>;
};
type StackServerApp =
  & StackClientApp
  & {
    new(options): StackServerApp;
    getUser([id][, options]): Promise<ServerUser | null>;
    useUser([id][, options]): ServerUser;
    listUsers([options]): Promise<ServerUser[]>;
    useUsers([options]): ServerUser[];
    createUser([options]): Promise<ServerUser>;
    getTeam(id): Promise<ServerTeam | null>;
    useTeam(id): ServerTeam;
    listTeams(): Promise<ServerTeam[]>;
    useTeams(): ServerTeam[];
    createTeam([options]): Promise<ServerTeam>;
  }
type CurrentUser = {
  id: string;
  displayName: string | null;
  primaryEmail: string | null;
  primaryEmailVerified: boolean;
  profileImageUrl: string | null;
  signedUpAt: Date;
  hasPassword: boolean;
  clientMetadata: Json;
  clientReadOnlyMetadata: Json;
  selectedTeam: Team | null;
  update(data): Promise<void>;
  updatePassword(data): Promise<void>;
  getAuthHeaders(): Promise<Record<string, string>>;
  getAuthJson(): Promise<{ accessToken: string | null }>;
  signOut([options]): Promise<void>;
  delete(): Promise<void>;
  getTeam(id): Promise<Team | null>;
  useTeam(id): Team | null;
  listTeams(): Promise<Team[]>;
  useTeams(): Team[];
  setSelectedTeam(team): Promise<void>;
  createTeam(data): Promise<Team>;
  leaveTeam(team): Promise<void>;
  getTeamProfile(team): Promise<EditableTeamMemberProfile>;
  useTeamProfile(team): EditableTeamMemberProfile;
  hasPermission(scope, permissionId): Promise<boolean>;
  getPermission(scope, permissionId[, options]): Promise<TeamPermission | null>;
  usePermission(scope, permissionId[, options]): TeamPermission | null;
  listPermissions(scope[, options]): Promise<TeamPermission[]>;
  usePermissions(scope[, options]): TeamPermission[];
  listContactChannels(): Promise<ContactChannel[]>;
  useContactChannels(): ContactChannel[];
};
```
## Examples
### Example: custom-profile-page
#### Task
Create a custom profile page that:
- Displays the user's avatar, display name, and email.
- Provides options to sign out.
- Uses Stack Auth components and hooks.
#### Response
##### File: app/profile/page.tsx
###### Code
```tsx
'use client';
import { useUser, useStackApp, UserButton } from '@stackframe/stack';
export default function ProfilePage() {
  const user = useUser({ or: "redirect" });
  const app = useStackApp();
  return (
    <div>
      <UserButton />
      <h1>Welcome, {user.displayName || "User"}</h1>
      <p>Email: {user.primaryEmail}</p>
      <button onClick={() => user.signOut()}>Sign Out</button>
    </div>
  );
}
```