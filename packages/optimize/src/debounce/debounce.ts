import type { SyncFunctionType } from '@jtis/type'

/**
 * 防抖-高频只执行一次，immediate = true 立即执行第一次，否则执行最后一次
 */
export function debounce(
  fn: SyncFunctionType<void>,
  n = 100,
  immediate?: boolean
): (...args: any[]) => void {
  let timer: number | undefined
  return function (...args: any[]): void {
    timer && clearTimeout(timer)
    //@ts-ignore
    const self = this
    immediate && !timer && fn.apply(self, args)
    timer = window.setTimeout(function () {
      timer = undefined
      !immediate && fn.apply(self, args)
    }, n)
  }
}
