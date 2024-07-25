import React from 'react'
import Login from './components/login/Login'
import { Button } from '@mui/material'
import Register from './components/register/Register'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <Routes>

      {/* <Route path='/' element={<PrivateRoute/>}>
             <Route index element={<h1>Home</h1>}/>
             <Route path='/lesson' element={<h1>Lesson</h1>}/>
      </Route> */}

      <Route path='/login' element={<Login/>}/>
      <Route path='/registration' element={<Register/>}/>
      {/* <Route path='*' element={<h1>Error</h1>}/> */}
    </Routes>
  )
}

export default App
