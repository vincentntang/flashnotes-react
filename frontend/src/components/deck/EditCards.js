import React, { Component } from "react";
import styled from "styled-components";
import MainData from "../data/MainData";
import EditCardItems from "./EditCardItems";
/**
 * List every card here related to a deck and option to quickly edit
 */

const StyledHeader = styled.div`
  display: flex;
  > div {
    width: calc(50% - 25px);
  }
  span {
    width: 25px;
  }
`;
class EditCards extends Component {
  state = {
    cards: []
  };
  componentDidMount() {
    this.setState({
      cards: MainData.cards.filter(obj => {
        return obj.deck === this.props.match.params.handle;
      })
    });
  }
  render() {
    return (
      <div>
        <StyledHeader>
          <div>Question</div>
          <div>Answer</div>
          <span />
          <span />
        </StyledHeader>
        {this.state.cards.map(card => {
          return (
            <EditCardItems
              key={card.id}
              question={card.question}
              answer={card.answer}
            />
          );
        })}
      </div>
    );
  }
}

export default EditCards;
