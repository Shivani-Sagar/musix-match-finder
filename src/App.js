import React, { Component } from "react";
import Navbar from "./components/navbar";
import Index from "./components/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./components/context";
export default class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}
