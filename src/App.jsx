import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import ItemContextProvider from './context/ItemContext'

function App() {
  return (
    <ItemContextProvider>
         <div>
              <BrowserRouter>
                    <Navbar/>
                    <Routes>
                        <Route path='/'  element={<Home/>}/>
                        <Route path='/cart' element={<Cart/>}/>
                    </Routes>
              </BrowserRouter>
         </div>
    </ItemContextProvider>
  )
}

export default App
