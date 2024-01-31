import { useState } from "react";
import { TextField, Button, Box, Alert } from "@mui/material";
import { styled } from "@mui/system";
import Connect from './Connect'

const StyledButton = styled(Button)({
  marginTop: "16px",
});

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: username, password }),
      });
      const data = await response.json();
      if (data.error) {
        setErrorMessage(data.error);
      } else {
        console.log(data);
        if (data.token) {
          console.log(data.token);

          <Alert severity="success">Login Successful </Alert>
        }
        // handle successful login here
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", width: "300px", margin: "auto", marginTop: "100px" }}>
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          value={username}
          onChange={handleUsernameChange}
          sx={{ marginBottom: "16px" }}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={handlePasswordChange}
          sx={{ marginBottom: "16px" }}
        />
        <StyledButton variant="contained" onClick={handleLogin}>
          Login
        </StyledButton>
        {errorMessage && (
          <Box sx={{ color: "red", marginTop: "16px" }}>{errorMessage}</Box>
        )}

        <Connect />
      </Box>

    </>
  );
};

export default LoginPage;
