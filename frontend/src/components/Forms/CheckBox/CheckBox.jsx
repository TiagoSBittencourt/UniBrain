import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import '../../../App.css';

// Need more development

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