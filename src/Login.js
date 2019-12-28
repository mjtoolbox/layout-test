import React from 'react';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  //   loginClicked = () => {
  //     this.props.history.push('/login');
  //   };

  render() {
    return (
      <Tooltip title='Login'>
        <Link to='/login' className='nav-link'>
          <IconButton>
            <Icon>account_circle</Icon>
          </IconButton>
        </Link>
      </Tooltip>
    );
  }
}

export default Login;
