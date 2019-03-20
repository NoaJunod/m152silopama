import React, { Component } from 'react';
import '../index.css';
import logo from '../resources/logo.jpg';
import { Link } from '@material-ui/core';

class Header extends Component {
    state = {  }
    render() { 
        return (
            <div className="header">
                <a href={"/"}><img className="logo" src={logo}/></a>
            </div>
         );
    }
}
 
export default Header;