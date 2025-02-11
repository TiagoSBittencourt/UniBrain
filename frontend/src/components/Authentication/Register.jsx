import {
    Avatar,
    Box,
    Container,
    FormControlLabel,
    Paper,
    Typography,
    Checkbox,
    Link,
  } from "@mui/material";
  import CustomTextField from "../Forms/TextFields/CustomTextField";
  import CustomPassField from "../Forms/TextFields/CustomPassField";
  import CustomButton from "../Forms/Buttons/CustomButton";
  import { Link as RouterLink } from "react-router-dom";
  import { useForm } from "react-hook-form";
  import AxiosInstance from "../AxiosInstance";
  import { useNavigate } from "react-router-dom";
  import {yupResolver} from "@hookform/resolvers/yup";
  import * as yup from "yup";
  import "./Login.css"
  
  const Register = () => {
    const schema = yup.object({
        email: yup.string().required("Email é um campo obrigatório").email("Campo espera um endereço de email válido"),
        username: yup.string().required("Username é um campo obrigatório"),
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

    const { handleSubmit, control } = useForm({resolver: yupResolver(schema)});

    const navigate = useNavigate();
  
    const submission = (data) => {
      AxiosInstance.post(`register/`, {
        username: data.username,
        email: data.email,
        password: data.password,
      })
        .then(() => {
          navigate(`/login`);
        })
        .catch((error) => {
          console.error("Erro ocorreu", error);
        });
    };
  
    return (
      <Container className="loginBackground">
        <form onSubmit={handleSubmit(submission)}>
          <Paper elevation={10} className="caixaRegistro" sx={{ marginTop: 8, padding: 2, maxWidth: 525 }}>
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
              <span className='LoginTitle2'>Registre-se</span>
            </Typography>
            <Box sx={{ mt: 2 }}>
              <CustomTextField
                label="Username"
                name="username"
                mt={2}
                control={control}
                fullWidth
                required
              />
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
              {/* <FormControlLabel
                control={<Checkbox value="Lembre-se" color="primary" />}
                label="Lembre de mim"
              /> */}
              <CustomButton label="Registre-se" type="submit" />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  mt: 1,
                }}
              >
                <Link component={RouterLink} sx={{ mt: 1 }} to="/login">
                  Já tem conta? Login!
                </Link>
              </Box>
            </Box>
          </Paper>
        </form>
      </Container>
    );
  };
  
  export default Register;