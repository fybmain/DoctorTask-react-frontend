import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link } from 'react-router-dom';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import HelpIcon from '@mui/icons-material/Help';
export const mainListItems = (
  <React.Fragment>
    

        
    <ListItemButton component={Link} to={"/ClinicalStaff/doctormanagement"}>
      <ListItemIcon>
        <MedicalServicesIcon />
      </ListItemIcon>
      <ListItemText primary="Doctor Management" />
    </ListItemButton>

    <ListItemButton component={Link} to={"/ClinicalStaff/patientmanagement"}>
      <ListItemIcon>
       < PersonAddAltIcon />
      </ListItemIcon>
      <ListItemText primary="Patient Management"   />
    </ListItemButton>



    <ListItemButton component={Link} to={"/Analytic"}>
      <ListItemIcon>
       < AutoGraphIcon />
      </ListItemIcon>
      <ListItemText primary="Data Analysis"   />
    </ListItemButton>


    <ListItemButton component={Link} to={"/ClinicalStaff/techsupport"}>
      <ListItemIcon>
        <SupportAgentIcon />
      </ListItemIcon>
      <ListItemText primary="Tech Help" />
    </ListItemButton>
   
  </React.Fragment>
);

