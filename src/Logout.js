import React from 'react';
import AuthService from './service/AuthService';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
import { userActions } from './actions';
import { connect } from 'react-redux';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

class Logout extends React.Component {

  logout = () => {
    sessionStorage.clear('userInfo');
    sessionStorage.clear('isLogged');
    this.props.cleanStore();
  };

  render() {
    // return <Button onClick={this.logout}>Log out</Button>;
    return(
      <IconButton onClick={this.logout}>
          <Icon>exit_to_app</Icon>
      </IconButton>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    cleanStore: () => dispatch(userActions.logOut())
  };
}

export default connect(null, mapDispatchToProps)(Logout);
