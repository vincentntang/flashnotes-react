import React, { Component } from "react";
import Spinner from "../common/Spinner";
import ReviewItem from "./ReviewItem";
/**
 * Review containes all the logic for handling cards
 * Has card and state
 */

// STATES
const views = {
  CARD: "CARD",
  DONE: "DONE"
};

export default class Review extends Component {
  state = {
    count: 0,
    views: views.CARD,
    cards: [] // filtered data from props
  };
  componentDidMount() {
    // Normally, you would axios call only the data you need
    // but in this case I filtered out all the props to the deck I want
    // axios dispatch to GET data
    this.setState({
      cards: this.props.cards.filter(obj => obj.deck === this.props.deckID)
    });
  }
  componentDidUpdate() {
    // reserved when I need to push back the result,
    // or dispatch an action to POST back data
  }
  onSuccess = () => {
    this.setState({ count: this.state.count++ });
  };
  showCard = (cards, count) => {
    return (
      <div>
        hey
        <ReviewItem
          question={cards[count].question}
          answer={cards[count].answer}
          onSuccess={this.onSuccess}
        />
      </div>
    );
  };
  renderCards = () => {
    const { deckID } = this.props;
    let { count, views, cards } = this.state;

    // Iterate, use recursion
    if (count < cards.length) {
      // Define a seperate function so logic is easier
      // this.showCard(cards, count);
      return (
        <div>
          hey
          <ReviewItem
            question={cards[count].question}
            answer={cards[count].answer}
            onSuccess={this.onSuccess}
          />
        </div>
      );
    }
  };
  render() {
    // let { count } = this.state;
    // // shouldn't be loading the entire data. Just, specific items
    // let cardsInDeck = cards.filter(obj => obj.deck === deckID);
    // const numCards = cardsInDeck.length;
    // let cardContent;
    // console.log(numCards);
    // let i = 0;

    // let succeed = false;
    // // Traverse cards((
    // for (let i = 0; i < numCards; i++) {
    //   cardContent = (
    //     <ReviewItem
    //       question={cardsInDeck[i].question}
    //       answer={cardsInDeck[i].answer}
    //       onSuccess={this.onSuccess}
    //     />
    //   );
    // }
    return <div>{this.renderCards()}</div>;
  }
}
