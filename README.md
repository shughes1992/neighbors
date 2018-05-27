Project setup following [this guide](https://daveceddia.com/create-react-app-express-backend/)

Express PORT=3001
React PORT=3000

## Quick setup
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
## Project structure
* The server-side code is the main directory
* All of the front-end React code lives in the client directory
* The projects are connected via the package.json file in the client directory
* `"proxy": "http://localhost:3001"`
