import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import Cart  from './Component/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header />
          <Routes className='App'>
                  <Route   exact path='/'    element={<Home />} />
                  <Route  exact path='/cart' element={<Cart />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
