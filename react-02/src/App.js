import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import ProductApp from './Product/ProductApp'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/product' element={<ProductApp />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
