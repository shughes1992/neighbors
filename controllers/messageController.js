const db = require('../models')

module.exports = {
  get: (locationId) => {
    return new Promise((resolve, reject) => {
      console.log("in message controller")
      db.Message.findAll({
        where: locationId,
        order: [['createdAt', 'DESC']],
        include: [db.User]
      })
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

  post: (message) => {
    console.log(message)
    return new Promise((resolve, reject) => {
      db.Message.create(message,)
      .then((message) => {
        console.log("posted from backend!")
        resolve(message)
      })
      .catch((err) => {
        console.log("ERROR")
        console.log(err)
        reject(err)
      })
    })
  }
}
