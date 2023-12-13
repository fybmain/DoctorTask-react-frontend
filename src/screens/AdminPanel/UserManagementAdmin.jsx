import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function UserManagementAdmin() {
  return (
    <Container maxWidth="xl" >

<Grid container>
<Grid item xs={12}>
    <Paper sx={{ m:3,p: 4, width: "xl", display: 'flex', flexDirection: 'column' }}>
    <a href="/Admin">Consent Directive Management</a>
    </Paper>
  </Grid>

  <Grid item xs={12}>
    <Paper sx={{ m:3,p: 4, width: "xl", display: 'flex', flexDirection: 'column' }}>
    <a href="/Admin">Doctor Information Update Record</a>
    </Paper>
  </Grid>

  </Grid>
  </Container>          
                
  );
}
