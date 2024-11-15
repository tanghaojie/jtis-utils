export const isClient = typeof window !== 'undefined'

export const isSsl = isClient && window.location.protocol === 'https:'
