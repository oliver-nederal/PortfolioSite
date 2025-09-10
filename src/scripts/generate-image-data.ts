/**
 * Script to generate a JSON file with all images from ImageKit
 * 
 * Usage:
 * - Create a .env.local file with your ImageKit credentials
 * - Run: npx tsx src/scripts/generate-image-data.ts
 */

import { getAllImages, getAllCategories } from '../lib/imagekit';
import path from 'path';
import fs from 'fs';

// Define interfaces
interface ImageData {
  path: string;
  fileId: string;
  name: string;
  alt?: string;
  width: number;
  height: number;
  tags?: string[];
  category: string;
}

interface CategoryData {
  id: string;
  name: string;
  description: string;
  imageCount: number;
  coverImage: string | null;
  backgroundColor: string;
}

// Helper to create a safe category name
function formatCategoryName(name: string): string {
  return name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' ');
}

// Generate a random color for a category
function generateCategoryColor(categoryName: string): string {
  // Simple hash function to get consistent colors
  let hash = 0;
  for (let i = 0; i < categoryName.length; i++) {
    hash = categoryName.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  // Generate HSL color with fixed saturation and lightness for aesthetics
  const h = Math.abs(hash) % 360;
  const s = 60; // Higher saturation for vibrant colors
  const l = 25; // Lower lightness for darker colors that work well with white text
  
  return `hsl(${h}, ${s}%, ${l}%)`;
}

async function generateImageData() {
  try {
    console.log('🔍 Fetching images from ImageKit...');
    
    // Get all images
    const images = await getAllImages();
    
    // Get all categories 
    const categories = await getAllCategories();
    
    // Group images by category
    const imagesByCategory = images.reduce<Record<string, ImageData[]>>((acc, image) => {
      if (!acc[image.category]) {
        acc[image.category] = [];
      }
      acc[image.category].push(image);
      return acc;
    }, {});
    
    // Create category data with cover images
    const categoryData = Object.keys(imagesByCategory).map((categoryId): CategoryData => {
      const categoryImages = imagesByCategory[categoryId];
      // Use the first image as the cover image (or a random one for variety)
      const coverImage = categoryImages.length > 0 ? 
        categoryImages[Math.floor(Math.random() * categoryImages.length)].path : 
        null;
      
      return {
        id: categoryId,
        name: formatCategoryName(categoryId),
        description: `A collection of ${categoryImages.length} images in the ${formatCategoryName(categoryId)} category.`,
        imageCount: categoryImages.length,
        coverImage,
        backgroundColor: generateCategoryColor(categoryId)
      };
    });
    
    // Create output data structure
    const outputData = {
      categories: categoryData,
      images: imagesByCategory
    };
    
    // Create the data directory if it doesn't exist
    const dataDir = path.join(process.cwd(), 'src/data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    // Write the data to JSON files
    fs.writeFileSync(
      path.join(dataDir, 'categories.json'), 
      JSON.stringify(categoryData, null, 2)
    );
    
    fs.writeFileSync(
      path.join(dataDir, 'images.json'), 
      JSON.stringify(imagesByCategory, null, 2)
    );
    
    console.log('✅ Image data generated successfully!');
    console.log(`📁 Categories: ${categories.length}`);
    console.log(`🖼️ Total Images: ${images.length}`);
    
    categories.forEach(cat => {
      const count = imagesByCategory[cat]?.length || 0;
      console.log(`  - ${formatCategoryName(cat)}: ${count} images`);
    });
    
    console.log('\n📦 Files created:');
    console.log('  - src/data/categories.json');
    console.log('  - src/data/images.json');
    
  } catch (error) {
    console.error('❌ Error generating image data:', error);
    process.exit(1);
  }
}

// Run the script
generateImageData();
