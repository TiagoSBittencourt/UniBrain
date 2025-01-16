import * as React from 'react';
import Button from '@mui/material/Button';


export default function ButaoPerfil({ text }) {
  return (
    <Button className="ButtonPerfil" variant="contained">
      {text}
    </Button>
  );
}
