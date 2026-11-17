import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { GALLERY_IMAGES } from '../data/homeData';
import SkeletonImageLoader from '../components/skeleton/SkeletonImageLoader';
import './GalleryPage.css';

export default function GalleryPage() {
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Group images according to the exact layout from Figma screenshots:
  // Images 1-28: Outreach activities (2-column grid in Screenshots 1-5)
  // Images 29-32: Team & medical portraits (4-column row in Screenshot 6)
  // Images 33-35: The Next Teen Star posters & events (3-column flex row in Screenshot 6)
  const outreachImages = GALLERY_IMAGES.slice(0, 28);
  const portraitImages = GALLERY_IMAGES.slice(28, 32);
  const eventImages = GALLERY_IMAGES.slice(32, 35);

  const handlePrev = useCallback(() => {
    setSelectedImageIndex((prev) =>
      prev === null ? null : prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1
    );
  }, []);

  const handleNext = useCallback(() => {
    setSelectedImageIndex((prev) =>
      prev === null ? null : prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1
    );
  }, []);

  const handleClose = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose();
      else if (e.key === 'ArrowLeft') handlePrev();
      else if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedImageIndex, handleClose, handlePrev, handleNext]);

  return (
    <div className="gallery-page">
      <Navbar onDonateClick={() => navigate('/donate')} />

      <main className="gallery-main" id="main-content">
        {/* Top Dotted World Map Background (no world-map-dots) */}
        <div className="gallery-top-map" aria-hidden="true">
          <img
            src="/assets/top-dotted-world-map.png"
            alt=""
            className="gallery-map-img"
          />
        </div>

        <section className="gallery-hero-section" aria-labelledby="gallery-heading">
          <h1 id="gallery-heading" className="gallery-heading">Gallery</h1>
          <p className="gallery-subheading">
            The foundation reaches out to underserved individuals and families, offering support, encouragement, and resources that help improve lives. Through these initiatives, Chresthos seeks to address pressing community needs, restore hope, promote inclusion, and create opportunities for a better future.
          </p>
        </section>

        {/* Gallery Images Container */}
        <section className="gallery-content-section" aria-label="Photo Gallery Collection">
          {/* Section 1: 2-Column Grid (Screenshots 1-5, Photos 1-28) */}
          <div className="gallery-grid-2col">
            {outreachImages.map((item, idx) => {
              const globalIndex = idx;
              return (
                <div
                  key={item.id || globalIndex}
                  className="gallery-card"
                  onClick={() => setSelectedImageIndex(globalIndex)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View photo ${globalIndex + 1} in full size`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedImageIndex(globalIndex);
                    }
                  }}
                >
                  <SkeletonImageLoader
                    src={item.image}
                    alt={item.alt}
                    className="gallery-img"
                    loading={globalIndex < 4 ? 'eager' : 'lazy'}
                  />
                </div>
              );
            })}
          </div>

          {/* Section 2: 4-Column Row (Screenshot 6, Photos 29-32) */}
          <div className="gallery-grid-4col">
            {portraitImages.map((item, idx) => {
              const globalIndex = 28 + idx;
              return (
                <div
                  key={item.id || globalIndex}
                  className="gallery-card gallery-card-portrait"
                  onClick={() => setSelectedImageIndex(globalIndex)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View photo ${globalIndex + 1} in full size`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedImageIndex(globalIndex);
                    }
                  }}
                >
                  <SkeletonImageLoader
                    src={item.image}
                    alt={item.alt}
                    className="gallery-img gallery-img-portrait"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>

          {/* Section 3: 3-Item Row (Screenshot 6, Photos 33-35) */}
          <div className="gallery-flex-3col">
            {eventImages.map((item, idx) => {
              const globalIndex = 32 + idx;
              return (
                <div
                  key={item.id || globalIndex}
                  className="gallery-card gallery-card-event"
                  onClick={() => setSelectedImageIndex(globalIndex)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View photo ${globalIndex + 1} in full size`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedImageIndex(globalIndex);
                    }
                  }}
                >
                  <SkeletonImageLoader
                    src={item.image}
                    alt={item.alt}
                    className="gallery-img gallery-img-event"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* Fullscreen Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          className="gallery-lightbox-overlay"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label="Image Preview"
        >
          <div
            className="gallery-lightbox-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="gallery-lightbox-close-btn"
              onClick={handleClose}
              aria-label="Close image preview"
            >
              &times;
            </button>

            <button
              className="gallery-lightbox-nav-btn gallery-lightbox-prev-btn"
              onClick={handlePrev}
              aria-label="Previous photo"
            >
              &#8249;
            </button>

            <div className="gallery-lightbox-media-wrapper">
              <img
                src={GALLERY_IMAGES[selectedImageIndex].image}
                alt={GALLERY_IMAGES[selectedImageIndex].alt}
                className="gallery-lightbox-img"
              />
              <div className="gallery-lightbox-caption">
                <span className="gallery-lightbox-counter">
                  {selectedImageIndex + 1} / {GALLERY_IMAGES.length}
                </span>
                <span className="gallery-lightbox-title">
                  {GALLERY_IMAGES[selectedImageIndex].alt}
                </span>
              </div>
            </div>

            <button
              className="gallery-lightbox-nav-btn gallery-lightbox-next-btn"
              onClick={handleNext}
              aria-label="Next photo"
            >
              &#8250;
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
