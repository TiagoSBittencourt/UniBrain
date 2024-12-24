import React from 'react';
import TextField from '@mui/material/TextField';
import { v4 as uuidv4 } from "uuid";
import '../../../App.css';

import {Controller} from 'react-hook-form'

export default function CustomTextField (props) {
    const {label, name, control, fullWidth, required, mt = 0, mb = 0 } = props

    const uniqueId = uuidv4();

    return (

        <Controller 
            name = {name}
            control = {control}
            defaultValue=""
            render = {({
                field:{onChange, value},
                fieldState: {error},
                formState, 
            }) => (
                <TextField 
                    id= {uniqueId}
                    onChange = {onChange}
                    value = {value}
                    label={label} 
                    fullWidth={fullWidth}
                    required={required}
                    variant="outlined" 
                    className="field-Outline" 
                    error = {!!error}
                    helperText = {error?.message}
                    sx={{ mt, mb }}
                />
            )
        } 

        />



    );
}
