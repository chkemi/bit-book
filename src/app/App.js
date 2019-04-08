import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <div className="App">
            <h1>Bla</h1>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
