import { ImageProviderContext } from "@/context/selected-image-provider"
import { ImageContextType } from "@/types/ImageTypes"
import { useContext } from "react"

const useImageContext = (): ImageContextType => {

  const context = useContext(ImageProviderContext)

  if (!context) {

    throw new Error('useImageContext must be used within an ImageProvider')
  }

  return context
}

export default useImageContext