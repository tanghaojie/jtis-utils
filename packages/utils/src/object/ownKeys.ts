export function ownKeys<T extends object>(obj: T): Array<keyof T> {
  return Reflect.ownKeys(obj) as Array<keyof T>
}
