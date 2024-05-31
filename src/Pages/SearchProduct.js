import React, { useState, useEffect } from 'react';
import { Card } from 'flowbite-react';
import { Carousel } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';


const AllProducts = (props) => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const {products} = location.state || []

  useEffect(()=>{
    setData(products)
  },[products])

  // useEffect(() => {
  //   console.log('All products component renderd');
  //   if (props.data) {
  //     setData(props.data);
  //   } else {
  //     fetch(`https://fakestoreapi.com/products`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data);
  //         console.log(data);
  //       });
  //   }
  // }, [props.data]);

  return (
    <>

<div className="mainbox-allproducts my-14 w-[90%] mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
{data &&
          data.map((item) => (
            <Link to={`/detail/${item.id}`}>
     <div className="relative  bg-white border border-gray-200 rounded-lg shadow targetCard-AllProductPage h-[400px] ">
      <a href="#">
        <img className="rounded-t-lg" src={item.image} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
        <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white text-center">
                      {item.title.slice(0,40)}...
                    </h5>
        </a>

         {/* star and rating div */}
         <div className="mb-14 mt-2 flex items-center justify-center  ">
                    {/* Stars */}

                    {Array.from({ length: item.rating.rate }).map((_) => (
                      <div>
                        <i
                          class="fa-solid fa-star"
                          style={{ color: 'gold' }}
                        ></i>
                      </div>
                    ))}

                    {/* Rating */}
                    <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                      {Math.trunc(item.rating.rate)}
                    </span>

                    {/* price and add to cart button */}
                  </div>
                  {/* end rate  */}


                  <div className=" absolute bottom-7 left-0 w-full flex items-center justify-evenly ">
        <p className="text-2xl font-bold text-gray-900 dark:text-white">
        ${item.price}
        </p>
        </div>
      
      </div>
    </div>
    </Link>
          ))}

    </div>













{/* 

      <div className="mainbox-allproducts mt-10 w-[90%] mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
        {data &&
          data.map((item) => (
            <Link to={`/detail/${item.id}`}>
              <Card
                className=" relative targetCard-AllProductPage h-[400px] "
                imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
              imgSrc={item.image}
              >
                <div className="">
                  <a href="#">
                    <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white text-center">
                      {item.title}
                    </h5>
                  </a>

     
                  <div className="mb-14 mt-2 flex items-center justify-center  ">
                

                    {Array.from({ length: item.rating.rate }).map((_) => (
                      <div>
                        <i
                          class="fa-solid fa-star"
                          style={{ color: 'gold' }}
                        ></i>
                      </div>
                    ))}

               
                    <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                      {Math.trunc(item.rating.rate)}
                    </span>

               
                  </div>

                  <div className=" absolute bottom-7 left-0 w-full flex items-center justify-evenly ">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      ${item.price}
                    </span>

                   
                  </div>
                </div>
              </Card>
            </Link>
          ))}
      </div> */}
    </>
  );
};

export default AllProducts;
