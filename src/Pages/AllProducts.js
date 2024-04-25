import React, { useState, useEffect } from 'react';
import { Card } from 'flowbite-react';

const AllProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="mainbox-allproducts mt-10 w-[90%] mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
      {data &&
        data.map((item) => (
          <Card
            className=" relative targetCard-AllProductPage"
            imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
            imgSrc={item.image}
          >
              <div className=''>
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h5>
            </a>
          
            {/* star and rating div */}
            <div className="mb-16 mt-2.5 flex items-center justify-center  ">
              {/* Stars */}

              {Array.from({ length: item.rating.rate }).map((_) => (
                <div>
                  <i class="fa-solid fa-star" style={{ color: 'gold' }}></i>
                </div>
              ))}

              {/* Rating */}
              <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                {Math.trunc(item.rating.rate)}
              </span>

              {/* price and add to cart button */}
            </div>
            <div className=" absolute bottom-7 left-0 w-full flex items-center justify-evenly ">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                ${item.price}
              </span>
              <a
                href="#"
                className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                Add to cart
              </a>
            </div>
            </div>
          </Card>
        ))}
    </div>
  );
};

export default AllProducts;
