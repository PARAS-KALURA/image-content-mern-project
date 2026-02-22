import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<h1>Hello World!</h1>} ></Route>
        <Route path='/about' element = {<h1>Hello About!</h1>} ></Route>
      </Routes>
    </Router>
  )
}

export default App