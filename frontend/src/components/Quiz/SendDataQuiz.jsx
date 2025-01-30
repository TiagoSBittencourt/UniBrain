import React, { useEffect } from 'react';
import AxiosInstance from '../AxiosInstance'; // Instância do Axios

const SendDataQuiz = () => {
  useEffect(() => {
    // Pegando as respostas do quiz do localStorage
    const respostasQuiz = JSON.parse(localStorage.getItem('respostasQuiz'));

    if (respostasQuiz && respostasQuiz.length > 0) {
      // Enviando as respostas do quiz para o backend via POST
      const toSendData = {
        respostasQuiz: respostasQuiz,
      };

      AxiosInstance.post('answer-quiz', toSendData)
        .then((response) => {
          console.log('Dados enviados com sucesso:', response.data);
        })
        .catch((error) => {
          console.error('Erro ao enviar os dados:', error);
        });
    } else {
      console.log('Não há respostas do quiz no localStorage');
    }
  }, []); // O array vazio significa que o efeito será executado apenas uma vez, quando o componente for montado.

};

export default SendDataQuiz;