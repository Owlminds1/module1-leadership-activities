"use client";

import React, { useState } from "react";
import Image from "next/image";
import S1 from "../assets/s1.png";
import S2 from "../assets/s21.png";
import S3 from "../assets/s3.png";

const images = [
  S1,
  S2,
  S3,
];

export default function Com() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="container flex flex-col justify-between items-center w-full h-full max-w-3xl">
        <h1 className="text-3xl mb-4">Flow Chart</h1>
        <Image
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="max-w-full max-h-full border-2 border-gray-300 rounded-lg shadow-md"
        />
        <button
          onClick={handleNextClick}
          className="mt-6 px-6 py-3 text-lg bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 shadow-md"
        >
          Next
        </button>
      </div>
    </div>
  );
}