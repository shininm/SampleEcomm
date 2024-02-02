import './App.css'
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Cart from './pages/cart/Cart'
import Shop from './pages/shop/Shop'
import Login from './pages/login/Login'
import ShopContextProvider from './context/ShopContext'
import { useState } from 'react';
function App() {
  const [token, setToken] = useState();
  if(!token) {
    return <Login setToken={setToken} />
  }

  return (    
    <div className='App'>
    <ShopContextProvider>
      <Router>
        <Navbar></Navbar>        
        <Routes>
          <Route path='/' element={<Shop></Shop>}/>
          <Route path='/cart' element={<Cart></Cart>}></Route>          
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App
