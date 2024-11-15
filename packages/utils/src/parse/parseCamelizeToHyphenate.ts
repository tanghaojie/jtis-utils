import { cacheStringFunction } from './cacheStringFunction'

const REGEX = /\B([A-Z])/g

/**
 * 大驼峰转连字符
 * ABc-abc-ABC  --->  ABc-abc-ABC
 */
export const parseCamelizeToHyphenate = cacheStringFunction((str: string) =>
  str.replace(REGEX, '-$1').toLowerCase()
)
