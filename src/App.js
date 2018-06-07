import React, { Component } from 'react';
import './App.css';
import NewsList from './news/news-list';

class App extends Component {
  render(){
    return (
      <div class="app">
        <h1>Marcels version of hackernews</h1>
        <NewsList />
      </div>
    )
  }
}

export default App;
