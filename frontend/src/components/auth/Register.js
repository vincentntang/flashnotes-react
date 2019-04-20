import React, { Component } from "react";
import styled from "styled-components";
import TextFieldGroup from "../common/TextFieldGroup";

const StyledRegister = styled.section`
  text-align: center;
`;
const StyledHeader = styled.div``;
const StyledForm = styled.div``;

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
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
      <StyledRegister>
        <StyledHeader>
          <h1>Register</h1>
        </StyledHeader>
        <StyledForm>
          <TextFieldGroup
            placeholder="Name"
            name="name"
            type="name"
            value={this.state.name}
            onChange={this.onChange}
            error={errors.name}
          />
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
          <TextFieldGroup
            placeholder="Confirm Password"
            name="password2"
            type="password"
            value={this.state.password2}
            onChange={this.onChange}
            error={errors.password2}
          />
          <input type="submit" />
        </StyledForm>
      </StyledRegister>
    );
  }
}

export default Register;
