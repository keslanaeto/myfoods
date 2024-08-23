import React from 'react'


import star from '../assets/star.png'
import vegesoup from '../assets/vegesoup.png'
import vegsoup from '../assets/vegsoup.png'
import grass from '../assets/grass.png'
import foodss from '../assets/foodss.png'
import salad from '../assets/salad.png'
import fruitboe from '../assets/fruitboe.png'
import fruit from '../assets/fruit.png'
import bowlfruit from '../assets/bowlfruit.png'
import orange from '../assets/orange.png'
import banana from '../assets/banana.png'
import berry from '../assets/berry.png'
import apple from '../assets/apple.png'



import PrimaryButton from './PrimaryButton'



const ServicesData = [
     {
          id: 1,
          img: vegesoup,
          name: "Soup",
          describtion: "Best enjoyed with white rice",
          star: star, 
     },

     {
          id: 2,
          img: orange,
          name: "A Bowl of Fruits",
          describtion: "Oranges, Apple, Grapes, Banana",
          star: star, 
     },

     {
          id: 3,
          img: vegesoup,
          name: "Vegies",
          describtion: "Best enjoyed with Rice",
          star: star, 
     },
]

const Services = [
     {
          id: 1,
          img: salad,
          name: "Salad",
          describtion: "A bowl of fresh salad"
     },

     {
          id: 2,
          img: foodss,
          name: "Tomato",
          describtion: "A plate of freshly made stew"
     },

     {
          id: 3,
          img: grass,
          name: "vegies",
          describtion: "All purpose vegies"
     },
]


const Service = [
     {
          id: 1,
          img: bowlfruit,
          name: "Fruits",
          describtion: "All kinds of fresh fruits"
     },

     {
          id: 2,
          img: fruit,
          name: "Grapes",
          describtion: "Different types of healthy fruits"
     },

     {
          id: 3,
          img: berry,
          name: "Berries",
          describtion: "Strawberry, grapes paw-paw"
     },
]



const Other = () => {
  return (
   <>
  <div className="container py-20 relative ">
    <div className='pt-8'>
        <h1 className='py-8 tracking-wider text-2xl font-semibold
         text-gray-900 text-center pb-20 font-Baskervville'>Your Taste Bud Our 
         <span className='text-secondary'> Major </span> Concern 
         </h1>
   </div>


    
  <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
       {
          ServicesData.map(({id, img, name, describtion,star}) =>{
               return(
                    <div
                     key={id} className='max-w-[300px] group rounded-xl bg-white 
                      hover:bg-secondary hover:text-white duration-300 p-2 shadow-xl'>


                    <div className='h-[100px]'>
                      <img src={img} alt="" className='max-w-[150px] mx-auto block transform -translate-y-14 
                      group-hover:scale-105 group:rotate-6 duration-300'/>
                    </div>
  
                    <div className='p-4 text-center'>
                      <h2 className='text-xl font-bold '>{name}</h2>
                      <p className='text-gray-400 text-sm line-clamp-2 group-hover:text-white duration-300 pt-2'>{describtion}</p>
                    </div>

                    <div className='flex justify-evenly'>
                         <img src={star} alt="" className='w-5' />
                         <img src={star} alt="" className='w-5' />
                         <img src={star} alt="" className='w-5' />
                         <img src={star} alt="" className='w-5' />
      
                    </div>

                 </div>
               )
          })
       }
  </div>


  <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-14 md:gap-5 place-items-center pt-20'>
       {
          Services.map(({id, img, name, describtion}) =>{
               return(
                    <div
                     key={id} className='max-w-[300px] group rounded-xl bg-white 
                      hover:bg-secondary hover:text-white duration-300 p-2 shadow-xl'>


                    <div className='h-[100px]'>
                      <img src={img} alt="" className='max-w-[200px] mx-auto block transform -translate-y-14 
                      group-hover:scale-105 group:rotate-6 duration-300'/>
                    </div>
  
                    <div className='p-4 text-center'>
                      <h2 className='text-xl font-bold'>{name}</h2>
                      <p className='text-gray-400 text-sm line-clamp-2 group-hover:text-white duration-300 pt-2'>{describtion}</p>

                      <div className='flex justify-evenly'>
                         <img src={star} alt="" className='w-5' />
                         <img src={star} alt="" className='w-5' />
                         <img src={star} alt="" className='w-5' />
                         <img src={star} alt="" className='w-5' />
      
                    </div>
                    </div>
                 </div>
               )
          })
       }
  </div>


  <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-14 md:gap-5 place-items-center pt-20'>
       {
          Service.map(({id, img, name, describtion}) =>{
               return(
                    <div
                     key={id} className='max-w-[300px] group rounded-xl bg-white 
                      hover:bg-secondary hover:text-white duration-300 p-2 shadow-xl'>


                    <div className='h-[100px]'>
                      <img src={img} alt="" className='max-w-[200px] mx-auto block transform -translate-y-14 
                      group-hover:scale-105 group:rotate-6 duration-300'/>
                    </div>
  
                    <div className='p-4 text-center'>
                      <h2 className='text-xl font-bold pb-3'>{name}</h2>
                      <p className='text-gray-400 text-sm line-clamp-2 group-hover:text-white duration-300 pt-2'>{describtion}</p>
                    </div>

                    <div className='flex justify-evenly'>
                         <img src={star} alt="" className='w-5' />
                         <img src={star} alt="" className='w-5' />
                         <img src={star} alt="" className='w-5' />
                         <img src={star} alt="" className='w-5' />
      
                    </div>
                 </div>
               )
          })}
  </div>

    </div>

    <div className='flex justify-center mt-10 sm:mt-14 pb-6'>
        <PrimaryButton />
      </div>
   </>
  )
}

export default Other