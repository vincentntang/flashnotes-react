import React, { Component } from "react";
import MainData from "../data/MainData";
import Spinner from "../common/Spinner";

export default class Deck extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.setState({ cards: MainData.cards, decks: MainData.decks });
    }, 2000);
  }
  state = {
    cards: [], //must be defined as render func runs right away
    decks: []
  };

  render() {
    return <div>{this.props.match.params.handle}</div>;
  }
}
