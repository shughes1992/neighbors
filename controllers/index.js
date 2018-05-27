const message = require('./messageController');
const user = require('./userController');
const location = require('./locationController');
const phillyHood = require('./phillyHoodController');

// es6 shorthand for creating an object with property names that match the value
// equivalent to
// module.exports = {
//   chat: chat,
//   user: user,
//   location: location
// }
module.exports = {
  message,
  user,
  location,
  phillyHood,
}
