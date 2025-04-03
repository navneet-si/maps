import { useState } from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

export function Feed() {
  // State to track the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Array of images and feedback texts
  const slides = [
    { image: image1, name: "Alice Johnson", text: "Amazing experience! Totally exceeded my expectations." },
    { image: image2, name: "Bob Smith", text: "Super easy to use! It made my workflow much smoother." },
    { image: image3, name: "Charlie Brown", text: "I highly recommend this. Great quality and performance!" }
  ];

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="mb-4 mt-5">
    <h4 className="text-teal-950 font-bold text-3xl flex justify-center mb-4"><u>Feedback From Our User's</u></h4>
    <div className="relative w-full flex flex-col items-center">
      <div className="flex flex-col md:flex-row items-center justify-center w-3/4 bg-white shadow-lg rounded-lg p-6">
        {/* Image Section */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={slides[currentSlide].image}
            className="w-full h-56 md:h-72 object-cover rounded-lg shadow-md"
            alt={`Feedback ${currentSlide + 1}`}
          />
        </div>

        {/* Feedback Text Section */}
        <div className="w-full md:w-2/3 md:pl-8 mt-4 md:mt-0 text-center md:text-left">
          <h3 className="text-xl font-bold text-gray-800">{slides[currentSlide].name}</h3>
          <p className="text-lg text-teal-800 italic font-semibold mt-2">{slides[currentSlide].text}</p>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex space-x-3 mt-4">
        {slides.map((_, index) => (
          <button
          key={index}
          className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-blue-500" : "bg-gray-300"}`}
          onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>

      {/* Previous & Next Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 p-2 rounded-full text-white"
        >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 p-2 rounded-full text-white"
        >
        ❯
      </button>
    </div>
          </div>
  );
}
