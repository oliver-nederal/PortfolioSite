import ImageKit from "imagekit";

// Initialize ImageKit with your credentials
export const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY || "public_Gq8RHhAvc7V5HzDyzS2AXCJdIXs=",
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY || "private_YMNhAbGPESzIzODstKUFS9/JNLg=",
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT || "https://ik.imagekit.io/olivernederal/"
});

export const IMAGEKIT_URL_ENDPOINT = process.env.IMAGEKIT_URL_ENDPOINT || "https://ik.imagekit.io/olivernederal/";

// Interface for image metadata
export interface ImageData {
  path: string;
  fileId: string;
  name: string;
  alt?: string;
  width: number;
  height: number;
  tags?: string[];
  category: string;
}

// Function to get all images from ImageKit
export async function getAllImages(): Promise<ImageData[]> {
  try {
    const images = await imagekit.listFiles({
      path: "/",
      includeFolder: true,
    });
    
    return images.map(image => {
      // Extract category from the path
      const pathParts = image.filePath.split('/');
      const category = pathParts.length > 1 ? pathParts[1] : 'uncategorized';
      
      return {
        path: image.filePath,
        fileId: image.fileId,
        name: image.name,
        alt: image.customMetadata?.alt || image.name,
        width: image.width || 0,
        height: image.height || 0,
        tags: image.tags || [],
        category
      };
    });
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
}

// Function to get images by category
export async function getImagesByCategory(category: string): Promise<ImageData[]> {
  try {
    const path = category === 'all' ? '/' : `/${category}`;
    
    const images = await imagekit.listFiles({
      path,
    });
    
    return images.map(image => ({
      path: image.filePath,
      fileId: image.fileId,
      name: image.name,
      alt: image.customMetadata?.alt || image.name,
      width: image.width || 0,
      height: image.height || 0,
      tags: image.tags || [],
      category
    }));
  } catch (error) {
    console.error(`Error fetching images for category ${category}:`, error);
    return [];
  }
}

// Function to get all available categories
export async function getAllCategories(): Promise<string[]> {
  try {
    const folders = await imagekit.listFiles({
      type: "folder"
    });
    
    return folders.map(folder => folder.name);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

// Function to update image metadata
export async function updateImageMetadata(
  fileId: string, 
  metadata: { alt?: string; tags?: string[] }
): Promise<boolean> {
  try {
    await imagekit.updateFileDetails(fileId, {
      tags: metadata.tags,
      customMetadata: metadata.alt ? { alt: metadata.alt } : undefined
    });
    return true;
  } catch (error) {
    console.error(`Error updating metadata for image ${fileId}:`, error);
    return false;
  }
}
