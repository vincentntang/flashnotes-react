import React, { Component } from "react";

/**
 * Review containes all the logic for handling cards
 * Has card and state
 */
export default class Review extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const { deckID, cards, decks } = this.props;
    let currentDeck = decks.filter(obj => obj.id == deckID);
    console.log(currentDeck, "currentDeck");
    // let cardQueue = currentDeck.cardIds;
    // console.log(cardQueue, "currentQueue");
    return <div>hey</div>;
  }
}
