import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { initStore } from './Store';
import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from './Components';


import "antd/dist/antd.css";
import './index.css';

ReactDOM.render(
  <Provider store={initStore()}>
    <Router>
      <MainRoutes />
    </Router>
  </Provider>,
  document.getElementById('root')
);
