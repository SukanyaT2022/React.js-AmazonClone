import React, { useEffect, useState } from 'react';
import { initFlowbite } from 'flowbite';
import { Link } from 'react-router-dom';
import logoSnap from '../Image/logoShopSnap.jpg';
import logoonlybag from '../Image/favIcon2.jpg';
import { FaCartShopping } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';
import AllProducts from '../Pages/AllProducts';

const Navbar2 = ({ onDataHandler,length }) => {

  const [data, setData] = useState();
  const [searchItem, setSearchItem] = useState();
  // const [searchData, setSearchData] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    initFlowbite();
  }, []);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((val) => {
        setData(val);
        console.log(val);
      });
  }, []);

  const searchHandler = (e) => {
    let temp = [];

    data.map((item) => {
      // let result = item.title.includes(searchItem);

      let regex = new RegExp(searchItem, 'i');
      let result = item.title.search(regex) !== -1;

      // let result = item.title.search(/searchItem/i);

      // not work - include() function for search-check search box if that letter in there or not-Uppercase and lowercase need to match
      //line 36 37 if use search() donot matter upper case or lower case if match letter is ok
      if (result) {
        temp.push(item);
      }
    });
    onDataHandler(temp);
  };

  const submitData = () => {
    setFlag(true);
  };

  return (
    <div>
      {flag && <AllProducts />}
      <nav class="bg-white border-gray-200 w-full mb-24 ">
        <div class=" flex flex-wrap items-center justify-between  mx-auto p-4 fixed w-full z-10 top-0 left-0 bg-white ">
          <Link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src={logoSnap}
              class="h-20 md:block hidden " //this logo show for computer ipad except phone
              alt="Logo with snapshot"
            />
            <img
              src={logoonlybag}
              class="h-16 md:hidden block absolute left-14 top-3 " // show only for phone
              alt="Logo"
            />
          </Link>
          {/* main search box */}
          <div class="flex pt-8 md:order-1 w-[30%]">
            
            {/* search box for desktop */}
            <div class="relative hidden md:block w-full">
              <div
                class="absolute inset-y-0 end-0 pr-3 flex items-center ps-3 pointer-events-none"
                onClick={searchHandler}
              >
                <span class="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                class="block w-full p-2 ps-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Search..."
                onChange={(e) => setSearchItem(e.target.value)}
              />
              {/* //searchIcon below  */}
              <button onClick={searchHandler}>
                <IoSearch className="text-2xl absolute top-[7px] right-2  " />
              </button>
            </div>

            {/* hamberger menu */}
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              class=" fixed  left-3 top-7 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            {/* search box for phone --logo and search in the same box */}
            <div class="relative mt-14 md:hidden">
              <input
                type="text"
                id="search-navbar"
                className="block w-full p ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 md:hidden"
                placeholder="Search..."
                onChange={(e) => setSearchItem(e.target.value)}
              />
              <button onClick={searchHandler}>
                <IoSearch className="text-2xl absolute top-[7px] right-2" />
              </button>
            </div>
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  hover:border-blue-500 "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="products"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  "
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="account"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  "
                >
                  Account
                </Link>
              </li>
            </ul>
            {/* shopping cart and number for computer ipad */}
          <Link to="cart">
            <div className="relative ml-7 sm:block hidden">
              <FaCartShopping className="text-5xl text-[#F8AF24]" />
              <span className="absolute top-1 left-6 text-white font-extrabold">
                {length}
              </span>
            </div>
          </Link>


          </div>
          {/* shoppin cart for  phone */}
          <div className="fixed right-6 top-6 sm:hidden block">
            <FaCartShopping className="text-5xl text-[#F8AF24]" />
            <span className="absolute top-1 left-6 text-white font-extrabold">
            {length}
            </span>
          </div>
        </div>

      </nav>
    </div>
  );
};

export default Navbar2;
