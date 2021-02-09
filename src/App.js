import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Category, Add, Search } from "./components";



function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Category />} />
          <Route path="/Add" exact component={() => <Add />} />
          <Route path="/Search" exact component={() => <Search />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
