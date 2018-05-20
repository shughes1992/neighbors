const chat = require('./chatController');
const user = require('./userController');
const location = require('./locationController');

// es6 shorthand for creating an object with property names that match the value
// equivalent to
// module.exports = {
//   chat: chat,
//   user: user,
//   location: location
// }
module.exports = {
  chat,
  user,
  location,
}
