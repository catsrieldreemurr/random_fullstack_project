import type { ReactNode } from "react";

interface SetProps{
  children?: ReactNode
  href: string
  icon: ReactNode
}

export default function NavbarLinks({children, href, icon}:SetProps){
  return (
    <div className="flex gap-2 flex-row hover:bg-gray-500 p-3 rounded-xl">
      {icon}
      <a href={href}>{children}</a>
    </div>
  )
}