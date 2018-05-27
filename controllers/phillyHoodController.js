const PhillyHood = require('../models/PhillyHood')

module.exports = {
  get: (param) => {
    return new Promise((resolve, reject) => {
      PhillyHood.find({'properties.listname': param.name})
      .then((response, err) => {
        if (response){
          const hoodCoords = response[0].geometry.coordinates[0];
          return resolve(hoodCoords);
        }
        reject(err)
      });
    })
  },
}
