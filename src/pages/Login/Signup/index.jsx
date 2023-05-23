import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

import {
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

import SignupForm from "./SignupForm";

function Signup({ setSection, vars }) {
  const host = "http://localhost:5000/api/users";
  const navigate = useNavigate();
  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };

  const [credentals, setCredentals] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const onChangeValue = (event) => {
    const { name, value } = event.target;
    setCredentals((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(host, {
        name: credentals.name,
        email: credentals.email,
        password: credentals.password,
        cpassword: credentals.cpassword,
      });
  
      const json = response.data;
      console.log(json);
  
      if (json.success) {
        localStorage.setItem("token", json.authtoken);
        navigate("/login");
        console.log("user registered", "success");
      } else {
        navigate("/login");
        console.log("email already exists");
      }
    } catch (error) {
      console.log("Error occurred:", error);
    }
  };
  

  return (
    <>
      {/* <SignupForm vars={vars} setSection={setSection}/> */}
      <Grid container justifyContent="center">
        <Paper elevation={20} sx={paperStyle}>
          <Grid container direction="column" alignItems="center">
            <Avatar sx={avatarStyle}></Avatar>
            <Typography variant="h5" component="h2" sx={headerStyle}>
              Sign Up
            </Typography>
            <Typography variant="caption" gutterBottom>
              Please fill this form to create an account!
            </Typography>
          </Grid>
          <form>
            <TextField
              fullWidth
              label="Email"
              placeholder="Enter your email"
              onChange={onChangeValue}
              value={credentals.email}
              name="email" // Add the name attribute here
            />
            <TextField
              fullWidth
              label="Password"
              placeholder="Enter your password"
              onChange={onChangeValue}
              value={credentals.password}
              name="password"
              type="password"
            />
            <TextField
              fullWidth
              label="Confirm Password"
              placeholder="Confirm your password"
              type="password"
            />
            <FormControlLabel
              control={<Checkbox name="checkedA" />}
              label="I accept the terms and conditions."
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Sign up
            </Button>
          </form>
        </Paper>
      </Grid>
    </>
  );
}

export default Signup;
