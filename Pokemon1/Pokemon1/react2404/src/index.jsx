import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './assets/styles.css';

import Header from './components/Header'

const list = [
  {"url":"https:\/\/pokeapi.co\/api\/v2\/pokemon\/1\/","name":"bulbasaur"},
  {"url":"https:\/\/pokeapi.co\/api\/v2\/pokemon\/2\/","name":"ivysaur"}
];

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header size="maxi" color="red">
          <span>Any text 432</span>
        </Header>
        <div>Hello world</div>
        <div>Hello world2</div>

      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('main'));
