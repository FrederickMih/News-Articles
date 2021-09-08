import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import ArticleContainer from '../containers/customNewsContainer';
import TechNews from '../containers/techNewsContainer';
// import DetailedArticle from '../containers/NewsDetails';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={TechNews} />
      {/* <Route exact path="/" component={DetailedArticle} />
      <Route exact path="/article" component={ArticleContainer} /> */}
    </Switch>
  </BrowserRouter>

);

export default Routes;
