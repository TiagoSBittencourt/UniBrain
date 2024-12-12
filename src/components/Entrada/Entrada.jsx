import React from "react";

import { FaUser, FaLock } from "react-icons/fa";

import { useState } from "react";


const Entrada = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    
    console.log("Envio", username, password);
  };

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Acesse o sitema</h1>
            <div>
              <input type="email" placeholder= "E-mail" 
              onChange={(e)=> setUsername(e.target.value)}  />
                <FaUser className="icon" />
            </div>
            <div>
              <input type="password" placeholder="Senha"
              onChange={(e)=> setPassword(e.target.value)}/>
                <FaLock className="icon" />
            </div>

            <div className="recall-forget">
                <label>
                    <input type="checkbox" />
                    Lembrar de mim
                </label>
                <a href="#"> Esqueceu a senha?</a>
            </div>

            <button>Entrar</button>

            <div className="signup-link">
                <p>Nao tem uma conta? <a href="#"> Registrar</a></p>
            </div>

        </form>
    </div>
  );
};

export default Entrada;
