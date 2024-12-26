import {
  Avatar,
  Box,
  Container,
  Paper,
  Typography,
  Grid,
  Link,
} from "@mui/material"
import { React, useState } from "react"
import CustomPassField from "./Forms/text_fields/CustomPassField"
import CustomTextField from "./Forms/text_fields/CustomTextField"
import CustomButton from "./Forms/Buttons/CustomButton"
import CustomAlert from "./micro_components/CustomAlert" 
import { Link as RouterLink } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import AxiosInstance from "./AxiosInstance"

const Login = () => {
  const { handleSubmit, control } = useForm()
  const navigate = useNavigate()

  const [ShowMessage, setShowMessage] = useState(false)
  const [ErrorMessage, setErrorMessage] = useState("") 
  const handleClose = () => {
    setShowMessage(false) 
  }

  const submission = (data) => {
    // TODO: Prevenir o envio do formulario para evitar recarregamento da pagina
    //event.preventDefault() // Essa foi a sugestao do gpt mas nn funcionou
  
    const emailForm = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ // Regex para verificar o formato do email
    if (!emailForm.test(data.email)) {
      setShowMessage(true)
      setErrorMessage("Email inválido")
      setTimeout(() => {
        setShowMessage(false)
      }, 5000)
      return
    }
  
    AxiosInstance.post(`login/`, {
      email: data.email,
      password: data.password,
    })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          navigate(`/home`)
        }
      })
      .catch((error) => {
        console.error("Erro durante o login", error)
        setErrorMessage("Email ou senha incorretos")
        setShowMessage(true)
        setTimeout(() => {
          setShowMessage(false)
        }, 5000)
      })
  }

  return (
    <Container className="loginBackground">
      {ShowMessage ? (
        <CustomAlert
          severity="error"
          message={ErrorMessage} // Show the message that has been seted (set) to ErrorMessage
          onClose={handleClose}
          mt={2}
          mb={2}
        />
      ) : null}
      <form onSubmit={handleSubmit(submission)}>
        <Paper elevation={10} sx={{ marginTop: 8, padding: 2, maxWidth: 450 }}>
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
          <Typography component="h1" variant="h5" sx={{ textAlign: "center" }}>
            Login
          </Typography>
          <Box sx={{ mt: 2 }}>
            <CustomTextField
              label="Email"
              name="email"
              mt={2}
              control={control}
              fullWidth
              required
            />
            <CustomPassField
              label="Senha"
              name="password"
              mt={2}
              mb={2}
              control={control}
              fullWidth
              required
            />
            <CustomButton label="Login" type="submit" />
            <Grid container justifyContent="space-between" sx={{ mt: 2 }}>
              <Grid item>
                <Link component={RouterLink} to="/request/password-reset">
                  Esqueceu a Senha?
                </Link>
              </Grid>
              <Grid item>
                <Link component={RouterLink} to="/register">
                  Registre-se
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </form>
    </Container>
  )
}

export default Login