import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ArticleContainer from '../containers/customNewsContainer';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ArticleContainer} />
    </Switch>
  </BrowserRouter>

);

export default Routes;
