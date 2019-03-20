import React, { Component } from 'react';
import Header from './Header';
import NavBar from './NavBar';
import denzel_img from '../resources/denzel.jpg';

class DenzelCurryPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="artist">
            <Header/>
            <NavBar/>
                <h1>Denzel Curry</h1>
                <img className="artistImage" src={denzel_img} alt="Denzel Curry"/>
            </div>
         );
    }
}
 
export default DenzelCurryPage;