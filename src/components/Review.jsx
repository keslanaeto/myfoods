import React, { useState } from 'react';

import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";




const reviews = [
  { name: 'Jennifer Cloe', rating: 5, comment: 'Excellent Resturant!' },
  { name: 'Petra James', rating: 4, comment: 'Very good, but could be improved.' },
  { name: 'David Benson', rating: 3, comment: 'Average experience.' },
  {name: 'Elisa john', rating: 4, comment: 'Best resturant in town'},
  {name: 'Mirabel Moree', rating: 5, comment: 'Very clean and well packed dishes'},
  {name: 'Jacinta Micheals', rating: 5, comment: 'Yummy delicious meal'}
 
];

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <div className="relative max-w-lg mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        {reviews.length > 0 && (
          <>
            <div className="flex items-center">
              <h2 className="text-xl font-semibold text-black">{reviews[currentIndex].name}</h2>
              <div className="flex ml-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < reviews[currentIndex].rating ? 'text-yellow-500' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 17.27l6.18 3.73-1.64-7.03L20 9.27l-7.19-.61L12 2 11.19 8.66 4 9.27l5.46 4.7-1.64 7.03L12 17.27z"
                    />
                  </svg>
                ))}
              </div>
            </div>
            <p className="mt-3 text-center text-black">{reviews[currentIndex].comment}</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={goToPrev}
                className="bg-gray-200 p-2 rounded-lg hover:bg-secondary transition "
              >
                <GrPrevious />

              </button>
              <button
                onClick={goToNext}
                className="bg-gray-200 p-2 rounded-lg hover:bg-secondary transition "
              >
                <GrNext />

              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Review;
