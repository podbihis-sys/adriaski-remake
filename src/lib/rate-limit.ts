const requests = new Map<string, { count: number; resetAt: number }>();

// Auto cleanup every 5 minutes
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [key, value] of requests.entries()) {
      if (value.resetAt < now) requests.delete(key);
    }
  }, 5 * 60 * 1000);
}

export function rateLimit(
  ip: string,
  limit: number = 5,
  windowMs: number = 60 * 60 * 1000 // 1 hour default
): { success: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  const record = requests.get(ip);

  if (!record || record.resetAt < now) {
    requests.set(ip, { count: 1, resetAt: now + windowMs });
    return { success: true, remaining: limit - 1, resetAt: now + windowMs };
  }

  if (record.count >= limit) {
    return { success: false, remaining: 0, resetAt: record.resetAt };
  }

  record.count++;
  return { success: true, remaining: limit - record.count, resetAt: record.resetAt };
}
