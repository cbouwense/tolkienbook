import React from "react";
import { useState } from "react";

import { makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  input: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  bottomRow: {
    display: "flex",
    justifyContent: "space-between",
  }
}));

interface State { 
  username: string;
  password: string;
}

export interface LoginModalProps { 
  handleClose: () => void;
  open: boolean;
}

export const LoginModal = (props: LoginModalProps) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    username: "",
    password: ""
  })

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  }

  const body = (
    <div className={classes.root}>
      <Typography variant="h2">Login</Typography>
      <form>
        <TextField 
          className={classes.input}
          id="standard-basic" 
          label="Username" 
          value={values.username} 
          onChange={handleChange("username")}
        />
        <div className={classes.bottomRow}>
          <TextField 
            className={classes.input}
            id="standard-basic" 
            label="Password"
            type="password"
            value={values.password} 
            onChange={handleChange("password")}
          />
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );

  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
    >
      {body}
    </Modal>
  );
}