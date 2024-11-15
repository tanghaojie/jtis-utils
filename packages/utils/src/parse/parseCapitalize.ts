import { cacheStringFunction } from './cacheStringFunction'

/**
 * 转换为首字母大写
 */
export const parseCapitalize = cacheStringFunction(
  (str: string) => str.charAt(0).toUpperCase() + str.slice(1)
)
