// ACTION TYPES
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const SEND_MESSAGE = 'SEND_MESSAGE';

// ACTION CREATORS
// receives payload from an action -- in this case username
export const updateMessage = (message) => {
  return {
    type: UPDATE_MESSAGE,
    message,
  }
}
export const sendMessage = (message) => {
  return {
    type: SEND_MESSAGE,
    message,
  };
};
