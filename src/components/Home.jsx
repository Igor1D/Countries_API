import React, { useState } from "react";
import { useContext} from "react";
import { UseCountriesContext } from "../Utils/CountriesContextProvider";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import { Link } from 'react-router-dom';
import { InputBase } from '@mui/material';


import "./Home.css";

function Home() {
  const { countries, setCountries } = UseCountriesContext(); 
  const [search, setSearch] = useState('')
  const [select, setSelect] = useState("AllRegions")


  let homeCountries;

  if (select == 'AllRegions') {
    homeCountries = countries
    homeCountries = countries.filter((country)=>country.name.common.toLowerCase().includes(search.toLowerCase()))
    
  } else {

    homeCountries = countries.filter((country)=>country.name.common.toLowerCase().includes(search.toLowerCase()) && country.region == select)
  }



  function formatNumber(number) {
    return Intl.NumberFormat("en-US").format(number)
  }

 




  return (
    <>
      <div className="search-filter-div">
        <div className="search-div">
          <TextField 
            onChange={(e)=> setSearch(e.target.value)}
            value={search}
            className="search-text-field-comp"
            InputProps={{
              style: {
                color: "var(--primary-font-color)",
                backgroundColor: "var(--secondary-color)",
              },
            }}
            InputLabelProps={{ style: { color: "var(--primary-font-color)" } }}
            id="outlined-basic"
            variant="outlined"
            label="Search for a country..."
          />
        </div>

        <div className="filter-div">
          <FormControl className="filter-form-comp">
            <InputLabel
              id="demo-simple-select-label"
              style={{ color: "var(--primary-font-color)" }}
            >
              Filter By Region
            </InputLabel>
            <Select
              style={{
                backgroundColor: "var(--secondary-color)",
                color: "var(--primary-font-color)",
              }}
              sx={{
                "& .MuiPopover-paper":{
                  backgroundColor: "black",
                  color: "black"
                }
              }}
              
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={select}
              onChange={(e)=>{setSelect(e.target.value)}}
              label="Filter By Region"

              // onChange={handleChange}
            >
              <MenuItem value={"AllRegions"}>All Regions</MenuItem>
              <MenuItem value={"Africa"}>Africa</MenuItem>
              <MenuItem value={"Americas"}>America</MenuItem>
              <MenuItem value={"Asia"}>Asia</MenuItem>
              <MenuItem value={"Europe"}>Europe</MenuItem>
              <MenuItem value={"Oceania"}>Oceania</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="main-content">
        {homeCountries.map((country, index)=> {
        return <Link to={`/country/${country.cca3}`} className="country-div" key={index}>
          <img src={country.flags.svg} alt="" />
          <h2>{country.name.common}</h2>
          <p>Population: {formatNumber(country.population)}</p>
          <p>Region: {country.region}</p>
          <p>Capital: {country.capital}</p>
          </Link>})}
      </div>
    </>
  );
}

export default Home;



