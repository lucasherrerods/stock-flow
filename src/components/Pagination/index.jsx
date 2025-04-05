import { useState, useEffect } from "react"

export default function Pagination({ itemsState, getItems }) {
  //Estado da paginação
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 7

  //Cálculos da paginação
  const indexLastItem = currentPage * itemsPerPage
  const indexFirstItem = indexLastItem - itemsPerPage
  const totalPages = Math.ceil(itemsState.length / itemsPerPage)

  //Validação para trocar de página
  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber)
    }
  }

  //Atualiza os itens da página atual sempre que currentPage mudar
  useEffect(() => {
    const currentItems = itemsState.slice(indexFirstItem, indexLastItem) //Meio que divide e deixa apenas os itens da página atual

    if (getItems) {
      getItems({ currentItems, itemsPerPage })//Passa os valores para o componente pai
    }
  }, [currentPage, itemsPerPage, getItems])

  return (
    <div className="flex justify-between items-center mt-4 px-4 py-3 bg-gray-50 rounded-b-lg border border-gray-200">
      <span className="text-sm text-gray-600">
        Mostrando {indexFirstItem + 1}-{Math.min(indexLastItem, itemsState.length)} de {itemsState.length} itens
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
  )
}