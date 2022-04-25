import React from 'react'
import './App.css'
import CmdPalette from './components/CmdPalette'
import Button from './components/Button'
import TestPlugin from './plugins/test'

function App() {
  return (
    <div className='bg-white w-screen h-screen'>
      <Button />
      <CmdPalette service={TestPlugin} />
    </div>
  )
}

export default App
