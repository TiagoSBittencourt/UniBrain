import React from 'react';
import { useState } from "react";


// import do material ui  
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import Alert from '@mui/material/Alert';

//teste do email
const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);


export default function Login(){
    //Senha
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
    const handleMouseUpPassword = (event) => {
      event.preventDefault();
    };
    //Input
   
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    //validade de envio
    const [formValid, setFormValid] = useState();
    const[success, setSuccess] = useState();


    const handleSubmit = (event) => {
      event.preventDefault();
      setSuccess(null);

   

      if(emailError || !emailInput){
        setFormValid("Email é inválidol Por favor, tente novamente.");
        return;
     }  

    if(passwordError || !passwordInput){
          setFormValid("Senha precisa ter entre 5 - 20 caracteres. Por favor, tente novamente.");
          return;
    }
    setFormValid(null);
    setSuccess("Cadastro feito!");
      



   
      console.log("Email: " + emailInput);
      console.log("senha: " + passwordInput);
    }

    // erros do input
    
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

   

    //validacao for onBlur Email
    const handleEmail = () => {
      if(!isEmail(emailInput)){
        setEmailError(true);
        return;
      }

      setEmailError(false);
    }

    //validacao para onBlur senha
    const handlePassword = () => {
      if(!passwordInput || passwordInput.length < 5 || passwordInput.length > 20)
        {
        setPasswordError(true);
        return;
      }
      setPasswordError(false);
      
    }

    return (
        <div>

            <p>
            <TextField 
            id="standard-basic" 
            error={emailError}
            label="Email" 
            value={emailInput}
            onChange={(event) => setEmailInput(event.target.value)}
            onBlur={handleEmail}
            variant="standard" 
            fullWidth
            size="small"
            />
            </p>
            <p> 
            <FormControl sx={{width: '100%' }} variant="outlined">
          <InputLabel error={passwordError} 
          htmlFor="outlined-adornment-password">Senha</InputLabel>
          <Input
            fullWidth
            error={passwordError}
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={passwordInput}
            onBlur={handlePassword}
            onChange={(event) => setPasswordInput(event.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          /> 
          </FormControl>
          </p>

          <p>
          <Button onClick={handleSubmit} fullWidth variant="contained" startIcon={<LoginIcon />}>
        ENTRAR
      </Button>
          </p>
          <p>
            {formValid &&  
            <Alert severity="error">{formValid}</Alert>}
          </p>
          <p>
            {success &&  
            <Alert severity="success">{success}</Alert>}
          </p>
        </div>

       
        
    )
}