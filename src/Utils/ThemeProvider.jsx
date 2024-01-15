import React from 'react'
import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

function ThemeProvider({children}) {

  let localDarkTheme = JSON.parse(localStorage.getItem('darkTheme'))

  let theme = localDarkTheme == false ? false : true
  
  const [darkTheme, setDarkTheme] = useState(theme)
  
  useEffect(()=>{

    localStorage.setItem('darkTheme', darkTheme.toString())

  }, [darkTheme])
  
    return (
    <ThemeContext.Provider value={{darkTheme, setDarkTheme}}>
        {children}
    </ThemeContext.Provider>

  )
}

export default ThemeProvider

export const useThemeContext = () => useContext(ThemeContext)