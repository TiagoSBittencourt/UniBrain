import React from 'react';

function ImageUpload({ setFile }) {
  function getFile(event) {
    
    if (event.target.files[0]) {
      setFile(URL.createObjectURL(event.target.files[0]));
    }
  }

  return (
    <div>
      <input type="file" onChange={getFile} />
    </div>
  );
}

export default ImageUpload;
