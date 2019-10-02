import React, { Component } from 'react';
import axios from 'axios';

const baseUrl = 'http://localhost:8080';
const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

class AuthenticationService {
  executeBasicAuthenticationService(username, password) {
    return axios.get(`${baseUrl}/basicauth`, {
      headers: { authorization: this.createBasicAuthToken(username, password) }
    });
    // return axios.get(baseUrl + '/basicauth', {
    //   auth: {
    //     username: 'mymy',
    //     password: 'hello'
    //   }
    // });
  }

  createBasicAuthToken(username, password) {
    return 'Basic ' + window.btoa(username + ':' + password);
  }

  registerSuccessfulLogin(username, password) {
    console.log('id pw passed in' + username + ' ' + password);
    let basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password);
    console.log('registerSuccessfulLogin');
    return basicAuthHeader;
    // sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    // this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
  }
}

export default new AuthenticationService();
