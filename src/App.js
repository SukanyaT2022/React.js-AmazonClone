import "./styles/App.css";
import Home from "./Pages/Home";
import Order from "./Pages/Order";
import Cart from "./Pages/Cart";
import Account from "./Pages/Account";
// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Footer from "./Component/Footer";
import Navbar2 from "./Component/Navbar2";
import ProductDetail from "./Pages/ProductDetail";
import AllProducts from "./Pages/AllProducts";
import SearchProduct from "./Pages/SearchProduct";
import SliderProductHome from "./Component/SliderProductHome";
import { useState, useEffect } from "react";
import NotFound from "./Component/NotFound";
import { useNavigate } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [length, setLength] = useState(0);
  const [tempLength, setTempLength] = useState(0);

  const [searchClicked, setSearchClicked] = useState(false);
  const navigate = useNavigate();

  const dataHandler = (val) => {
    setData(val);
    setSearchClicked(true);
  };

  useEffect(() => {
    //when begining of user open website ti always empty
    // so we click or no-- if not click  searchClick to preven to notfound page-show home page insted
    if (data.length == 0 && searchClicked) {
      navigate("/notfound");
    }

    if (data.length > 0 && searchClicked) {
      navigate("/searchProduct", { state: { products: data } });
    }
  }, [data]);

  useEffect(()=>{

  },[length])

  // useEffect(() => {
  //   console.log(cart);
  // }, [cart]);

  const cartData = (data) => {
    console.log(data);
      // setData((oldData) => ({ ...oldData, quantity }));

    // return;
    let itemFound =
      cart.length > 0 && cart.filter((item) => item.id == data.id);
    let remaining =
      cart.length > 0 && cart.filter((item) => item.id != data.id);

    if (itemFound.length > 0) {
      // setTempLength(tempLength+1)
      itemFound[0].quantity = itemFound[0].quantity + 1;
      console.log(itemFound);
      setCart([...remaining, itemFound[0]]);
    } else {
      setCart((oldData) => [...oldData, data]);
    }
  };
  //step 2 make function--use to updatedata--data fresh data from cart
  //step 3 on cart.js line22
  const dataCatch = (data) => {
    setCart(data);
  };

  const lengthCounter = (len) => {
    setLength(len+tempLength);
  };

  return (
    <div className="App">
      <Navbar2 onDataHandler={dataHandler} length={length} />
      {/* Conditional rendering */}
      {/* {data.length !==0 &&  <AllProducts data={data}/>} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/order" element={<Order />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              onDataCatch={dataCatch}
              lengthCounter={lengthCounter}
              length={cart.length}
            />
          }
        />
        //step 1 ondatacatch -get data from cart
        <Route path="/account" element={<Account />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/searchProduct" element={<SearchProduct />} />
        <Route
          path="/detail/:id"
          element={<ProductDetail onCartData={cartData} />}
        />
      </Routes>
      {/* <Footer/> */}
      <SliderProductHome />
    </div>
  );
}

export default App;
