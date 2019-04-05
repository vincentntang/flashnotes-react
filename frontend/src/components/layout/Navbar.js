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
      <NavbarStyles className="container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Register">Register</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </NavbarStyles>
    );
  }
}
