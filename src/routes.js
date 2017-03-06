import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "./components/App";
import Entry from "./components/Entries/Entry";
import Login from "./components/Login/Login";
import Welcome from "./components/Welcome/Welcome";
import PageNotFound from "./components/PageNotFound";
import Signup from "./components/Signup/Signup";
import AuthenticateRoute from "./utilities/AuthenticateRoute";

export default(
    <Route>
        <Route path="/" component={App}>
            <IndexRoute component={AuthenticateRoute(Welcome)} />
            <Route path="login" component={Login} />
            <Route path="signup" component={Signup} />
            <Route path="entries" component={AuthenticateRoute(Entry)} />
            <Route path="entries/addEntry" component={AuthenticateRoute(Entry)} />
        </Route>
        <Route path="*" component={PageNotFound} />
    </Route>
);
