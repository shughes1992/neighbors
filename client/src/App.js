import React, { Component } from 'react';
import classes from './App.css';
import Layout from './Containers/Layout/Layout'
import { BrowserRouter } from 'react-router-dom';
// import SimpleMap from './components/layout/Map/Map';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={classes.App}>
          <Layout />
          {/* <SimpleMap /> */}

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
