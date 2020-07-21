import React from 'react';
import axios from 'axios';
import { decode } from 'punycode';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { userActions } from './../actions';
import { connect } from 'react-redux';

const API_BASE_URL = 'http://localhost:8080';

class AuthService {
  constructor() {
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.setUserProfile = this.setUserProfile.bind(this);
    this.getUserProfile = this.getUserProfile.bind(this);
    this.loggedIn = this.loggedIn.bind(this);
    this.isTokenExpired = this.isTokenExpired.bind(this);
    this.getToken = this.getToken.bind(this);
    this.getAuthHeader = this.getAuthHeader.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  login(credentials) {
    return axios
      .post(API_BASE_URL + '/token/generate-token', credentials)
      .then((res) => {
        console.log(res.data);
        // this.setToken(res.data.token);
        this.setUserProfile(res.data);
        return Promise.resolve(res);
      })
      .catch((err) => {
        console.log('Authentication failed', err);
      });
  }

  signup(userInfo) {
    return axios
      .post(API_BASE_URL + '/register', userInfo)
      .then((res) => {
        if (res.data.status === 200) {
          this.setUserProfile(res.data);

          return Promise.resolve(res);
        } else {
          this.setState({ message: res.data.message });
          console.log('Authentication failed');
        }
      })
      .catch((err) => {
        alert(err);
      });
  }

  setUserProfile(data) {
    sessionStorage.setItem('userProfile', JSON.stringify(data));
  }
  getUserProfile() {
    return JSON.parse(sessionStorage.getItem('userProfile'));
  }

  loggedIn() {
    const token = this.getUserProfile().token;
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  }

  // Really it should name it as getToken()
  getToken() {
    // Using jwt-decode npm package to decode the token
    return this.getUserProfile().token;
  }

  getAuthHeader() {
    console.log(this.getUserProfile());
    return {
      headers: {
        // Authorization: 'Bearer ' + this.getUserInfo().token
        Authorization: 'Bearer ' + this.getToken(),
      },
    };
  }

  logOut() {
    sessionStorage.removeItem('userProfile');
    sessionStorage.removeItem('isLogged');
    return axios.post(API_BASE_URL + '/token/logout', {}, this.getAuthHeader());
  }
}

export default AuthService;
