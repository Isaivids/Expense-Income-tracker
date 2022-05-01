import React from 'react'
import Header from './components/Header'
import InputPanel from './components/InputPanel'
import ListTransaction from './components/ListTransaction'

const App = () => {
  return (
    <div>
        <Header/>
        <InputPanel/>
        <ListTransaction/>
    </div>
  )
}

export default App