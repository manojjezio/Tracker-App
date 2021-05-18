import React from 'react';
import './CountryDetails.css';
import ReactCountryFlag from 'react-country-flag';

export default function CountryDetails(props){
    return(
        <div className="countryDetails">
            <div className="country-icon">
                <ReactCountryFlag 
                    className="country-flag"
                    countryCode={props.CountryCode}
                    svg
                    style={{
                        width: "3.5em",
                        height: "3.5em"
                    }}
                    title={props.CountryCode}
                />    

            </div>

            <div className="cases-details">
                <div className="cases-box Cases">
                    <a href="#">{props.totalCases}</a>
                    <p className="yesterday">Last 24 Hours: <strong>{props.newCases}</strong></p>
                </div>

                <div className="cases-box Deaths">
                    <a href="#">{props.totalDeaths}</a>
                    <p className="yesterday">Last 24 Hours: <strong>{props.newDeaths}</strong></p>
                </div>

                <div className="cases-box Recovered">
                    <a href="#">{props.totalRecovered}</a>
                    <p className="yesterday">Last 24 Hours: <strong>{props.newRecovered}</strong></p>
                </div>
            </div>
        </div>
    )
}