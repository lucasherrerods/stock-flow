import { Search } from 'lucide-react'

export default function Toolbar({ search, button, onInputChange }) {
  return (
    <div className="flex items-center justify-between mt-10">
      <div className='flex items-center gap-4'>
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder={search}
            onChange={(e) => onInputChange(e.target.value)}
            className="w-50 border border-gray-300 py-1.5 pl-9 pr-4 rounded-md shadow-md text-xs outline-none transition-all duration-200 ease-in-out focus:border-orange-500"
          />
        </div>
        <select className="border border-gray-300 py-1.5 px-3 rounded-md shadow-md text-xs outline-none transition-all duration-200 ease-in-out focus:border-orange-500 cursor-pointer">
          <option value="">Filtrar por</option>
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
        </select>
      </div>
      <button className="bg-orange-500 text-white text-xs px-4 py-2 rounded-md shadow-md cursor-pointer transition-all ease-in-out duration-300 hover:-translate-y-2">
        {button}
      </button>
    </div>
  )
}