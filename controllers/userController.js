const db = require("../models");

module.exports = {
  get: () => {
    return new Promise((resolve, reject) =>{
      console.log("in controller")
      db.User.findAll({})
      .then((users, err) => {
        console.log("no error")
        console.log(users)
        if (users){
          return resolve(users);
        }
        reject(err)
      })
    })
  }
}
