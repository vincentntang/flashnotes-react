import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import MainData from "../data/MainData";

export default class Main extends Component {
  state = MainData;
  render() {
    // Current state of toggle
    let toggled = false;
    return (
      <div>
        <Header />
        {this.state.cards.map(card => {
          return <div key={card.id}>{card.question}</div>;
        })}
        <Footer />
      </div>
    );
  }
}
