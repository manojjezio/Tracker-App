import React from 'react';
import './Worldstats.css';

const Worldstats = props => {
    return(
        <div className="box">
          <h1 className="totalNumbers">{props.total}</h1>
          <p className="about">{props.about}</p>

        </div>

    )
    
}
export default Worldstats;