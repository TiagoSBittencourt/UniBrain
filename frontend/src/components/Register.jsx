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
  
  const Register = () => {
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
            Registre
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
            <TextField
              placeholder="Username"
              fullWidth
              required
              autoFocus
              sx={{ mb: 2 }}
            />
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
              Registre
            </Button>
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
      </Container>
    );
  };
  
  export default Register;