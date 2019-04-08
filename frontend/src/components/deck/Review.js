import React, { Component } from "react";
import Spinner from "../common/Spinner";
import ReviewItem from "./ReviewItem";
/**
 * Review containes all the logic for handling cards
 * Has card and state
 */
export default class Review extends Component {
  state = {
    count: 0
  };
  componentDidMount() {}
  onSuccess = () => {
    this.setState({ count: this.state.count++ });
  };
  render() {
    const { deckID, cards, decks } = this.props;
    let { count } = this.state;
    // shouldn't be loading the entire data. Just, specific items
    let cardsInDeck = cards.filter(obj => obj.deck === deckID);
    const numCards = cardsInDeck.length;
    let cardContent;
    console.log(numCards);
    let i = 0;

    let succeed = false;
    // Traverse cards((
    for (let i = 0; i < numCards; i++) {
      cardContent = (
        <ReviewItem
          question={cardsInDeck[i].question}
          answer={cardsInDeck[i].answer}
          onSuccess={this.onSuccess}
        />
      );
      setTimeout(5000);
    }
    return <div>{cardContent}</div>;
  }
}
