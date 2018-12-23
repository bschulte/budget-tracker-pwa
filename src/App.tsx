import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { NewExpensePage } from "./pages/NewExpensePage";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/new-expense" component={NewExpensePage} />
          <Route path="/" exact component={HomePage} />
        </div>
      </Router>
    );
  }
}

export default App;
