import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';

import App from './components/App';
import Home from './components/home/Home';
import About from './components/about/About';

import reducers from './reducers';

import './components/bundle.scss';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
      <App>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </App>
    </Router>
  </Provider>
  , document.getElementById('react-root'));
