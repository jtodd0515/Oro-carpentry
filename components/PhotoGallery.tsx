"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageMeta } from "@/lib/loadImages";

export default function PhotoGallery({ photos }: { photos: ImageMeta[] }) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openModal = (index: number) => setCurrentIndex(index);
  const closeModal = () => setCurrentIndex(null);

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev !== null ? (prev - 1 + photos.length) % photos.length : null
    );
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev !== null ? (prev + 1) % photos.length : null
    );
  };

  return (
    <>
      {/* Gallery Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "10px",
        }}
      >
        {photos.map((photo, i) => (
          <div
            key={i}
            onClick={() => openModal(i)}
            style={{ cursor: "pointer" }}
          >
            <Image
              src={photo.src}
              width={photo.width}
              height={photo.height}
              alt={`Photo ${i + 1}`}
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      {/* Modal with Navigation */}
      {currentIndex !== null && (
        <div
          onClick={closeModal}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          {/* Prev Arrow */}
          <button
            onClick={showPrev}
            style={{
              position: "absolute",
              left: "20px",
              fontSize: "3rem",
              color: "#fff",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            ‹
          </button>

          {/* Image */}
          <Image
            src={photos[currentIndex].src}
            width={photos[currentIndex].width}
            height={photos[currentIndex].height}
            alt={`Photo ${currentIndex + 1}`}
            style={{
              maxHeight: "90%",
              maxWidth: "90%",
              objectFit: "contain",
            }}
          />

          {/* Next Arrow */}
          <button
            onClick={showNext}
            style={{
              position: "absolute",
              right: "20px",
              fontSize: "3rem",
              color: "#fff",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
