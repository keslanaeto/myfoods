import React, {useState} from 'react'
import { IoFastFood } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";



const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav (!nav)


  return (
    <div className='w-screen h-[80px] z-10 fixed px-4 bg-gray-300 m-0'>

    <div className='px-3 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold text-primary mr-4 sm:text-4xl font-poppins'> FOODOLIS</h1> 
          <IoFastFood className=' text-4xl text-secondary'/>
  
          <ul className='hidden md:flex justify-between px-[11rem] text-2xl cursor-pointer font-averia gap-9'>
                
              <li className='hover:text-secondary hover:shadow-[0_3px_0_-1px_#059669]'>Home</li>
              <li className='hover:text-secondary hover:shadow-[0_3px_0_-1px_#059669]'>About</li>
              <li className='hover:text-secondary hover:shadow-[0_3px_0_-1px_#059669]'>Shop</li>
              <li className='hover:text-secondary hover:shadow-[0_3px_0_-1px_#059669]'>Food</li>
              <li className='hover:text-secondary hover:shadow-[0_3px_0_-1px_#059669]'>Contact</li>
          </ul>
        </div>

    <button className='text-2xl bg-primary text-white rounded-full p-2 duration-200 hidden md:block'>
         <FaShoppingCart/>
    </button>

    <div className='md:hidden font-bold' onClick={handleClick}>
      {!nav ? <CiMenuFries /> : <MdOutlineClose /> }
    
    </div>
    </div>

    <div className='gap-8'>
    <ul className={!nav ? 'hidden' : 'absolute w-52 px-8 text-center bg-white p-4 gap-14'}>
              <li className='w-full hover:text-secondary cursor-pointer pb-4'>Home</li>
              <li className='w-full hover:text-secondary cursor-pointer pb-5'>About</li>
              <li className='w-full hover:text-secondary cursor-pointer pb-5'>Shop</li>
              <li className='w-full hover:text-secondary cursor-pointer pb-5'>Food</li>
              <li className='w-full hover:text-secondary cursor-pointer pb-5'>Contact</li> 
   </ul>
    </div>


</div>

  
  )
}

export default Navbar
