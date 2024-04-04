import { useState, useEffect } from 'react';
import groceryBagPic from '../Image/groceryBagPic.jpg';
import Slider from '../Component/Slider';
import { Link } from "react-router-dom"

const Home = () => {
  const [jewelery, setJewelery] = useState([]);
  const [electronics, setElectronics] = useState([]);
  const [clothing, setClothing] = useState([]);

  let categories = ['jewelery','electronics',"women's clothing"]

  useEffect(() => {
    categories.map((category)=>{
      fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then((res) => res.json())
        .then((data) => {
          category === "jewelery" ? setJewelery(data.slice(0,4)) : category === "electronics" ?
          setElectronics(data.slice(0,4)) : setClothing(data.slice(0,4));

        });
    })
  }, []);

// if(category == "jewelery"){
//   setJewelery(data)
// }else if(category == "electronice"){
//   setElectronics(data)
// }
{ jewelery && console.log(jewelery)}


  return (
    <div className="mt-14">
      {/* slider start  */}
      <Slider />

      <div className="wrapper grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mx-3 my-5">
        {/* Left panel products */}
        {/* Box1 */}
          <div className="shadow4side p-5">
            <h2 className="font-bold text-center py-2 mb-3 text-xl">
              Pick up where you left off
            </h2>
            <div className="mainSmallBox  grid grid-cols-2 gap-x-4 gap-y-8">
              {jewelery &&
                jewelery.map((val) => (
                  <Link to={`/detail/${val.id}`}>
                    <div className="smallImgDiv text-center">
                      <img src={val.image} className='w-[7rem] h-[7rem] object-contain' />
                      <p>{val.title.slice(0,13)}...</p>
                      <p>${val.price}</p>
                    </div>
                </Link>
                ))}
            </div>
          </div>

        {/* Box2 */}
        <div className="shadow4side p-5">
          <h2 className="font-bold text-center py-2 mb-3 text-xl">
            Pick up where you left off
          </h2>
          <div className="mainSmallBox  grid grid-cols-2 gap-x-4 gap-y-8">
            {electronics &&
              electronics.map((val) => (
                <div className="smallImgDiv text-center">
                  <img src={val.image} className='w-[7rem] h-[7rem] object-contain' />
                  <p>${val.price}</p>
                </div>
              ))}
          </div>
        </div>

        {/* Box3 */}
        <div className="shadow4side p-5">
          <h2 className="font-bold text-center py-2 mb-3 text-xl">
            Pick up where you left off
          </h2>
          <div className="mainSmallBox  grid grid-cols-2 gap-x-4 gap-y-8">
            {clothing &&
              clothing.map((val) => (
                <div className="smallImgDiv text-center">
                  <img src={val.image} className='w-[7rem] h-[7rem] object-contain' />
                  <p>${val.price}</p>
                </div>
              ))}
          </div>
        </div>
        
        {/* Righ panel */}
        <div className="">
          <div className="shadow4side p-5 h-[45%]">
            <h2 className="font-bold text-center py-2 mb-3 text-xl">
              Pick up where you left off
            </h2>
            <p>Amazon has flexible return shipping on orders & gifts</p>
            <a href="" className="text-blue-700 mt-3 block">
              See more
            </a>
          </div>

          {/* image side */}
          <div className=" shadow4side main2side grid grid-cols-2 mt-5  p-3 h-[50%] relative lg:pt-5 md:py-5">
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
