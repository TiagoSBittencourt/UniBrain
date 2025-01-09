import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SendDataQuiz from './SendDataQuiz'; // Importando o componente que envia os dados
import './Quiz_style.css';

const Quiz = () => {
  const navigate = useNavigate();
  const [paginaAtual, setPaginaAtual] = useState(-1);
  const [finalizado, setFinalizado] = useState(false);
  const [materiaSelecionada, setMateriaSelecionada] = useState(null);
  const [nivel, setNivel] = useState('');
  const [respostas, setRespostas] = useState([]);

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
      imagem: '/assets/c2.jpg',
    },
    {
      titulo: 'Probabilidade e estatística aplicado à engenharia',
      descricao: 'Abordagem prática de probabilidade e estatística com foco em problemas reais da engenharia.',
      imagem: '/assets/probabilidade.jpg',
    },
  ];

  useEffect(() => {
    const respostasSalvas = JSON.parse(localStorage.getItem('respostasQuiz')) || [];
    setRespostas(respostasSalvas);
  }, []);

  const proxPagina = (resposta) => {
    // Atualizar a resposta correspondente
    const novasRespostas = [...respostas];
    novasRespostas[paginaAtual] = resposta;

    setRespostas(novasRespostas);
    localStorage.setItem('respostasQuiz', JSON.stringify(novasRespostas));

    if (paginaAtual < perguntas.length - 1) {
      setPaginaAtual(paginaAtual + 1);
    } else {
      setFinalizado(true);
    }
  };

  const voltarPagina = () => {
    if (finalizado && materiaSelecionada !== null) {
      setMateriaSelecionada(null);
    } else if (finalizado) {
      setFinalizado(false);
    } else {
      setPaginaAtual(paginaAtual - 1);
    }
  };

  const iniciarMateria = () => {
    if (!nivel) {
      alert('Por favor, selecione o nível de desempenho antes de continuar.');
      return;
    }
    navigate('/c2');
  };

  const Botao = ({ texto, onClick, classe }) => (
    <button className={`botao ${classe}`} onClick={onClick}>
      {texto}
    </button>
  );

  return (
    <div className="quizBackground">
      <div className="container-bemVindo">
        {!finalizado ? (
          <div className="bemVindo">
            {paginaAtual === -1 ? (
              <div>
                <h1 className="introducao">Bem-vindo ao UniBrain!</h1>
                <p className="paragrafoBemVindo">
                  UniBrain é um projeto que transforma sua jornada acadêmica em uma experiência interativa e motivadora.
                </p>
                <img src="/assets/UniBrain.png" alt="Logo do UniBrain" className="logoSite" />
                <Botao texto="Continuar" onClick={() => proxPagina()} classe="botao-continuar" />
              </div>
            ) : (
              <>
                <h1 className="tituloPergunta">{perguntas[paginaAtual].titulo}</h1>
                {perguntas[paginaAtual].opcoes.map((opcao, idx) => (
                  <Botao
                    key={idx}
                    texto={opcao}
                    onClick={() => proxPagina(opcao)}
                    classe={respostas[paginaAtual] === opcao ? 'selecionado' : ''}
                  />
                ))}
                <div className="navegacao">
                  <div className="seta-voltar" onClick={voltarPagina} aria-label="Voltar">
                    &lt;
                  </div>
                </div>
              </>
            )}
          </div>
        ) : materiaSelecionada === null ? (
          <div className="escolha-materia">
            <h1 className="tituloEscolhaMateria">Escolha uma matéria</h1>
            {materias.map((materia, idx) => (
              <div
                key={idx}
                className="materiaDiv"
                onClick={() => setMateriaSelecionada(idx)}
                role="button"
                tabIndex={0}
                aria-label={`Selecionar matéria ${materia.titulo}`}
              >
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
            <Botao texto="Iniciar Matéria" onClick={iniciarMateria} classe="botao-iniciarMateria" />
            <Botao texto="X" onClick={() => setMateriaSelecionada(null)} classe="fechar-materia" />
          </div>
        )}

        {/* Componente para enviar os dados do quiz para o backend */}
        {finalizado && <SendDataQuiz />}
      </div>
    </div>
  );
};

export default Quiz;