import React from 'react';

function ImageUpload({ setFile }) {
  function getFile(event) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0]; // Pega o arquivo real
      console.log("Arquivo selecionado:", file); // Verifica o arquivo
      setFile(file); // Passa o arquivo para o componente pai
    }
  }
  
  return (
    <div>
      <input type="file" onChange={getFile} />
    </div>
  );
}

export default ImageUpload;