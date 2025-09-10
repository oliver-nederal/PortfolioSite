'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import { motion } from 'framer-motion';

// Type definitions for the photo categories
interface PhotoCategory {
  id: string;
  name: string;
  description: string;
  imageCount: number;
  coverImage: string;
  backgroundColor: string;
}

const IMAGEKIT_URL_ENDPOINT = 'https://ik.imagekit.io/olivernederal/';

// Photo Category Card Component
const CategoryCard: React.FC<{ category: PhotoCategory; index: number }> = ({ category, index }) => {
  const { id, name, description, imageCount, coverImage, backgroundColor } = category;
  
  return (
    <motion.div 
      className="group flex flex-col h-full relative z-10"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: 0.1 * index, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      whileHover={{ y: -6, zIndex: 20 }}
    >
      <motion.div 
        className="rounded-xl overflow-hidden shadow-sm hover:shadow-md flex flex-col h-full relative border border-neutral-200 dark:border-neutral-700/50"
        whileHover={{ boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}
        transition={{ duration: 0.3 }}
      >
        {/* Full card background image */}
        <div className="w-full h-full absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0 z-0"
            style={{ backgroundColor: backgroundColor }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
          ></motion.div>
          <motion.div
            className="relative z-0 h-full"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src={`${IMAGEKIT_URL_ENDPOINT}${coverImage}`}
              alt={`${name} photo album cover`}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover relative z-0"
              loading="lazy"
              quality={90}
            />
            {/* Overlay gradient for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
          </motion.div>
        </div>
        
        {/* Category Information - Overlaid on image */}
        <motion.div 
          className="p-8 flex flex-col h-full justify-end relative z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 * index + 0.2 }}
        >
          <div className="mt-auto">
            <motion.h2 
              className="text-2xl font-semibold mb-3 text-white drop-shadow-md"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index + 0.1 }}
            >
              {name}
            </motion.h2>
            
            <motion.p 
              className="text-neutral-200 leading-relaxed mb-6 max-w-prose drop-shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 * index + 0.2 }}
            >
              {description}
            </motion.p>
            
            {/* Photo Count */}
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 * index + 0.3 }}
            >
              <span className="px-3 py-1 text-sm rounded-full bg-white/20 backdrop-blur-sm text-white">
                {imageCount} photos
              </span>
            </motion.div>
            
            {/* View Album Link */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index + 0.4 }}
            >
              <motion.div
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link 
                  href={`/photography/${id}`}
                  className="inline-flex items-center group/link text-white hover:text-neutral-200 transition-colors"
                >
                  <span className="border-b border-white/40 group-hover/link:border-white/60 transition-colors">View Album</span>
                  <motion.div
                    className="ml-2"
                    animate={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IoArrowForward />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default function PhotographyPage() {
  const [categories, setCategories] = useState<PhotoCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch categories data
    async function fetchCategoriesData() {
      try {
        // In client components, we need to fetch the data via an API route
        const response = await fetch('/api/photo-categories');
        
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchCategoriesData();
  }, []);

  return (
    <div className="min-h-screen pt-[90px] pb-[60px] px-6 text-neutral-900 dark:text-white relative overflow-hidden">
      <motion.div 
        className="w-full relative z-20 max-w-[2000px] mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        
        {loading ? (
          // Loading state
          <div className="grid sm:grid-cols-4 grid-cols-2 gap-6 md:gap-8 relative z-10">
            {[...Array(4)].map((_, index) => (
              <div 
                key={index} 
                className="pt-4 h-[500px] sm:h-[550px] md:h-[500px] lg:h-[550px] bg-neutral-100 dark:bg-neutral-800 rounded-xl animate-pulse"
              ></div>
            ))}
          </div>
        ) : (
          // Categories Grid
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-6 md:gap-8 relative z-10">
            {categories.map((category, index) => (
              <motion.div 
                key={category.id} 
                className="pt-4 h-[500px] sm:h-[550px] md:h-[500px] lg:h-[550px] relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.1 * index,
                  ease: "easeOut" 
                }}
              >
                <CategoryCard category={category} index={index} />
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
