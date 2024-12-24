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
  import CustomPassField from "./Forms/text_fields/CustomPassField";
  import CustomTextField from "./Forms/text_fields/CustomTextField";
  import CustomButton from "./Forms/Buttons/CustomButton";
  import { Link as RouterLink } from "react-router-dom";
  import { useForm } from "react-hook-form";
  import { useNavigate } from "react-router-dom";
  import AxiosInstance from "./AxiosInstance";
  
  const Login = () => {
    const {handleSubmit, control} = useForm()

    const navigate = useNavigate()

    const submission = (data) => {
      AxiosInstance.post(`login/`, 
          {
              email: data.email,
              password: data.password,
      }).then((response) => {
          navigate(`/home`)
      })
      .catch((error) => {
          console.error("Erro during login", error)
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
              Login
            </Typography>
            <Box sx={{ mt: 2 }}>
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
                label="Login"
                type="submit"
              />
              <Grid container justifyContent="space-between" sx={{ mt: 2 }}>
                <Grid item>
                  <Link component={RouterLink} to="/forgot">
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
    );
  };
  
  export default Login;