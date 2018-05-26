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

  post: (params) => {
    return new Promise((resolve, reject) => {
      console.log("Logging in")
      console.log(params)
      // check to see if the username exists
      db.User.findOne({where: {name: params.username}})
      .then((user, err) => {
        if (err) {
          return reject(err)
        }
        // if the user is null create this user
        else if (user === null) {
          console.log("user does not exit")
          db.User.create({name: params.username, password: params.password})
          .then((user, err) => {
            return resolve({confirmation: "created new user", user: user});
          })
        }
        else {
          // check the password
          console.log("User exists")
          console.log(user)
          if (user.password === params.password) {
            return resolve({confirmation: "logged in", user: user});
          }
          else {
            return resolve({confirmation: "incorrect password"})
          }
        }
      })
    });
  }
}
