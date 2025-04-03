import Sidebar from "../../components/Sidebar"
import Main from "../../components/Main"
import Toolbar from "../../components/Toolbar"

export default function Categories() {
  return (
    <div>
      <Sidebar />
      <Main>
        <h1 className="font-semibold text-xl text-gray-800">Categorias</h1>
        <Toolbar search={'Buscar por nome ou ID'} button={'Adicionar categoria'} />
      </Main>
    </div>
  )
}