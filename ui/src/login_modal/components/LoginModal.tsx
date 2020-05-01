import axios from "axios";
import { Link } from "react-router-dom";
import React from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { useState } from "react";
import * as UserActions from "../../user/actions";

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
  action: any;
  handleClose: () => void;
  open: boolean;
}

const ConnectedLoginModal = (props: LoginModalProps) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    username: "",
    password: ""
  })

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  }

  const handleSubmit = async () => {
    console.log("Sending login");
    const res = await axios.post("http://localhost:3001/login", { 
      username: values.username, 
      password: values.password 
    })
    props.action.login(res.data);
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
          <Link to={`/user/${values.username}`}>
            <Button 
              variant="contained" 
              color="primary"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Link>
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

const mapDispatchToProps = (dispatch: Dispatch) => ({
  action: bindActionCreators(UserActions, dispatch)
});

export const LoginModal = connect(null, mapDispatchToProps)(ConnectedLoginModal);