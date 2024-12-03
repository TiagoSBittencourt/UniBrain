import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import '../../../App.css';

export default function CheckBox(props) {
  const { label, defaultChecked } = props;

  return (
    <div>
      <Checkbox 
        className={"checkBox"}
        inputProps={{ 'aria-label': label }} 
        defaultChecked={defaultChecked} 
      />
      {label && <span>{label}</span>}
    </div>
  );
}