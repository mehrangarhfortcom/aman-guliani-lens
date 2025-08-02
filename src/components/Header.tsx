import { motion } from 'framer-motion';

export const Header = () => {
  return (
    <motion.header 
      className="header-blur"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="font-bold text-2xl tracking-tight text-hover-effect">AG</div>
      <nav className="flex items-center space-x-10">
        <a 
          href="#work" 
          className="text-sm font-medium nav-link transition-colors duration-300"
        >
          Work
        </a>
        <a 
          href="#about" 
          className="text-sm font-medium nav-link transition-colors duration-300"
        >
          About
        </a>
        <a 
          href="#contact" 
          className="text-sm font-medium nav-link transition-colors duration-300"
        >
          Contact
        </a>
      </nav>
    </motion.header>
  );
};