import { useEffect, useState } from "react"

const acceptedImageTypes = [
  "image/png",
  "image/jpg",
  "image/jpeg",
  "image/gif",
  "image/bmp",
  "image/webp",
  "image/x-icon",
  "image/vnd.microsoft.icon",
  "image/heif",
  "image/heic",
  "image/tiff",
  "image/svg+xml",
]

const checkClipboardForImage = async () => {
  try {
    const clipboardItems = await navigator.clipboard.read()
    for (const clipboardItem of clipboardItems) {
      if (acceptedImageTypes.some((type) => clipboardItem.types.includes(type))) {
        return true
      }
    }
  } catch {
    //
  }
  return false
}

export const useCapture = () => {
  const [capture, setCapture] = useState(false)

  useEffect(() => {
    if (capture) return

    const handleKeydown = async (event: KeyboardEvent) => {
      if (
        event.key === "PrintScreen" || // Detect PrintScreen key
        event.key === "PrtSc" || // Detect PrtSc abbreviation
        event.key === "PrtScn" || // Detect PrtScn abbreviation
        event.key === "PrtScr" || // Detect PrtScr abbreviation
        event.key === "PrtScrn" || // Detect PrtScrn abbreviation
        (event.ctrlKey && event.key === "PrintScreen") || // Detect Ctrl + PrintScreen (Windows)
        (event.altKey && event.key === "PrintScreen") || // Detect Alt + PrintScreen (Windows)
        (event.metaKey && event.key === "Shift" && event.keyCode === 4) || // Cmd + Shift + 4 (Mac)
        (event.metaKey && event.key === "Shift" && event.keyCode === 3) || // Cmd + Shift + 3 (Mac)
        (event.metaKey && event.key === "4") || // Cmd + 4 (Mac)
        (event.metaKey && event.key === "3") || // Cmd + 3 (Mac)
        (event.metaKey && event.key === "S" && event.ctrlKey) || // Detect Cmd + Ctrl + S (common Unix screenshot shortcut)
        (event.ctrlKey && event.key === "S") // Detect Ctrl + S (common Unix screenshot shortcut)
      ) {
        setCapture(true)
      }
    }

    const handleKeyup = () => {
      setCapture(false)
    }

    window.addEventListener("keydown", handleKeydown)
    window.addEventListener("keyup", handleKeyup)

    const interval = setInterval(async () => {
      if (capture) return

      setCapture(await checkClipboardForImage())
    }, 1000 * 10)

    return () => {
      window.removeEventListener("keydown", handleKeydown)
      window.removeEventListener("keyup", handleKeyup)
      clearInterval(interval)
    }
  }, [capture])

  return capture
}
