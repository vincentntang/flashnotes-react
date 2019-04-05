import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarStyles = styled.nav`
  background-color: ${props => props.theme.grey}
  text-align: center;
  padding: 30px;
`;

export default class Navbar extends Component {
  render() {
    return (
      <NavbarStyles className="top">
        <h1>Flash Notes</h1>
      </NavbarStyles>
    );
  }
}
