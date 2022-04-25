import React from 'react'
import './App.css'
import CmdPalette from './components/CmdPalette'
import TestPlugin from './plugins/test'

function App() {
  return (
    <div className='bg-white w-screen h-screen'>
      Hi all
      <CmdPalette plugin={TestPlugin} />
    </div>
  )
}

export default App
