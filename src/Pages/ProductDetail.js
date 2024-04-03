import React from 'react'
import { FaStar, FaCheck } from "react-icons/fa";
import { Button, Modal, Select } from "flowbite-react";
import { useState } from "react";


const ProductDetail = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalSize, setModalSize] = useState('md');

  return (
    <div>
      <div className='mainBoxProductDetail flex '>

        {/* start image section 1 */}
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
{/* end image section 1 */}

{/* start middle box 2 */}
<div className='mainboxMiddle lg:w-[40%] p-10 space-y-2'>
  <h4>Visit the TOEDNNQI Store</h4>
  <h3 className='font-bold'>TOEDNNQI Boys Girls Sneakers Kids Lightweight Breathable Strap Athletic Running Shoes for Toddler/Little Kid/Big Kid</h3>
  {/* rating */}
  <div className='mainStarRating flex items-center space-x-2'>
  <span>4.4</span>
<div className='flex text-orange-500'>
<FaStar />
<FaStar />
<FaStar />
<FaStar />
<FaStar />
</div>
<span className='pl-5'>12,222<span className='ml-1'>ratings</span></span>

  </div>
<div className='border-t-2 border-gray-400 opacity-50'></div>
{/* price */}
<div className='flex  items-center py-3'>
  <p className='mr-3'>Price</p>
  <p className='mr-3'>$15</p>
  <FaCheck className='text-orange-500 '/>
  <p className='text-blue-500'>One Day Delivery</p>
</div>

{/* product description box */}
<div className='mainBox flex mt-5'>
  {/* box left */}
<div className='font-bold'>
  <p>Color</p>
  <p>Brand</p>
  <p>Product Dimensions</p>
</div>
{/* right box */}
<div className='pl-10'>
<p>white</p>
  <p>CTT</p>
  <p>3*4</p>
</div>
</div>
</div>
{/* end box 2 */}

{/* start box 3 */}
<div className='lg:w-[20%] bg-orange-800'>
{/* start modal */}
<div className="flex flex-wrap gap-4">
        <div className="w-40">
          <Select defaultValue="md" onChange={(event) => setModalSize(event.target.value)}>
            <option value="sm">sm</option>
            <option value="md">md</option>
            <option value="lg">lg</option>
            <option value="xl">xl</option>
            <option value="2xl">2xl</option>
            <option value="3xl">3xl</option>
            <option value="4xl">4xl</option>
            <option value="5xl">5xl</option>
            <option value="6xl">6xl</option>
            <option value="7xl">7xl</option>
          </Select>
        </div>
        <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      </div>
      <Modal show={openModal} size={modalSize} onClose={() => setOpenModal(false)}>
        <Modal.Header>Small modal</Modal.Header>
        <Modal.Body>
          <div className="space-y-6 p-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
              companies around the world are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
              to ensure a common set of data rights in the European Union. It requires organizations to notify users as
              soon as possible of high-risk data breaches that could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>

{/* end modal */}
</div>
{/* end last box left */}
      </div>
    </div>
  )
}

export default ProductDetail
