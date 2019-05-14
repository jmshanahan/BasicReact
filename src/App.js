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
import CheckPropsContainer from './components/validation/CheckPropsContainer';
import NotFound from './components/NotFound';
import { lavender } from './css/styles';

const GlobalStyle = createGlobalStyle`
body{
  background-color:${lavender}
}
`;
const validProps = {
  aString: 'My String',
  aNumber: 100,
  aBool: true,
  aFunc: () => 'My Return Value',
  aArray: ['One', 'Two', 'Three'],
  aObject: { aProp: 'My Prop' }
};
const invalidProps = {
  aString: 100,
  aNumber: 'My String',
  aBool: () => 'My Reaturn Value',
  aFunc: true,
  aArray: { myProp: 'My Prop' },
  aObject: ['One', 'Two', 'Three']
};
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
          <Route
            path="/validprops"
            render={() => <CheckPropsContainer {...validProps} />}
          />
          <Route
            path="/invalidprops"
            render={() => <CheckPropsContainer {...invalidProps} />}
          />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
