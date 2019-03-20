import React, { Component } from 'react';
import Header from './Header';
import NavBar from './NavBar';
import kendrick_img from '../resources/kendrick.jpg';

class KendrickLamarPage extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="artist">
        <Header/>
        <NavBar/>
            <h1>Kendrick Lamar</h1>
            <img className="artistImage" src={kendrick_img} alt="Kendrick Lamar"/>
        </div> 
        );
    }
}
 
export default KendrickLamarPage;