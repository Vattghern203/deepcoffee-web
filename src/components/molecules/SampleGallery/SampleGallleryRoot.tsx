import { Dialog, DialogContent } from "@/components/ui/dialog";

import { Dispatch, ReactNode, SetStateAction } from "react";

interface SampleGalleryProps {

  children: ReactNode
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  onOpenChangeFn: () => void
}

function SampleGalleryRoot( { children, isOpen, onOpenChangeFn }:SampleGalleryProps ) {

  return (

    <Dialog open={isOpen} onOpenChange={onOpenChangeFn}>
      <DialogContent className="w-[90vw] max-w-[800px] overflow-clip">
        {children}
      </DialogContent>
    </Dialog>
  )
}

export default SampleGalleryRoot