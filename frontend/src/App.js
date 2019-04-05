import React, { Component } from "react";
import Main from "./components/layout/Main";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <GlobalStyle />
            <Main />
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
