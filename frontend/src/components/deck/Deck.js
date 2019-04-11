import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MainData from "../data/MainData";
import Spinner from "../common/Spinner";
import Review from "./Review";

const DeckStyles = styled.div`
  // display: flex;
  // justify-content: center;
`;
const DeckBody = styled.div`
  border: 1px solid;
  text-align: center;
  padding: 40px;
`;

export default class Deck extends Component {
  state = {
    decks: []
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ decks: MainData.decks });
    }, 1000);
  }
  onReviewCards = () => {
    // this.setState({ toggled: !this.state.toggled });
    // Push to review
    this.props.history.push(`/decks/${this.props.match.params.handle}/review`);
  };

  render() {
    let deckContent = "";

    if (this.state.decks.length === 0) {
      deckContent = <Spinner />;
    } else {
      deckContent = (
        <div>
          <Link to="/decks">Back to Decks</Link>
          <div> {this.props.match.params.handle}</div>
          <button onClick={this.onReviewCards}>Review Cards</button>
          <button>
            <Link to={`/decks/${this.props.match.params.handle}/edit`}>
              Edit Cards
            </Link>
          </button>
          <button>
            <Link to={`/decks/${this.props.match.params.handle}/add`}>
              Add Cards
            </Link>
          </button>
        </div>
      );
    }
    return (
      <DeckStyles>
        <DeckBody>{deckContent}</DeckBody>
      </DeckStyles>
    );
  }
}
