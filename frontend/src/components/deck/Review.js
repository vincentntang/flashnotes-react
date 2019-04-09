import React, { Component } from "react";
import Spinner from "../common/Spinner";
import ReviewItem from "./ReviewItem";
/**
 * Review containes all the logic for handling cards
 * Has card and state
 */

// STATES

export default class Review extends Component {
  state = {
    count: 0,
    finished: false,
    cards: [] // filtered data from props
  };
  componentDidMount() {
    // Normally, you would axios call only the data you need
    // but in this case I filtered out all the props to the deck I want
    // axios dispatch to GET data
    // ASYNC
    this.setState({
      cards: this.props.cards.filter(obj => {
        console.log("I ran!");
        return obj.deck === this.props.deckID;
      })
    });
  }
  componentDidUpdate() {
    // reserved when I need to push back the result,
    // or dispatch an action to POST back data
  }
  onSuccess = () => {
    // okay putting the logic here for rerendering makes more sense
    this.setState({ count: this.state.count + 1 });
    this.renderCards();
  };
  // showCard = (cards, count) => {
  //   return (
  //     <div>
  //       hey
  //       <ReviewItem
  //         question={cards[count].question}
  //         answer={cards[count].answer}
  //         onSuccess={this.onSuccess}
  //       />
  //     </div>
  //   );
  // };
  start = () => {
    // Put top level logic here
  };
  renderCards = () => {
    const { deckID } = this.props;
    let { count, finished, cards } = this.state;

    return (
      <ReviewItem
        question={cards[this.state.count].question}
        answer={cards[this.state.count].answer}
        onSuccess={this.onSuccess}
      />
    );
    // Iterate, use recursion
    // if (count < cards.length) {
    //   // Define a seperate function so logic is easier
    //   // this.showCard(cards, count);
    //   return (
    //     <div>
    //       hey
    //       <ReviewItem
    //         question={cards[count].question}
    //         answer={cards[count].answer}
    //         onSuccess={this.onSuccess}
    //       />
    //     </div>
    //   );
    // }
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
    // Pause execution until cards loaded in
    let deckContent;
    if (this.state.cards.length === 0) {
      deckContent = <Spinner />;
    } else {
      deckContent = this.renderCards();
    }
    return <div>{deckContent}</div>;
  }
}
