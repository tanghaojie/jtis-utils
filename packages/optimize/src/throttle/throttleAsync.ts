import type { SyncFunctionType } from '@jtis/type'

/**
 * 节流-高频变间隔执行
 */
export function throttleAsync<R = any>(
  fn: SyncFunctionType<R>,
  n = 100,
  immediate?: boolean
): (...args: any[]) => Promise<R> {
  let timer: number | undefined

  return function (...args: any[]) {
    return new Promise<R>(async (resolve) => {
      if (timer) return
      //@ts-ignore
      const self = this
      timer = window.setTimeout(async function () {
        timer = undefined
        !immediate && resolve(await fn.apply(self, args))
      }, n)

      immediate && resolve(await fn.apply(self, args))
    })
  }
}
