import React from 'react'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './Pages/HomePage/Home'
import About from './Pages/AboutPage/AboutUs'
import Product from './Pages/ProductPage/ProductsPage'
import Register from './Pages/RegisterPage/RegisterPage'

import CreateProduct from './Pages/ProductPage/Components/CreateProduct'
import ProductAdmin from './Pages/ProductPage/Components/ProductAdmin'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Product />} />
          <Route path='/register' element={<Register />} />

          <Route path='/createproduct' element={<CreateProduct />} />
          <Route path='/adminproduct' element={<ProductAdmin />} />

        </Routes>
      </Router>
    </>
  )
}

export default App

