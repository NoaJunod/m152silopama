import React, { Component } from 'react';
import '../index.css';
import NavBar from './NavBar';
import Header from './Header';

class LandingPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="page">
                <Header/>
                <NavBar/>
                <h1>LandingPage</h1>
            </div>
         );
    }
}
 
export default LandingPage;