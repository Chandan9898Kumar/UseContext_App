import "./App.css";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Cart from "./Component/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {useState} from 'react'
function App() {
  // const [cart, setCart] = useState([])   Removed.

  // Here we are passing this cart and setCart to Home and Cart componenet. we need this cart and setcart
  // only in cart componenet not in Home but we are having to pass it in Home component as well.
  // and in home we have to pass it in singleProduct component.

  // This cart should used in Cart component and cart and setcart should used in SingleProduct
  //Componenet only.

  // So Here we will be using UseContext API. so reomoving cart and setCart from Componnet.

  return (
    <BrowserRouter>
      <Header />
      <Routes className="App">
        {/* <Route   exact path='/'    element={<Home cart={cart} setCart={setCart} />} />
        <Route  exact path='/cart' element={<Cart cart={cart} setCart={setCart} />} /> */}

        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
