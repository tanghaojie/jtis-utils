import type { AsyncFunctionType } from '@jtis/type'

/**
 * 防抖-高频只执行一次，immediate = true 立即执行第一次，否则执行最后一次
 */

export function debounceAsync<R = any>(fn: AsyncFunctionType<R>, n = 100, immediate?: boolean) {
  let timer: number | undefined
  return function (...args: any[]) {
    return new Promise<R>(async (resolve) => {
      timer && clearTimeout(timer)
      //@ts-ignore
      const self = this
      immediate && !timer && resolve(await fn.apply(self, args))
      timer = window.setTimeout(async function () {
        timer = undefined
        !immediate && resolve(await fn.apply(self, args))
      }, n)
    })
  }
}
