import { ReactNode } from "react"
import { Header } from "./Header"

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      { children }
    </div>
  )
}