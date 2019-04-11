import React, { Component } from "react";
import styled from "styled-components";
import TextFieldGroup from "../common/TextFieldGroup";

const StyledLogin = styled.section`
  text-align: center;
`;
const StyledHeader = styled.div``;
const StyledForm = styled.form``;

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };
  onChange = e => {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  };
  render() {
    const { errors } = this.state;
    return (
      <StyledLogin>
        <StyledHeader>
          <h1>Login</h1>
        </StyledHeader>
        <StyledForm>
          <TextFieldGroup
            placeholder="Email Address"
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.onChange}
            error={errors.email}
          />
          <TextFieldGroup
            placeholder="Password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.onChange}
            error={errors.password}
          />
          <input type="submit" />
        </StyledForm>
      </StyledLogin>
    );
  }
}

export default Login;
