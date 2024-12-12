import './App.css';
import Entrada from './components/Entrada/Entrada';
import Textee from './components/Textee';
import Cadastro from './components/cadastro';
import Lembrar from './components/Lembrar';
import Login from './components/login';
import Avatars from './components/Avatars';

import Paper from "@mui/material/Paper";
import { LoginTwoTone } from '@mui/icons-material';

function App() {
  return (
    <>
    <Paper elevation={3} style={{padding: "10px"}}><Cadastro/>
    <Lembrar/>
    </Paper>
    
     
    </>
    
  )
}

export default App;
//<Paper elevation={3} style={{padding: "10px"}}><Cadastro/>
//</Paper>
