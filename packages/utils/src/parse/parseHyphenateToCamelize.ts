import { cacheStringFunction } from './cacheStringFunction'

const REGEX = /-(\w)/g

/**
 * 连字符转大驼峰
 * abc-abc-ABC  --->   abcAbcABC
 */
export const parseHyphenateToCamelize = cacheStringFunction((str: string): string => {
  return str.replace(REGEX, (_, c) => (c ? c.toUpperCase() : ''))
})
