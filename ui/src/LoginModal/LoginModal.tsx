import React from "react";
import { useState } from "react";

import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";

export interface LoginModalProps { 
  handleClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const body = (
    <Typography variant="h2">Login</Typography>
  );

  <Modal
    open={open}
    onClose={handleClose}
  >
    {body}
  </Modal>
}