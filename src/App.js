import React from "react";
import { Route, Switch,Redirect  } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout";
import Albums from "./pages/Albums";
import NotFound from "./pages/NotFound";
import Posts from "./pages/Posts";
import Todos from "./pages/Todos";
import Users from "./pages/Users";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
        <Redirect to="/posts" />
        </Route>
       
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/albums">
          <Albums />
        </Route>
        <Route path="/todos">
          <Todos />
        </Route>
        <Route path ='*'>
          <NotFound />
        </Route>
      </Switch>
      </Layout>
  );
}

export default App;
