import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo'

import apolloClient from './services/Apollo'

import './App.css';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <div className="App">
          <TodoList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
