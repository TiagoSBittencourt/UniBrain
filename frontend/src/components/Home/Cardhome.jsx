import React from 'react';
import './Cardhome.css';


function CardHome() {
    return (
        <div className="container-imagens">
            <div className="cartão">
                <img src="/assets/estudante medalha.png" alt="Imagem 1" className="cartão-imagemEsquerda" />
                <div className="cartão-texto">
                    <h2>Transforme Estudo em Diversão!</h2>
                    <p>Aprenda matérias complexas da faculdade de forma leve e divertida. Ganhe pontos, desbloqueie níveis e veja seu progresso no estilo de um jogo!</p>
                </div>
            </div>
            <div className="cartão Esquerda">
                <img src="/assets/gráfico minimalista-2.png" alt="Imagem 2" className="cartão-imagemDireita" />
                <div className="cartão-texto">
                    <h2>Apoio Personalizado</h2>
                    <p>Nosso algoritmo ajusta os desafios ao seu ritmo, ajudando você a reforçar o que precisa e avançar no que já domina.</p>
                </div>
            </div>
            <div className="cartão">
                <img src="/assets/estudante-celular-1.png" alt="Imagem 3" className="cartão-imagemEsquerda" />
                <div className="cartão-texto">
                    <h2>Aprenda Onde e Quando Quiser</h2>
                    <p>Com nosso aplicativo mobile, seus estudos estão sempre à mão. Progrida a qualquer hora, em qualquer lugar!</p>
                </div>
            </div>
            <div className="cartão Esquerda">
                <img src="/assets/caderno-1.png" alt="Imagem 4" className="cartão-imagemDireita" />
                <div className="cartão-texto">
                    <h2>Resolva Questões de Provas Reais</h2>
                    <p>Pratique com exercícios baseados em provas e desafios reais. Esteja preparado para o que vier!</p>
                </div>
            </div>
        </div>
    );
}

export default CardHome;
