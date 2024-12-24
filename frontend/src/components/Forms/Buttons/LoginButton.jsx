import * as React from 'react';
import Button from '@mui/material/Button';
import '../../../App.css';

export default function LoginButton(props) {
    const {label, type} = props

    console.log("Label recebido:", label); // Debug para verificar o valor

    return (
        <Button type={type} variant="contained" color="success" className={"authButton"}>
            {label}
        </Button>
    );
}

