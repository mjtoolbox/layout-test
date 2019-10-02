import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'mymy',
      password: '',
      hasLoginFailed: false,
      showSuccessMessage: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  loginClicked() {
    // if (this.state.username === 'mymy' && this.state.password === 'hello') {
    //   AuthenticationService.registerSuccessfulLogin(
    //     this.state.username,
    //     this.state.password
    //   );
    //   this.setState({ showSuccessMessage: true });
    //   this.setState({ hasLoginFailed: false });
    // } else {
    //   this.setState({ showSuccessMessage: false });
    //   this.setState({ hasLoginFailed: true });
    // }
    AuthenticationService.executeBasicAuthenticationService(
      this.state.username,
      this.state.password
    )
      .then(() => {
        AuthenticationService.registerSuccessfulLogin(
          this.state.username,
          this.state.password
        );
        this.props.history.push(`/oss`);
      })
      .catch(() => {
        this.setState({ showSuccessMessage: false });
        this.setState({ hasLoginFailed: true });
      });
  }

  render() {
    return (
      //   <div>
      //     <h1>Login</h1>
      //     <div className='container'>
      //       {this.state.hasLoginFailed && (
      //         <div className='alert alert-warning'>Invalid Credentials</div>
      //       )}
      //       {this.state.showSuccessMessage && <div>Login Sucessful</div>}
      //       User Name:{' '}
      //       <input
      //         type='text'
      //         name='username'
      //         value={this.state.username}
      //         onChange={this.handleChange}
      //       />
      //       Password:{' '}
      //       <input
      //         type='password'
      //         name='password'
      //         value={this.state.password}
      //         onChange={this.handleChange}
      //       />
      //       <button className='btn btn-success' onClick={this.loginClicked}>
      //         Login
      //       </button>
      //     </div>
      //   </div>

      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={useStyles.paper}>
          <Avatar className={useStyles.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          {this.state.hasLoginFailed && (
            <div className='alert alert-warning'>Invalid Credentials</div>
          )}
          {this.state.showSuccessMessage && <div>Login Sucessful</div>}
          {/* <form className={useStyles.form} noValidate> */}
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='User name'
            name='email'
            autoComplete='email'
            autoFocus
            value={this.state.username}
            onChange={this.handleChange}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            onChange={this.handleChange}
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={useStyles.submit}
            onClick={this.loginClicked}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2'>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href='#' variant='body2'>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          {/* </form> */}
        </div>
        <Box mt={8}>
          <Typography variant='body2' color='textSecondary' align='center'>
            {'Copyright © '}
            <Link color='inherit' href='https://material-ui.com/'>
              One Small Step
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>
      </Container>
    );
  }
}
export default Login;
