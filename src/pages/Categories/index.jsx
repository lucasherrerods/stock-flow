import Header from "../../components/Header"
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
  //Estado para os itens que estão sendo exibidos
  const [currentItems, setCurrentItems] = useState([])

  const [debounce, setDebounce] = useState(null)
  const [isSearched, setIsSearched] = useState(false)

  const loadCategories = (searchValue) => {
    const token = localStorage.getItem('token')

    if (debounce) {
      clearTimeout(debounce)
    }

    const timeout = setTimeout(async () => {
      try {
        let endpoint

        if (!searchValue) {
          endpoint = await api.get('/categories/list', {
            headers: { Authorization: `Bearer ${token}` }
          })
          setAllCategories(endpoint.data)
          setIsSearched(false)

        } else if (!isNaN(searchValue)) {
          endpoint = await api.get(`/categories/${searchValue}`, {
            headers: { Authorization: `Bearer ${token}` }
          })
          const result = endpoint.data ? [endpoint.data] : [] //Transforma o response de objeto pra array
          setCurrentItems(result)
          setIsSearched(true)

        } else {
          endpoint = await api.get(`/categories/searchName?name=${searchValue}`, {
            headers: { Authorization: `Bearer ${token}` }
          })
          setCurrentItems(endpoint.data)
          setIsSearched(true)
        }
      } catch (error) {
        console.error(error)
        setCurrentItems([])
        setIsSearched(false)
      }
    }, 250)

    setDebounce(timeout)
  }

  useEffect(() => {
    loadCategories()
  }, [])

  //Callback para receber itens paginados do componente Pagination
  const handlePangeChange = useCallback((items) => {
    setCurrentItems(items)
  }, [])

  const loadOrder = (orderValue) => {
    let result = [...allCategories]

    if (orderValue === 'az') {
      result.sort((a, b) => a.name.localeCompare(b.name))
    } else if (orderValue === 'za') {
      result.sort((a, b) => b.name.localeCompare(a.name))
    }

    setAllCategories(result)
  }

  return (
    <div>
      <Header />
      <Sidebar />
      <Main>
        <h1 className="font-semibold text-xl text-gray-800">Categorias</h1>
        <Toolbar search={'Buscar por nome ou ID'} button={'Adicionar categoria'} onInputChange={loadCategories} onOrder={loadOrder} />
        <div className='pt-6'>
          <ul className='grid grid-cols-3 text-xs bg-[#292946] text-white py-3 rounded-t-lg px-4'>
            <li className="text-center font-semibold">ID</li>
            <li className="text-center font-semibold">Nome</li>
            <li className="text-center font-semibold">Descrição</li>
          </ul>
        </div>
        <div className="border-x border-gray-200">
          <ul>
            {currentItems.length > 0 ? (
              currentItems.map((category, index) => (
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
              ))
            ) : (
              <li className="p-4 text-center text-sm text-gray-500">
                Nenhuma categoria encontrada
              </li>
            )}
          </ul>
        </div>
        {!isSearched && allCategories.length > 6 && (
          <Pagination items={allCategories} itemsPerPage={6} onPageChange={handlePangeChange} />
        )}
      </Main>
    </div>
  )
}