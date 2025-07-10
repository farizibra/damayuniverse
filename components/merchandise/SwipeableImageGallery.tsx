"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SwipeableImageGalleryProps {
  images: string[];
  productName: string;
}

export default function SwipeableImageGallery({
  images,
  productName,
}: SwipeableImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const nextImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  return (
    <div className="relative group">
      <div
        className="relative overflow-hidden rounded-xl sm:rounded-2xl aspect-square bg-white border border-indigo-500/20"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`${productName} - Image ${currentIndex + 1}`}
          fill
          className={`object-cover transition-all duration-300 ${
            isTransitioning ? "scale-105" : "scale-100"
          }`}
        />
        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-slate-900/70 hover:bg-slate-800/80 rounded-full items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-indigo-400/30 hidden sm:flex"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-200" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-slate-900/70 hover:bg-slate-800/80 rounded-full items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-indigo-400/30 hidden sm:flex"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-200" />
        </button>
        {/* Image Indicators */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-indigo-300" : "bg-slate-400/60"
              }`}
            />
          ))}
        </div>
      </div>
      {/* Thumbnail Strip */}
      <div className="flex space-x-2 mt-3 sm:mt-4 overflow-x-auto pb-2 scrollbar-hide">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-md sm:rounded-lg overflow-hidden border-2 transition-all duration-300 ${
              index === currentIndex
                ? "border-indigo-400"
                : "border-slate-600/40 hover:border-slate-500/60"
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${productName} thumbnail ${index + 1}`}
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
