import React, { Component } from "react";
import styled from "styled-components";

const CardStyles = styled.div`
  text-align: center;
  padding: 50px;
  border: 1px solid red;
  flex: 1;
  background-color: ${props => props.theme.offWhite};
  p {
    color: ${props => (props.toggled ? "blue" : "green")};
  }
`;

/**
 * Define a class in card
 * It needs to have a local state detailing whether it's toggled or not
 * Other way is building the logic in Card.js
 * In props, we pass ID,question,answer
 * Also, card will be moved to common as it will be used elsewhere
 */
class ReviewItem extends Component {
  state = {
    toggled: false
  };
  onToggle = () => {
    this.setState({ toggled: !this.state.toggled });
  };
  onFeedback = () => {
    this.onToggle();
    this.props.onSuccess();
  };
  render() {
    return (
      <CardStyles toggled={this.state.toggled}>
        {this.state.toggled ? (
          <div>
            <p>{this.props.answer}</p>
            <button onClick={this.onFeedback}>Easy</button>
            <button onClick={this.onFeedback}>Hard</button>
          </div>
        ) : (
          <p>{this.props.question}</p>
        )}
        <button onClick={this.onToggle}>Toggle Card</button>
      </CardStyles>
    );
  }
}

export default ReviewItem;
