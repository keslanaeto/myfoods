import React from 'react'

import { IoLocation } from "react-icons/io5";
import { FaMobileRetro } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";





const Footer = () => {
  return (
    <>
    
    <div className="bg-gray-100 dark:bg-gray-100 ">
        <div className='max-w-[1200px] mx-auto'>
            <div className="grid md:grid-cols-3 py-5">
                  <div className='py-8 p-4'>
                    <h1 className='text-3xl font-bold text-primary mr-4 sm:text-4xl font-poppins'>FOODOLIS</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam quo amet ut at.
                        </p>

                        <br />
                           
                     <div className='flex items-center gap-3 mt-6'>
                          <IoLocation />
                          <p>Lagos, Nigeria</p>
                     </div>

                     <div className='flex items-center gap-3 mt-3'>
                        <FaMobileRetro />
                        <p>+234090134567</p>
                     </div>
                        
                        <div className='flex items-center gap-3 mt-6'>

                        <a href="#"><FaWhatsappSquare className='text-3xl'/></a>

                        <a href="#" >
                           <FaTwitter className='text-3xl'/>
                        </a>
                        <a href="#"> 
                            <FaInstagramSquare className='text-3xl'/>
                         </a>  

                        </div>
                  </div>

              <div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-36">
                            
                        <div className='py-8 px-4 pl-6'>
                             <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>Links</h1>
                             <ul className='flex flex-col gap-4'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Shop</li>
                                <li>Food</li>
                                <li>Contact</li>
                             </ul>
                        </div>

                        <div className='py-8 px-4 pl-36'>
                             <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>Links</h1>
                             <ul className='flex flex-col gap-3'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Shop</li>
                                <li>Food</li>
                                <li>Contact</li>
                             </ul>
                        </div>
                  </div>
               </div>
            </div>
        </div>
    </div>
    
    
    </>
      
   
  )
}

export default Footer
