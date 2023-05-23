import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
} from "@mui/material";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const host = "http://localhost:5000/api/users";

  const handleSubmit = async () => {
    try {
      const response = await axios.get(host, {
        params: credentials,
      });
  
      if (response.status === 200) {
        navigate("/Dashboard");
        console.log("Login successful");
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
    <Grid container justifyContent="center">
      <Paper elevation={10} sx={{ padding: 10, margin: "20px auto" }}>
        <Grid container direction="column" alignItems="center">
          <Avatar sx={{ backgroundColor: "#1bbd7e" }}></Avatar>
          <Typography variant="h5" component="h2" mt={2}>
            Log In
          </Typography>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          sx={{ margin: "8px 0" }}
          fullWidth
          onClick={handleSubmit}
        >
          Log in
        </Button>
        <Typography>
          <Link to="/">Forgot password?</Link>
        </Typography>
        <Typography>
          Do you have an account?{" "}
          <div onClick={handleSignIn} style={{ cursor: "pointer" }}>
            Sign Up
          </div>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
