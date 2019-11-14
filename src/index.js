import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Discographie from './views/Discographie.js';
import Concerts from './views/Concerts.js';
import Actu from './views/Actu.js';
import Apropos from './views/About.js';

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
          <Route exact path='/Discographie' component={Discographie} />
          <Route exact path='/Concerts' component={Concerts} />
          <Route exact path='/Actualites' component={Actu} />
          <Route exact path='/Apropos' component={Apropos}/>
        </Switch>
      </Router>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.unregister();


