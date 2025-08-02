import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringText, setIsHoveringText] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over text elements
      const target = e.target as HTMLElement;
      const isText = target.tagName === 'H1' || 
                    target.tagName === 'H2' || 
                    target.tagName === 'H3' || 
                    target.tagName === 'P' || 
                    target.tagName === 'A' || 
                    target.tagName === 'SPAN' ||
                    target.classList.contains('text-hover-effect') ||
                    target.closest('h1, h2, h3, p, a, span, [class*="text-"]');
      
      setIsHoveringText(!!isText);
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <motion.div
      className={`custom-cursor ${isHoveringText ? 'cursor-transparent' : ''}`}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 400,
        mass: 0.5,
      }}
    />
  );
};