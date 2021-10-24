import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Show from "./components/Show";
import Home from "./components/Home";
import Layout from "./components/Layout";

import "./App.css";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="app">
      <Router>
        <Layout handleSearchQuery={(q) => setSearchQuery(q)}>
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => <Home {...props} searchQuery={searchQuery} />}
            />
            <Route path="/:showId" exact component={Show} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
