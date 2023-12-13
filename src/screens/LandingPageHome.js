import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import LandingPageVideo from '../styles/screens/LandingPageVideo';
import AppShell from './LandingPageAppShell';
import '../styles/components/LandingPageStyles/LandingPageHome.css';
import '../styles/components/LandingPageStyles/LandingPageExtra.css';
import {motion} from "framer-motion";

const LandingPageHome = () => {

  const text="Revolutionzing Healthcare"
  const text2="Explore Our Smart Digital Medicine Solutions"
  const letters = Array.from(text2);
  const words = text.split("")
  const words2 = text2.split("")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };
  const container2 = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.04 * i },
    }),
  };

  const child2 = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

    ReactDOM.render(
      
  <StrictMode>
    <AppShell />
    <div className="landing-body">
    <LandingPageVideo />
    <h1 className="landing-h1" style={{textShadow: "1px 3px 1px rgb(45, 45, 45)"}}>Smart Digital Medicine</h1>
          </div>
          <motion.div
            style={{ overflow: "hidden", display: "flex", fontSize: "4rem",        
            justifyContent: "center",
            color: "white",
            textShadow: "1px 1.1px 1px rgb(45, 45, 45)"
            }}
            variants={container}
            initial="hidden"
            animate="visible"
            >
            {words.map((word, index) => (
              <motion.span
                variants={child}
                style={{ marginRight: "5px" }}
                key={index}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
              style={{ overflow: "hidden", display: "flex", fontSize: "3.5rem",

              justifyContent: "center",
              color: "white",
              textShadow: "1px 1.1px 1px rgb(45, 45, 45)"
              }}

              variants={container2}
              initial="hidden"
              animate="visible"
              >
              {letters.map((letter, index) => (
                <motion.span
                  variants={child2}
                  key={index}>
              {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
          </motion.div>
          <div className="landing-body" style={{ display: "flex", fontSize: "2rem",
      
            justifyContent: "center",
            color: "white",
            textShadow: "1px 1.1px 1px rgb(45, 45, 45)",
            paddingTop: "120px",
            }}>
              <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {window.location.href="LandingPage"}}
              // className="save-buttonZ"
              >
              Get started!
              </motion.button>
          </div>
  </StrictMode>,
  document.getElementById('root')
);
};
export default LandingPageHome;