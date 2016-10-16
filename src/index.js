import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import Front from "./pages/Front";
import Settings from "./pages/Settings";
import Todos from "./pages/Todos";
import Game from "./pages/Game";

ReactDOM.render(<Layout />,document.getElementById('app'));

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Front}></IndexRoute>
      <Route path="todo" component={Todos}></Route>
      <Route path="game" component={Game}></Route>
    </Route>
  </Router>,
app);
