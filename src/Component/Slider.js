import React from 'react';
import { Carousel } from 'flowbite-react';
import shoeBanner3 from '../Image/shoeBanner3.jpg';
import luggague from '../Image/luggue.webp';
import beachBag from '../Image/beachbag.webp';
import sunscreen from '../Image/sunscrren.webp';
const Slider = () => {
  return (
    <div>
      {/* xl laptop 2xl big computer */}
      <div className="h-[500px] sm:h-64 xl:h-96 lg:h-96 md:h-96 2xl:h-96 grid sm:grid-cols-3 grid-cols-1 sm:grid-rows-1 grid-rows-2 mt-32 xl:mb-14 md:mb-10 lg:mb-10">
        {/* <Carousel>
        <img src={shoeBanner3} alt="white sneaker" className='imageslide object-contain h-full' />
        <img src="https://plus.unsplash.com/premium_photo-1661423635728-ebb72749503c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D" alt="..." />
        <img src="https://plus.unsplash.com/premium_photo-1661423635728-ebb72749503c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D" alt="..." />
        <img src="https://plus.unsplash.com/premium_photo-1661423635728-ebb72749503c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D" alt="..." />
        <img src="hhttps://plus.unsplash.com/premium_photo-1661423635728-ebb72749503c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D" alt="..." />
      </Carousel> */}

        <div className="sliderBigHero"></div>
        <div className="bg-red-200 flex flex-col items-center justify-center text-center lg:p-10 md:p-5 px-10">
          <h2 className="font-semibold md:text-4xl text-2xl">
            Celebrate Summer with colorful find!
          </h2>
          <p className="md:text-xl text-lg mt-5">
            Explore a curates collection of looks accessories & more.
          </p>
        </div>

        <div className="bg-green-200 xl:h-96 sm:grid hidden grid-cols-2 grid-rows-2 ">
          <img src={beachBag} className="w-full h-[100%] object-cover" />
          <img src={sunscreen} className="w-full h-[100%] object-cover" />
          <img
            src={luggague}
            className="w-full h-[100%] object-cover col-span-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;

// https://flowbite-react.com/docs/components/carousel
