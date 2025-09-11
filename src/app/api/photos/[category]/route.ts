import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: { category: string } }
) {
  const category = params.category;

  try {
    // Path to the category's photos JSON file
    const dataDirectory = path.join(process.cwd(), 'src', 'data');
    const filePath = path.join(dataDirectory, `${category}.json`);

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'Category not found' }, { status: 404 });
    }

    // Read the file
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const photos = JSON.parse(fileContents);

    return NextResponse.json(photos);
  } catch (error) {
    console.error(`Error loading photos for category ${category}:`, error);
    return NextResponse.json({ error: 'Failed to load photos' }, { status: 500 });
  }
}
