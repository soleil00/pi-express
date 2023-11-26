import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  CssBaseline,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here

    // Assuming signup is successful, navigate to the login route
    console.log("Sign up form submitted:", formData);

    // Use useHistory to navigate to the login route
    navigate("/login");
  };

  return (
    <Container component="main" maxWidth="xs">
      {/* <CssBaseline /> */}
      <div>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          {/* <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            onChange={handleChange}
          /> */}
          <TextField
            variant="outlined"
            margin="normal"
            autoFocus
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type="email"
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            onChange={handleChange}
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default SignUpForm;
