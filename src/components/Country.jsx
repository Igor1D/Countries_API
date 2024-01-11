import React from "react";
import Button from "@mui/material/Button";
import ButtonBase from "@mui/material/ButtonBase";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { UseCountriesContext } from "../Utils/CountriesContextProvider";
import { useNavigate } from "react-router-dom";
import "./Country.css";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect } from "react";

function Country() {
  const { countries, setCountries } = UseCountriesContext();

  let { cca3 } = useParams();
  console.log(cca3)

  function formatNumber(number) {
    return Intl.NumberFormat("en-US").format(number);
  }




let filteredCountry = countries.filter((country) => country.cca3 == cca3.toUpperCase())[0];



let currencies = []
let languages = []
   
  if (filteredCountry) {
    for (let key in filteredCountry.currencies) {
      currencies.push(filteredCountry.currencies[key].name)
    }
    for (let key in filteredCountry.languages) {
      languages.push(filteredCountry.languages[key])
    }
  }

 
 



  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  console.log(filteredCountry);

useEffect(()=>{

}, [])

  return (
    <>
      {filteredCountry && (
        <div className="container">
          <div className="back-button">
            <Button
              variant="outlined"
              style={{ backgroundColor: "#2B3844", color: "white" }}
              onClick={handleClick}
              startIcon={<ArrowBackIcon />}
            >
              Back
            </Button>
          </div>
          <div className="content">
            <div className="flag-container">
              <img src={filteredCountry.flags.svg} alt="Belgium flag" />
            </div>
            <div className="info-container">
              <h2>{filteredCountry.name.common}</h2>
              <div className="info-columns-div">
                <div className="left-info-column">
                  <ul>
                    <li>Native Name: {filteredCountry.name.common}</li>
                    <li>
                      Population: {formatNumber(filteredCountry.population)}
                    </li>
                    <li>Region: {filteredCountry.region}</li>
                    <li>Sub Region: {filteredCountry.subregion}</li>
                    <li>Capital: {filteredCountry.capital}</li>
                  </ul>
                </div>
                <div className="right-info-column">
                  <ul>
                    <li>Top Level Domain: {filteredCountry.tld}</li>
                    <li>Currencies: {currencies.map((currency)=> <span key={currency}> {currency} </span> )}</li>
                    <li>Languages: {languages.map((language)=> <span key={language}> {language} </span> )}</li>
                  </ul>
                </div>
              </div>

              {/* <p className="border-countries">Border Countries: {filteredCountry.borders.join(', ')}</p> */}
              { filteredCountry.borders ? <p className="border-countries">
                Border Countries:{" "}
               {filteredCountry.borders.map((borderCountry) => (
                  // <Button
                  //   variant="contained"
                  //   style={{ marginRight: '10px',backgroundColor: "#2B3844", color: "white" }}
                  //   key={borderCountry}

                  // > 
                  <Link to={`/country/${borderCountry}`} className="border-country" style={{ marginRight: '10px',backgroundColor: "#2B3844", color: "white" }}>{borderCountry} </Link>
                  // </Button>
                ))} 
              </p> : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Country;

