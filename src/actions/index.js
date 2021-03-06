import { userConstraints } from '../constraints/actionTypes.js';

export const userActions = {
  logOut,
  loginSuccess,
  loginFailure,
  setSelectedIndex,
};

// Not to confuse this action with Reducer.
// Action is to send out an signal to the store.
// Type is mandatory, but payload is optional.
// Try not to make too complicated. isLogged determined in Reducer.

function loginSuccess(userProfile) {
  return {
    type: userConstraints.LOGIN_SUCCESS,
    payload: userProfile,
  };
}

function loginFailure(userProfile) {
  return {
    type: userConstraints.LOGIN_FAILURE,
    payload: userProfile,
  };
}

function logOut() {
  return {
    type: userConstraints.LOGOUT,
    //isLogged: false,
    payload: '',
  };
}

function setSelectedIndex(userProfile, index) {
  return {
    type: userConstraints.SET_SELECTED_INDEX,
    payload: userProfile,
    selectedIndex: index,
  };
}
