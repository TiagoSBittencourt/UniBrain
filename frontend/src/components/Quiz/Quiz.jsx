import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz_style.css';

const Quiz = () => { 
  const navigate = useNavigate();
  const perguntas = [ 
    {
      titulo: 'Por qual razão você entrou no UniBrain?',
      opcoes: [
        'Queria testar uma maneira divertida de aprender',
        'Tenho dificuldade para estudar e vou ver se consigo focar com o UniBrain',
        'Vi uma propaganda e me interessei',
        'Estudo na FGA e queria experimentar este projeto',
        'Curiosidade',
      ],
    },
    {
      titulo: 'O que melhor descreve você no momento?',
      opcoes: ['Eu apenas trabalho', 'Eu apenas estudo', 'Eu trabalho e estudo', 'Outro'],
    },
    {
      titulo: 'Qual é a sua idade?',
      opcoes: ['18 ou menos', '19-22', '23-30', '31-40', '41 ou mais'],
    },
    {
      titulo: 'Qual é o seu campus/universidade?',
      opcoes: [
        'Darcy',
        'Ceilândia',
        'Gama',
        'Planaltina',
        'Outra universidade',
        'Não sou universitário',
      ],
    },
    {
      titulo: 'Qual é o seu curso?',
      opcoes: ['Aeroespacial', 'Eletrônica', 'Energia', 'Mecânica', 'Software', 'Outro/Nenhum'],
    },
  ];

  const materias = [
    {
      titulo: 'Cálculo 2',
      descricao: 'Curso avançado sobre integrais, derivadas, e aplicações práticas no campo da engenharia.',
      imagem: '/assets/c2.jpg', // Path
    },
    {
      titulo: 'Probabilidade e estatística aplicado à engenharia',
      descricao: 'Abordagem prática de probabilidade e estatística com foco em problemas reais da engenharia.',
      imagem: '/assets/probabilidade.jpg', // Path
    },
  ];

  const [paginaAtual, setPaginaAtual] = useState(-1); // Variável, função para atualizar o estado da variável
  const [finalizado, setFinalizado] = useState(false); 
  const [materiaSelecionada, setMateriaSelecionada] = useState(null);
  const [nivel, setNivel] = useState(''); // string vazia indica que n foi escolhido o nível

  const proxPagina = () => {
    if (paginaAtual < perguntas.length - 1) {
      setPaginaAtual(paginaAtual + 1);
    } else {
      setFinalizado(true); //indica que foram finalizadas as perguntas, te levando a última página
    }
  };

  const voltarPagina = () => {
    if (finalizado && materiaSelecionada !== null) { //se está na tela final e clicou em uma matéria
      setMateriaSelecionada(null); 
    } else if (finalizado) {
      setFinalizado(false); // Faz retornar à página de perguntas
    } else {
      setPaginaAtual(paginaAtual - 1);
    }
  };

  const iniciarMateria = () => {
    navigate('/c2'); 
  };

  return (
    <div className="quizBackground">
      <div className="container-bemVindo">
        {!finalizado ? ( 
          <div className="bemVindo">
            {paginaAtual === -1 ? ( 
              <div className="bemVindo">
                <h1 className="introducao">Bem-vindo ao UniBrain!</h1>
                <p className="paragrafoBemVindo">
                UniBrain é um projeto que transforma sua jornada acadêmica em uma experiência interativa e motivadora. 
                Com um formato de aprendizado gamificado, oferecemos trilhas de estudo organizadas por matéria, 
                projetadas para ajudá-lo a dominar os conteúdos da faculdade de forma prática e eficiente.
                Com desafios progressivos, feedback instantâneo e ferramentas para acompanhar seu progresso, 
                você terá tudo o que precisa para alcançar seus objetivos acadêmicos de forma divertida e envolvente. 
                Descubra novas maneiras de aprender e conquiste o conhecimento, um nível por vez!
                </p>
                <img src="/assets/UniBrain.png" alt="Logo do UniBrain" className="logoSite" />
                <button className="botao botao-continuar" onClick={proxPagina}>
                  Continuar
                </button>
              </div>
            ) : (
              <>
                <h1 className="tituloPergunta">{perguntas[paginaAtual].titulo}</h1> 
                {perguntas[paginaAtual].opcoes.map((opcao, idx) => ( //opcao é o valor atual sendo iterado, idx índice atual no array opcoes 
                  <button key={idx} className="botao" onClick={proxPagina}> 
                    {opcao}
                  </button> //key seria o "chaveamento" e idx é o número deste tal chaveamento, key é exigido para identificar cada elemento de uma lista no domínio
                ))}
                <div className="navegacao">
                  <div className="seta-voltar" onClick={voltarPagina}>
                    &lt;
                  </div>
                </div>
              </>
            )}
          </div>
        ) : materiaSelecionada === null ? (
          <div className="escolha-materia">
            <h1 className="tituloEscolhaMateria">Escolha uma matéria</h1>
            {materias.map((materia, idx) => ( //materia é o valor atual sendo iterado, idx índice atual no array, ou seja, a propriedade da materia a ser usada
              <div key={idx} className="materiaDiv" onClick={() => setMateriaSelecionada(idx)}>
                <div
                  className="materia-imagem"
                  style={{ backgroundImage: `url(${materia.imagem})` }}
                ></div>
                <div className="materia-descricao">
                  <h2 className="materia-titulo">{materia.titulo}</h2>
                  <p className="materia-paragrafo">{materia.descricao}</p>
                </div>
              </div>
            ))}
            <div className="seta-voltar" onClick={voltarPagina}>
              &lt;
            </div>
          </div>
        ) : (
          <div className="materia-click">
            <h1>{materias[materiaSelecionada].titulo}</h1>
            <p className="paragrafoNivelamento">{materias[materiaSelecionada].descricao}</p>
            <select
              className="nivelamento"
              value={nivel}
              onChange={(e) => setNivel(e.target.value)}
            >
              <option value="" disabled>
                Como está seu desempenho nesta matéria?
              </option>
              <option value="Ruim">Ruim</option>
              <option value="Médio">Médio</option>
              <option value="Bom">Bom</option>
            </select>
            <button className="botao botao-iniciarMateria" onClick={iniciarMateria}>
              Iniciar Matéria
            </button>
            <button className="fechar-materia" onClick={() => setMateriaSelecionada(null)}>
              X
            </button>        
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;