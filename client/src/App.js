import React from 'react';
import classes from './App.css';
import Layout from './Containers/Layout/Layout'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store, { createStore } from 'redux';
import reducer from './store/reducer';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// import SimpleMap from './components/layout/Map/Map';

const App = (props) => (
  <Provider store={store}>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </Provider>
);

export default App;
