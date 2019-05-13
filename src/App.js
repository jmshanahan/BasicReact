import React, { Fragment } from 'react';
import logo from './logo.svg';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import './App.css';
import { Navigator } from './components/header';
import UserListContainer from './components/user/UserListContainer';
import Home from './components/Home';
import Contact from './components/Contact';
import ButtonContainer from './components/button/ButtonContainer';
import NotFound from './components/NotFound';
import { lavender } from './css/styles';

const GlobalStyle = createGlobalStyle`
body{
  background-color:${lavender}
}
`;

const App = () => {
  let disabled = false;
  return (
    <Fragment>
      <GlobalStyle />
      <Router>
        <Navigator />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={UserListContainer} />
          <Route path="/contact" component={Contact} />
          <Route path="/button" render={() => <ButtonContainer />} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
