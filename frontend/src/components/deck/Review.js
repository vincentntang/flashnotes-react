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
  componentDidUpdate(prevProps, prevState) {
    // reserved when I need to push back the result,
    // or dispatch an action to POST back data

    // moved onsuccess to ComponentDidUpdate for awaiting async change
    if (this.state.count !== prevState.count) {
    }
  }
  onToggle = () => {};
  onSuccess = () => {
    if (this.state.count == this.state.cards.length - 1) {
      this.setState({
        finished: true
      });
    } else {
      this.setState({
        count: this.state.count + 1
      });
    }
  };

  renderCards = () => {
    const { deckID } = this.props;
    let { count, finished, cards } = this.state;

    let cardContent;
    if (finished) {
      cardContent = <div>Finished</div>;
    } else {
      cardContent = (
        <ReviewItem
          question={cards[count].question}
          answer={cards[count].answer}
          onSuccess={this.onSuccess}
          // onToggle={this.onToggle}
          // toggled={false}
        />
      );
    }
    return cardContent;
  };
  render() {
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
