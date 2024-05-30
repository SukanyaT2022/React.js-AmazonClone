import React from 'react'
import panicCat from '../Image/panicCatBG.webp'
import oop2 from '../Image/opp2.webp'
const NotFound = () => {
  return (
    <div className='notfound'>
          <img src={oop2} alt="oop page not found" className='w-[40%]' />
      <h1 className='mt-50'>Product Not Found!</h1>
      <div className='bg-yellow-200  mt-5 flex justify-center items-center rounded-full  w-[400px] h-[400px]'><img src={panicCat} className='w-[50%]'alt="white cat" /></div>
      <button className='bg-[#F6AF26] mt-10 px-[50px] py-[10px] rounded-3xl font-semibold hover:bg-yellow-200 '>GO TO HOMEPAGE</button>
    </div>
  )
}

export default NotFound
