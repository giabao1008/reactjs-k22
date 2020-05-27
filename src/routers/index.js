import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { HomePage, NotFoundPage, Detail, Search, Category } from "../pages";

class AppRouter extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/404" exact component={NotFoundPage} />
        <Route path="/product/:id" exact component={Detail} />
        <Route path="/search" exact component={Search} />
        <Route path="/categories/:id" exact component={Category} />
        <Route path="*" render={() => <Redirect to="/404" />} />
      </Switch>
    );
  }
}

export default AppRouter;
