import React, { Component } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

class ActsList extends Component {
    state = {  }
    render() { 
        return (
            <div className="actslist">
                <Link to={"/EminemPage"} className="primaryact">Eminem</Link> <br/>
                <Link to={"/KendrickLamarPage"} className="primaryact">Kendrick Lamar</Link><br/>
                <Link to={"/DenzelCurryPage"} className="secondaryact">Denzel Curry</Link>
            </div>
         );
    }
}
 
export default ActsList;