import { useContext } from "react"
import { ToggleSidebar } from "../../contexts/ToggleSidebar"

export default function Main({ children }) {
  const { isOpen } = useContext(ToggleSidebar)

  return (
    <main className={`h-full transition-all ease-in-out transform whitespace-nowrap p-10 ${isOpen ? 'w-[calc(100%-240px)] duration-200 ml-60' : 'w-[calc(100%-80px)] duration-900 ml-20'}`}>
      {children}
    </main>
  )
}