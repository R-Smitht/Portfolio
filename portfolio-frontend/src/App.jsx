import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
// import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Card from './components/card.jsx'
import Projects from './pages/Projects.jsx'
import Home from './pages/Home.jsx'
import Experiments from './pages/Experiments.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/experiments' element={<Experiments/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
