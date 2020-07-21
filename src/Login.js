import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

class Login extends React.Component {
  render() {
    return (
      <Tooltip title='Login'>
        <Link to='/login' className='nav-link'>
          <IconButton>
            <AccountCircleOutlinedIcon />
          </IconButton>
        </Link>
      </Tooltip>
    );
  }
}

export default Login;
