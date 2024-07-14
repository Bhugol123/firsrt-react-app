import React from 'react'
import Header from './components/Header'
import Display from './pages/home/Display'
import Tech from './pages/home/Tech'
import Intro from './pages/home/Intro'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Display/>
      <Tech/>
      <Intro/>
      <Footer/>
    </div>
  )
}

export default App