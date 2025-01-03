import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Register from './components/Register'
import Login from './components/Login'
import PassResetRequest from './components/PassResetRequest'
import PassReset from './components/PassReset'
import Quiz from './components/Quiz'
import C2 from './components/TrilhaC2'
import {Routes, Route} from 'react-router-dom'


function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<About/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/bem-vindo" element={<Quiz/>}/>
        <Route path="/request/password-reset" element={<PassResetRequest/>}/>
        <Route path="/password-reset/:token" element={<PassReset/>}/>
        <Route path="/c2" element={<C2/>}/>
      </Routes>

    </>
  )
}

export default App
