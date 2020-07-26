import { userConstraints } from '../constraints/actionTypes.js';

// This is my state design

let userProfile = JSON.parse(sessionStorage.getItem('userProfile'));

// In case if we need to pass token.
const emptyProfile = {
  userProfile: {
    token: '',
    name: '',
    email: '',
    logged: false,
    roles: [
      {
        authority: '',
      },
    ],
  },
};

const initialState = userProfile ? { userProfile } : { emptyProfile };

// isLogged is driven value, but it is not ideal to have a driven value becaues some situations can't derive.
const LoggedReducer = (state = emptyProfile, action) => {
  switch (action.type) {
    case userConstraints.LOGIN_SUCCESS:
      return {
        // isLogged: action.payload.logged,
        userProfile: action.payload,
        // role: action.payload.roles[0].authority, // For now, just 1 role
        navSelectedIndex: '',
      };
    case userConstraints.LOGOUT:
      return {
        // isLogged: false,
        userProfile: emptyProfile,
        // role: '',
        navSelectedIndex: '',
      };
    case userConstraints.SET_SELECTED_INDEX:
      return {
        // isLogged: action.payload.logged,
        userProfile: action.payload,
        // role: action.payload.roles[0].authority,
        navSelectedIndex: action.selectedIndex,
      };
    default:
      return state;
  }
};
export default LoggedReducer;
