import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";


import {
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Height } from "@mui/icons-material";

function Signup({ setSection, vars }) {
  const host = "http://localhost:5000/api/users";
  const navigate = useNavigate();
  const paperStyle = { padding: "30px 20px", width: { xs: 300, sm: 400, md: 400, lg: 400, xl: 400 }, margin: "auto " };
  const headerStyle = { margin: 0 };
  const avatarStyle = { width: { xs: 100, sm: 200, md: 300, lg: 400, xl: 500 }, maxHeight: 400, height: "auto" };
  const marginTop = { marginTop: 5 };

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const onChangeValue = (event) => {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(host, {
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        cpassword: credentials.cpassword,
      });

      const json = response.data;
      console.log(json);

      if (json.success) {
        localStorage.setItem("token", json.authtoken);
        navigate("/login");
        console.log("User registered successfully");
      } else {
        navigate("/login");
        console.log("Email already exists");
      }
    } catch (error) {
      console.log("Error occurred:", error);
    }
  };

  return (
    <Grid container justifyContent="center" textAlign="center" style={{ minHeight: "100vh", margin: "1rem" }}>
      <Paper elevation={20} sx={paperStyle}>
        <Grid container direction="row" alignItems="center" spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" component="h2" sx={headerStyle}>
              Sign Up
            </Typography>
            <Typography variant="caption" gutterBottom>
              Please fill this form to create an account!
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              placeholder="Enter your name"
              onChange={onChangeValue}
              value={credentials.name}
              name="name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              placeholder="Enter your email"
              onChange={onChangeValue}
              value={credentials.email}
              name="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              placeholder="Enter your password"
              onChange={onChangeValue}
              value={credentials.password}
              name="password"
              type="password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Confirm Password"
              placeholder="Confirm your password"
              onChange={onChangeValue}
              value={credentials.cpassword}
              name="cpassword"
              type="password"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox name="checkedA" />}
              label="I accept the terms and conditions."
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              fullWidth
            >
              Sign up
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <Grid container item xs={6} justifyContent="center">
        <Box display="flex" justifyContent="center" alignItems="center">
          <img
            src="login/girl.svg"
            alt="Girl"
            style={{ maxWidth: "100%", height: "auto" }}

          />
        </Box>
      </Grid>
    </ Grid>
  );
}

export default Signup;
