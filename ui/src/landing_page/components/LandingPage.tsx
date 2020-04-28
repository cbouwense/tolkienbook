import React from "react";
import { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { LoginModal } from "../../login_modal/components/LoginModal";
import { RegisterModal } from "../../register_modal/components/RegisterModal";

const useStyles = makeStyles(() => ({
  container: {
    "display": "flex",
    "justify-content": "center"
  },
  button: {
    "margin": "0 25px",
    "width": "30%"
  }
}));

export const LandingPage = () => {
  const classes = useStyles();

  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  const handleLoginOpen = () => {
    setLoginOpen(true);
  }
  
  const handleLoginClose = () => {
    setLoginOpen(false);
  }

  const handleRegisterOpen = () => {
    setRegisterOpen(true);
  }
  
  const handleRegisterClose = () => {
    setRegisterOpen(false);
  }

  return (
    <div className={classes.container}>
      <Button className={classes.button} variant="outlined" onClick={handleRegisterOpen}>
        Register
      </Button>
      <Button className={classes.button} variant="outlined" onClick={handleLoginOpen}>
        Login
      </Button>
      <LoginModal open={loginOpen} handleClose={handleLoginClose} />
      <RegisterModal open={registerOpen} handleClose={handleRegisterClose} />
    </div>
  );
}