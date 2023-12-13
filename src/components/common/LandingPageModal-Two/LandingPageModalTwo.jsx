import React from 'react';
import Modal from '../LandingPageModal/LandingPageModal';
import { motion } from "framer-motion";
import '../../../styles/components/LandingPageStyles/LandingPageExtra.css';
import '../../../styles/components/LandingPageStyles/LandingPageHome.css';
import SolutionsBGN from '../../../styles/screens/LandingPageSolutionsVideo';

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};
const ModalButton = ({ onClick, label }) => (
  <motion.button
    className="modal-button"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    {label}
  </motion.button>
);
const LandingPageModalTwo = ({ closeFn = () => null, open = false }) => {
  return (
    <Modal open={open}>
      <div className="modal--mask">
        <motion.div 
        drag
        dragConstraints={{
          top: 0,
          left: 10,
          right: 10,
          bottom: 10,}}
        className="modal blue-gradient"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
          <SolutionsBGN /> 
          <div className="modal--header">
          <br/> <br/><br/> <br/><br/>
          <h2 className="modal--header h2" style={{textAlign: 'center', textShadow: "1px 1.1px 1px rgb(45, 45, 45)"}}>Our Mission</h2>
          </div>
          <div className="modal--body">
          <h2 className="modal--body h2" style={{textAlign: 'center', fontWeight: 'normal', lineHeight: 1.5,textShadow: "1px 1.5px 1px rgb(45, 45, 45)"}}><em>"Engineering Smarter Medicine"</em></h2>
          </div>
          <ModalButton onClick={closeFn} label="Close" />        
        </motion.div>
      </div>     
    </Modal>
  );
};

export default LandingPageModalTwo;
