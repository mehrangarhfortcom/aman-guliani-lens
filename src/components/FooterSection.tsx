import { motion } from 'framer-motion';

export const FooterSection = () => {
  return (
    <motion.footer 
      className="bg-card pt-24 pb-16 px-8 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2 
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Let's Connect
      </motion.h2>
      
      <motion.p 
        className="text-lg text-muted-foreground mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Have a project in mind or just want to say hello?
      </motion.p>
      
      <motion.a 
        href="mailto:hello@amanguliani.com" 
        className="text-xl text-primary hover:text-muted-foreground mb-12 inline-block transition-colors duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        hello@amanguliani.com
      </motion.a>
      
      <motion.p 
        className="text-sm text-muted-foreground mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        &copy; 2025 Aman Guliani. All Rights Reserved.
      </motion.p>
    </motion.footer>
  );
};