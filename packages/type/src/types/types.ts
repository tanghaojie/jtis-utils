export type SyncFunctionType<R = any> = (...args: any[]) => R
export type AsyncFunctionType<R = any> = (...args: any[]) => Promise<R>