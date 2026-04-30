import { loadImages } from '@/lib/loadImages';
import PhotoGallery from '@/components/PhotoGallery';

export default function HomePage() {
  const images = loadImages(); // Runs only on server

  return (
    <main style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '20px' }}>
        See our work below
      </h1>
      <PhotoGallery photos={images} />
    </main>
  );
}
