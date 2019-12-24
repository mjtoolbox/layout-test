import axios from 'axios';

const baseUrl = 'http://localhost:8080';
const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

class AuthenticationService {
  executeBasicAuthenticationService(username, password) {
    return axios.get(baseUrl + '/authenticate', {
      headers: { authorization: this.createBasicAuthToken(username, password) }
    });
  }

  createBasicAuthToken(username, password) {
    return 'Basic ' + window.btoa(username + ':' + password);
  }

  registerSuccessfulLogin(username, password) {
    // let basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password);
    // return basicAuthHeader;
    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
  }

  setupAxiosInterceptors(token) {
    console.log('Token : ' + token);
    axios.interceptors.request.use(config => {
      if (this.isUserLoggedIn()) {
        config.headers.authorization = token;
      }
      console.log(config);
      return config;
    });
  }
}

export default new AuthenticationService();
