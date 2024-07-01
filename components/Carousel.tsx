"use client";

import { useEffect, useState } from "react";

const images = [
  { src: "https://picsum.photos/id/16/1200", text: "Slide 1" },
  { src: "https://picsum.photos/id/17/1200", text: "Slide 2" },
  { src: "https://picsum.photos/id/18/1200", text: "Slide 3" }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    // Automatically move to the next slide every 5 seconds
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  // Move to the previous slide
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Move to the next slide
  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Go to a specific slide
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative w-full mx-auto">
      <div className="relative h-[50vh] overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentIndex ? "transform translate-x-0" : "transform translate-x-full"
            }`}
            style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}>
            <img src={image.src} alt={image.text} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <p className="text-white text-2xl">{image.text}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 mx-2 text-highlight hover:bg-white hover:bg-opacity-80 px-1.5 rounded-full">
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 mx-2 text-highlight hover:bg-white hover:bg-opacity-80 px-1.5 rounded-full">
        &gt;
      </button>

      <div className="absolute bottom-0 start-1/2 transform -translate-x-1/2 flex justify-center my-3 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full bg-opacity-80 ${
              index === currentIndex ? "bg-highlight" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
