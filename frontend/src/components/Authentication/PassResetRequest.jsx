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
import CustomPassField from "../Forms/TextFields/CustomPassField";
import CustomTextField from "../Forms/TextFields/CustomTextField";
import CustomButton from "../Forms/Buttons/CustomButton";
import CustomAlert from "../PopUps/CustomAlert";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "../AxiosInstance";
import "./Login.css"

const PassReset = () =>{ 
    const { handleSubmit, control } = useForm()
    const navigate = useNavigate()

    const [ShowMessage, setShowMessage] = useState(false)

    const handleClose = () => {
        setShowMessage(false); // Close the alert when the close button is clicked
    };
      
    const submission = (data) => {
        AxiosInstance.post(`api/password_reset/`, {
        email: data.email,
        })
        .then((response) => {
            setShowMessage(true)
            setTimeout(() => {
              setShowMessage(false)
            }, 5000 )
        })
        .catch((error) => {
            console.error("Erro during reset", error);
        });
    };
    


    return (
        <Container className="loginBackground">
            {ShowMessage ? (<CustomAlert
                                severity="info"
                                message="Se o email existir, foram enviadas as instruções"
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
                  sx={{ marginTop: 7, padding: 5, maxWidth: 500, }}
                >
                  <Avatar
                    src="../assets/UniBrain_Logo.jpg"
                    sx={{
                      mx: "auto",
                      bgcolor: "secondary.main",
                      textAlign: "center",
                      mb: 1,
                      width: 190,
                      height: 190,
                    }}
                  />
                  <Typography
                    component="h1"
                    variant="h5"
                    sx={{ textAlign: "center" }}
                  >
                    <span className='LoginTitle2'>Solicitar Nova Senha</span>
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <CustomTextField
                      label="Verificar Email"
                      name="email"
                      mt={2}
                      mb={2}
                      control={control}
                      fullWidth
                      required
                    />
                    <CustomButton label="Solicitar" type="submit" />
                  </Box>
                </Paper>
              </form>
            </Container>
        
    )
}

export default PassReset