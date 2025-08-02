import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const galleryItems = [
  { name: 'Landscapes', color: 'hsl(0 84% 60%)' },
  { name: 'Architecture', color: 'hsl(217 91% 60%)' },
  { name: 'Portraits', color: 'hsl(160 84% 39%)' },
  { name: 'Street', color: 'hsl(43 96% 56%)' },
  { name: 'Abstract', color: 'hsl(214 32% 18%)' },
];

export const GallerySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !galleryRef.current) return;
      
      const container = containerRef.current;
      const gallery = galleryRef.current;
      const rect = container.getBoundingClientRect();
      
      // Calculate scroll progress when container is in view
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        const progress = Math.min(1, Math.max(0, -rect.top / (rect.height - window.innerHeight)));
        const maxScroll = gallery.scrollWidth - window.innerWidth;
        gallery.style.transform = `translateX(${-progress * maxScroll}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="h-[400vh] relative">
      <div className="gallery-container sticky top-0">
        <div 
          ref={galleryRef}
          className="flex gap-[4vw] pl-[5vw] pr-[40vw] transition-transform duration-100 ease-out"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.name}
              className="gallery-item cursor-pointer"
              style={{ 
                '--glow-color': item.color 
              } as React.CSSProperties}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary px-8 text-hover-effect">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};