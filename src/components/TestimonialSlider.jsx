import React, { useState } from 'react';

const testimonials = [
   {
      name: "John Doe",
      role: "CEO, Company",
      image: "https://readymadeui.com/team-1.webp",
      quote: "ReadymadeUI gave my project a polished look without the hassle. The layouts are beautifully designed and ready to go.",
      stars: 4
   },
   {
      name: "Jane Smith",
      role: "Founder, TechStart",
      image: "https://readymadeui.com/team-2.webp",
      quote: "The templates are incredibly easy to customize. We launched our landing page in record time and the feedback has been amazing!",
      stars: 5
   },
   {
      name: "Simon Konecki",
      role: "Lead Designer",
      image: "https://readymadeui.com/team-3.webp",
      quote: "As a designer, I appreciate the clean code and the modern aesthetic. It's a great foundation for any web project.",
      stars: 3
   }
];

const StarIcon = ({ filled }) => (
   <svg xmlns="http://www.w3.org/2000/svg" className={`size-4 ${filled ? 'fill-blue-600 ' : 'fill-[#b5bdc0] '}`} viewBox="0 0 24 24" aria-hidden="true">
      <path d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z" />
   </svg>
);

export default function TestimonialSlider() {
   const [currentIndex, setCurrentIndex] = useState(0);

   const nextSlide = () => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
   };

   const prevSlide = () => {
      setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
   };

   const current = testimonials[currentIndex];

   return (
      <section className="px-4 md:px-8 mt-6">
         <div className="max-w-4xl mx-auto relative">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
               <h2 className="text-3xl font-bold text-slate-900 mb-6 md:text-4xl">
                  Customer's Testimonial
               </h2>
            </div>

            {/* Testimonial Content */}
            <figure className="max-w-2xl mx-auto transition-opacity duration-300">
               <div className="flex flex-col items-center text-center">
                  <img
                     src={current.image}
                     className="w-28 h-28 rounded-full shadow-[0_2px_22px_-4px_rgba(93,96,127,0.6)] border-2 border-white object-cover"
                     alt={current.name}
                  />
                  <figcaption className="mt-4">
                     <p className="text-slate-900 text-base font-semibold">{current.name}</p>
                     <span className="block text-xs text-slate-500 mt-1">{current.role}</span>
                  </figcaption>
               </div>

               <blockquote className="mt-8 text-center">
                  <p className="text-base text-slate-600 font-normal leading-relaxed">
                     "{current.quote}"
                  </p>
               </blockquote>

               {/* Rating Stars */}
               <div className="flex justify-center gap-2 mt-6" role="img" aria-label={`${current.stars} out of 5 stars`}>
                  {[...Array(5)].map((_, i) => (
                     <StarIcon key={i} filled={i < current.stars} />
                  ))}
               </div>
            </figure>

            {/* Controls */}
            <button
               onClick={prevSlide}
               type="button"
               aria-label="previous slide"
               className="absolute left-0 top-8 sm:top-0 bottom-0 my-auto bg-transparent w-10 h-10 flex items-center justify-center border border-slate-300 shadow-sm rounded-full rotate-180 shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
               <svg xmlns="http://www.w3.org/2000/svg" className="fill-slate-900 size-3.5 overflow-visible" viewBox="0 0 451.846 451.847">
                  <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373" />
               </svg>
            </button>

            <button
               onClick={nextSlide}
               type="button"
               aria-label="next slide"
               className="absolute right-0 top-8 sm:top-0 bottom-0 my-auto bg-transparent w-10 h-10 flex items-center justify-center border border-slate-300 shadow-sm rounded-full shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
               <svg xmlns="http://www.w3.org/2000/svg" className="fill-slate-900 size-3.5 overflow-visible" viewBox="0 0 451.846 451.847">
                  <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373" />
               </svg>
            </button>
         </div>
      </section>
   );
}