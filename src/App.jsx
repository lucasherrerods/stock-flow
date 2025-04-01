import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from "./pages/Auth"
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Categories from './pages/Categories'
import Suppliers from './pages/Suppliers'
import Movements from './pages/Movements'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/products' element={<Products />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/suppliers' element={<Suppliers />} />
        <Route path='/transactions' element={<Movements />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
