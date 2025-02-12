import "./index.css";
import "./App.css";
import Home from "./components/Home/Home";
import Register from "./components/Authentication/Register";
import Login from "./components/Authentication/Login";
import PassResetRequest from "./components/Authentication/PassResetRequest";
import PassReset from "./components/Authentication/PassReset";
import Quiz from "./components/Quiz/Quiz";
import C2 from "./components/Trilhas/TrilhaC2";
import ConceitosSequencias from "./components/Trilhas/ConceitosSequencias";
import QuestoesSequencias from "./components/Trilhas/QuestoesSequencias";
import HomeTrilhas from './components/PaginaTrilhas/homeTrilhas'
import Probabilidade from './components/Trilhas/Probabilidade'
import ConceitosSeries from "./components/Trilhas/ConceitosSeries";
import {Routes, Route} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoutes'
import QuestoesSeries from "./components/Trilhas/QuestoesSeries";
import ConceitosEDOPrimeiraO from "./components/Trilhas/ConceitosEDOPrimeiraO";
import QuestoesEDOPrimeiraO from "./components/Trilhas/QuestoesEDOPrimeiraO";
import ConceitosEDOSegundaO from "./components/Trilhas/ConceitosEDOSegundaO";
import QuestoesEDOSegundaO from "./components/Trilhas/QuestoesEDOSegundaO";
import ConceitosSeriesPotencia from "./components/Trilhas/ConceitosSeriesPotencia";
import QuestoesSeriesPotencia from "./components/Trilhas/QuestoesSeriesPotencia";
import ConceitosLaplace from "./components/Trilhas/ConceitosLaplace";
import QuestoesLaplace from "./components/Trilhas/QuestoesLaplace";
import PE from "./components/TrilhaProbabilidade/TrilhaProbabilidade";
import ConceitosMedia from "./components/QuestoesProbabilidade/ConceitosMedia";
import QuestoesMedia from "./components/QuestoesProbabilidade/QuestoesMedia";
import ConceitosVariavel from "./components/QuestoesProbabilidade/ConceitosVariavel";
import QuestoesVariavel from "./components/QuestoesProbabilidade/QuestoesVariavel";
import ConceitosDistribuicao from "./components/QuestoesProbabilidade/ConceitosDistribuicao";
import QuestoesDistribuicao from "./components/QuestoesProbabilidade/QuestoesDistribuicao";
import ConceitosRegressao from "./components/QuestoesProbabilidade/ConceitosRegressao";
import QuestoesRegressao from "./components/QuestoesProbabilidade/QuestoesRegressao";
import ConceitosEstocasticos from "./components/QuestoesProbabilidade/ConceitosEstocasticos";
import QuestoesEstocasticos from "./components/QuestoesProbabilidade/QuestoesEstocasticos";
import ConceitosEstimativa from "./components/QuestoesProbabilidade/ConceitosEstimativa";
import QuestoesEstimativa from "./components/QuestoesProbabilidade/QuestoesEstimativa";
import Perfil from './components/Perfil/PaginadePerfil'
import EditInfoPerfil from './components/Perfil/EditarInfoPerfil'


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
        <Route path="/perfil" element={<Perfil/>}/>
        <Route path="/editar-perfil" element={<EditInfoPerfil/>}/>
        <Route path="/bem-vindo" element={<Quiz />} />
        <Route path="/c2" element={<C2 />} />
        <Route path="/probabilidade" element={<Probabilidade />} />
        <Route path="/ConceitosSequencias" element={<ConceitosSequencias />} />
        <Route path="/ConceitosSeries" element={<ConceitosSeries />} />
        <Route path="/QuestoesSequencias" element={<QuestoesSequencias />} />
        <Route path="/QuestoesSeries" element={<QuestoesSeries />} />
        <Route path="/ConceitosEDOPrimeiraO" element={<ConceitosEDOPrimeiraO />} />
        <Route path="/QuestoesEDOPrimeiraO" element={<QuestoesEDOPrimeiraO />} />
        <Route path="/ConceitosEDOSegundaO" element={<ConceitosEDOSegundaO />} />
        <Route path="/QuestoesEDOSegundaO" element={<QuestoesEDOSegundaO />} />
        <Route path="/ConceitosSeriesPotencia" element={<ConceitosSeriesPotencia />} />
        <Route path="/QuestoesSeriesPotencia" element={<QuestoesSeriesPotencia />} />
        <Route path="/ConceitosLaplace" element={<ConceitosLaplace />} />
        <Route path="/QuestoesLaplace" element={<QuestoesLaplace />} />
        <Route path="/PE" element={<PE />} />
        <Route path="/ConceitosMedia" element={<ConceitosMedia />} />
        <Route path="/QuestoesMedia" element={<QuestoesMedia />} />
        <Route path="/ConceitosVariavel" element={<ConceitosVariavel />} />
        <Route path="/QuestoesVariavel" element={<QuestoesVariavel />} />
        <Route path="/ConceitosDistribuicao" element={<ConceitosDistribuicao />} />
        <Route path="/QuestoesDistribuicao" element={<QuestoesDistribuicao />} />
        <Route path="/ConceitosRegressao" element={<ConceitosRegressao />} />
        <Route path="/QuestoesRegressao" element={<QuestoesRegressao />} />
        <Route path="/ConceitosEstocasticos" element={<ConceitosEstocasticos />} />
        <Route path="/QuestoesEstocasticos" element={<QuestoesEstocasticos />} />
        <Route path="/ConceitosEstimativa" element={<ConceitosEstimativa />} />
        <Route path="/QuestoesEstimativa" element={<QuestoesEstimativa />} />
        </Route>
      </Routes>
       
    </>
  );
}

export default App;
