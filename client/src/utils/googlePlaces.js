import axios from 'axios';
// import hoods from 'philly-hoods'; -- not working
const baseUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
const phillyBaseUrl = 'http://api.phillyhoods.net/v1/locations/'
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
  },

  getPhillyNeighborhood: (lat, lng) => {
    console.log("philly enigbnorhodds")
    return new Promise((resolve, reject) => {
      console.log(phillyBaseUrl + lat + "," + lng)
      axios.get(phillyBaseUrl + lat + "," + lng, {})
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log("error: ", err)
      })
    })
  }
};
