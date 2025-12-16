import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  title: string;
}

const GalleryModal: React.FC<GalleryModalProps> = ({ isOpen, onClose, images, title }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Reset index when modal opens
  React.useEffect(() => {
    if (isOpen) setCurrentIndex(0);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-brown-950/95 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative z-10 w-full max-w-5xl px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute -top-12 right-4 text-white hover:text-brown-200 transition-colors"
            >
              <X size={32} />
            </button>

            <div className="relative aspect-video bg-black overflow-hidden rounded-lg shadow-2xl">
              <img
                src={images[currentIndex]}
                alt={`${title} - View ${currentIndex + 1}`}
                className="w-full h-full object-contain"
              />
              
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-brown-900/50 p-2 rounded-full text-white hover:bg-brown-900/80 transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-brown-900/50 p-2 rounded-full text-white hover:bg-brown-900/80 transition-colors"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
              
              <div className="absolute bottom-4 left-0 right-0 text-center text-white/80 text-sm">
                {currentIndex + 1} / {images.length}
              </div>
            </div>
            
            <h3 className="text-white text-xl font-medium mt-4 text-center">{title}</h3>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default GalleryModal;
