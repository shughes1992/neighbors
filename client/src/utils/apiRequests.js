import axios from 'axios';

export default {
  getMessages: () => {
    return new Promise((resolve, reject) => {
      axios.get('/api/message')
      .then(function (response) {
        console.log(response);
        resolve(response.data.results)
      })
      .catch(function (error) {
        console.log(error);
        reject(error)
      })
    })
  },
  postNewMessage: (message) => {

  }
}
