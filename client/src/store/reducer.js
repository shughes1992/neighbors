import * as actionTypes from './actions'

const initialState = {
  username: '',
  password: '',
  loggedIn: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_USERNAME:
      return {
        ...state,
        username: action.username
      };
    case actionTypes.UPDATE_PASSWORD:
      return {
        ...state,
        password: action.password
      };

    case actionTypes.USER_LOGIN:
      return {
        ...state,
        password: action.payload
      }
    default:
      return state
  }
};

export default reducer;