import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function PatientStaff() {
  return (
    <Container maxWidth="xl" >

<Grid container>
<Grid item xs={6}>
    <Paper sx={{ m:3,p: 4, width: "xl", display: 'flex', flexDirection: 'column' }}>
    <a href="/ClinicalStaff/NewPatient">Add new patient</a>
    </Paper>
  </Grid>

    <Grid item xs={6}>
      <Paper sx={{ m:3, p: 4, width: "xl", display: 'flex', flexDirection: 'column' }}>
      <a href="/ClinicalStaff/patientmessage">Contact Patient</a>
      </Paper>
    </Grid>
        {/* Tasks List */ }
  <Grid item xs={6}>
    <Paper sx={{ m:3,p: 4, width: "xl", display: 'flex', flexDirection: 'column' }}>
    <a href="/ClinicalStaff/patientmanagement">Patient Status</a>
    </Paper>
  </Grid>
  <Grid item xs={6}>
    <Paper sx={{ m:3,p: 4, width: "xl", display: 'flex', flexDirection: 'column' }}>
    <a href="/ClinicalStaff/patientmanagement">Consent Directive Management</a>
    </Paper>
  </Grid>
  </Grid>
  </Container>          
                
  );
}
