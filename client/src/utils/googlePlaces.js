import axios from 'axios';
// import hoods from 'philly-hoods'; -- not working
const baseUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
const phillyBaseUrl = 'http://api.phillyhoods.net/v1/locations/'
const corsApiUrl = 'https://cors-anywhere.herokuapp.com/';

require('dotenv').config();
export default {
  // this isn't working becuase of cross-origin requests
  getNeighborhood: (lat, lng) => {
    return new Promise((resolve, reject) => {
      axios.get(corsApiUrl + baseUrl, {
        params: {
          location: [lat, lng].join(","),
          type: 'neighborhood',
          radius: 1000,
          key: process.env.REACT_APP_PLACES_KEY,
        }
      })
      .then((response) => {
        const data = response.data.results;
        const name = data[data.length - 1].name;
        console.log(name)
        resolve(name)
      })
      .catch((error) => {
        reject(error)
      });
    });
  },

  getHoodCoords: (name) => {
    return new Promise((resolve, reject) => {
      axios.get('/api/phillyHood', {
        params: {
          name,
        }
      })
      .then(response => {
        resolve(response.data.results)
      })
      .catch(err => {
        reject(err)
      })

    })
  }

};
