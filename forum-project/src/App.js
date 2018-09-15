import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import PostForm from './components/PostForm';

//redux
import { Provider } from 'react-redux';
import store from './store';


class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to my sample Forum</h1>
            <p> Please feel free to leave a post</p>
          </header>
          <PostForm />
          <hr/>
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
