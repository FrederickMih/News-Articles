import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import the components
import ArticleContainer from '../components/main';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ArticleContainer} />
    </Switch>
  </BrowserRouter>

);

export default Routes;
