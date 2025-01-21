import * as React from 'react';
import Button from '@mui/material/Button';
import '../../../App.css';
import { v4 as uuidv4 } from "uuid";

export default function CustomButton(props) {
    const {label, type} = props
    const uniqueId = uuidv4();

    return (
        <Button id={uniqueId} type={type} variant="contained" color="success" className={"authButton"}>
            {label}
        </Button>
    );
}

