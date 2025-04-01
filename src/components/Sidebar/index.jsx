import Logo from '../../assets/logo.png'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CircleChevronLeft, LayoutDashboard, Package, Tags, Truck, Shuffle, LogOut } from 'lucide-react'

export default function Sidebar() {
  // Hook para pegar a localização atual da URL
  const location = useLocation()

  // Verifica se a rota ativa é a atual
  const isActive = (path) => location.pathname === path

  useEffect(() => {
    // Insere o título respectivo da página atual
    if (location.pathname === '/dashboard') {
      document.title = 'StockFlow | Dashboard'
    } else if (location.pathname === '/products') {
      document.title = 'StockFlow | Produtos'
    } else if (location.pathname === '/categories') {
      document.title = 'StockFlow | Categorias'
    } else if (location.pathname === '/suppliers') {
      document.title = 'StockFlow | Fornecedores'
    } else if (location.pathname === '/transactions') {
      document.title = 'StockFlow | Movimentações'
    }
  }, [location]) // Executa sempre que a URL mudar

  return (
    <nav className="fixed top-0 left-0 h-full bg-[#1A1A27] z-10 w-60 flex flex-col">
      <header className="flex items-center justify-between px-4 py-2 mt-4">
        <div className='flex gap-3 items-center'>
          <img src={Logo} alt="Logo" className='h-6 w-auto rounded-lg' />
          <h1 className="text-white lowercase font-bold tracking-wide">
            StockFlow
          </h1>
        </div>
        <CircleChevronLeft size={20} className='text-white font-bold cursor-pointer' />
      </header>
      <div className="flex-1 py-4 mt-10">
        <ul className='text-white text-xs space-y-6 px-4'>
          <li className={`h-10 flex items-center rounded-md transition-all ease-in-out duration-500 ${isActive('/dashboard') ? 'bg-orange-500 hover:opacity-80' : 'hover:bg-white/10'}`}>
            <Link to={'/dashboard'} className='w-full flex items-center gap-3 px-4'>
              <LayoutDashboard size={16} />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className={`h-10 flex items-center rounded-md transition-all ease-in-out duration-500 ${isActive('/products') ? 'bg-orange-500 hover:opacity-80' : 'hover:bg-white/10'}`}>
            <Link to={'/products'} className='w-full flex items-center gap-3 px-4'>
              <Package size={16} />
              <span>Produtos</span>
            </Link>
          </li>
          <li className={`h-10 flex items-center rounded-md transition-all ease-in-out duration-500 ${isActive('/categories') ? 'bg-orange-500 hover:opacity-80' : 'hover:bg-white/10'}`}>
            <Link to={'/categories'} className='w-full flex items-center gap-3 px-4'>
              <Tags size={16} />
              <span>Categorias</span>
            </Link>
          </li>
          <li className={`h-10 flex items-center rounded-md transition-all ease-in-out duration-500 ${isActive('/suppliers') ? 'bg-orange-500 hover:opacity-80' : 'hover:bg-white/10'}`}>
            <Link to={'/suppliers'} className='w-full flex items-center gap-3 px-4'>
              <Truck size={16} />
              <span>Fornecedores</span>
            </Link>
          </li>
          <li className={`h-10 flex items-center rounded-md transition-all ease-in-out duration-500 ${isActive('/transactions') ? 'bg-orange-500 hover:opacity-80' : 'hover:bg-white/10'}`}>
            <Link to={'/transactions'} className='w-full flex items-center gap-3 px-4'>
              <Shuffle size={16} />
              <span>Movimentações</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className='border-t border-white/20 py-3 px-4 mt-auto'>
        <Link to={'/'}>
          <button onClick={() => localStorage.removeItem('token')} className='w-full h-10 flex items-center gap-3 text-white text-xs rounded-md px-4 transation-all ease-in-out duration-500 hover:bg-white/10 cursor-pointer'>
            <LogOut size={16} />
            <span>Logout</span>
          </button>
        </Link>
      </div>
    </nav>
  )
}