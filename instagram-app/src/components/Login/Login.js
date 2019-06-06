import React from 'react';
import './Login.css';
import styled from 'styled-components';


const LoginContainer = styled.div`
  width: 400px;
  height: 600px;
  padding-top: 120px;
  text-align: center;
  margin: auto;
  border: 1px solid black;
`;

const LoginLabel = styled.div`
  font-weight: bold;
  line-height: 50px;
`;

const LoginInput = styled.input`
  width: 200px;
`;

const LoginSubmit = styled.button`
  font-size: 1rem;
  border: 1px solid black;
  margin-top: 10px;
`;

//////////////////////////////////////////////

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoginSubmit = e => {
  const user = this.state.username;
  localStorage.setItem('user', user);
  window.location.reload();
};

  render(){
    return(
      <LoginContainer>
        <h1 className="login-title"> Instagram </h1>
        <form>
          <LoginLabel>
            <label> Username: </label><br />
          </LoginLabel>
          <LoginInput
            className="login-input"
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange} /><br />
          <div className="login-label">
          <label> Password: </label><br />
          </div>
          <LoginInput
            className="login-input"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange} /><br />
          <LoginSubmit
            className="login-submit"
            type="subimt"
            onClick={this.handleLoginSubmit}> Submit </LoginSubmit>
        </form>
      </LoginContainer>
    )
  }
}

export default Login;