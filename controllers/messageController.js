module.exports = {
  get: () => {
    return new Promise((resolve, reject) => {
      db.Message.findAll({})
      .then((messages, err) => {
        if (messages){
          return resolve(messages);
        }
        reject(err)
      });
    })
  }
}
