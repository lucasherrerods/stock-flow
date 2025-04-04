import Sidebar from "../../components/Sidebar"
import Main from "../../components/Main"
import Toolbar from "../../components/Toolbar"
import api from "../../services/api"
import { useEffect, useState } from "react"
import { SquarePen, Trash } from "lucide-react"

export default function Categories() {
  // Estado de armazenamento das categorias
  const [allCategories, setAllCategories] = useState([])

  //Estado da paginação
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 7

  //Cálculos da paginação
  const indexLastItem = currentPage * itemsPerPage
  const indexFirstItem = indexLastItem - itemsPerPage
  const currentItems = allCategories.slice(indexFirstItem, indexLastItem) //Meio que divide e deixa apenas os itens da página atual
  const totalPages = Math.ceil(allCategories.length / itemsPerPage)

  //Validação para trocar de página
  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber)
    }
  }

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
          <div className="flex justify-between items-center mt-4 px-4 py-3 bg-gray-50 rounded-b-lg border border-gray-200">
            <span className="text-sm text-gray-600">
              Mostrando {indexFirstItem + 1}-{Math.min(indexLastItem, allCategories.length)} de {allCategories.length} itens
            </span>
            <div className="flex gap-1">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 text-sm rounded border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200"
              >
                Anterior
              </button>
              {/* Gera botões com números de página automaticamente */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`w-8 h-8 text-sm rounded ${currentPage === number ? 'bg-[#292946] text-white' : 'border border-gray-300 hover:bg-gray-200'}`}
                >
                  {number}
                </button>
              ))}

              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 text-sm rounded border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200"
              >
                Próxima
              </button>
            </div>
          </div>
        )}
      </Main>
    </div>
  )
}