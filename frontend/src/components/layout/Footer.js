import React from "react";
import styled, { withTheme } from "styled-components";

const FooterStyles = styled.footer`
  background-color: ${props => props.theme.grey}
  text-align: center;
  padding: 50px;
`;

const Footer = props => {
  return (
    <FooterStyles className="container">
      <div>Flash Notes by Vincent Tang</div>
    </FooterStyles>
  );
};

export default withTheme(Footer);
