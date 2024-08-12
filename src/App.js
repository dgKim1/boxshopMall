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

function App() {
  const [authenticate,setAuthenticate] = useState(false);
  return (
    <div>
      <Navbar class="menu-area" authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path="/" element={<ProductAll/>}/>
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />}/>
      </Routes>
    
    </div>
  );
}

export default App;
