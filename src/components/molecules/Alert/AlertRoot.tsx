import { ReactNode } from "react"

import { Alert } from "@/components/ui/alert"


interface AlertRootProps {

  showingCondition: boolean
  variant?: "default" | "destructive"
  children: ReactNode
}

function AlertRoot({ showingCondition, variant = "default", children }: AlertRootProps) {

  return (
    showingCondition && (
      <Alert variant={variant} className="fixed top-16 left-[50%] translate-x-[-50%] z-[100] w-fit bg-background/90 backdrop-blur-sm">
        {children}
      </Alert>
    )
  )
}

export default AlertRoot