import {
    Avatar,
    Box,
    Container,
    FormControlLabel,
    Paper,
    TextField,
    Typography,
    Checkbox,
    Grid,
    Link,
  } from "@mui/material";
import {React, useState} from "react";
import CustomPassField from "./Forms/text_fields/CustomPassField";
import CustomButton from "./Forms/Buttons/CustomButton";
import CustomAlert from "./micro_components/CustomAlert";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "./AxiosInstance";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";


const PassResetRequest = () =>{ 
    const schema = yup.object({
        password: yup.string()
                     .required("Senha é um campo obrigatório")
                     .min(8, "Senha deve conter no mínimo 8 caracteres")
                     .matches(/[A-Z]/, "Senha deve conter no mínimo uma letra maiúscula")
                     .matches(/[a-z]/, "Senha deve conter no mínimo uma letra minúscula")
                     .matches(/[0-9]/, "Senha deve conter no mínimo um número")
                     .matches(/[!@#$%^&*(),.?":{}|<>_\-\\\/\[\]]/, "Senha deve conter no mínimo um caracter especial"),
        password_confirm: yup.string()
                     .required("Confirmação de senha é um campo obrigatório")
                     .oneOf([yup.ref("password"), null], "Campo deve ser igual a Senha")
            
    })


    const { handleSubmit, control } = useForm({resolver: yupResolver(schema)})
    const {token} = useParams()
    console.log(token)
    const navigate = useNavigate()

    const [ShowMessage, setShowMessage] = useState(false)

    const handleClose = () => {
        setShowMessage(false); // Close the alert when the close button is clicked
    };
      
    const submission = (data) => {
        AxiosInstance.post(`api/password_reset/confirm/`, {
          password: data.password,
          token: token,
        })
        .then((response) => {
            setShowMessage(true)
            setTimeout(() => {
              navigate('/login')
            }, 2000 )
        })
        .catch((error) => {
            console.error("Erro during reset", error);
        });
    };
    


    return (
        <Container className="loginBackground">
            {ShowMessage ? (<CustomAlert
                              severity="info"
                              message="Resetado com sucesso, redirecionando..."
                              onClose={handleClose}
                              mt={2}
                              mb={2}
                            />)
                              : 
                            null
                          }
            
              <form onSubmit={handleSubmit(submission)}>
                <Paper
                  elevation={10}
                  sx={{ marginTop: 8, padding: 2, maxWidth: 450 }}
                >
                  <Avatar
                    src="../assets/UniBrain_Logo.jpg"
                    sx={{
                      mx: "auto",
                      bgcolor: "secondary.main",
                      textAlign: "center",
                      mb: 1,
                      width: 156,
                      height: 156,
                    }}
                  />
                  <Typography
                    component="h1"
                    variant="h5"
                    sx={{ textAlign: "center" }}
                  >
                    Criar Nova Senha
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <CustomPassField
                      label="Nova Senha"
                      name="password"
                      mt={2}
                      control={control}
                      fullWidth
                      required
                    />
                    <CustomPassField
                      label="Confirmar Senha"
                      name="password_confirm"
                      mt={2}
                      mb={2}
                      control={control}
                      fullWidth
                      required
                    />
                    <CustomButton label="Resetar" type="submit" />
                  </Box>
                </Paper>
              </form>
            </Container>
        
    )
}

export default PassResetRequest