import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ArticleDetails from '../components/ArticleDetails';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/article/:id" component={ArticleDetails} />

    </Switch>
  </BrowserRouter>

);

export default Routes;
