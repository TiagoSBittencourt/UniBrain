import React from 'react';
import "./paginaTrilhas.css";
import {Link} from "react-router-dom"

function PaginaTrilhas() {
  return (
    <>
      <div className="geralTrilhas">
      <h1 className="cursosDisponiveisT">Cursos Disponíveis</h1>
      <div className="materias-container1">
        <div className="materia-itemT">
          <div className="materia-imagemT">
            {/* <img src="/assets/c2.jpg" alt="Cálculo 2" /> */}
          </div>
          <div className="materia-conteudoT">
            <h2 className="materia-tituloT">Cálculo 2</h2>
            <Link to="/c2">
                <button className="botaoHomeTrilhas">Acessar Curso</button>
            </Link>
          </div>
        </div>

        <div className="materia-itemT">
          <div className="materia-imagemT">
            {/* <img src="/assets/pea-2.jpg" alt="Probabilidade e Estatística Aplicada a Engenharia" /> */}
          </div>
          <div className="materia-conteudoT">
            <h2 className="materia-tituloT">Probabilidade & Estatística</h2>
              <Link to="/PE">
                <button className="botaoHomeTrilhas">Acessar Curso</button>
              </Link>
            
          </div>
        </div>
      </div>
      <h1 className="emBreveH1">Em Breve</h1>

      <div className="materias-container2">
        <div className="materia-itemT">
          <div className="materia-imagemT">
            {/* <img src="/assets/c2.jpg" alt="Cálculo 2" /> */}
          </div>
          <div className="materia-conteudoT">
            <h2 className="materia-tituloT">Introdução à Álgebra Linear</h2>
            
          </div>
        </div>

        <div className="materia-itemT">
          <div className="materia-imagemT">
            {/* <img src="/assets/pea-2.jpg" alt="Probabilidade e Estatística Aplicada a Engenharia" /> */}
          </div>
          <div className="materia-conteudoT">
            <h2 className="materia-tituloT">Engenharia Econômica</h2>

          </div>
        </div>
      </div>

      <div className="materias-container3">
        <div className="materia-itemT">
          <div className="materia-imagemT">
            {/* <img src="/assets/c2.jpg" alt="Cálculo 2" /> */}
          </div>
          <div className="materia-conteudoT">
            <h2 className="materia-tituloT">Física 1</h2>
            
          </div>
        </div>

        <div className="materia-itemT">
          <div className="materia-imagemT">
            {/* <img src="/assets/pea-2.jpg" alt="Probabilidade e Estatística Aplicada a Engenharia" /> */}
          </div>
          <div className="materia-conteudoT">
            <h2 className="materia-tituloT">Desenvolvimento de Software</h2>

          </div>
        </div>
      </div>
   </div>
      
    </>
  );
}

export default PaginaTrilhas;
