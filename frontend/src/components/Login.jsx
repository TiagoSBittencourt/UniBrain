import {
    Avatar,
    Box,
    Container,
    FormControlLabel,
    Paper,
    TextField,
    Typography,
    Checkbox,
    Button,
    Grid2,
    Link,
  } from "@mui/material";
  import CustomPassField from "./Forms/text_fields/CustomPassField";
  import CustomTextField from "./Forms/text_fields/CustomTextField";
  import { Link as RouterLink } from "react-router-dom";
  
  const Login = () => {
    const handleSubmit = () => console.log("login");
    return (
      <Container className="loginBackground" >
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
              fullWidth
              required
            />
            <CustomPassField
                label="Senha"
                name="password"
                mt = {2}
                fullWidth
                required
            />
            <FormControlLabel
              control={<Checkbox value="Lembre-se" color="primary" />}
              label="Lembre de mim"
            />
            <LoginButton
                label={"Registre-se"}
                type="submit"
            />
          </Box>
          <Grid2 container justifyContent="space-between" sx={{ mt: 2 }}>
            <Grid2 item>
              <Link component={RouterLink} to="/forgot">
                Esqueceu a Senha?
              </Link>
            </Grid2>
            <Grid2 item>
              <Link component={RouterLink} to="/register">
                Registre-se
              </Link>
            </Grid2>
          </Grid2>
        </Paper>
      </Container>
    );
  };
  
  export default Login;