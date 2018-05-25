import React, { Component } from 'react';
import classes from './App.css';
import Layout from './Containers/Layout/Layout'
import { BrowserRouter } from 'react-router-dom';
// import SimpleMap from './components/layout/Map/Map';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout history={this.props.history}/>
      </BrowserRouter>
    );
  }
}

export default App;
