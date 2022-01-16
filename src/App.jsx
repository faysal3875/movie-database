import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Movies from "./components/movies";
import Customer from "./components/customer";
import Rental from "./components/rentals";
import notfound from "./components/notfound";
import MovieForm from "./components/movieForm";
import "./App.css";
import Navbar from "./components/nabvar";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          <Switch>
            <Route path="/movies/:id" component={MovieForm}></Route>
            <Route path="/movies" component={Movies}></Route>
            <Route path="/customers" component={Customer}></Route>
            <Route path="/rentals" component={Rental}></Route>
            <Route path="/not-found" component={notfound}></Route>
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
