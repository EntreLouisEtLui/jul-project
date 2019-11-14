import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Page2 from './views/Page2.js'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import './index.css';
import * as serviceWorker from './serviceWorker';


const Root = () => {
  return (
      <Router>
        <Switch>
          <Route exact path='/' component={App} />
          <Route exact path='/page2' component={Page2} />
        </Switch>
      </Router>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.unregister();


