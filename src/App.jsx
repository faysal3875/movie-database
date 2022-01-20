import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import Customer from "./components/customer";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import MovieForm from "./components/movieForm";
import Movies from "./components/movies";
import Navbar from "./components/nabvar";
import notfound from "./components/notfound";
import React, { Component } from "react";
import Rental from "./components/rentals";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm}/>
            <Route path="/login" component={LoginForm} />
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
