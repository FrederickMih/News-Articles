import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ArticleContainer from '../containers/customNewsContainer';
import MoreArticles from '../containers/MoreArticles';
import TechNews from '../containers/techNewsContainer';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={TechNews} />
      <Route exact path="/custom" component={ArticleContainer} />
      <Route exact path="/article" component={MoreArticles} />
    </Switch>
  </BrowserRouter>

);

export default Routes;
