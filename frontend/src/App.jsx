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
import SeriesSequencias from "./components/Trilhas/EDOX";
import { Routes, Route } from "react-router-dom";
import QuestoesSequencias from "./components/Trilhas/QuestoesSequencias";


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/bem-vindo" element={<Quiz />} />
        <Route path="/request/password-reset" element={<PassResetRequest />} />
        <Route path="/password-reset/:token" element={<PassReset />} />
        <Route path="/c2" element={<C2 />} />
        <Route path="/" element={<SeriesSequencias />} />
        <Route path="/ConceitosSequencias" element={<ConceitosSequencias />} />
        <Route path="/QuestoesSequencias" element={<QuestoesSequencias />} />
      </Routes>
    </>
  );
}

export default App;
