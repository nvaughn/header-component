import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import logo from './goatico.png';
import './App.css';

import HomePage from './pages/homepage.component';
import Signin from './pages/signinpage.component';
import Contact from './pages/contactpage.component';
import About from './pages/aboutpage.component';

import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/signin' component={Signin} />
      </Switch>
    </div>
    );
}

export default App;
