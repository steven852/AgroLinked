import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        AgroLinked
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      values: {
        firstName: "",
        lastName: "",
        email: "",
        userName: "",
        password: "",
        cpassword: "",
      },
      error: {
        firstName: false,
        lastName: false,
        email: false,
        userName: false,
        password: false,
        cpassword: false,
        unValidated: true,
      },
      errorMessage: {
        firstName: "Your first name is required",
        lastName: "Your last name is required",
        email: "Invalid email format",
        userName: "This user name is already taken",
        password: "Password is too short",
        cpassword: "Password does not match",
      },
      showPassword: false,
    };

    this.setStateWrapper = (state, name, value) => {
      this.setState(prevState => ({
        [state]: {
          ...prevState[state],
          [name]: value,
        },
      }));
    };

    this.validateNotEmptyString = (name, value) => {
      this.setStateWrapper('error', name, !value);
    };

    this.validatePassword = (value) => {
      this.setStateWrapper('error', 'password', value.length < 9);
    };

    this.validateEmail = (value) => {
      let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.setStateWrapper('error', 'email', !re.test(value));
      this.setStateWrapper('errorMessage', 'email', "Invalid email format");
    };

    this.validateUnique = (name, value) => {
      let msg = name === "userName" ? "user name" : "email";
      $.ajax({
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        method: "POST",
        url: "/"+name,
        dataType: "JSON",
        data: {
          [name]: value,
        },
        success: (data) => {
          console.log(data);
          if(data === "true"){
            this.setStateWrapper('error', name, true);
            this.setStateWrapper('errorMessage', name, "This "+ msg +" is already taken");
          }
        },
      });
    };

    this.handleBlur = (e) => {
      const {name, value} = e.target;
      switch (name){
        case 'email':
          this.validateEmail(value);
          this.validateUnique("email", value);
          break;
        case 'userName':
          this.validateUnique("userName", value);
          break;
        case 'password':
          this.validatePassword(value);
          break;
        default:
          this.validateNotEmptyString(name, value);
          break;
      }
    };

    this.handleKeyUp = () => {
      if(this.state.values.password !== this.state.values.cpassword){
        this.setStateWrapper('error', 'cpassword', true);
      }
      else{
        this.setStateWrapper('error', 'cpassword', false);
      }
    };

    this.handleFocus = (e) => {
      const {name} = e.target;
      if(this.state.error[name] === true){
        this.setStateWrapper('error', name, false);
      }
    };

    this.handleChange = (e) => {
      const {name, value} = e.target;
      this.setStateWrapper('values', name, value);
    };

    this.handleSubmit = (e) => {
      e.preventDefault();
      const data = new FormData(e.currentTarget);

      $.ajax({
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        method: "POST",
        url: "/register",
        dataType: "JSON",
        data: {
          firstName: data.get('firstName'), lastName: data.get('lastName'),
          userName: data.get('userName'), email: data.get('email'),
          password: data.get('password'), password_confirmation: data.get('cpassword'),
        },
        success: function(){
          window.location.replace("/");
        },

        error: (data) => {
          if(data.status === 422){
            this.setStateWrapper('error', 'unValidated', false);
          }
        }
      });
    };
  }

  render(){
    return (
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(/storage/images/home_image2.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Register
              </Typography>
              <Box component="form" noValidate onSubmit={this.handleSubmit} sx={{ mt: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      value={this.state.values.firstName}
                      onChange={this.handleChange}
                      error={this.state.error.firstName}
                      helperText={this.state.error.firstName === true ? this.state.errorMessage.firstName : " "}
                      onBlur={this.handleBlur}
                      onFocus={this.handleFocus}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                      value={this.state.values.lastName}
                      onChange={this.handleChange}
                      error={this.state.error.lastName}
                      helperText={this.state.error.lastName === true ? this.state.errorMessage.lastName : " "}
                      onBlur={this.handleBlur}
                      onFocus={this.handleFocus}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="userName"
                      label="User Name"
                      name="userName"
                      autoComplete="user-name"
                      value={this.state.values.userName}
                      onChange={this.handleChange}
                      error={this.state.error.userName}
                      helperText={this.state.error.userName === true ? this.state.errorMessage.userName : " "}
                      onBlur={this.handleBlur}
                      onFocus={this.handleFocus}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      error={this.state.error.email}
                      helperText={this.state.error.email === true ? this.state.errorMessage.email : " "}
                      onBlur={this.handleBlur}
                      value={this.state.values.email}
                      onChange={this.handleChange}
                      onFocus={this.handleFocus}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      error={this.state.error.password}
                      helperText={this.state.error.password === true ? this.state.errorMessage.password : " "}
                      onBlur={this.handleBlur}
                      value={this.state.values.password}
                      onChange={this.handleChange}
                      onFocus={this.handleFocus}
                      onKeyUp={this.handleKeyUp}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="cpassword"
                      label="Confirm Password"
                      type="password"
                      id="cpassword"
                      autoComplete="new-password"
                      error={this.state.error.cpassword}
                      helperText={this.state.error.cpassword === true ? this.state.errorMessage.cpassword : " "}
                      value={this.state.values.cpassword}
                      onChange={this.handleChange}
                      onFocus={this.handleFocus}
                      onKeyUp={this.handleKeyUp}
                    />
                  </Grid>
                </Grid>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />

                {this.state.error.unValidated === true ? " " :
                  <p className="text-danger">
                  Sorry, your registration info was invalid. Please double-check your registration info.
                  </p>
                }

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/login" variant="body2">
                      {"Already have an account? Sign in"}
                    </Link>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }
}

export default Register; //342
