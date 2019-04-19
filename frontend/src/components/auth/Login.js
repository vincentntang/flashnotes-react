import React, { Component } from "react";
import styled from "styled-components";
import TextFieldGroup from "../common/TextFieldGroup";
import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../../utils/setAuthToken";

const StyledLogin = styled.section`
  text-align: center;
`;
const StyledHeader = styled.div``;
const StyledForm = styled.form``;

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {},
    auth: {}
  };

  componentDidMount() {}
  onSubmit = e => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post("http://localhost:5000/api/users/login", user)
      .then(res => {
        console.log("I ran");
        // Save to localStorage
        const { token } = res.data;
        // Set token to ls
        localStorage.setItem("jwtToken", token);
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        this.setState({ auth: decoded });
      })
      .catch(err => console.log(err));
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { errors } = this.state;
    return (
      <StyledLogin>
        <StyledHeader>
          <h1>Login</h1>
        </StyledHeader>
        <StyledForm onSubmit={this.onSubmit}>
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
