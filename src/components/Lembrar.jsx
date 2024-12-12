import React from 'react';
import Checkbox from '@mui/material/Checkbox';


export default function Lembrar() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }} 
    />  Lembrar de mim
    </div>
  );
}     
      
