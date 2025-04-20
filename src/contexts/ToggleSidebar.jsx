import { createContext, useState } from "react";

export const ToggleSidebar = createContext()

export function ToggleProvider({ children }) {
  //Estado que controla a funcionalidade toggle da sidebar, inicia fechada
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <ToggleSidebar.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </ToggleSidebar.Provider>
  )
}