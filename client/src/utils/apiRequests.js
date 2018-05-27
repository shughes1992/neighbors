import axios from 'axios';

export default {
  getMessages: (location) => {
    console.log("getting messages for: ", location)
    return new Promise((resolve, reject) => {
      axios.get('/api/message', {location,})
      .then((response) => {
        console.log("messages: ",response);
        resolve(response.data.results)
      })
      .catch((error) => {
        console.log(error);
        reject(error)
      })
    })
  },
  postMessage: (message) => {
    return new Promise((resolve, reject) => {
      axios.post('/api/message', {
        message,
      })
      .then((response) => {
        console.log("POSTED!")
        console.log(response)
        resolve(response)
      })
      .catch((err) => {
        reject(err)
      })
    })
  },

  userLogin: (username, password) => {
    return new Promise((resolve, reject) => {
      axios.post('/api/user', {
        username,
        password,
      })
      .then(response => {
        console.log(response)
        resolve(response)
      })
      .catch(err => {
        console.log("error: ", err)
        reject(err)
      })
    })
  }
}
