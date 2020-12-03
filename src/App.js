import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ErrMsg: "",
      isInitialState: true,
      name: "",
      password: "",
      confirmedPassword: "",
    };
  }

  onChangeHandler(e) {
    switch (e.target.name) {
      case "username": {
        if (e.target.value.length < 8) {
          this.setState({
            ErrMsg: "Error: username must be 8 characters and above",
          });
        } else {
          this.setState({
            ErrMsg: "",
          });
        }
        break;
      }
      case "password": {
        if (e.target.value.length < 8) {
          this.setState({
            ErrMsg: "Error: password must be 8 characters and above",
            password: e.target.value,
          });
        } else {
          this.setState({
            ErrMsg: "",
            password: e.target.value,
          });
        }
        break;
      }
      case "confirmedPassword": {
        if (e.target.value !== this.state.password) {
          this.setState({
            ErrMsg: "confirm password should be equal to the password",
            isInitialState: false,
          });
        } else {
          this.setState({
            ErrMsg: "",
            isInitialState: false,
          });
        }
        break;
      }
      default: {
        return;
      }
    }
  }
  render() {
    //     code a simple registration component with email, password, confirm password register button
    // rules:
    // username must be 8 characters and above
    // password should be 8 characters and above
    // confirm password should be equal to the password
    // register button must only be enabled if all rules are satisfied
    // error msg div at the top, show error msgs if any
    return (
      <div>
        <div className="err-msg">{this.state.ErrMsg}</div>
        <form>
          <span>username: </span>
          <input
            name="username"
            id="username"
            minLength={8}
            onChange={(e) => this.onChangeHandler(e)}
          />
          <br />
          <span>password:</span>
          <input
            // type="password"
            name="password"
            id="password"
            minLength={8}
            onChange={(e) => this.onChangeHandler(e)}
            autoComplete="new-password"
          />
          <br />
          <span>confirm password:</span>
          <input
            // type="password"
            name="confirmedPassword"
            id="confirmedPassword"
            minLength={8}
            onChange={(e) => this.onChangeHandler(e)}
            autoComplete="new-password"
          />
          <br />
          <input
            type="button"
            value="register"
            disabled={
              this.state.ErrMsg.length > 0
                ? true
                : this.state.isInitialState
                ? true
                : false
            }
          />
        </form>
      </div>
    );
  }
}
export default App;
