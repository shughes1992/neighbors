
## Quick setup
Project setup following [this guide](https://daveceddia.com/create-react-app-express-backend/)
### Installing and running the repository
1. `$ git clone https://github.com/okputadora/neighbors.git`
1. `npm install`
1. `$ nodemon`
1. Open a new terminal and `$ cd client`
1. `$ npm start`
### Database setup
1. in the root directory create a .env file and intialize a variable called `MONGO_URI`
1. create a mongo database in your local environment and point the MONGO_URI to it
1. from the root directory import the phillyhoods data into your db

## Technologies used
* This project was built using MySql + sequelize, MongoDB, Node, Express, React, and Redux.
* Additional technologies include react-router(v4), google maps and places APIs,
data from [philly-hoods](http://phillyhoods.net/) (to get neighborhood boundaries), and
[socket.io](https://socket.io/) for live chat functionality.

## Project structure
* The server-side code is the main directory and runs on PORT 3001
* All of the front-end React code lives in the client directory and runs on PORT 3000
* The projects are connected via the package.json file in the client directory
* `"proxy": "http://localhost:3001"`

### Database(s)

### Server Side

### Client Side
* This project was bootstrapped with [create-react-app](https://github.com/facebook/create-react-app).
The webpack configuration was upgraded to allow styling with css modules

* The frontend react code (in the src directory) is structured as follows:

 __store:__ the store directory holds all of the redux code. Right now redux
is mainly used for handling user login so that their location (i.e. neighborhood)
and profile details can be shared easily throughout the application. While it might
make sense to handle that chatbox state with redux (for a single source of truth),
because the chat history does not need to be accessible anywhere but the chatbox,
we have opted to keep this state local and handle it with a pure react solution

__containers:__ this directory holds the three large containers for the project
  1. The layout component dictates the overall structure of the page and loads
  in the other components as necessary
  1. The login component is rendered on the index route and connects to the
  redux store set the location and active user in the global state. N.B. it
  is important that this state is note stored locally to the login component
  because we will need to access it from the chat component
  1. After the user logs in, the chat room component is rendered within the layout component.
  This chat room component renders a map component and the chatbox component

__components:__ the components directory holds the map and chat box components
as well as some UI components.
  1. The map component...
  1. The chat box component loads messages associated with the current location
  from the backend in the `componentWillMount()` lifecycle method. These messages
  are then stored in this components local state.

__utils:__ the utils directory includes two libraries for making API calls to
the server and the google maps/places/geoCoder API


## Additional Notes

## Todo
1. Make the chat "live" with socket.io?
1. Mobile/Responsive design
1. Place pins on the map for each active person ?? actually, is this desirable?
1. Profile page? About page? Welcome Page
1. Delay page load until image loads
1. Avatars in the chat
1. Add event handler to chatbox to submit message on Enter keypress
1. Set focus on input fields with ref()
1. Encrypt password with bcrypt
1. show timestamp in chat
