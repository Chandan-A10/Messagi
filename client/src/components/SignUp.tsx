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
interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
  const handleSubmit = () => {
    console.log("first");
  };
  return (
    <div className="login_container">
      <Paper className="login_box" elevation={5}>
        <Box className="login_title">Sign up</Box>
        <br />
        <FormGroup className="form" onSubmit={handleSubmit}>
          <FormControl required className="form-input">
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input
              className="login_input"
              type="email"
              id="my-input"
              aria-describedby="my-helper-text"
            />
            <FormHelperText id="my-helper-text">
              We'll never share your email.
            </FormHelperText>
          </FormControl>
          <br />
          <FormControl required>
            <InputLabel htmlFor="my-pass">Password</InputLabel>
            <Input
              className="login_input"
              id="my-pass"
              type="password"
              aria-describedby="my-helper-text"
            />
            <FormHelperText id="my-helper-text">
              We'll never share your password.
            </FormHelperText>
          </FormControl>
          <br />
          <FormControl required>
            <InputLabel htmlFor="my-cpass">Confirm Password</InputLabel>
            <Input
              className="login_input"
              id="my-cpass"
              type="password"
              aria-describedby="my-helper-text"
            />
            <FormHelperText id="my-helper-text">
              We'll never share your password.
            </FormHelperText>
          </FormControl>
          <br />
          <Box className="login_button">
            <Button
              variant="contained"
              style={{ width: "70%" }}
              disabled
              className="btn"
            >
              Create Account
            </Button>
          </Box>
        </FormGroup>
      </Paper>
    </div>
  );
};

export default Register;
