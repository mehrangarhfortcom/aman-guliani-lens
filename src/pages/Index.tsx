import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CustomCursor } from '@/components/CustomCursor';
import { SpotlightOverlay } from '@/components/SpotlightOverlay';
import { Header } from '@/components/Header';
import { IntroSection } from '@/components/IntroSection';
import { GallerySection } from '@/components/GallerySection';
import { FooterSection } from '@/components/FooterSection';

const Index = () => {
  const [isSpotlightActive, setIsSpotlightActive] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fade out spotlight when scrolling into gallery
  const spotlightOpacity = Math.max(0, 1 - (scrollY / window.innerHeight) * 2);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <CustomCursor />
      
      <motion.div
        style={{ opacity: spotlightOpacity }}
        className="fixed inset-0 z-40 pointer-events-none"
      >
        <SpotlightOverlay isActive={isSpotlightActive} />
      </motion.div>

      <div className="relative z-10">
        <Header />
        
        <IntroSection 
          onMouseEnter={() => setIsSpotlightActive(true)}
          onMouseLeave={() => setIsSpotlightActive(false)}
        />
        
        <GallerySection />
        
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;
