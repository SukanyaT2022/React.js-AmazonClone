
import React from 'react'
import { Carousel } from "flowbite-react";
import shoeBanner3 from '../Image/shoeBanner3.jpg'
const Slider = () => {
  return (
    <div>

    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src={shoeBanner3} alt="white sneaker" className='imageslide object-contain' />
        <img src="https://plus.unsplash.com/premium_photo-1661423635728-ebb72749503c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D" alt="..." />
        <img src="https://plus.unsplash.com/premium_photo-1661423635728-ebb72749503c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D" alt="..." />
        <img src="https://plus.unsplash.com/premium_photo-1661423635728-ebb72749503c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D" alt="..." />
        <img src="hhttps://plus.unsplash.com/premium_photo-1661423635728-ebb72749503c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D" alt="..." />
      </Carousel>
    </div>


    </div>
  )
}

export default Slider

// https://flowbite-react.com/docs/components/carousel


