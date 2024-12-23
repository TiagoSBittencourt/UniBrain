import * as React from 'react';
import Button from '@mui/material/Button';
import '../../../App.css';

export default function LoginButton(props) {
    const {label} = props
    return (
        <Button variant="contained" color="success" className={"loginButton"}>
            {label}
        </Button>
    );
}

