import React, { Component } from "react";
import styled from "styled-components";

const CardStyles = styled.div`
  text-align: center;
  padding: 50px;
  border: 1px solid red;
  flex: 1;
  background-color: ${props => props.theme.offWhite};
  p {
    color: ${props => (props.toggled ? "red" : "green")};
  }
`;

/**
 * Define a class in card
 * It needs to have a local state detailing whether it's toggled or not
 * Other way is building the logic in Card.js
 * In props, we pass ID,question,answer
 * Also, card will be moved to common as it will be used elsewhere
 */
class Card extends Component {
  state = {
    toggled: false
  };
  onClick = () => {
    this.setState({ toggled: !this.state.toggled });
  };
  render() {
    const cardContent = "";
    return (
      <CardStyles toggled={this.state.toggled}>
        {this.state.toggled ? (
          <p>{this.props.card.answer}</p>
        ) : (
          <p>{this.props.card.question}</p>
        )}
        <button onClick={this.onClick}>Toggle Card</button>
      </CardStyles>
    );
  }
}

export default Card;
