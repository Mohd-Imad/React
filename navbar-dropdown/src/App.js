import React from 'react'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Routes>
          <Route path='/' element={<Home />} />
        </Routes> */}
      </Router>
    </>
  )
}

export default App

