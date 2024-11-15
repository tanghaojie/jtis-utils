export function on(
  el: HTMLElement | Document | Window,
  event: string,
  handler: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions | undefined
): void {
  el.addEventListener(event, handler, options)
}
