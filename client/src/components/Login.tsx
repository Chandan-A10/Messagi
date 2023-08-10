import { useState } from "react";
import {
  Paper,
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  FormGroup,
  Button,
  Box,
} from "@mui/material";
import "../assets/styles/login.scss";
import { loginUser } from "../utils/loginUser";

const Login: React.FC = () => {
  const [email, setemail] = useState<string>("");
  const [pass, setpass] = useState<string>("");
  const [error, seterror] = useState<boolean>(false);

  const handleSubmit = async () => {
    const details = await loginUser(email, pass);
    if (details) {
      console.log(details);
    } else {
      seterror(true);
    }
  };

  const handleinputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    target: string
  ) => {
    seterror(false)
    target === "email" ? setemail(e.target.value) : setpass(e.target.value);
    if (email.trim() !== "" && pass.trim() === "") {
      document.getElementById("login")?.removeAttribute("disabled");
    }
  };
  return (
    <div className="login_container">
      <Paper className="login_box" elevation={5}>
        <Box className="login_title">Login</Box>
        <br />
        {error && (
          <FormHelperText
            style={{ color: "red", marginLeft: "13px", marginBottom: "13px" }}
            id="my-helper-text"
          >
            Login failed. Please check your email and password and try again.
          </FormHelperText>
        )}
        <FormGroup className="form">
          <FormControl
            focused={error}
            color={error ? "error" : "primary"}
            required
            id="login-form-email"
            className="form-input"
          >
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input
              className="login_input"
              type="email"
              id="my-input"
              aria-describedby="my-helper-text"
              onChange={(e) => handleinputChange(e, "email")}
            />
          </FormControl>
          <br />
          <FormControl
            focused={error}
            color={error ? "error" : "primary"}
            required
            id="login-form-pass"
          >
            <InputLabel htmlFor="my-pass">Password</InputLabel>
            <Input
              className="login_input"
              id="my-pass"
              type="password"
              aria-describedby="my-helper-text"
              onChange={(e) => handleinputChange(e, "pass")}
            />
            <FormHelperText id="my-helper-text">
              We'll never share your password.
            </FormHelperText>
          </FormControl>
          <br />
          <Box className="login_button">
            <Button
              variant="contained"
              onClick={() => handleSubmit()}
              style={{ width: "70%" }}
              disabled={email.trim() === "" || pass.trim() === ""}
              className="btn"
            >
              Log in
            </Button>
          </Box>
        </FormGroup>
      </Paper>
    </div>
  );
};

export default Login;
