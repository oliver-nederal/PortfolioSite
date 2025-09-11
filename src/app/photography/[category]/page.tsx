'use client';

import { useState, useCallback, useEffect } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useParams } from 'next/navigation';

import Masonry from 'react-masonry-css';
import '../masonry.css';

import { ImageKitProvider, Image } from '@imagekit/next';
import { useInView } from 'react-intersection-observer';

const IMAGEKIT_URL_ENDPOINT = 'https://ik.imagekit.io/olivernederal/';

// Interface for image metadata
interface ImageData {
  path: string;
  alt: string;
  width: number;
  height: number;
  tags?: string[];
  metadata?: Record<string, string>;
}

export default function CategoryPage() {
  // Get the category from the URL
  const params = useParams();
  const category = params.category as string;
  
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState<Set<number>>(new Set());
  
  // Detect when viewport changes for analytics or performance tracking
  const { ref } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Handle image load tracking
  const handleImageLoad = useCallback((idx: number) => {
    setImagesLoaded(prevLoaded => {
      const newLoaded = new Set(prevLoaded);
      newLoaded.add(idx);
      return newLoaded;
    });
  }, []);
  
  // Fetch images for the category
  useEffect(() => {
    async function fetchImages() {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(`/api/photos/${category}`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch images: ${response.statusText}`);
        }
        
        const data = await response.json();
        setImages(data);
      } catch (err) {
        console.error('Error fetching images:', err);
        setError('Failed to load images. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
    
    fetchImages();
  }, [category]);

  // Type definition for toolbar render props
  interface ToolbarProps {
    onScale: (scale: number) => void;
    scale: number;
    onRotate: (rotate: number) => void;
    rotate: number;
  }

  return (
    <ImageKitProvider urlEndpoint={IMAGEKIT_URL_ENDPOINT}>
      <div className="w-full min-h-screen pt-[110px] pb-[20px]">
        <div className="max-w-[2000px] mx-auto">
          {/* Category Title */}
          <div className="px-6 mb-8">
            <h1 className="text-3xl font-semibold capitalize mb-2">{category}</h1>
            <p className="text-gray-600 dark:text-gray-400">
              {loading ? "Loading..." : `${images.length} photos`}
            </p>
            {error && (
              <p className="text-red-500 dark:text-red-400 mt-2">
                {error}
              </p>
            )}
          </div>
          
          <div className="w-full">
            <PhotoProvider 
              maskOpacity={0.8}
              loadingElement={
                <div className="flex items-center justify-center h-full">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
                </div>
              }
              toolbarRender={({ onScale, scale, onRotate, rotate }: ToolbarProps) => {
                return (
                  <div className="flex items-center gap-3 p-2 bg-black/20 backdrop-blur-md rounded-full">
                    <button onClick={() => onScale(scale + 1)} aria-label="Zoom in" className="text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </button>
                    <button onClick={() => onScale(scale - 1)} aria-label="Zoom out" className="text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
                      </svg>
                    </button>
                    <button onClick={() => onRotate(rotate + 90)} aria-label="Rotate" className="text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </button>
                  </div>
                );
              }}
            >
              <div className="mb-16">
                <div className="px-6" ref={ref}>
                  {loading ? (
                    // Loading state
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {[...Array(12)].map((_, idx) => (
                        <div 
                          key={idx} 
                          className="mb-4 aspect-[3/2] bg-neutral-100 dark:bg-neutral-800 rounded-lg animate-pulse"
                        ></div>
                      ))}
                    </div>
                  ) : images.length > 0 ? (
                    <Masonry
                      breakpointCols={{
                        default: 6,
                        2400: 6,
                        1920: 5,
                        1536: 4,
                        1280: 3,
                        1024: 3,
                        768: 2,
                        640: 2,
                      }}
                      className="my-masonry-grid"
                      columnClassName="my-masonry-grid_column"
                    >
                      {images.map((image, idx) => (
                        <div 
                          key={idx} 
                          className="mb-4 break-inside-avoid photo-item"
                        >
                          <PhotoView 
                            src={`${IMAGEKIT_URL_ENDPOINT}${image.path}`}
                            key={`photo-${idx}`}
                          >
                            <div 
                              className="focus-within:ring-2 focus-within:ring-blue-500 rounded-lg relative"
                              tabIndex={0}
                              role="button"
                              aria-label={`View ${image.alt || `photo-${idx}`} in full screen`}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                  e.currentTarget.querySelector('img')?.click();
                                }
                              }}
                              style={{
                                aspectRatio: `${image.width} / ${image.height}`,
                                backgroundColor: '#f2f2f2',
                              }}
                            >
                              {/* Shadow loader based on image dimensions */}
                              {!imagesLoaded.has(idx) && (
                                <div 
                                  className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 rounded-lg animate-pulse"
                                  style={{
                                    aspectRatio: `${image.width} / ${image.height}`,
                                  }}
                                />
                              )}
                              
                              <Image
                                src={image.path}
                                alt={image.alt || `photo-${idx}`}
                                width={image.width}
                                height={image.height}
                                loading="lazy"
                                onLoad={() => handleImageLoad(idx)}
                                className={`w-full h-auto rounded-lg shadow-md cursor-pointer hover:opacity-90 transition ${
                                  !imagesLoaded.has(idx) ? 'opacity-0' : 'opacity-100'
                                }`}
                                transformation={[
                                  { quality: 60 },
                                  { format: "webp" }
                                ]}
                              />
                            </div>
                          </PhotoView>
                        </div>
                      ))}
                    </Masonry>
                  ) : (
                    <div className="text-center py-16">
                      <p className="text-xl text-gray-600 dark:text-gray-400">No photos found in this category</p>
                    </div>
                  )}
                </div>
              </div>
            </PhotoProvider>
          </div>
        </div>
      </div>
    </ImageKitProvider>
  );
}
