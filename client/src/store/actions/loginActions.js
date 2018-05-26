import api from '../../utils/apiRequests'

// ACTION TYPES
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const SUBMIT_LOCATION = 'SUBMIT_LOCATION';

// ACTION CREATORS
// receives payload from an action -- in this case username
export const updateUsername = (username) => {
  return {
    type: UPDATE_USERNAME,
    username,
  };
};

export const updatePassword = (password) => {
  return {
    type: UPDATE_PASSWORD,
    password,
  };
};

export const submitLocation = (lat, lng) => {
  console.log("ACTIONS: ",lat, lng)
  return {
    type: SUBMIT_LOCATION,
    lat,
    lng,
  };
};

export const userLogin = () => {
  let res = "loggedin!"
  return (dispatch, getState) => {
    const username = getState().loginReducer.username;
    const password = getState().loginReducer.password;
    api.userLogin(username, password)
    .then(response => {
      dispatch(userAuthenticated(response))
    })
  };
};

export const userAuthenticated = (result) => {
  return {
    type: USER_LOGIN,
    result,
  };
};
