import React, { Component } from "react";
import styled from "styled-components";
import TextFieldGroup from "../common/TextFieldGroup";
import axios from "axios";

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
      .get("https://sao-api.herokuapp.com/api/submissions?page=1&per_page=12", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
          // 'Access-Control-Allow-Origin':'*'
        }
      })
      .then(res => {
        const submissions = res.data.submissions;
        this.setState({ submissions: submissions });
      })
      .catch(function(error) {
        console.log(error);
      });
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
