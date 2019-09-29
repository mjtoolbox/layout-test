import axios from 'axios';

const baseUrl = 'http://localhost:8080';

export default class AuthenticationService {
  executeBasicAuthenticationService(username, password) {
    return axios.get(`${baseUrl}/basicauth`, {
      headers: { authorization: this.createBasicAuthToken(username, password) }
    });
  }
  createBasicAuthToken(username, password) {
    return 'Basic ' + window.btoa(username + ':' + password);
  }
}
