import axios from 'axios';
const baseUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
const corsApiUrl = 'https://cors-anywhere.herokuapp.com/';
require('dotenv').config();
export default {
  // this isn't working becuase of cross-origin requests
  getNeighborhood: (lat, lng) => {
    console.log("making api requies")
    return new Promise((resolve, reject) => {
      console.log("hitting google places api")
      axios.get(corsApiUrl + baseUrl, {
        params: {
          location: [lat, lng].join(","),
          type: 'neighborhood',
          radius: 1000,
          key: process.env.REACT_APP_PLACES_KEY,
        }
      })
      .then((response) => {
        console.log('success')
        console.log(response);
        resolve(response.data.results)
      })
      .catch((error) => {
        console.log("fail")
        console.log(error);
        reject(error)
      });
    });
  }
};
