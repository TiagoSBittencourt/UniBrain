import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Cssquestoes.css";
import { dataP5 } from "../../assets/dataP5";

const ConceitosDistribuicao = () => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(dataP5[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let option_array = [Option1, Option2, Option3, Option4];

  const checkAns = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("correto");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("errado");
        setLock(true);
        option_array[question.ans - 1].current.classList.add("correto");
      }
    }
  };

  const next = () => {
    if (lock === true) {
      if (index === dataP5.length - 1) {
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setQuestion(dataP5[index]);
      setLock(false);
      option_array.map((option) => {
        option.current.classList.remove("errado");
        option.current.classList.remove("correto");
        return null;
      });
    }
  };

  return (
    <div className="containerConceitosSequencias">
      <h1> Conceitos sobre Distribuições Amostrais</h1>
      <hr />
      {result ? (
        <>
          <h2 className="resultado">
            Você acertou {score} de {dataP5.length} questões
          </h2>
        </>
      ) : (
        <>
          <h2>{question.question}</h2>
          <ul>
            <li ref={Option1} onClick={(e) => checkAns(e, 1)}>
              {question.option1}
            </li>
            <li ref={Option2} onClick={(e) => checkAns(e, 2)}>
              {question.option2}
            </li>
            <li ref={Option3} onClick={(e) => checkAns(e, 3)}>
              {question.option3}
            </li>
            <li ref={Option4} onClick={(e) => checkAns(e, 4)}>
              {question.option4}
            </li>
          </ul>
          <button onClick={next}>Próxima questão</button>
          <div className="indexConceitosSequencias">
            {index + 1} de {dataP5.length} questões
          </div>
        </>
      )}
      {/* Botão para voltar à outra página */}
      <Link to="/PE">
        <button className="voltarButton">Voltar</button>
      </Link>
    </div>
  );
};

export default ConceitosDistribuicao;
