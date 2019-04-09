import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import PostsFeed from './components/PostsFeed/PostsFeed';
import SinglePost from './components/PostsFeed/SinglePost';
import MyProfile from './components/PostsFeed/MyProfile'
import PeopePage from './components/PeoplePage';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main className='container'>
          <Switch>
            <Route path='/people' component={PeopePage} />
            <Route path='/profile' component={MyProfile} />
            <Route path='/feeds/:id' component={SinglePost} />
            <Route path='/' component={PostsFeed} />
          </Switch>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
