import { useContext } from "react"
import { ToggleSidebar } from "../../contexts/ToggleSidebar"

export default function Main({ children }) {
  const { isOpen } = useContext(ToggleSidebar)

  return (
    <main className={`fixed top-12 left-0 h-[calc(100vh-3rem)] transition-all duration-300 ease-in-out ${isOpen ? 'ml-60 w-[calc(100%-15rem)]' : 'ml-20 w-[calc(100%-5rem)]'}`}>
      <div className="h-full overflow-y-auto p-6 bg-gray-50">
        {children}
      </div>
    </main>
  )
}