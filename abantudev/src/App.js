import React from 'react';
import {BrowserRouter, Route, Switch, Link, Redirect} from 'react-router-dom';
import './styles/styles.scss';
import NavBar from './navBar';
import Home from './home';
import Projects from './projects'


function App() {
  return (
    <BrowserRouter>
    <div>
    <NavBar></NavBar>
    <Switch>
      <Route  exact path = "/" render={() => <Redirect to = '/home'/> } />
      <Route path = "/home" component = {Home} />
      <Route path = "/projects" component = {Projects} />
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
