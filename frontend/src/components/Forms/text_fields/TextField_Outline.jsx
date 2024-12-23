import React from 'react';
import TextField from '@mui/material/TextField';
import '../../../App.css';

import {Controller} from 'react-hook-form'

export default function TextField_Outline (props) {
    const {label} = props
    return (

        <TextField id="outlined-basic" label={label} variant="outlined" className="field-Outline" />

    );
}
