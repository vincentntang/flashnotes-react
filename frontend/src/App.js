// @ts-check

import React, { Component } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

// Import Components
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Decks from "./components/decks/Decks";
import AddDecks from "./components/decks/AddDecks";
import Stats from "./components/decks/Stats";
import Deck from "./components/deck/Deck";
import Review from "./components/deck/Review";
import EditCards from "./components/deck/EditCards";
import AddCards from "./components/deck/AddCards";

// SCSS Variables declaration
const theme = {
  red: "#FF0000",
  black: "#393939",
  grey: "lightgray",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};
const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? "white" : "black")};
  }
`;

// ThemeProvider is not considered a div element
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <div className="App">
              <GlobalStyle />
              <Navbar />
              <Route exact path="/" component={Landing} />
              <div className="container">
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/decks" component={Decks} />
                <Switch>
                  <Route exact path="/decks/add" component={AddDecks} />
                  <Route exact path="/decks/stats" component={Stats} />
                  <Route exact path="/decks/:handle" component={Deck} />
                </Switch>
                <Switch>
                  <Route exact path="/decks/:handle/add" component={AddCards} />
                  <Route
                    exact
                    path="/decks/:handle/edit"
                    component={EditCards}
                  />
                  <Route
                    exact
                    path="/decks/:handle/review"
                    component={Review}
                  />
                </Switch>
              </div>
              <Footer />
            </div>
          </Router>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
