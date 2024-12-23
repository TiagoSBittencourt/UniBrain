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
  import PassField from "./Forms/text_fields/PassField";
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
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
            <TextField
              placeholder="Email"
              fullWidth
              required
              autoFocus
              sx={{ mb: 2 }}
            />
            <PassField
                label="Senha"
                fullWidth
                required
            />
            <FormControlLabel
              control={<Checkbox value="Lembre-se" color="primary" />}
              label="Lembre de mim"
            />
            <Button type="submit" variant="contained" fullWidth sx={{ mt: 1 }} className="loginButton">
              Login
            </Button>
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