import { useState, useEffect } from 'react';
import groceryBagPic from '../Image/groceryBagPic.jpg';
import Slider from '../Component/Slider';
const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/jewelery')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="mt-14">
      {/* slider start  */}
      <Slider />

      <div className="wrapper grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mx-3 my-5">
        {/* Left panel products */}
        <div className="shadow-2xl p-5">
          <h2 className="font-bold text-center py-2 mb-3 text-xl">
            Pick up where you left off
          </h2>
          <div className="mainSmallBox  grid grid-cols-2 gap-x-4 gap-y-8">
            {products &&
              products.map((val) => (
                <div className="smallImgDiv text-center">
                  <img src={val.image} style={{ width: '7rem' }} />
                  <p>{val.price}</p>
                </div>
              ))}
          </div>
        </div>

        {/* Righ panel */}
        <div className="">
          <div className="shadow-2xl p-5 h-[45%]">
            <h2 className="font-bold text-center py-2 mb-3 text-xl">
              Pick up where you left off
            </h2>
            <p>Amazon has flexible return shipping on orders & gifts</p>
            <a href="" className="text-blue-700 mt-3 block">
              See more
            </a>
          </div>

          {/* image side */}
          <div className="main2side grid grid-cols-2 mt-5 shadow-2xl p-3 h-[50%] relative lg:pt-5 md:py-5">
            <div>
              <h2 className="font-bold text-center py-2 mb-3 text-xl">
                Pick up where you left off
              </h2>
              <button
                type="button"
                class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 absolute bottom-10 left-5"
              >
                Shop now
              </button>
            </div>

            <div className="">
              <img
                src={groceryBagPic}
                className="xl:h-[80%] lg:h-[70%] md:h-[80%] h-[80%] lg:w-full md:w-full object-cover md:ml-0 ml-5"
                alt="shopping bag"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
