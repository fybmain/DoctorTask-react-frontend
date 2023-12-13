import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function DoctorStaff() {
  return (
    <Container maxWidth="xl" >

<Grid container>
<Grid item xs={6}>
    <Paper sx={{ m:3,p: 4, width: "xl", display: 'flex', flexDirection: 'column' }}>
    <a href="/ClinicalStaff/DoctorTask">Doctor Required Task</a>
    </Paper>
  </Grid>

    <Grid item xs={6}>
      <Paper sx={{ m:3, p: 4, width: "xl", display: 'flex', flexDirection: 'column' }}>
      <a href="/ClinicalStaff/doctormanagement">Contact Doctor</a>
      </Paper>
    </Grid>
        {/* Tasks List */ }
  <Grid item xs={6}>
    <Paper sx={{ m:3,p: 4, width: "xl", display: 'flex', flexDirection: 'column' }}>
    <a href="/ClinicalStaff/calendar">Doctor Schedule</a>
    </Paper>
  </Grid>
  <Grid item xs={6}>
    <Paper sx={{ m:3,p: 4, width: "xl", display: 'flex', flexDirection: 'column' }}>
    <a href="/ClinicalStaff/doctormanagement">Clinic Activity</a>
    </Paper>
  </Grid>
  </Grid>
  </Container>          
                
  );
}
