import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Page1 from 'pages/Page1';
import Page2 from 'pages/Page2';
import * as serviceWorker from './serviceWorker';
import store from './store/store'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import { createHashHistory } from 'history';
const history = createHashHistory();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" exact component={App}/>
        <Route path="/Page1" component={Page1}/>
        <Route path="/Page2" component={Page2}/>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
