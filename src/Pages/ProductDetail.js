import React from 'react'
import { FaStar } from "react-icons/fa";

const ProductDetail = () => {
  return (
    <div>
      <div className='mainBoxProductDetail flex '>

        {/* start image section  */}
<div className='lg:w-[40%] bg-red-300'>
  {/* mainimage */}
  <img src='https://plus.unsplash.com/premium_photo-1664127534779-f1ab9a1962df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D' className='w-[50%] m-auto mt-10'/>
  {/* smallimagesdiv */}
<div className='flex items-center justify-center space-x-3 my-7'>
<img src='https://plus.unsplash.com/premium_photo-1664127534779-f1ab9a1962df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D' className='w-[10%] '/>
<img src='https://plus.unsplash.com/premium_photo-1664127534779-f1ab9a1962df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D' className='w-[10%] '/>
<img src='https://plus.unsplash.com/premium_photo-1664127534779-f1ab9a1962df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D' className='w-[10%] '/>
<img src='https://plus.unsplash.com/premium_photo-1664127534779-f1ab9a1962df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D' className='w-[10%] '/>
</div>
</div>
{/* end image section  */}

<div className='lg:w-[40%] bg-green-300'>
  <h4>Visit the TOEDNNQI Store</h4>
  <h3>TOEDNNQI Boys Girls Sneakers Kids Lightweight Breathable Strap Athletic Running Shoes for Toddler/Little Kid/Big Kid</h3>
  {/* rating */}
  <div>
  <span>4.4</span>
<div>
<FaStar />
<FaStar />
<FaStar />
<FaStar />
</div>
<span>12,222<span>ratings</span></span>
  </div>
</div>

<div className='lg:w-[20%] bg-orange-400'>3</div>
      </div>
    </div>
  )
}

export default ProductDetail
