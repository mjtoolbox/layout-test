import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Switch,
  Route
} from 'react-router-dom';
// import ContentFrame from './ContentFrame';
import Login from './components/Login';
import ContentFrame from './ContentFrame';
import LoginComponent from './LoginComponent';

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
        <Route exact path='/oss' component={ContentFrame} />
        <Route path='/' exact component={Login} />
        <Route path='/login' exact component={Login} />
      </Switch>
    );
  }
}

export default App;
