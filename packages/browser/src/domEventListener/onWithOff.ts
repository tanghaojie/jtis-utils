export function onWithOff(
  el: HTMLElement | Document | Window,
  event: string,
  handler: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions | undefined
): () => void {
  function register(
    el: HTMLElement | Document | Window,
    event: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions | undefined
  ) {
    el.addEventListener(event, listener, options)
    return function () {
      el.removeEventListener(event, listener, options)
    }
  }

  return register(el, event, handler, options)
}
