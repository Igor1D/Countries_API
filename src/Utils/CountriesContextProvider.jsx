import React from 'react'
import { createContext, useContext, useEffect, useState } from 'react'

const CountriesContext = createContext()

function CountriesContextProvider({children}) {
const [countries, setCountries] = useState([])

useEffect(()=>{

  async function getCountries() {

    const results = await fetch('https://restcountries.com/v3.1/all')
    // console.log(countries)
    const data = await results.json()
    // console.log(data)
    setCountries(data)
  }
  
  getCountries()

},[])

useEffect(()=>{
// console.log(countries, 'useEffect here')

},[countries])

  return (
   <CountriesContext.Provider value={{countries, setCountries}}>
   {children}
   </CountriesContext.Provider>
  )
}

export default CountriesContextProvider

export const UseCountriesContext = () => useContext(CountriesContext) //custom hook to use it on other comps