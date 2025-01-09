import html2canvas from 'html2canvas'

export async function domScreenshot(
  elementId: string,
  maxWidth: number = 500,
  maxHeight: number = 500,
  type: 'image/jpeg' | 'image/png' | 'image/webp' = 'image/jpeg'
): Promise<Blob | undefined | null> {
  const mainPanel = document.getElementById(elementId)
  if (!mainPanel) {
    return
  }

  const canvas = await html2canvas(mainPanel)
  if (!canvas) {
    return
  }

  const context = canvas.getContext('2d', { willReadFrequently: true })
  if (!context) {
    canvas.remove()
    return
  }

  const canvas2d = context.canvas

  const wQuality = maxWidth / canvas2d.width
  const hQuality = maxHeight / canvas2d.height
  const quality = wQuality < hQuality ? wQuality : hQuality

  const resizeCanvas = document.createElement('canvas')
  const newW = canvas2d.width * quality
  const newH = canvas2d.height * quality
  resizeCanvas.width = newW
  resizeCanvas.height = newH

  const ctx = resizeCanvas.getContext('2d')
  ctx?.drawImage(canvas2d, 0, 0, canvas2d.width, canvas2d.height, 0, 0, newW, newH)

  return new Promise<Blob | null>((resolve, reject) => {
    try {
      resizeCanvas.toBlob(
        (blob) => {
          resolve(blob)
        },
        type,
        quality
      )
    } catch (e) {
      reject(e)
    } finally {
      canvas2d.remove()
      resizeCanvas.remove()
    }
  })
}
