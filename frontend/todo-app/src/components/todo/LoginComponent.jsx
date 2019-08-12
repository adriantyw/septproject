import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import AuthenticationService from "./AuthenticationService.js";
import { Link } from 'react-router-dom'


class LoginComponent extends Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      username: "feelsbadman",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: false
    };
    // this.handleUsernameChange = this.handleUsernameChange.bind(this)
    // this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  handleChange(event)
  {
    //console.log(this.state);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // handleUsernameChange(event) {
  //     console.log(event.target.name);
  //     this.setState(
  //         {
  //             [event.target.name]
  //               :event.target.value
  //         }
  //     )
  // }

  // handlePasswordChange(event) {
  //     console.log(event.target.value);
  //     this.setState({password:event.target.value})
  // }

  loginClicked()
  {
    //sept,dummy
    // if(this.state.username==='sept' && this.state.password==='dummy'){
    //     AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
    //     this.props.history.push(`/welcome/${this.state.username}`)
    //     //this.setState({showSuccessMessage:true})
    //     //this.setState({hasLoginFailed:false})
    // }
    // else {
    //     this.setState({showSuccessMessage:false})
    //     this.setState({hasLoginFailed:true})
    // }

    // AuthenticationService
    // .executeBasicAuthenticationService(this.state.username, this.state.password)
    // .then(() => {
    //     AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
    //     this.props.history.push(`/welcome/${this.state.username}`)
    // }).catch( () =>{
    //     this.setState({showSuccessMessage:false})
    //     this.setState({hasLoginFailed:true})
    // })
    AuthenticationService.executeJwtAuthenticationService(
      this.state.username,
      this.state.password
    )
      .then(response =>
      {
        AuthenticationService.registerSuccessfulLoginForJwt(
          this.state.username,
          response.data.token
        );
        this.props.history.push(`/welcome/${this.state.username}`);
      })
      .catch(() =>
      {
        this.setState({ showSuccessMessage: false });
        this.setState({ hasLoginFailed: true });
      });
  }

  render()
  {
    return (
      <MDBContainer>
        <h1>Login</h1>
        <MDBRow>
          <MDBCol md="7">
            <form>
              {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
              {this.state.hasLoginFailed && (
                <div className="alert alert-warning">
                  Invalid Username or Password
            </div>
              )}
              {this.state.showSuccessMessage && <div>Login Sucessful</div>}
              {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
              User Name:{" "}
              <div className="grey-text">
                <MDBInput
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
                Password:{" "}
                <MDBInput
                  icon="lock"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              <div className="text-center">
                <MDBBtn onClick={this.loginClicked}>
                  Login
          </MDBBtn>
                <Link className="nav-link" to="/register">
                  Register
          </Link>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default LoginComponent;
