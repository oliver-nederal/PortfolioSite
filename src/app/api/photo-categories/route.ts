import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Define the type for photo categories
interface PhotoCategory {
  id: string;
  name: string;
  description: string;
  imageCount: number;
  coverImage: string;
  backgroundColor: string;
}

// Default categories as fallback
const defaultCategories: PhotoCategory[] = [
  {
    id: "barcelona",
    name: "Barcelona",
    description: "Urban exploration and architectural photography from Barcelona, Spain. Street scenes, Gaudi's masterpieces, and Mediterranean vibes.",
    imageCount: 21,
    coverImage: "/barcelona/DSC02489.JPG",
    backgroundColor: "#1A3A6E"
  },
  {
    id: "stockholm",
    name: "Stockholm",
    description: "Landscapes, wildlife and natural wonders captured during hikes and outdoor adventures.",
    imageCount: 15,
    coverImage: "/stockholm/example.jpg",
    backgroundColor: "#1E4D3A"
  },
];

export async function GET() {
  try {
    // Path to the categories JSON file
    const dataDirectory = path.join(process.cwd(), 'src', 'data');
    const filePath = path.join(dataDirectory, 'categories.json');
    
    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      console.warn('Categories file not found, returning default categories');
      return NextResponse.json(defaultCategories);
    }

    // Read the file
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const categories = JSON.parse(fileContents);
    
    return NextResponse.json(categories);
  } catch (error) {
    console.error('Error loading categories:', error);
    return NextResponse.json(defaultCategories);
  }
}
