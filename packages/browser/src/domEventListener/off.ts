export function off(
  el: HTMLElement | Document | Window,
  event: string,
  handler: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions | undefined
): void {
  el.removeEventListener(event, handler, options)
}
