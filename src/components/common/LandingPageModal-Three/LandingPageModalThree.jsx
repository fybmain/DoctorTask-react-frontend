import React from 'react';
import Modal from '../LandingPageModal/LandingPageModal';
import { motion } from "framer-motion";
import '../../../styles/components/LandingPageStyles/LandingPageExtra.css';
import '../../../styles/components/LandingPageStyles/LandingPageHome.css';
import { useNavigate } from 'react-router-dom';
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
  
const LandingPageModalThree = ({ closeFn = () => null, open = false }) => {
    const navigate = useNavigate();
    return (
    <Modal open={open}>
      <div className="modal--mask">
        <motion.div 
        drag
        dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,}}
        className="modal gray-gradient"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
          <SolutionsBGN /> 
          
          <div className="modal--header">
          <h4 className="modal--header h4" style={{textAlign: 'center', 
          fontWeight: 'normal', textShadow: "1px 2px 1px rgb(100, 100, 100)"}} 
          >Our e-Hospital platform offers <br/>convenient online consultations, <br/>
          medical records access, and <br/>appointment scheduling. </h4>
          </div>
        
          <div className="modal--header">
          <h5 className="modal--header h5" style={{textAlign: 'center', 
          fontWeight: 'normal',textShadow: "1px 2px 1px rgb(100, 100, 100)" }} 
          >With our Healthcare Provider Digital Twin, <br/>you can monitor and manage
           your health <br/>from the comfort of your home.</h5>
          </div>

          <div className="modal--header">
          <h6 className="modal--header h6" style={{textAlign: 'center', 
          fontWeight: 'normal',textShadow: "1px 2px 1px rgb(100, 100, 100)" }} 
          >Experience the precision<br/> and effectiveness of robotic<br/> surgery for 
          complex medical procedures</h6>
          </div>
          
          <div className="modal--header">
          <h7 className="modal--header h7" style={{textAlign: 'center', 
          fontWeight: 'normal', textShadow: "1px 2px 1px rgb(100, 100, 100)"}} 
          >Our Medical Digital Assistance <br/>provides real-time medical guidance <br/> 
          and support through AI-powered chatbots</h7>
          </div>

          <div className="modal--header">
          <h8 className="modal--header h8" style={{textAlign: 'center', 
          fontWeight: 'normal',textShadow: "1px 2px 1px rgb(100, 100, 100)" }} 
          >Leverage our advanced medical informatics <br/>to analyze patient data and <br/> 
          make informed decisions for better healthcare outcomes</h8>
          </div>

          <div> 
            <button
        type="button"
        className="save-button3"
        onClick={() => {window.location.href="//e-react-frontend-55dbf7a5897e.herokuapp.com/LandingPage"}}
      >
        E-Hospital
      </button>
      </div>
          
      <div> 
            <button
        type="button"
        className="save-button4"
        onClick={() => {window.location.href="http://www.e-hospital.ca/under-developement"}}
      >
        Healthcare Provider Digital Twin
      </button>
      </div>   
      <div> 
            <button
        type="button"
        className="save-button5"
        onClick={() => {window.location.href="http://www.e-hospital.ca/under-developement"}}
      >
        Robotic Surgery
      </button>
      </div>
      <div> 
            <button
        type="button"
        className="save-button6"
        onClick={() => {window.location.href="http://www.e-hospital.ca/under-developement"}}
      >
        Medical Digital Assistance
      </button>
      </div>
      <div> 
            <button
        type="button"
        className="save-button7"
        onClick={() => {window.location.href="http://www.e-hospital.ca/under-developement"}}
      >
        Advanced Medical Informatics
      </button>
      </div>
          <ModalButton onClick={closeFn} label="Close" />
        </motion.div>
      </div>
    </Modal>
  );
};

export default LandingPageModalThree;