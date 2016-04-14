import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import App from './components/App';
import Quiz from './components/Quiz';
import NotFound from './components/NotFound';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={Quiz} />
    <Route path="*" component={NotFound} status={404} />
    </Route>
  </Router>

), document.getElementById('root'));
