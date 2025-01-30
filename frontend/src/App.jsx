import './index.css'
import './App.css'
import Home from './components/Home/Home'
import Register from './components/Authentication/Register'
import Login from './components/Authentication/Login'
import HomeTrilhas from './components/PaginaTrilhas/homeTrilhas'
import PassResetRequest from './components/Authentication/PassResetRequest'
import PassReset from './components/Authentication/PassReset'
import Quiz from './components/Quiz/Quiz'
import C2 from './components/Trilhas/TrilhaC2'
import Perfil from './components/Perfil/PaginadePerfil'
import EditInfoPerfil from './components/Perfil/EditarInfoPerfil'
import Probabilidade from './components/Trilhas/Probabilidade'
import {Routes, Route} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoutes'


function App() {
  
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/request/password-reset" element={<PassResetRequest/>}/>
        <Route path="/password-reset/:token" element={<PassReset/>}/>
        <Route path="/homeTrilhas" element={<HomeTrilhas/>}/>
        <Route path="/bem-vindo" element={<Quiz/>}/>
        <Route path="/request/password-reset" element={<PassResetRequest/>}/>
        <Route path="/password-reset/:token" element={<PassReset/>}/>
        {/*Adicione nessa parte de baixo as URL's restritas (precisa estar logado)*/}
        <Route element={<ProtectedRoute/>}>
          <Route path="/bem-vindo" element={<Quiz/>}/>
          <Route path="/c2" element={<C2/>}/>
          <Route path="/perfil" element={<Perfil/>}/>
          <Route path="/editar-perfil" element={<EditInfoPerfil/>}/>
          <Route path="/probabilidade" element={<Probabilidade/>}/>
        </Route>
      </Routes>

    </>
  )
}

export default App
