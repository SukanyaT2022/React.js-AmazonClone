import Navbar from './Component/Navbar';
import './App.css';
import Home from './Home';
// import Navbar from './Component/Navbar';
import Order from './Order';
import Cart from './Cart';
import Account from './Account';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
              <Route path="/" element={<Navbar/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/order" element={<Order/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/account" element={<Account/>}/>
        </Routes>
      </Router>  
      <Home/>
    </div>
  );
}

export default App;
