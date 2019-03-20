import React, { Component } from 'react';
import NavBar from './NavBar';
import '../index.css';
import Header from './Header';

class TicketPage extends Component {
    state = {  }
    render() { 
        return (
            <div className="page">
            <Header/>
            <NavBar/> 
            Tickets
            </div>
         );
    }
}
 
export default TicketPage;