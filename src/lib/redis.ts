import { Redis } from '@upstash/redis';

// Create a Redis client with Upstash
export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL,
  token: process.env.UPSTASH_REDIS_TOKEN,
});

// Default cache TTL (12 hours)
export const DEFAULT_CACHE_TTL = 60 * 60 * 12;

// Helper function to get a cached value or fetch it if not found
export async function getCachedData<T>(
  key: string,
  fetchFn: () => Promise<T>,
  ttl: number = DEFAULT_CACHE_TTL
): Promise<T> {
  // Try to get data from cache
  const cachedData = await redis.get<T>(key);
  if (cachedData) {
    console.log(`Cache hit for ${key}`);
    return cachedData;
  }

  // If not found, fetch fresh data
  console.log(`Cache miss for ${key}, fetching fresh data`);
  const freshData = await fetchFn();

  // Store in cache
  await redis.set(key, freshData, { ex: ttl });

  return freshData;
}