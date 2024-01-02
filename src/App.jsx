import React from 'react'
import Navbar from './components/Navbar'
import UserDetails from './components/UserDetails'
import { DeleteAllUser } from './components/DeleteAllUser'

const App = () => {
  return (
    <div>
      <Navbar/>
      <UserDetails/>
    </div>
  )
}

export default App
