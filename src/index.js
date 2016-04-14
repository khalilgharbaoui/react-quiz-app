import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import App from './components/App';
import Quiz from './components/Quiz';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={Quiz} />
    </Route>
  </Router>

), document.getElementById('root'));
