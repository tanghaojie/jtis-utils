import type { SyncFunctionType } from '@jtis/type'

/**
 * 节流-高频变间隔执行
 */
export function throttle(
  fn: SyncFunctionType<void>,
  n = 100,
  immediate?: boolean
): (...args: any[]) => void {
  let timer: number | undefined
  return function (...args: any[]) {
    if (timer) return
    //@ts-ignore
    const self = this
    timer = window.setTimeout(function () {
      timer = undefined
      !immediate && fn.apply(self, args)
    }, n)
    immediate && fn.apply(self, args)
  }
}
