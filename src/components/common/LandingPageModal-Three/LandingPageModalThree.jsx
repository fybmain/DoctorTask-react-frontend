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
          top: 0,
          left: 10,
          right: 10,
          bottom: 10,}}
        className="modal gray-gradient"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
          <SolutionsBGN /> 
          <div className="modal--header">
          <h4  className="modal--header h4" style={{
          fontWeight: 'normal', textShadow: "1px 2px 1px rgb(45, 45, 45)"}} 
          >Our <font color= "lightgreen" >e-Hospital</font> platform offers Comprehensive<br/>
           Medical Health Records, a Centeric Medical <br/>Chatbot,and Medical Tasks Planning. </h4>
          </div>


          <div className="modal--header">
          <h4  className="modal--header h4" style={{
          fontWeight: 'normal', textShadow: "1px 2px 1px rgb(45, 45, 45)"}} 
          >With our <font color= "lightgreen" >Healthcare Provider Digital Twin</font>, <br/>you can monitor and manage
          your health <br/>from the comfort of your home.</h4>
          </div>

          <div className="modal--header">
          <h4  className="modal--header h4" style={{
          fontWeight: 'normal', textShadow: "1px 2px 1px rgb(45, 45, 45)"}} 
          >Experience the precision<br/> and effectiveness of <font color= "lightgreen" >Robotic Surgery</font> for <br/>
          complex medical procedures.</h4>
          </div>

          <div className="modal--header">
          <h4  className="modal--header h4" style={{
          fontWeight: 'normal', textShadow: "1px 2px 1px rgb(45, 45, 45)"}} 
          >Leverage our <font color= "lightgreen" >Intelligent Health Informatics</font> <br/>to analyze patient data and make informed<br/> 
           decisions for better healthcare outcomes.</h4>
          </div>

          <div className="modal--header">
          <h4  className="modal--header h4" style={{
          fontWeight: 'normal', textShadow: "1px 2px 1px rgb(45, 45, 45)"}} 
          ><font color= "lightgreen" >Our Medical Digital Assistance </font><br/>provides real-time medical guidance <br/> 
          and support through AI-powered chatbots.</h4>
          </div>

          <div > 
          <button
          type="button"
          className="save-buttonY"
          style={{
          width: "25%", margin: 0,
          fontWeight: 'normal',textShadow: "1px 2px 1px rgb(100, 100, 100)" }} 
          onClick={() => {window.location.href="LandingPage"}}
          >
          E-Hospital
          </button>
          </div>

          <div > 
          <button
          type="button"
          className="save-buttonY1"
          style={{
          width: "25%", margin: 0,
          fontWeight: 'normal',textShadow: "1px 2px 1px rgb(100, 100, 100)" }} 
          onClick={() => {window.location.href="http://www.e-hospital.ca/under-developement"}}
          >
          Healthcare Provider Digital Twin
          </button>
          </div>

          <div > 
          <button
          type="button"
          className="save-buttonY2"
          style={{
          width: "25%", margin: 0,
          fontWeight: 'normal',textShadow: "1px 2px 1px rgb(100, 100, 100)" }} 
          onClick={() => {window.location.href="http://www.e-hospital.ca/under-developement"}}
          >
          Robotic Surgery
          </button>
          </div>

          <div > 
          <button
          type="button"
          className="save-buttonY3"
          style={{
          width: "25%", margin: 0,
          fontWeight: 'normal',textShadow: "1px 2px 1px rgb(100, 100, 100)" }} 
          onClick={() => {window.location.href="http://www.e-hospital.ca/under-developement"}}
          >
          Advanced Medical Informatics
          </button>
          </div>

          <div > 
          <button
          type="button"
          className="save-buttonY4"
          style={{
          width: "25%", margin: 0,
          fontWeight: 'normal',textShadow: "1px 2px 1px rgb(100, 100, 100)" }} 
          onClick={() => {window.location.href="http://www.e-hospital.ca/under-developement"}}
          >
          Medical Digital Assistance
          </button>
          </div>
          <ModalButton onClick={closeFn} label="Close" />
        </motion.div>
      </div>
    </Modal>
  );
};

export default LandingPageModalThree;
