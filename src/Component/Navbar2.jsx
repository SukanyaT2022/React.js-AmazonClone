import React, { useEffect,useState } from 'react';
import { initFlowbite } from 'flowbite';
import {Link} from 'react-router-dom'
import logoSnap from '../Image/logoShopSnap.jpg'
import { FaCartShopping } from "react-icons/fa6";
import AllProducts from '../Pages/AllProducts' 

const Navbar2 = () => {
  const [data, setData] = useState();
  const [searchData, setSearchData] = useState([]);
  const [flag,setFlag] = useState(false)

  useEffect(() => {
    initFlowbite();
  }, []);

  const searchHandler = (e)=>{
  setSearchData([]);

    // What user types in search box
    // const searchbox_value = e.target.value;
    
    // This will return all prdoucts
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((item) => {
        item.map((item)=>{
          // include or search method help to search somthing
          let result = item.title.includes(data);
          if(result){
            setSearchData((oldData)=>[...oldData,item])
          }else{
            console.log("No match found")
          }
      })
      searchData && console.log(searchData)
      });
  }

  const submitData = ()=>{
    setFlag(true)
  }

  return (
    <div>
      {flag && <AllProducts/>}
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logoSnap}
              class="h-20"
              alt="Flowbite Logo"
            />
          </Link>
          {/* main search box */}
          <div class="flex md:order-1 w-[30%] ">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
            >
              <svg
                className="w-5 h-5 bg-red-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span class="sr-only">Search</span>
            </button>
            {/* below control input box and search icon */}
            <div class="relative hidden md:block w-full">
              <div class="absolute inset-y-0 end-0 pr-3 flex items-center ps-3 pointer-events-none" 
              onClick={searchHandler}>
                {/* icon search */}
                <svg
                  class="w-4 h-4 text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span class="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Search..."
                onChange={(e)=>setData(e.target.value)}
              />
              <button onClick={searchHandler}>Search</button>
            </div>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
            {/* logo and search in the same box */}
            <div class="relative mt-3 md:hidden">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none" 
              onClick={searchHandler}>
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
 <input

                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 md:hidden"
                placeholder="Search..."
                onChange={searchHandler}
              />

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
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white "
                >
                  About
                </a>
              </li>
             
            </ul>
            {/* shopping cart and number */}
            <div className='relative ml-7'>
            <FaCartShopping className='text-5xl text-[#F8AF24]' />
       <span className='absolute top-1 left-6 text-white font-extrabold'>1</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar2;
