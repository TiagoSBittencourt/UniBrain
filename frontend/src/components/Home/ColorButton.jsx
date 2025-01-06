import * as React from 'react';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom"

export default function ColorButtons() {
  return (
     <Link to="/register">
        <Button variant="contained" color="success">
            Comece agora
        </Button> 
     </Link> 
  );
}