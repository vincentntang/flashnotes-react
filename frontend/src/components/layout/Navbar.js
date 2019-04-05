import React from "react";
import styled from "styled-components";

const NavbarStyles = styled.header`
  background-color: ${props => props.theme.grey}
  text-align: center;
  padding: 30px;
`;

const Navbar = props => {
  return (
    <NavbarStyles className="top">
      <h1>Flash Notes</h1>
    </NavbarStyles>
  );
};

export default Navbar;
