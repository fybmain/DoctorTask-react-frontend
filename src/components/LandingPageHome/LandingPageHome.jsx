import React from 'react';
import { AnimatePresence, motion } from "framer-motion";
import '../../styles/components/LandingPageStyles/LandingPageExtra.css';

const LandingPageHome = ({}) => {
  
  return (
    
    <main className="app--screen screen--one">
      <div style={{ display: 'flex', columnGap: 25 }}>
        <motion.button
        whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          data-modal="LandingPageModal-One"
          className="save-button2"
          >
          About Us
          </motion.button>
        <motion.button
        whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          data-modal="LandingPageModal-Two"
          className="save-button2"
          >
          Our Mission
          </motion.button>
        <motion.button
        whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          data-modal="LandingPageModal-Three"
          className="save-button2"
          >
          AI Solutions
          </motion.button>
        <motion.button
        whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          data-modal="LandingPageModal-Four"
          className="save-button2"
          >
          Contact Us
          </motion.button>
      </div>
    </main>
  );
};

export default LandingPageHome;