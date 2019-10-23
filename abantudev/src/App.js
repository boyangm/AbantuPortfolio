import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import './styles/styles.scss';
import NavBar from './navBar';
import Home from './home';
import Projects from './projects'
import Contact from './contact'
import history from "./history";


function App() {
  return (
    <BrowserRouter history={history}>
    <div>
    <NavBar></NavBar>
    <Switch>
      <Route  exact path = "/" render={() => <Redirect to = '/home'/> } />
      <Route path = "/home" component = {Home} />
      <Route path = "/projects" component = {Projects} />
      <Route path = "/contact" component = {Contact} />
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
