import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import TicketsPage from './components/TicketsPage';
import ActsPage from './components/ActsPage';
import EminemPage from './components/EminemPage';
import DenzelCurryPage from './components/DenzelCurryPage';
import KendrickLamarPage from './components/KendrickLamarPage';
import AboutPage from './components/AboutPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/ActsPage" component={ActsPage}/>
          <Route path="/TicketsPage" component={TicketsPage}/>
          <Route path="/EminemPage" component={EminemPage}/>
          <Route path="/KendrickLamarPage" component={KendrickLamarPage}/>
          <Route path="/DenzelCurryPage" component={DenzelCurryPage}/>
          <Route path="/AboutPage" component={AboutPage}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
