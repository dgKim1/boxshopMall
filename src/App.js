import logo from './logo.svg';
import './App.css';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import { Route, Routes } from 'react-router-dom';
import Login from './page/Login';
import Navbar from './components/Navbar';
import { useState } from 'react';
import PrivateRoute from './Routes/PrivateRoute';
import Logout from './page/Logout';
import ProductFilter from './page/ProductFilter';
import YokoFooter from './components/YokoFooter';

function App() {
  const [authenticate,setAuthenticate] = useState(false);
  const [isSlide,setIsSlide] = useState(true);
  return (
    <>
    <head>
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
    </head>
    <div className='h-full'>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Chelsea+Market&family=Lilita+One&family=Luckiest+Guy&family=Outfit:wght@100..900&display=swap" rel="stylesheet"></link>
      <Navbar class="menu-area" authenticate={authenticate} setAuthenticate={setAuthenticate} isSlide={isSlide} setIsSlide={setIsSlide}/>
      <Routes>
        <Route path="/" element={<ProductAll isSlide={isSlide} setIsSlide={setIsSlide}/>}/>
        <Route path="/filter" element={<ProductFilter />}/>
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />}/>
      </Routes>
      <YokoFooter/>

    </div>
    </>
  );
}

export default App;
