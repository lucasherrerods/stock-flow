import Header from "../../components/Header"
import Sidebar from '../../components/Sidebar'
import Main from '../../components/Main'

export default function Dashboard() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Main>
        <h1>Dashboard</h1>
      </Main>
    </div>
  )
}