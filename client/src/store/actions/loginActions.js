import api from '../../utils/apiRequests';
import googlePlaces from '../../utils/googlePlaces';
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

// Async action to lookup neighborhood from geoCoords
export const submitLocation = (lat, lng) => {
  return dispatch => {
    // googlePlaces.getNeighborhood for outside of philly -- we'll add cities as we go
    googlePlaces.getNeighborhood(lat, lng)
    .then(result => {
      console.log("RESULT IN ACTION: ",result)
      dispatch(foundNeighborhood(result, lat, lng))
    })
    .catch(err => {
      console.log(err)
    });
  };
};

export const foundNeighborhood = (result, lat, lng) => {
  // parse neighborhood
  // it seems the last result is the most specific
  return {
    type: SUBMIT_LOCATION,
    neighborhood: result,
    lat,
    lng,
  };
};
// Asnyc action to check database for user
// after this action run userAuthenticated
export const userLogin = () => {
  return (dispatch, getState) => {
    const username = getState().loginReducer.username;
    const password = getState().loginReducer.password;
    const location = getState().loginReducer.location;
    api.userLogin(username, password, location)
    .then(response => {
      dispatch(userAuthenticated(response))
    })
  };
};

export const userAuthenticated = (result) => {
  // if result is successful login log the user in
  return {
    type: USER_LOGIN,
    result,
  };
};
