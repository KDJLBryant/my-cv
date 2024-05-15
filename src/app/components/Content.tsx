import { ReactNode } from "react"

const Content = ({ children }: { children: ReactNode }) => {
  return (
    <div className="content-wrapper-component">
      {children}
    </div>
  )
}

export default Content
