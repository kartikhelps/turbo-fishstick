import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  Checkbox,
  FormControlLabel,
  Box,
  InputLabel,
} from "@mui/material";
import { CenterFocusStrong } from "@mui/icons-material";
import "../../screens/style.css"

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const host = "http://localhost:5000/api/users";

  const handleSubmit = async () => {
    try {
      const response = await axios.get(host, {
        params: credentials,
      });

      if (response.status === 200) {
        // Store the data in the state
        login(response.data);
        navigate("/dashboard");
        console.log("Login successful", response.data);
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.log("Error occurred:", error);
    }
  };

  const handleSignIn = () => {
    navigate("/signup");
  };

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh", margin: "1rem 0 0 3rem " }}


    >
      <Grid item xs={8} sm={6} md={4} lg={4}  >
        <Paper elevation={15}  >
          <Box sx={{ padding: "2rem", }} >
            <Grid container spacing={2} >
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  component="div"
                  align="center"
                  color="primary"
                  sx={{ marginTop: "auto", }}


                >
                  PRODUCT X
                </Typography>
                <Typography variant="h6" component="div" align="center">
                  Welcome Back 👏
                </Typography>
                <Typography variant="h3" component="div" align="center">
                  Log In
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <InputLabel>Username</InputLabel>
                <TextField
                  fullWidth
                  placeholder="Enter username"
                  required
                  name="username"
                  value={credentials.username}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel>Password</InputLabel>
                <TextField
                  fullWidth
                  label="Password"
                  placeholder="Enter password"
                  type="password"
                  required
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox name="checkedB" color="primary" />}
                  label="Remember me"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  fullWidth
                  onClick={handleSubmit}
                >
                  Log in
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  Do you have an account?{" "}
                  <span
                    onClick={handleSignIn}
                    style={{ cursor: "pointer", color: "#D885A3" }}
                  >
                    Sign Up
                  </span>{" "}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={7}>
        <Box display="flex" justifyContent="center">
          <img
            src="login/girl.svg"
            alt="Girl"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Box>
      </Grid>
    </Grid >
  );
};

export default Login;
