import { LogOut, Settings, Bell, BrainCircuit } from 'lucide-react'
import { Link } from 'react-router-dom'
import Avatar from '../../assets/avatar.png'

import { useState } from 'react'

export default function Header() {
  const [profileOpen, setProfileOpen] = useState(false)

  const username = localStorage.getItem('username')

  return (
    <header className="fixed top-0 left-0 right-0 h-12 z-20 flex items-center justify-between px-6 bg-[#1A1A27]">
      <div className="flex gap-3 items-center">
        <BrainCircuit size={26} className='text-orange-500' />
        <h1 className="text-white uppercase font-bold tracking-wide">
          Stock<span className='text-orange-500'>Flow</span>
        </h1>
      </div>
      <div className="flex items-center gap-3 relative">
        <div className="flex items-center gap-1">
          <button className="p-2 text-white hover:bg-white/10 rounded-full transition cursor-pointer">
            <Bell size={18} />
          </button>
          <button className="p-2 text-white hover:bg-white/10 rounded-full transition cursor-pointer">
            <Settings size={18} />
          </button>
        </div>
        <div onClick={() => setProfileOpen((prev) => !prev)} className="flex items-center gap-3 px-2 py-1.5 rounded-full hover:bg-white/10 transition cursor-pointer select-none">
          <div className="relative">
            <img className="h-9 w-9 rounded-full object-cover" src={Avatar} alt="Profile Image" />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#1A1A27] rounded-full" />
          </div>
          <p className="text-sm text-white font-medium">{username}</p>
        </div>
        {profileOpen && (
          <div onClick={(e) => e.stopPropagation()} className="absolute top-[calc(100%+8px)] right-0 min-w-[140px] bg-gray-100 rounded-md shadow-xl z-30 overflow-hidden animate-fade-in transition-all">
            <Link to={'/'}>
              <button
                className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 transition cursor-pointer"
                onClick={() => {
                  localStorage.removeItem('username')
                  localStorage.removeItem('token')
                  document.title = 'StockFlow'
                }}
              >
                <LogOut size={16} className='text-red-600' />
                <span>Sair</span>
              </button>
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}