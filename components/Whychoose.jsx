"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CircularShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [radius, setRadius] = useState(300);

  const showcaseItems = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies for exceptional user experiences and business growth.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Mobile Application Development",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences across all devices.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "UI/UX Design & Prototyping",
      description: "User-centered design solutions that create intuitive, engaging digital experiences that drive conversions.",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Cloud Computing & DevOps",
      description: "Scalable cloud infrastructure and DevOps practices for reliable, high-performance applications.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const updateRadius = useCallback(() => {
    const width = window.innerWidth;
    if (width < 480) { // very small mobile
      setRadius(120);
    } else if (width < 640) { // mobile
      setRadius(150);
    } else if (width < 768) { // large mobile
      setRadius(180);
    } else if (width < 1024) { // tablet
      setRadius(220);
    } else { // desktop
      setRadius(300);
    }
  }, []);

  useEffect(() => {
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, [updateRadius]);

  const goToNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % showcaseItems.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const goToPrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  useEffect(() => {
    const autoPlay = setInterval(goToNext, 5000);
    return () => clearInterval(autoPlay);
  }, []);

  return (
    <div className="py-16 md:py-20 overflow-hidden relative" style={{backgroundColor: '#ecf1f2'}}>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Why Choose <span className="text-blue-800">B2W Infotech?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-20">
            Comprehensive software development services including web, mobile, cloud, and AI solutions for your business success
          </p>
        </div>

        <div className="relative h-[28rem] md:h-96">
          <div className="absolute inset-0 flex items-center justify-center">
            {showcaseItems.map((item, idx) => {
              const position = (idx - currentIndex + showcaseItems.length) % showcaseItems.length;
              const angle = (position * (360 / showcaseItems.length)) * (Math.PI / 180);
              
              let translateX = Math.sin(angle) * radius;
              let translateZ = Math.cos(angle) * radius;
              let scale = position === 0 ? 1 : 0.7;
              let opacity = position === 0 ? 1 : 0.3;

              return (
                <div
                  key={idx}
                  className="absolute w-full max-w-[280px] md:max-w-lg transition-all duration-700 ease-out"
                  style={{
                    transform: `translate3d(${translateX}px, 0, ${translateZ}px) scale(${scale})`,
                    opacity,
                    zIndex: position === 0 ? 10 : 1
                  }}
                >
                  <div 
                    className="bg-white border border-gray-300 rounded-2xl overflow-hidden shadow-lg"
                  >
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 md:h-64 object-cover"
                      />
                    </div>
                    <div className="p-4 md:p-6">
                      <h3 className="text-xl md:text-2xl font-bold text-black mb-2 md:mb-3">{item.title}</h3>
                      <p className="text-sm md:text-base text-gray-700">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={goToPrev}
            className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full 
              bg-white border border-gray-300 hover:bg-gray-100 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-black" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full 
              bg-white border border-gray-300 hover:bg-gray-100 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-black" />
          </button>

          <div className="absolute -bottom-8 md:-bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:gap-3">
            {showcaseItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  currentIndex === idx 
                    ? 'w-8 md:w-12 h-1 bg-blue-800 rounded-full' 
                    : 'w-1 h-1 bg-gray-400 hover:bg-blue-400 rounded-full'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularShowcase;