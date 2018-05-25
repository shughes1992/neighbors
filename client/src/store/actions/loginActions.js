// ACTION TYPES
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';

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
  }
}

export const userAuthenticated = (res) => {
  return {
    type: USER_LOGIN,
    result: res
  }
}

export const userLogin = () => {
  let res = "loggedin!"
  return dispatch => {
    setTimeout(() => {
      dispatch(userAuthenticated(res))
    }, 2000)
  }
};
