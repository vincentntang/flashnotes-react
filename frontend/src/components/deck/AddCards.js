import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import MainData from "../data/MainData";
import TextFieldGroup from "../common/TextFieldGroup";

const StyledAddCards = styled.div`
  text-align: center;
`;
const StyledForm = styled.form``;
const StyledHeader = styled.div``;

class AddCards extends Component {
  state = {
    question: "",
    answer: "",
    errors: ""
  };
  componentDidMount() {}

  onChange = e => {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  };
  onSubmit = e => {};
  render() {
    const { errors } = this.state;
    return (
      <StyledAddCards>
        <StyledHeader>
          <Link to={`/decks/${this.props.match.params.handle}`}>
            Back to deck
          </Link>
        </StyledHeader>
        <StyledForm>
          <TextFieldGroup
            placeholder="Question"
            name="question"
            type="text"
            value={this.state.question}
            onChange={this.onChange}
            error={errors.question}
          />
          <TextFieldGroup
            placeholder="Answer"
            name="answer"
            type="text"
            value={this.state.answer}
            onChange={this.onChange}
            error={errors.answer}
          />
          <input type="submit" />
        </StyledForm>
      </StyledAddCards>
    );
  }
}

export default AddCards;
