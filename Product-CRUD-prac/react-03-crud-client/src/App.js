import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Admin from './Components/Admin'
import CreateProduct from './Components/CreateProduct'
import Products from './Components/Products'
import Update from './Components/Update'
import Navbar from './Navbar/Navbar'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/createproduct' element={<CreateProduct />} />
          <Route path='/products' element={<Products />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/update' element={<Update />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
