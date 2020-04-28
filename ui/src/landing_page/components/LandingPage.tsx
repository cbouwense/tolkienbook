import React from "react";
import { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { LoginModal } from "../../login_modal/LoginModal";

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

  const handleLoginOpen = () => {
    setLoginOpen(true);
  }
  
  const handleLoginClose = () => {
    setLoginOpen(false);
  }

  return (
    <div className={classes.container}>
      <Button className={classes.button} variant="outlined">
        Register
      </Button>
      <Button className={classes.button} variant="outlined" onClick={handleLoginOpen}>
        Login
      </Button>
      <LoginModal open={loginOpen} handleClose={handleLoginClose} />
    </div>
  );
}