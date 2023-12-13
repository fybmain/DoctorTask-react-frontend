import React from "react";
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Grid, 
  CardActionArea, 

} from "@mui/material";
import HealingIcon from '@mui/icons-material/Healing';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { SurgeryPlanning } from "../../components/DoctorComponents/SurgeryPlanning";
export function DoctorServices() {
    const doctorId = useOutletContext();

    const services = [
        { icon: HealingIcon, title: "Surgery Planning", description: "Expert surgical planning and post-operative care." },
        // Add more services as needed
        { icon:  EventNoteIcon, title: "Some Other Planning", description: "The Description of other planning" },
    ];

    const [openSurgeryModal, setOpenSurgeryModal] = useState(false);
    const handleCardClick = (title) => {
        // Placeholder for click handler logic
        if (title === "Surgery Planning") {
            setOpenSurgeryModal(true);
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
