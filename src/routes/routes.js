import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ArticleContainer from '../containers/customNewsContainer';
import MoreArticles from '../containers/MoreArticles';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ArticleContainer} />
      <Route exact path="/article" component={MoreArticles} />
    </Switch>
  </BrowserRouter>

);

export default Routes;
