import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

const TrainingComponent = () => {
  return (
    <>
    <Grid container justifyContent ="center" my={5}>
        <Grid item xs={10} sx={{backgroundColor:"#1d1e27",borderRadius:"10px",p:3}}>
            <Grid item sx={{display:{xs:"block",sm:"flex"},justifyContent:{sm:"space-between"}}}>
                <Grid item sx={{color:'white',display:{xs:"inline",lg:"flex"}   ,alignItems:"center"}} >
                    <Typography sx={{fontWeight:"bold"}}>Training 2 or more people?</Typography><Typography>Get your team access to Udemy's top 27,000+ courses</Typography>
                </Grid>
                <Grid item>
                    <Grid item sx={{display:{xs:"block",sm:"flex"}}} gap={1} >
                        <Button varinat ="contained" sx={{color:"black",backgroundColor:"white",textTransform:"inherit",fontWeight:"bold",my:{xs:1,sm:0}}}>Get Udem Business</Button>
                        <Button varinat = "outlined" sx={{color:"white",border:"2px solid white",textTransform:"inherit"}}>Dismiss</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    </>
  )
}

export default TrainingComponent