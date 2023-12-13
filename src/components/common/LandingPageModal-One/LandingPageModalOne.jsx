import React from 'react';
import { motion } from "framer-motion";
import Modal from '../LandingPageModal/LandingPageModal';
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
    type="button"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    {label}
  </motion.button>
);
const LandingPageModalOne = ({ closeFn = () => null, open = false }) => {
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
        className="modal orange-gradient"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
          <SolutionsBGN /> 
          <div className="modal--header">
          <h1 className="modal--header h1" style={{textAlign: 'center', textShadow: "1px 1.1px 1px rgb(45, 45, 45)"}}>About Us</h1>
          </div>
          <div className="modal--body">
          <h1 className="modal--body h1"  style={{textAlign: 'justify',fontWeight: 'normal', lineHeight: 1.5, textShadow: "1px 1.5px 1px rgb(45, 45, 45)"}} >Smart Digital Medicine (SDM) is a specialized Canadian company that is being established to provide specialized healthcare services, big data analytics, and public sector digital transformation. We at SDM develop innovative solutions for different sectors of medicine such as ehealth, mhealth, telemedicine, medical robots and automation (such as robotic surgery), and artificial intelligence-assisted diagnosis. We perfect our big data analytics and innovative medical diagnostic solutions by working with organizations across various healthcare institutes, including hospitals, clinics, labs, research centres, medical doctors, and universities. Our work with multiple types of end users has helped us understand that while many of these institutes could benefit from AI, big data analytics, and breakthrough technologies, only few have the capacity to implement innovative solutions. We will help users to utilize our innovative, comprehensive, highly accurate and smarter clinical reasoning processes and take advantage of data insights until they reach superior patient outcomes which includes but is not limited to the clinical interview, differential medical diagnosis, and treatment plans.</h1>
          </div>
          <ModalButton onClick={closeFn} label="Close" />   
        </motion.div>
      </div>     
    </Modal>
  );
};

export default LandingPageModalOne;