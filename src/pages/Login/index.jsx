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
  Box,
  InputLabel,
} from "@mui/material";
import { CenterFocusStrong } from "@mui/icons-material";

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
    // <Box
    //   sx={{
    //     display: "flex",

    //     alignItems: "center",
    //     justifyContent: "center",
    //   }}
    // >
    //   <Paper elevation={10}>
    //     <Grid container direction='column' alignItems='center'>
    //       <Avatar sx={{ backgroundColor: "#1bbd7e" }}></Avatar>
    //       <Typography variant='h5' component='h2' mt={2}>
    //         Log In
    //       </Typography>
    //     </Grid>
    //     <TextField
    //       label='Username'
    //       placeholder='Enter username'
    //       fullWidth
    //       required
    //       name='username'
    //       value={credentials.username}
    //       onChange={handleChange}
    //     />
    //     <TextField
    //       label='Password'
    //       placeholder='Enter password'
    //       type='password'
    //       fullWidth
    //       required
    //       name='password'
    //       value={credentials.password}
    //       onChange={handleChange}
    //     />
    //     <FormControlLabel
    //       control={<Checkbox name='checkedB' color='primary' />}
    //       label='Remember me'
    //     />
    //     <Button
    //       type='submit'
    //       color='primary'
    //       variant='contained'
    //       sx={{ margin: "8px 0" }}
    //       fullWidth
    //       onClick={handleSubmit}
    //     >
    //       Log in
    //     </Button>
    //     <Typography>
    //       <Link to='/'>Forgot password?</Link>
    //     </Typography>
    //     <Typography>
    //       Do you have an account?{" "}
    //       <div onClick={handleSignIn} style={{ cursor: "pointer" }}>
    //         Sign Up
    //       </div>
    //     </Typography>
    //   </Paper>
    // </Box>
    <Box
      sx={{
        maxWidth: "77.5vw",
        height: "80vh",
        borderRadius: "7rem",

        alignContent: "center",
        marginTop: "10rem",
        marginLeft: "10rem",
      }}
    >
      <Paper elevation={15}>
        <Box sx={{ display: "flex", gap: "20rem", padding: "2rem" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              paddingLeft: "6rem",
            }}
          >
            <Box>
              <Typography
                fontSize={"3.6rem"}
                fontFamily={"Poppins"}
                fontWeight={600}
                color='#D885A3'
              >
                PRODUCT X
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Box>
                <Typography
                  fontSize={"2rem"}
                  fontFamily={"Poppins"}
                  fontWeight={400}
                >
                  Welcome Back 👏
                </Typography>
              </Box>
              <Box>
                <Typography
                  fontSize={"4rem"}
                  fontFamily={"Poppins"}
                  fontWeight={600}
                >
                  Log In
                </Typography>
              </Box>
            </Box>
            <Box>
              <InputLabel
                sx={{
                  fontSize: "1.6rem",
                  fontFamily: "Poppins",
                  fontWeight: 400,
                }}
              >
                Username
              </InputLabel>
              <TextField
                sx={{
                  width: "30rem",
                  backgroundColor: "rgba(192, 219, 234, 1)",
                }}
                placeholder='Enter username'
                required
                name='username'
                value={credentials.username}
                onChange={handleChange}
              />
            </Box>
            <Box>
              <InputLabel
                sx={{
                  fontSize: "1.6rem",
                  fontFamily: "Poppins",
                  fontWeight: 400,
                }}
              >
                Password
              </InputLabel>
              <TextField
                sx={{
                  width: "30rem",
                  backgroundColor: "rgba(192, 219, 234, 1)",
                }}
                label='Password'
                placeholder='Enter password'
                type='password'
                required
                name='password'
                value={credentials.password}
                onChange={handleChange}
              />
            </Box>
            <Box>
              <FormControlLabel
                control={<Checkbox name='checkedB' color='primary' />}
                label='Remember me'
                sx={{
                  fontSize: "1.6rem",
                  fontFamily: "Poppins",
                  fontWeight: 400,
                }}
              />
            </Box>
            <Box>
              <Button
                type='submit'
                color='primary'
                variant='contained'
                sx={{
                  backgroundColor: "#D885A3",
                  borderRadius: "2rem",
                  color: "#fff",
                  fontSize: "2rem",
                  fontWeight: "500",
                  fontFamily: "Poppins",
                  marginLeft: "10rem",
                  padding: "1rem 2rem",
                }}
                onClick={handleSubmit}
              >
                Log in
              </Button>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "1.6rem",
                  fontFamily: "Poppins",
                  fontWeight: 400,
                }}
              >
                Do you have an account?{" "}
                <div
                  onClick={handleSignIn}
                  style={{ cursor: "pointer", color: "#D885A3" }}
                >
                  Sign Up{" "}
                </div>{" "}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              borderRadius: "2rem",
              paddingRight: "2rem",
              marginLeft: "8rem",
              backgroundColor: "rgba(192, 219, 234, 1)",
            }}
          >
            <Box>
              {" "}
              <img
                src='login/girl.svg'
                style={{
                  width: "50rem",
                  height: "48rem",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
