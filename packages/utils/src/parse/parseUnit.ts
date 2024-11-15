import { isNumber, isString } from '@jtis/type'

/**
 * 自动加单位后缀
 * @param value
 * @param defaultUnit
 * @returns
 */
export function parseUnit(value?: string | number, defaultUnit = 'px') {
  if (value === undefined || value === null) {
    return `0${defaultUnit}`
  }
  if (isString(value)) {
    return value
  } else if (isNumber(value)) {
    return `${value}${defaultUnit}`
  }
}
