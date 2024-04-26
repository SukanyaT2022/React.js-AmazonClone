import React, { useState, useEffect } from 'react';
import { Card } from 'flowbite-react';
import { Carousel } from "flowbite-react";

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
    <>
    {/* slider */}
<div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src="https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D" alt="..." />
        <img src="https://plus.unsplash.com/premium_photo-1661423635728-ebb72749503c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D" alt="..." />
        <img src="https://plus.unsplash.com/premium_photo-1661423635728-ebb72749503c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D" alt="..." />
        <img src="https://plus.unsplash.com/premium_photo-1661423635728-ebb72749503c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D" alt="..." />
        <img src="hhttps://plus.unsplash.com/premium_photo-1661423635728-ebb72749503c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D" alt="..." />
      </Carousel>
    </div>


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
              <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white text-center">
                {item.title}
              </h5>
            </a>
          
            {/* star and rating div */}
            <div className="mb-14 mt-2 flex items-center justify-center  ">
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

              {/* button add  */}
              {/* <a
                href="#"
                className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                Add to cart
              </a> */}
            </div>
            </div>
          </Card>
        ))}
    </div>
    </>
  );
};

export default AllProducts;
