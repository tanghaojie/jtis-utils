/**
 * 缓存字符串计算结果
 * @param fn
 * @returns
 */
export function cacheStringFunction<T extends (str: string) => string>(fn: T): T {
  const cache: Record<string, string> = Object.create(null)
  return function (str: string) {
    const hit = cache[str]
    return hit || (cache[str] = fn(str))
  } as T
}
