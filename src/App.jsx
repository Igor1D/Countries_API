import Home from './components/Home'
import Country from './components/Country'
import Layout from './components/Layout'
import NotFound from './components/NotFound'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { useThemeContext } from './Utils/ThemeProvider'



function App() {
  const {darkTheme, setDarkTheme} = useThemeContext()
  console.log(darkTheme)

 
  
  return (
    <div className= {darkTheme ? "app-component" : "app-component light-theme"}>
    <>
      <Layout >
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/country/:cca3" element={<Country/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Layout>
    </>
    </div>
  )
}

export default App
