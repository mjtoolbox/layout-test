import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Switch,
  Route
} from 'react-router-dom';
// import ContentFrame from './ContentFrame';
import ContentFrame from './ContentFrame';
import LoginComponent from './LoginComponent.js';
import Logout from './Logout.js';

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('userInfo') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={ContentFrame} />
        <Route path='/oss' component={ContentFrame} />
        <Route exact path='/login' component={LoginComponent} />
        <Route exact path='/logout' component={Logout} />
      </Switch>
    );
  }
}

export default App;
