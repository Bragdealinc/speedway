import React, { useState, useEffect, useRef } from "react";
import { reviewData } from "./constants";

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef(null);

  const nextReview = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentReview((prev) =>
        prev === reviewData.length - 1 ? 0 : prev + 1
      );
      setIsAnimating(false);
    }, 300); 
  };

  const prevReview = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentReview((prev) =>
        prev === 0 ? reviewData.length - 1 : prev - 1
      );
      setIsAnimating(false);
    }, 300); 
  };

  useEffect(() => {
    timerRef.current = setInterval(nextReview, 10000); // 10-second interval

    return () => clearInterval(timerRef.current); // Cleanup interval on component unmount
  }, []);

  const resetCycle = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      nextReview();
    }, 10000); // Reset cycle to 10 seconds after interaction
  };

  return (
    <div className="w-full min-h-[900px] flex items-center justify-center overflow-hidden px-4 md:px-5  ">
      <div className="relative w-full h-full flex flex-col md:flex-row text-white z-20">
        <div className="flex flex-col justify-start text-center z-20 w-full md:w-[40%] p-[20px] md:p-[20px_40px]">
          <h2 className="text-[2.8em] font-bold mt-[75px] mb-[50px] relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:bg-[#007037] after:w-[35%]">Our Values</h2>
          <ul className="list-none p-0 mt-[15px]">
            {[
              "Building lasting communities through innovation and sustainability.",
              "Quality craftsmanship in every project.",
              "Transparent, client-first approach from start to finish.",
              "Designed for long-term value and lasting impact.",
            ].map((item, idx) => (
              <li
                key={idx}
                className="text-[1.6em] font-semibold mb-[30px] text-[#e0e0e0] transition-[color,transform] duration-300 cursor-pointer hover:scale-[1.05] hover:text-white"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-start text-center z-20 w-full md:w-[60%] p-[20px] md:p-[20px_40px]">
          <h2 className="text-[2.8em] font-bold mt-[75px] mb-[50px] relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:bg-[#007037] after:w-[50%]">What Our Clients Have to Say</h2>

          <div className={`flex items-center justify-between max-w-[1000px] text-white py-[40px] mt-[20px] ${isAnimating ? 'opacity-80' : 'opacity-100'} transition-opacity duration-300 mx-auto`}>
            <button
              onClick={() => {
                prevReview();
                resetCycle();
              }}
              className="bg-transparent border-0 cursor-pointer opacity-80 hover:opacity-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="40" fill="white" viewBox="0 0 24 24"><path d="M15.882 1.116 4.99 12.008l10.892 10.892a1.5 1.5 0 1 1-2.121 2.121L1.93 12.008 13.76.23a1.5 1.5 0 1 1 2.121 2.121z"/></svg>
            </button>

            <div className="flex-1 px-[40px]">
              <p className="text-[1.5em] italic mb-[20px]">"{reviewData[currentReview].review}"</p>
              <p className="text-[1.2em] text-right mt-[10px]">- {reviewData[currentReview].name}</p>
            </div>

            <button
              onClick={() => {
                nextReview();
                resetCycle();
              }}
              className="bg-transparent border-0 cursor-pointer opacity-80 hover:opacity-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="40" fill="white" viewBox="0 0 24 24"><path d="M8.118 22.884 19.01 11.992 8.118 1.1a1.5 1.5 0 0 1 2.121-2.121L22.07 11.992 10.239 23.77a1.5 1.5 0 0 1-2.121-2.121z"/></svg>
            </button>
          </div>
        </div>

        <div className="hidden md:block absolute top-[5%] bottom-[45%] left-[40%] w-[2px] bg-white z-[2]"></div>
      </div>
    </div>
  );
};

export default Reviews;
