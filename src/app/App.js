import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import PostsFeed from './components/PostsFeed/PostsFeed';
import SinglePost from './components/PostsFeed/SinglePost';
import MyProfile from './components/MyProfile/MyProfile'
import PeoplePage from './components/PeoplePage';
import RegisterPage from './components/Register';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main className='container'>
          <Switch>
            <Route path='/register' component={RegisterPage} />
            <Route path='/people' component={PeoplePage} />
            <Route path='/profile/:id' component={MyProfile} />
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
