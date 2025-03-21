# Setting Up Upstash Redis for Project Rules

This application uses Upstash Redis for caching remote rules fetched from GitHub repositories. Follow these steps to set up your Upstash Redis database.

## 1. Create an Upstash Redis Database

1. Go to [Upstash](https://upstash.com/) and sign up for an account if you don't have one.
2. Create a new Redis database:
   - Click on "Create Database"
   - Choose a name for your database (e.g., "project-rules")
   - Select a region closest to your app deployment
   - Choose the appropriate plan (free tier is available)
   - Click "Create"

## 2. Get Your Upstash Redis Credentials

After creating your database, you'll need to get the connection credentials:

1. Go to the database details page
2. Under the "REST API" section, you'll find:
   - Your endpoint URL
   - Your token

These values will be used for the environment variables.

## 3. Set Environment Variables

Add these environment variables to your deployment platform (Vercel, Netlify, etc.) or to your local `.env.local` file:

```
UPSTASH_REDIS_URL=https://your-upstash-instance.upstash.io
UPSTASH_REDIS_TOKEN=your-token-here
```

Replace the placeholders with your actual Upstash Redis credentials.

## 4. Optional: Configure GitHub Token

If you're fetching from multiple GitHub repositories or need a higher rate limit, add a GitHub Personal Access Token:

1. Create a token at [GitHub Settings > Developer Settings > Personal access tokens](https://github.com/settings/tokens)
2. Only read access to public repositories is needed
3. Add the token to your environment variables:

```
GITHUB_TOKEN=your-github-token
```

## 5. Fine-Tuning Cache Settings

You can adjust the cache settings in the `src/lib/redis.ts` file:

- `DEFAULT_CACHE_TTL`: How long to cache remote rules (default: 1 hour)

For production, you might want to increase this to reduce API calls to GitHub.

## 6. Testing the Cache

When the application is running, you should see cache status messages in the console:
- "Cache miss for [key], fetching fresh data" - When data is not in cache
- "Cache hit for [key]" - When data is found in cache

These messages confirm that the caching system is working as expected.