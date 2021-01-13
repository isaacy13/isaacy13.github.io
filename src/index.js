import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

import App from './App';
import Projects from './Projects';
import Interests from './Interests';
import Experiences from './Experiences';
import Awards from './Awards';
import Affiliations from './Affiliations';
import Goals from './Goals';

import Route from 'react-router-dom/Route';
import { HashRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      
      <Route exact path="/">
        <App />
      </Route>

      <Route exact path="/projects">
        <Projects />
      </Route>

      <Route exact path="/interests">
        <Interests />
      </Route>
      
      <Route exact path="/experiences">
        <Experiences />
      </Route>

      <Route exact path="/awards">
        <Awards />
      </Route>
      
      <Route exact path="/affiliations">
        <Affiliations />
      </Route>
      
      <Route exact path="/goals">
        <Goals />
      </Route>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
