import React, { Component } from "react";
import styled from "styled-components";
import MainData from "../data/MainData";
import Spinner from "../common/Spinner";
// import Cards from "../cards/Cards";

const LandingStyles = styled.div`
  background-color: ${props => props.theme.offWhite}
  text-align: center;
  padding: 100px;
`;

export default class Landing extends Component {
  render() {
    return (
      <div className="container">
        <LandingStyles>Hey World</LandingStyles>
      </div>
    );
  }
}
