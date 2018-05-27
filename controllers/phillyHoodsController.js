const PhillyHood = require('../models/PhillyHood')

module.exports = {
  get: (name) => {
    return new Promise((resolve, reject) => {
      console.log("in message controller")
      PhillyHood.find({'properties.listname': name})
      .then((messages, err) => {
        console.log("IN here")
        console.log(messages)
        if (messages){
          return resolve(messages);
        }
        reject(err)
      });
    })
  },
