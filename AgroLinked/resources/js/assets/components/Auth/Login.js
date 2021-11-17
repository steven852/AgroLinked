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
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useFormControl } from '@mui/material/FormControl';

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

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      values: {
        email: "",
        password: "",
      },
      error: {
        email: false,
        password: false,
        unValidated: true,
      },
      errorMessage: {
        email: "Invalid email format",
        password: "Password is too short",
      },
      showPassword: false,
    };

    this.handleClickShowPassword = () => {
      this.setState(prevState => ({
        showPassword: !prevState.showPassword,
      }));
    };

    this.handleBlurEmail = () => {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(this.state.values.email)){
        this.setState(prevState => ({
          error: {
            ...prevState.error,
            email: true,
          },
        }));
      }
    };

    this.handleBlurPassword = () => {
      if(this.state.values.password.length < 9){
        this.setState(prevState => ({
          error: {
            ...prevState.error,
            password: true,
          },
        }));
      }
    };

    this.handleFocus = (e) => {
      const {name} = e.target;
      if(this.state.error[name] === true){
        this.setState(prevState => ({
          error: {
            ...prevState.error,
            [name]: false,
          },
        }));
      }
    };

    this.handleChange = (e) => {
      const {name, value} = e.target;
      this.setState(prevState => ({
        values: {
          ...prevState.values, // keep all other key-value pairs
          [name]: value,
          }
      }));
    };

    this.handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);

      $.ajax({
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        method: "POST",
        url: "/login",
        dataType: "JSON",
        data: {
          email: data.get('email'),
          password: data.get('password'),
        },
        success: function(){
          window.location.replace("/");
        },

        error: (data) => {
          if(data.status === 422){
            this.setState(prevState => ({
              error: {
                ...prevState.error,
                unValidated: false,
              },
            }));
          }
        }
      });

    };
  };

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
                my: 4,
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
                Sign in
              </Typography>
              <Box component="form" noValidate onSubmit={this.handleSubmit} sx={{ mt: 1 }}>
                <Box  >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  error={this.state.error.email}
                  helperText={this.state.error.email === true ? this.state.errorMessage.email : " "}
                  onBlur={this.handleBlurEmail}
                  value={this.state.values.email}
                  onChange={this.handleChange}
                  onFocus={this.handleFocus}
                />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  error={this.state.error.password}
                  helperText={this.state.error.password === true ? this.state.errorMessage.password : " "}
                  onBlur={this.handleBlurPassword}
                  value={this.state.values.password}
                  onChange={this.handleChange}
                  onFocus={this.handleFocus}
                />
                </Box>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />

                {this.state.error.unValidated === true ? " " :
                  <p className="text-danger">
                  Sorry, your email or password was incorrect. Please double-check email or password.
                  </p>
                }

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/register" variant="body2">
                      {"Don't have an account? Sign Up"}
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
export default Login;
