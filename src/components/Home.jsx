import React from 'react'
import ofada from '../assets/ofada.png'
import PrimaryButton from './PrimaryButton'



const Home = () => {
  return (

    <div  className='relative z-[-1] bg-gradient-to-r from-mix to-slate-300 py-14 '>
        <div className='container sm:py-16'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[500px]'>

                  {/* text-content section */}

                  <div className='space-y-7 text-black order-2 sm:order-1 sm:text-sm pt-12'>
                    <h1 className='text-5xl font-Baskervville'> Welcome to <span className='text-primary'>Foodolis</span> </h1> 
                    <p className='text-xl font-Dancing'> Fresh & Healthy Meal plan For You and Your Family</p>
                  <p className='lg:pr-64 text-xl'>Order Your 
                    <span className='text-secondary font-Grypen'> Delicious </span> Meal From Our Resturant</p>


                     {/* button */}

                     <div className='flex justify-center mt-14 sm:mt-14 pt-18'>
                        <PrimaryButton />
                     </div>
                  </div>

                  {/* image section */}

                  <div className='h-[20rem] w-[20rem] relative z-30 order-2 sm:order-1 ms:pt-5'>
                     < img src={ofada} alt="" className='w-full sm:scale-125 sm:translate-y-16'/>
                  </div>
              </div>
        </div>
    </div>
  )
}
 
export default Home
