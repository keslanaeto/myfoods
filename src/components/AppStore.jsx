import React from 'react'

import playstore from '../assets/playstore.png'
import appstore from '../assets/appstore.png'

const AppStore = () => {
  return (
    <>
       <div className='bg-gray-100  py-14'>
          <div className='container'>
               <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-4'>
                   <div>
                       <h1 className='text-2xl text-center sm:text-center sm:text-4xl font-semibold 
                       text-gray-700'>Food is avaliable on our Mobile App for Andriod and IOS</h1>

                   </div>

                   <div className='flex flex-wrap justify-center sm:justify-start items-start'>
                    <a href="#">
                       <img src={playstore} alt="playstore" className='max-w-[150px]
                        sm:max-w-[120px] md:max-w-[200px] ' />

                    </a>

                    <a href="#">
                       <img src={appstore} alt="playstore" className='max-w-[150px]
                        sm:max-w-[120px] md:max-w-[220px] ' />

                    </a>
                   </div>
               </div>
          </div>
        </div> 
    </>
  )
}

export default AppStore
