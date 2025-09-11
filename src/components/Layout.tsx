import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="pt-20">
      {children}
    </div>
  )
}

export default Layout