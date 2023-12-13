import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MessageIcon from '@mui/icons-material/Message';
import PeopleIcon from '@mui/icons-material/People';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import DeviceUnknownIcon from '@mui/icons-material/DeviceUnknown';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { Link } from 'react-router-dom';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import HelpIcon from '@mui/icons-material/Help';
export const mainListItems = (
  <React.Fragment>
    

    <ListItemButton component={Link} to={"/Admin/newuser"}>
      <ListItemIcon>
        <PersonAddAlt1Icon />
      </ListItemIcon>
      <ListItemText primary="New User Registration" />
    </ListItemButton>

    <ListItemButton component={Link} to={"/Admin/usermanagement"}>
      <ListItemIcon>
        <PersonAddAlt1Icon />
      </ListItemIcon>
      <ListItemText primary="User Management" />
    </ListItemButton>
    
    <ListItemButton component={Link} to={"/Admin/helpinquiry"}>
      <ListItemIcon>
        <MedicalServicesIcon />
      </ListItemIcon>
      <ListItemText primary="Help Inquiry" />
    </ListItemButton>

    
    <ListItemButton component={Link} to={"/Admin/Message"}>
      <ListItemIcon>
       < HelpIcon />
      </ListItemIcon>
      <ListItemText primary="Messages"   />
    </ListItemButton>



    <ListItemButton component={Link} to={"/Admin/data"}>
      <ListItemIcon>
       < AutoGraphIcon />
      </ListItemIcon>
      <ListItemText primary="Data Analysis"   />
    </ListItemButton>

  

  </React.Fragment>
);

