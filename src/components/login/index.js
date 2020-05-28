import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  OutlinedInput,
  Button,
  Typography
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { EmailRounded, VpnKeyRounded } from "@material-ui/icons";
import { login } from "../../redux/actions/loginActions";

const Login = ({ history }) => {
  const [fields, setFields] = useState({
    email: "",
    password: ""
  });

  const dispatch = useDispatch();

  const onChange = (e, name) =>
    setFields({ ...fields, [name]: e.target.value });

  const { email, password } = fields;

  return (
    <div style={styles.container}>
      <Dialog fullWidth open={true}>
        <DialogContent>
          <div style={styles.contentContainer}>
            <OutlinedInput
              startAdornment={<EmailRounded style={styles.icon} />}
              onChange={e => onChange(e, "email")}
              style={styles.textField}
              placeholder="Enter email"
              value={email}
            />
            <OutlinedInput
              placeholder="Enter password"
              style={styles.textField}
              startAdornment={<VpnKeyRounded style={styles.icon} />}
              onChange={e => onChange(e, "password")}
              value={password}
            />
            <Button
              onClick={() => dispatch(login(email, password, history))}
              variant="contained"
              style={styles.loginButton}
            >
              Login
            </Button>
          </div>
          <div style={styles.buttonContainer}>
            <Typography>Username : admin</Typography>
            <Typography>Pass : pass</Typography>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const styles = {
  container: { width: "100vw", height: "70vh" },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    width: "60%",
    margin: "auto"
  },
  textField: { margin: "1vw 0" },
  buttonContainer: {
    display: "flex",
    margin: "2vw 0",
    flexDirection: "column",
    alignItems: "center"
  },
  icon: { margin: "0 1vw" },
  loginButton:{backgroundColor:"#E91E65",color:"#fff"}
};

export default withRouter(Login);
