import Home from './components/Home'
import Country from './components/Country'
import Layout from './components/Layout'
import NotFound from './components/NotFound'
import './App.css'
import { Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <>
      <Layout >
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/country/:cca3" element={<Country/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Layout>
    </>
  )
}

export default App
