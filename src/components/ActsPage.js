import React, { Component } from 'react';
import NavBar from './NavBar';
import Header from './Header';
import ActsList from './ActsList';

class ActsPage extends Component {
    state = {  }
    render() { 
        return (
            <div className="page">
                <Header/>
                <NavBar/> 
                <h1>Acts</h1>
                <ActsList/>
            </div>
         );
    }
}
 
export default ActsPage;