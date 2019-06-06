import React, { Component } from 'react';
import './App.css';
import withAuthenticate from './components/Authentication/Authentication';
import PostsPage from './components/PostContainer/PostsPage';
import Login from './components/Login/Login';


const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

class App extends Component {
  constructor(){
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

export default App;