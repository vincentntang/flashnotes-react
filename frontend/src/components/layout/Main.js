import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import MainData from "../data/MainData";

export default class Main extends Component {
  state = MainData;
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

