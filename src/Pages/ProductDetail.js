import React from 'react';
import { FaStar, FaCheck } from 'react-icons/fa';
import { Button, Modal, Select } from 'flowbite-react';
import { useState } from 'react';
import { useParams } from "react-router-dom"


const ProductDetail = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalSize, setModalSize] = useState('md');
  const {id} = useParams()
  id && alert(id)


  return (
    <div>
      <div className="mainBoxProductDetail flex ">
        {/* start image section 1 */}
        <div className="lg:w-[40%] bg-red-300">
          {/* mainimage */}
          <img
            src="https://plus.unsplash.com/premium_photo-1664127534779-f1ab9a1962df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
            className="w-[50%] m-auto mt-10"
          />
          {/* smallimagesdiv */}
          <div className="flex items-center justify-center space-x-3 my-7">
            <img
              src="https://plus.unsplash.com/premium_photo-1664127534779-f1ab9a1962df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
              className="w-[10%] "
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1664127534779-f1ab9a1962df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
              className="w-[10%] "
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1664127534779-f1ab9a1962df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
              className="w-[10%] "
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1664127534779-f1ab9a1962df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
              className="w-[10%] "
            />
          </div>
        </div>
        {/* end image section 1 */}

        {/* start middle box 2 */}
        <div className="mainboxMiddle lg:w-[40%] p-10 space-y-2">
          <h4>Visit the TOEDNNQI Store</h4>
          <h3 className="font-bold">
            TOEDNNQI Boys Girls Sneakers Kids Lightweight Breathable Strap
            Athletic Running Shoes for Toddler/Little Kid/Big Kid
          </h3>
          {/* rating */}
          <div className="mainStarRating flex items-center space-x-2">
            <span>4.4</span>
            <div className="flex text-orange-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <span className="pl-5">
              12,222<span className="ml-1">ratings</span>
            </span>
          </div>
          <div className="border-t-2 border-gray-400 opacity-50"></div>
          {/* price */}
          <div className="flex  items-center py-3">
            <p className="mr-3">Price</p>
            <p className="mr-3">$15</p>
            <FaCheck className="text-orange-500 " />
            <p className="text-blue-500">One Day Delivery</p>
          </div>

          {/* product description box */}
          <div className="mainBox flex mt-5">
            {/* box left */}
            <div className="font-bold">
              <p>Color</p>
              <p>Brand</p>
              <p>Product Dimensions</p>
            </div>
            {/* right box */}
            <div className="pl-10">
              <p>white</p>
              <p>CTT</p>
              <p>3*4</p>
            </div>
          </div>
        </div>
        {/* end box 2 */}

        {/* start box 3 */}
        <div className="lg:w-[20%] p-5">
          <div className="border-2 border-gray-400 rounded-lg p-5 space-y-2">
            <h2 className="font-bold text-2xl">$20</h2>

            <div className="flex items-center">
              <FaCheck className="text-orange-500 mr-2" />
              <p className="text-blue-500">One Day Delivery</p>
            </div>
            {/* start modal free return */}
            <div className="flex flex-wrap gap-4">
              <p
                onClick={() => setOpenModal(true)}
                className="hover:text-orange-500 hover:underline cursor-pointer text-blue-500 font-semibold"
              >
                Free Return
              </p>
              {/* <Button onClick={() => setOpenModal(true)} className='bg-white text-gray-700 focus:bg-white hover:bg-white custumButtonFreeReturn'>Free Return</Button> */}
            </div>
            <Modal
              show={openModal}
              size={modalSize}
              onClose={() => setOpenModal(false)}
            >
              <Modal.Header>Free Return</Modal.Header>
              <Modal.Body>
                <div className="space-y-6 p-6">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    You can return this item for any reason: no shipping
                    charges. The item must be returned in new and unused
                    condition.
                  </p>
                </div>
              </Modal.Body>
            </Modal>

            {/* end modal */}
          </div>
        </div>
        {/* end last box left */}
      </div>
    </div>
  );
};

export default ProductDetail;
