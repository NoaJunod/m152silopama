import React, { Component } from 'react';
import Header from './Header';
import NavBar from './NavBar';
import eminem_img from '../resources/eminem.jpg';

class EminemPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="artist">
            <Header/>
            <NavBar/>
                <h1>Eminem</h1>
                <img className="artistImage" src={eminem_img} alt="Eminem"/>
            </div>
         );
    }
}
 
export default EminemPage;