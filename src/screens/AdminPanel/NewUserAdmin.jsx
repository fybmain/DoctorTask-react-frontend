import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function NewUserAdmin() {
  return (
    <Container maxWidth="xl" >

<Grid container>
<Grid item xs={6}>
    <Paper sx={{ m:3,p: 4, width: "xl", display: 'flex', flexDirection: 'column' }}>
    <a href="/Admin/joinus">Join Us Application</a>
    </Paper>
  </Grid>

    <Grid item xs={6}>
      <Paper sx={{ m:3, p: 4, width: "xl", display: 'flex', flexDirection: 'column' }}>
      <a href="/Admin/newuser">New Patient</a>
      </Paper>
    </Grid>
        {/* Tasks List */ }
  <Grid item xs={6}>
    <Paper sx={{ m:3,p: 4, width: "xl", display: 'flex', flexDirection: 'column' }}>
    <a href="/Admin/newuser">New Doctor</a>
    </Paper>
  </Grid>
  <Grid item xs={6}>
    <Paper sx={{ m:3,p: 4, width: "xl", display: 'flex', flexDirection: 'column' }}>
    <a href="/Admin/newuser">New Clinical Staff</a>
    </Paper>
  </Grid>
  </Grid>
  </Container>          
                
  );
}
