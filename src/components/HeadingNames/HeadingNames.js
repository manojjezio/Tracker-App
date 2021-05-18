import React from 'react';
import './HeadingNames.css';

export default function Header(){
    return(
        <div className="Header">
            <p className="information">Country</p>
            <p className="information">Cases</p>
            <p className="information">Deaths</p>
            <p className="information">Recovered</p>
        </div>
    )
}