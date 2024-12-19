import Navbar from './components/Navbar'
import Main from './components/Main'
import './App.css'
import { useState } from 'react'
import Footer from './components/Footer'

function App() {
  const [darkMode,setDarkMode] = useState(true)
  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }
  return (
    <div className='container'>
      <Navbar 
      darkMode={darkMode}
      toggleDarkMode={toggleDarkMode}
      />
      <Main darkMode={darkMode} />
      <Footer 
      darkMode={darkMode}
      toggleDarkMode={toggleDarkMode}
      />
    </div>
  )
}

export default App
