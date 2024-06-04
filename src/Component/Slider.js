
import React from 'react'
import { Carousel } from "flowbite-react";
import shoeBanner3 from '../Image/shoeBanner3.jpg'
const Slider = () => {
  return (
    <div>
{/* xl laptop 2xl big computer */}
    <div className="h-56 sm:h-64 xl:h-96 2xl:h-96 grid grid-cols-3 mt-32">
      {/* <Carousel>
        <img src={shoeBanner3} alt="white sneaker" className='imageslide object-contain h-full' />
        <img src="https://plus.unsplash.com/premium_photo-1661423635728-ebb72749503c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D" alt="..." />
        <img src="https://plus.unsplash.com/premium_photo-1661423635728-ebb72749503c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D" alt="..." />
        <img src="https://plus.unsplash.com/premium_photo-1661423635728-ebb72749503c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D" alt="..." />
        <img src="hhttps://plus.unsplash.com/premium_photo-1661423635728-ebb72749503c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D" alt="..." />
      </Carousel> */}
      <div className='sliderBigHero'>

      </div>
      <div className='bg-red-200 flex flex-col items-center justify-center text-center p-10'>
     <h2 className='font-semibold text-4xl'>Celebrate Summer with colorful find!</h2>
     <p className='text-xl mt-5'>Explore a curates collection of looks accessories & more.</p>
      </div>
      <div className='bg-green-200 '>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
      </div>
    </div>
   
    </div>
  )
}

export default Slider

// https://flowbite-react.com/docs/components/carousel


