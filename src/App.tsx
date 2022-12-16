import React from 'react'
import selsupLogo from './assets/logo.png'
import './App.css'

function App() {
  return (
    <div className='App'>
      <div>
        <a href='https://selsup.ru/' target='_blank'>
          <img src={selsupLogo} className='logo' alt='Selsup logo' />
        </a>
      </div>
      <h1>Test for Selsup company</h1>
      <div className='card'></div>
    </div>
  )
}

export default App
