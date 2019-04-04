import React from "react";
import styled, { withTheme } from "styled-components";

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.grey}
  text-align: center;
  padding: 50px;
`;

const Footer = props => {
  return (
    <FooterWrapper>
      <div>Flash Notes by Vincent Tang</div>
    </FooterWrapper>
  );
};

export default withTheme(Footer);
