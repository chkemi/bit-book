import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import PostsFeed from './components/PostsFeed/PostsFeed';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Switch>
            <Route path='/' component={PostsFeed} />
          </Switch>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
