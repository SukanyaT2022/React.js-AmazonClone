import './styles/App.css';
import Home from './Pages/Home';
import Order from './Pages/Order';
import Cart from './Pages/Cart';
import Account from './Pages/Account';
// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Routes, Route } from "react-router-dom"
import Footer from './Component/Footer';
import Navbar2 from './Component/Navbar2';



function App() {
  return (
    <div className="App">
<Navbar2/>

        <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/order" element={<Order/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/account" element={<Account/>}/>
        </Routes>
 <Footer/>
    </div>
  );
}

export default App;
