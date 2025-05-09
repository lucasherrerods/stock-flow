import { useEffect, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, LayoutDashboard, Package, Tags, Truck, Shuffle } from 'lucide-react'
import { ToggleSidebar } from '../../contexts/ToggleSidebar'

export default function Sidebar() {
  // Hook para pegar a localização atual da URL
  const location = useLocation()

  // Verifica se a rota ativa é a atual
  const isActive = (path) => location.pathname === path

  const { isOpen, toggleSidebar } = useContext(ToggleSidebar)

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
    <nav className={`fixed top-12 left-0 h-[calc(100vh-3rem)] bg-[#1A1A27] z-10 flex flex-col transition-all duration-300 ease-in-out ${isOpen ? 'w-60' : 'w-20'}`}>
      <div className={`flex p-4 ${isOpen ? 'justify-end' : 'justify-center'} mt-2`}>
        {isOpen ? (
          <X
            onClick={toggleSidebar}
            size={20}
            className='text-white font-bold cursor-pointer'
          />
        ) : (
          <Menu
            onClick={toggleSidebar}
            size={20}
            className='text-white font-bold cursor-pointer'
          />
        )}
      </div>
      <div className="flex-1 py-4 overflow-y-auto">
        <ul className='text-white text-xs space-y-6 px-4'>
          <li className={`h-10 flex items-center rounded-md transition-all ease-in-out duration-500 ${isActive('/dashboard') ? 'bg-orange-500 hover:opacity-80' : 'hover:bg-white/10'}`}>
            <Link to={'/dashboard'} className='w-full flex items-center gap-3 px-4'>
              <div className='min-w-[20px] flex justify-center'>
                <LayoutDashboard size={16} />
              </div>
              <span className={`whitespace-nowrap transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 w-0'}`}>Dashboard</span>
            </Link>
          </li>
          <li className={`h-10 flex items-center rounded-md transition-all ease-in-out duration-500 ${isActive('/products') ? 'bg-orange-500 hover:opacity-80' : 'hover:bg-white/10'}`}>
            <Link to={'/products'} className='w-full flex items-center gap-3 px-4'>
              <div className='min-w-[20px] flex justify-center'>
                <Package size={16} />
              </div>
              <span className={`whitespace-nowrap transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 w-0'}`}>Produtos</span>
            </Link>
          </li>
          <li className={`h-10 flex items-center rounded-md transition-all ease-in-out duration-500 ${isActive('/categories') ? 'bg-orange-500 hover:opacity-80' : 'hover:bg-white/10'}`}>
            <Link to={'/categories'} className='w-full flex items-center gap-3 px-4'>
              <div className='min-w-[20px] flex justify-center'>
                <Tags size={16} />
              </div>
              <span className={`whitespace-nowrap transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 w-0'}`}>Categorias</span>
            </Link>
          </li>
          <li className={`h-10 flex items-center rounded-md transition-all ease-in-out duration-500 ${isActive('/suppliers') ? 'bg-orange-500 hover:opacity-80' : 'hover:bg-white/10'}`}>
            <Link to={'/suppliers'} className='w-full flex items-center gap-3 px-4'>
              <div className='min-w-[20px] flex justify-center'>
                <Truck size={16} />
              </div>
              <span className={`whitespace-nowrap transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 w-0'}`}>Fornecedores</span>
            </Link>
          </li>
          <li className={`h-10 flex items-center rounded-md transition-all ease-in-out duration-500 ${isActive('/transactions') ? 'bg-orange-500 hover:opacity-80' : 'hover:bg-white/10'}`}>
            <Link to={'/transactions'} className='w-full flex items-center gap-3 px-4'>
              <div className='min-w-[20px] flex justify-center'>
                <Shuffle size={16} />
              </div>
              <span className={`whitespace-nowrap transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 w-0'}`}>Movimentações</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}