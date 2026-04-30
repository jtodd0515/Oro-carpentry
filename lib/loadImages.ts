import path from 'path';
import fs from 'fs';
import sizeOf from 'image-size';

export interface ImageMeta {
  src: string;
  width: number;
  height: number;
}

export function loadImages(): ImageMeta[] {
  const imagesDir = path.join(process.cwd(), 'public/images');

  if (!fs.existsSync(imagesDir)) {
    console.warn(`⚠️ Folder not found: ${imagesDir}`);
    return [];
  }

  const files: string[] = fs.readdirSync(imagesDir);

  return files
    .filter((file) => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
    .map((file) => {
      const filePath = path.join(imagesDir, file);
      const fileBuffer = fs.readFileSync(filePath); // ✅ Buffer for latest image-size
      const { width = 0, height = 0 } = sizeOf(fileBuffer);
      return { src: `/images/${file}`, width, height };
    });
}
