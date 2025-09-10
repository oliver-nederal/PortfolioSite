import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Path to the categories JSON file
    const dataDirectory = path.join(process.cwd(), 'src', 'data');
    const filePath = path.join(dataDirectory, 'categories.json');
    
    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      console.warn('Categories file not found, returning default categories');
    }

    // Read the file
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const categories = JSON.parse(fileContents);
    
    return NextResponse.json(categories);
  } catch (error) {
    console.error('Error loading categories:', error);
  }
}
