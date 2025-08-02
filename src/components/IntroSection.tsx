import { motion } from 'framer-motion';

interface IntroSectionProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const IntroSection = ({ onMouseEnter, onMouseLeave }: IntroSectionProps) => {
  return (
    <section 
      className="h-screen flex flex-col items-center justify-center text-center relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <motion.h1 
        className="text-6xl md:text-8xl lg:text-9xl xl:text-[8rem] font-bold tracking-tight mb-2 intro-title transition-all duration-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        AMAN GULIANI
      </motion.h1>
      
      <motion.p 
        className="text-muted-foreground text-lg tracking-widest text-hover-effect"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        PHOTOGRAPHY
      </motion.p>
      
      <motion.div 
        className="absolute bottom-12 text-xs uppercase tracking-wider text-muted-foreground text-hover-effect"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
      >
        Scroll to Explore
      </motion.div>
    </section>
  );
};