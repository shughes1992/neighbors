import axios from 'axios';

export default {
  getMessages: () => {
    return new Promise((resolve, reject) => {
      axios.get('/api/message')
      .then((response) => {
        console.log(response);
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
        message: message
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

  userLogin: (username, password, location) => {
    console.log("Location in frontend req ", location)
    return new Promise((resolve, reject) => {
      axios.post('/api/user', {
        username,
        password,
        location,
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
