import { useState, useEffect } from 'react';
import groceryBagPic from '../Image/groceryBagPic.jpg'
import Slider from '../Component/Slider';
const HomeBackUp = () => {
  const [products, setProducts] = useState();


  useEffect(() => {
    (async () => {
      let record = await fetch('https://dummyjson.com/products');
      let result = await record.json();
      console.log(result);
    })();
  }, []);

  return (
    <div className="mt-14">
      {/* slider start  */}

      <Slider/>
     
      {/* end slider */}




      {/* start section 1 custum glide with tailwind */}

{/* below wrap all 4 small boxes */}
      <div className="wrapper grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mx-3 my-5">
  {/* box1 */}      
        {/* mainSmallBox - control whole individual small box  text and image */}
        <div className="shadow-2xl p-5">
          <h2 className='font-bold text-center py-2 mb-3 text-xl'>Pick up where you left off</h2>
          <div className="mainSmallBox  grid grid-cols-2 gap-x-4 gap-y-8">
            <div className="smallImgDiv text-center">
              <img src="https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtpZCUyMHNob2VzfGVufDB8fDB8fHww" className='w-[120px] h-[120px] object-cover mb-2 block m-auto'  />
              <p>Crocs Shoes</p>
            </div>
            <div className="smallImgDiv text-center">
              <img src="https://images.unsplash.com/photo-1507464098880-e367bc5d2c08?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGtpZCUyMHNob2VzfGVufDB8fDB8fHww" className='w-[120px] h-[120px] object-cover mb-2 block m-auto' />
              <p>Crocs Shoes</p>
            </div>
            <div className="smallImgDiv text-center">
              <img src="https://images.unsplash.com/photo-1574859154521-4f7aa07d91b9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHNob2VzfGVufDB8fDB8fHww" className='w-[120px] h-[120px] object-cover mb-2 block m-auto'  />
              <p>Crocs Shoes</p>
            </div>
            <div className="smallImgDiv text-center">
              <img src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJveSUyMHNob2VzfGVufDB8fDB8fHww"className='w-[120px] h-[120px] object-cover mb-2 block m-auto'  />
              <p>Crocs Shoes</p>
            </div>

          </div>
          <a href='' className='text-blue-700 mt-3 block md:ml-3 ml-5'>See more</a>
        </div>


{/* Box 2 */}
               {/* mainSmallBox - control whole individual small box  text and image */}
               {/* mainSmallBox - control whole individual small box  text and image */}
               <div className="shadow-2xl p-5">
          <h2 className='font-bold text-center py-2 mb-3 text-xl'>Pick up where you left off</h2>
          <div className="mainSmallBox  grid grid-cols-2 gap-x-4 gap-y-8">
            <div className="smallImgDiv text-center">
              <img src="https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtpZCUyMHNob2VzfGVufDB8fDB8fHww" className='w-[120px] h-[120px] object-cover mb-2 block m-auto'  />
              <p>Crocs Shoes</p>
            </div>
            <div className="smallImgDiv text-center">
              <img src="https://images.unsplash.com/photo-1507464098880-e367bc5d2c08?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGtpZCUyMHNob2VzfGVufDB8fDB8fHww" className='w-[120px] h-[120px] object-cover mb-2 block m-auto' />
              <p>Crocs Shoes</p>
            </div>
            <div className="smallImgDiv text-center">
              <img src="https://images.unsplash.com/photo-1574859154521-4f7aa07d91b9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHNob2VzfGVufDB8fDB8fHww" className='w-[120px] h-[120px] object-cover mb-2 block m-auto'  />
              <p>Crocs Shoes</p>
            </div>
            <div className="smallImgDiv text-center">
              <img src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJveSUyMHNob2VzfGVufDB8fDB8fHww"className='w-[120px] h-[120px] object-cover mb-2 block m-auto'  />
              <p>Crocs Shoes</p>
            </div>

          </div>
          <a href='' className='text-blue-700 mt-3 block md:ml-3 ml-5'>See more</a>
        </div>

{/* box 3 */}

              {/* mainSmallBox - control whole individual small box  text and image */}
              <div className="shadow-2xl p-5">
          <h2 className='font-bold text-center py-2 mb-3 text-xl'>Pick up where you left off</h2>
          <div className="mainSmallBox  grid grid-cols-2 gap-x-4 gap-y-8">
            <div className="smallImgDiv text-center">
              <img src="https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtpZCUyMHNob2VzfGVufDB8fDB8fHww" className='w-[120px] h-[120px] object-cover mb-2 block m-auto'  />
              <p>Crocs Shoes</p>
            </div>
            <div className="smallImgDiv text-center">
              <img src="https://images.unsplash.com/photo-1507464098880-e367bc5d2c08?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGtpZCUyMHNob2VzfGVufDB8fDB8fHww" className='w-[120px] h-[120px] object-cover mb-2 block m-auto' />
              <p>Crocs Shoes</p>
            </div>
            <div className="smallImgDiv text-center">
              <img src="https://images.unsplash.com/photo-1574859154521-4f7aa07d91b9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHNob2VzfGVufDB8fDB8fHww" className='w-[120px] h-[120px] object-cover mb-2 block m-auto'  />
              <p>Crocs Shoes</p>
            </div>
            <div className="smallImgDiv text-center">
              <img src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJveSUyMHNob2VzfGVufDB8fDB8fHww"className='w-[120px] h-[120px] object-cover mb-2 block m-auto'  />
              <p>Crocs Shoes</p>
            </div>

          </div>
          <a href='' className='text-blue-700 mt-3 block md:ml-3 ml-5'>See more</a>
        </div>

        {/* end box 3 */}

{/* individual box have only 2 small box on the right side */}
        <div className="">
          {/* text side */}
          <div className='shadow-2xl p-5 h-[45%]'>
          <h2 className='font-bold text-center py-2 mb-3 text-xl'>Pick up where you left off</h2>
      <p>Amazon has flexible return shipping on orders & gifts</p>
      <a href='' className='text-blue-700 mt-3 block'>See more</a>
          </div>

          {/* image side */}
          <div className='main2side grid grid-cols-2 mt-5 shadow-2xl p-3 h-[50%] relative lg:pt-5 md:py-5'>
<div >
<h2 className='font-bold text-center py-2 mb-3 text-xl'>Pick up where you left off</h2>
<button type="button" class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 absolute bottom-10 left-5">Shop now</button>
</div>

<div className=''>
<img src={groceryBagPic} className='xl:h-[80%] lg:h-[70%] md:h-[80%] h-[80%] lg:w-full md:w-full object-cover md:ml-0 ml-5' alt='shopping bag'/>
</div>

          </div>


        </div>
      </div>
    </div>
  );
};

export default HomeBackUp;