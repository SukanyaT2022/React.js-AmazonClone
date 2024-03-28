import { useState, useEffect } from 'react';
// import 'flowbite';
import groceryBagPic from '../Image/groceryBagPic.jpg'

const Home = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    (async () => {
      let record = await fetch('https://dummyjson.com/products');
      let result = await record.json();
      console.log(result);
    })();
  }, []);

  return (
    <div className="mt-24">
      {/* slider not work  */}

      <p className="text-red-900 text-7xl my-10">Homeeeee</p>
      <div
        id="controls-carousel"
        className="relative w-full bg-red-400"
        data-carousel="slide"
      >
        {/* <!-- Carousel wrapper --> */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {/* <!-- Item 1 --> */}
          <div
            className=" hidden duration-700 ease-in-out bg-green-600"
            data-carousel-item
          >
            <img
              src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG95c3xlbnwwfHwwfHx8MA%3D%3D"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
              alt="..."
            />
          </div>
          {/* <!-- Item 2 --> */}
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item="active"
          >
            <img
              src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG95c3xlbnwwfHwwfHx8MA%3D%3D"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* <!-- Item 3 --> */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRveXN8ZW58MHx8MHx8fDA%3D"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* <!-- Item 4 --> */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://plus.unsplash.com/premium_photo-1661596816763-4994439601a8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRveXN8ZW58MHx8MHx8fDA%3D"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* <!-- Item 5 --> */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRveXN8ZW58MHx8MHx8fDA%3D"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
        {/* <!-- Slider controls --> */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      {/* end slider one */}

      {/* start slider two */}

      <div id="gallery" class="relative w-full" data-carousel="slide">
        {/* <!-- Carousel wrapper --> */}
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          {/* <!-- Item 1 --> */}
          <div class=" duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>
          {/* <!-- Item 2 --> */}
          <div
            class="hidden duration-700 ease-in-out"
            data-carousel-item="active"
          >
            <img
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
              class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>
          {/* <!-- Item 3 --> */}
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
              class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>
          {/* <!-- Item 4 --> */}
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
              class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>
          {/* <!-- Item 5 --> */}
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
              class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>
        </div>
        {/* <!-- Slider controls --> */}
        <button
          type="button"
          class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
      {/* end slider two  */}




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
<img src={groceryBagPic} className='xl:h-[80%] lg:h-[70%] md:h-[80%] lg:w-full md:w-full object-cover '/>
</div>

          </div>


        </div>
      </div>
    </div>
  );
};

export default Home;
