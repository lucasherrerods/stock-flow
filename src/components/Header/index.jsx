import { LogOut, Settings, Bell, BrainCircuit } from 'lucide-react'
import { Link } from 'react-router-dom'
import Avatar from '../../assets/avatar.png'

import { useState } from 'react'

export default function Header() {
  const [profileOpen, setProfileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 h-12 z-20 flex items-center justify-between px-6 bg-[#1A1A27]">
      <div className="flex gap-3 items-center">
        <BrainCircuit size={26} className='text-orange-500' />
        <h1 className="text-white uppercase font-bold tracking-wide">
          Stock<span className='text-orange-500'>Flow</span>
        </h1>
      </div>
      <div className="flex items-center gap-2 relative">
        <div>
          <button className="px-4 py-2.5 text-white cursor-pointer">
            <Bell size={16} />
          </button>
          <button className="px-4 py-2.5 text-white cursor-pointer">
            <Settings size={16} />
          </button>
        </div>
        <div onClick={() => setProfileOpen((prev) => !prev)} className="flex items-center gap-2 p-1 rounded-full transition-all duration-200 cursor-pointer select-none hover:bg-white/10">
          <div className="relative">
            <img className='h-8 w-8 rounded-full object-cover' src={Avatar} alt="Profile" />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#1A1A27]"></div>
          </div>
        </div>
        {profileOpen && (
          <div onClick={(e) => e.stopPropagation()} className="absolute top-full left-1/2 mt-1 w-22 bg-white font-semibold rounded-b-md shadow-lg overflow-hidden z-30 animate-fade-in">
            <div className="py-1">
              <Link to={'/'}>
                <button onClick={() => localStorage.removeItem('token')} className="w-full flex items-center gap-3 px-4 py-2.5 text-xs cursor-pointer">
                  <LogOut size={16} />
                  <span>Sair</span>
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}