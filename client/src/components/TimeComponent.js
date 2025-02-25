import React, { useState } from 'react'
import {Box, Grid, Link, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

const TimeComponent = () => {
    const [token,setToken] = useState(sessionStorage.getItem('token') || null)
  return (
    <>
    <Grid container justifyContent="center">
        <Grid item xs={12} sx={{backgroundColor:"#c2e9eb",justifyContent:"center",}} p={2}>
        <Grid container xs={12} sx={{ display: "flex", alignItems: "center" }}>
 
  <Grid item xs sx={{ display: "flex", flexDirection: {xs:"column",sm:"column"}, alignItems: "center", textAlign: "center" }}>
   {token?  
   <Grid item>
    <Grid item xs={12} sx={{display:{xs:"block",sm:"flex"}}} gap={1}>
        <Typography sx={{fontWeight:"bold"}}>What will you learn next?</Typography><Box component="span" sx={{display:{xs:"none",sm:"flex"}}}>|</Box>
        <Typography sx={{fontSize:{xs:"14px",md:"15px"}}}>Get certifiably skilled. Discover our</Typography>
        <Link href="#" underline="always" sx={{color:"black",display:{xs:"none",sm:"flex"}}} color='rgb(175,114,253)'>
  {'top IT certification courses.'}
</Link>
       
        </Grid>
   </Grid>
   : <Grid item sx={{ display:{xs:"block",sm:"flex"}, justifyContent: "center" }} gap={1}>
      <Typography sx={{ fontWeight: "bold", fontSize: "1rem" }}>New to Udemy</Typography>
      <Box component="span" sx={{display:{xs:"none",sm:"flex"}}}>|</Box>
      <Typography sx={{fontSize:{xs:"14px",md:"15px"}}}>Shop now to get a limited-time offer: courses from ₹449. Or, check </Typography>
      <Link href="#" underline="always" sx={{color:"black",fontSize:{xs:"14px",sm:"15px"},display:{xs:"none",sm:"flex"}}} color='#6d28d2'>
  {'out our subscription.'}
</Link>
   
    </Grid>}
   {!token && <Grid item>
      <Typography sx={{ fontWeight: "bold" }}>Ends in 5h 30m 50s</Typography>
    </Grid>}
  </Grid>

 
  <Grid item>
    <CloseIcon fontSize='medium'/>
  </Grid>
</Grid>

        </Grid>
    </Grid>
    </>
  )
}

export default TimeComponent