import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap-4-grid/css/grid.min.css'
import 'rsuite/dist/styles/rsuite-default.css';
import './style/rsuite_themes/rsuite_dark_theme.less';
import './style/rsuite_themes/rsuite_default_theme.less';
import './style/index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
