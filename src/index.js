import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import App from './components/App';
import Hello from './components/hello';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={Hello} />
    </Route>
  </Router>
  
), document.getElementById('root'));
