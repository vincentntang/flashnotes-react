import React, { Component } from "react";
import Spinner from "../common/Spinner";
import ReviewItem from "./ReviewItem";
/**
 * Review containes all the logic for reviewing cards
 * Has card and state
 */
export default class Review extends Component {
  state = {
    count: 0,
    finished: false,
    cards: [] // filtered data from props
  };
  componentDidMount() {
    // Pass props to state (placeholder for axios call)
    this.setState({
      cards: this.props.cards.filter(obj => {
        console.log("I ran!");
        return obj.deck === this.props.deckID;
      })
    });
  }
  componentDidUpdate(prevProps, prevState) {
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
