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
  import CustomTextField from "./Forms/text_fields/CustomTextField";
  import CustomPassField from "./Forms/text_fields/CustomPassField";
  import CustomButton from "./Forms/Buttons/CustomButton";
  import { Link as RouterLink } from "react-router-dom";
  import {useForm} from 'react-hook-form';
  import AxiosInstance from "./AxiosInstance";
  import { useNavigate } from "react-router-dom";
  
  const Register = () => {
    const {handleSubmit, control} = useForm()

    const navigate = useNavigate()

    const submission = (data) => {
        AxiosInstance.post(`register/`, 
            {
                username: data.username,
                email: data.email,
                password: data.password,
        }).then(() => {
            navigate(`/login`)
        })
        .catch((error) => {
            console.error("Erro ocorreu", error)
        });
    }

    return (
      <Container className="loginBackground" >
        <form onSubmit={handleSubmit(submission)}>
            <Paper elevation={10} sx={{ marginTop: 8, padding: 2, maxWidth: 450}}>
                <Avatar
                    src="./assets/UniBrain_Logo.jpg"
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
                    Registre-se
                </Typography>
                <Box sx={{ mt: 2 }}>
                    <CustomTextField
                        label="Username"
                        name="username"
                        mt = {2}
                        control={control}
                        fullWidth
                        required
                    />
                    <CustomTextField
                        label="Email"
                        name="email"
                        mt = {2}
                        control={control}
                        fullWidth
                        required
                    />
                    <CustomPassField
                        label="Senha"
                        name="password"
                        mt = {2}
                        mb = {2}
                        control={control}
                        fullWidth
                        required 
                    />
                    {/* <FormControlLabel
                        control={<Checkbox value="Lembre-se" color="primary" />}
                        label="Lembre de mim"
                    /> */}
                    <CustomButton
                        label="Registre-se"
                        type="submit"
                    />
                    <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            mt: 1,
                        }}>
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