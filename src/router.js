import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Scenes
import Welcome from './components/Welcome';
import Quotes from './components/Quotes';
import Groups from './components/Groups';
// import NewQuote from './components/NewQuote/NewQuote';
// import NewGroup from './components/NewGroup/NewGroup';
import Settings from './components/Settings';

export default (
  <Switch>
    <Route exact path="/" component={Welcome} />
    <Route path="/quotes" component={Quotes} />
    <Route path="/groups" component={Groups} />
    <Route path="/edit" component={Settings} />
  </Switch>
);
