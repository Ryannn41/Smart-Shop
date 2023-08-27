import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/navbar';
import { Cart } from './Pages/cart/cart';
import { Shop } from './Pages/shop/shop';
import { ShopContextProvider } from './context/shop-context';
import { Footer } from "./components/Footer"

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
      <Footer />
    </div>

  );
}

export default App;
