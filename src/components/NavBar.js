import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import { MenuList } from '@material-ui/core';
import '../index.css';

class NavBar extends Component {
    state = {}
    render() {
        return (
            <div className="navbar">
                <MenuList id="simple-menu">
                    <MenuItem component={Link} to="/ActsPage">Acts</MenuItem>
                    <MenuItem component={Link} to="/TicketsPage">Tickets</MenuItem>
                    <MenuItem component={Link} to="/AboutPage">About</MenuItem>
                </MenuList>
            </div>
        );
    }
}

export default NavBar;