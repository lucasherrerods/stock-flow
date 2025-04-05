import Sidebar from "../../components/Sidebar"
import Main from "../../components/Main"
import Toolbar from "../../components/Toolbar"
import Pagination from "../../components/Pagination"
import api from "../../services/api"
import { useEffect, useState, useCallback } from "react"
import { SquarePen, Trash } from "lucide-react"

export default function Categories() {
  //Estado de armazenamento das categorias
  const [allCategories, setAllCategories] = useState([])

  //Estados para receber os itens da página atual da paginação
  const [currentItems, setCurrentItems] = useState([])
  const [itemsPerPage, setItemsPerPage] = useState(0)

  const getItems = useCallback(({ currentItems, itemsPerPage }) => {
    setCurrentItems(currentItems)
    setItemsPerPage(itemsPerPage)
  }, [])

  const loadCategories = async () => {
    const token = localStorage.getItem('token')
    const { data } = await api.get('/categories/list', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    setAllCategories(data)
  }

  useEffect(() => {
    loadCategories()
  }, [])

  return (
    <div>
      <Sidebar />
      <Main>
        <h1 className="font-semibold text-xl text-gray-800">Categorias</h1>
        <Toolbar search={'Buscar por nome ou ID'} button={'Adicionar categoria'} />
        <div className='pt-6'>
          <ul className='grid grid-cols-3 text-xs bg-[#292946] text-white py-3 rounded-t-lg px-4'>
            <li className="text-center font-semibold">ID</li>
            <li className="text-center font-semibold">Nome</li>
            <li className="text-center font-semibold">Descrição</li>
          </ul>
        </div>
        <div className="border-x border-gray-200">
          <ul>
            {currentItems.map((category, index) => (
              <li
                key={category.id}
                className={`grid grid-cols-3 items-center p-4 border-b border-gray-200 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-50'} 
                transition-colors duration-200 relative`}
              >
                <p className="text-center text-sm">
                  {category.id}
                </p>
                <p className="text-center text-sm">
                  {category.name}
                </p>
                <p className="text-center text-sm">
                  {category.description}
                </p>
                <div className='absolute right-4 flex gap-4'>
                  <SquarePen
                    size={14}
                    className="cursor-pointer transition-all ease-in-out duration-200 hover:scale-110 hover:text-blue-500"
                  />
                  <Trash
                    size={14}
                    className="cursor-pointer transition-all ease-in-out duration-200 text-red-400 hover:scale-110 hover:text-red-600"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
        {allCategories.length > itemsPerPage && (
          <Pagination itemsState={allCategories} getItems={getItems} />
        )}
      </Main>
    </div>
  )
}