import React from "react";
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Grid, 
  CardActionArea, 

} from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { SurgeryPlanning } from "../../components/DoctorComponents/SurgeryPlanning";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import HealingIcon from '@mui/icons-material/Healing';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { Modal, Button, TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

export function DoctorServices() {
    const navigate = useNavigate();
    const doctorId = useOutletContext();

    const services = [
        { icon: HealingIcon, title: "Surgery Planning", description: "Expert surgical planning and post-operative care." },
        { icon: CalendarMonthIcon, title: "Calendar", description: "Doctor Calendar" },
        { icon: MedicalServicesIcon, title: "Doctor Task Management System", description: "All Tasks of the Doctor" },
        // Add more services as needed
        { icon:  EventNoteIcon, title: "Some Other Planning", description: "The Description of other planning" },
    ];

    const [openSurgeryModal, setOpenSurgeryModal] = useState(false);
    const handleCardClick = (title) => {
        // Placeholder for click handler logic
        if (title === "Surgery Planning") {
            setOpenSurgeryModal(true);
        } else if (title === "Calendar") {
            navigate('/calendar');
        } else if (title === "Doctor Task Management System") {
            navigate('/TasksList');
        }
        console.log(`Clicked on ${title}`);
    };

   

    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Doctor Services
            </Typography>
            <Grid container spacing={3}>
                {services.map((service, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card 
                          sx={{ 
                            '&:hover': {
                              boxShadow: 6, // Change the shadow when hovering
                            }
                          }}
                        >
                            <CardActionArea onClick={() => handleCardClick(service.title)}>
                                <CardContent>
                                    <service.icon fontSize="large" />
                                    <Typography variant="h6" sx={{ mt: 1 }}>
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body1">
                                        {service.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            
            {/* SurgeryPlanning Modal */}
            <SurgeryPlanning open={openSurgeryModal} onClose={() => setOpenSurgeryModal(false)} doctorId={doctorId} />
        </Box>
    );
}
