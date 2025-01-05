import { BrowserRouter as Router, Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Nav";
import Home from "./components/Home";


function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
   </Router>
    </div>
  );
}

export default App;