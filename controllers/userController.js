const db = require("../models");

module.exports = {
  get: () => {
    return new Promise((resolve, reject) => {
      console.log("in controller")
      db.User.findAll({})
      .then((users, err) => {
        console.log("no error")
        console.log(users)
        if (users){
          return resolve(users);
        }
        reject(err)
      });
    });
  },

  login: (params) => {
    return new Promise((resolve, reject) => {
      // check to see if the username exists
      db.User.findAll({where: {username,}})
      .then((user, err) => {
        if (err) {
          // the username does not exist create a new account
        }
      })
      resolve(params)
    });
  }
}
