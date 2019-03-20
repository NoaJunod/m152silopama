import React, { Component } from 'react';
import { Link } from '@material-ui/core';
import Header from './Header';
import NavBar from './NavBar';

class AboutPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="page">
            <Header/>
            <NavBar/>
                This is the AboutPage.<br/>
                Licenses: <br/>
                <Link href="https://www.flickr.com/photos/jamillakay/5493728746/">Kendrick Lamar</Link> by jamillakay/<Link href="https://creativecommons.org/licenses/by/2.0/de/">CC BY 2.0</Link><br/>
                <Link href="https://www.flickr.com/photos/thecomeupshow/36470475655/">Denzel Curry</Link> by thecomeupshow/<Link href="https://creativecommons.org/licenses/by/2.0/de/">CC BY 2.0</Link><br/>
            </div>
         );
    }
}
 
export default AboutPage;