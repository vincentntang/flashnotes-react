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

    let succeed = false;
    // Traverse cards
    if (numCards > 0) {
      cardContent = (
        <ReviewItem
          question={cardsInDeck[count].question}
          answer={cardsInDeck[count].answer}
          onSuccess={this.onSuccess}
        />
      );
    }
    return <div>{cardContent}</div>;
  }
}
