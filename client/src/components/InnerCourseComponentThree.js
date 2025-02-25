import { Grid, Typography } from '@mui/material'
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const InnerCourseComponentThree = ({data}) => {
    const content = [{name:"6.Create User model with Authentication Token",time:"6"},{name:"7.Sign Up API",time:"8"},{name:"8.Test Sign Up with Postman",time:"7"},{name:"9.Sign In API",time:"9"},{name:"10.Logout API",time:"9"}]
    const contentOne =[{name:"Introduction",},{name:"Section 2:Basic Rails Api  Application",time:"0/3 | 6min"},{name:"Section 3:Authnetication System",time:"1/5 | 41min"},{name:"Section 4:Login Facebook via API",time:"0/4 | 16min"},{name:"Section 5:Customizing JSON Response",time:"0/4 | 37min"},{name:"Section 6:Some techniques to improve Rails performance",time:"0/2 | 13min"},{name:"Upload image using API",time:"0/2 | 10min"},]
 
  return (
    <>
    <Grid container justifyContent="center">
        <Grid item xs={12} sx={{color:"black"}}>
              <Grid item xs={12} >
                <Typography sx={{fontWeight:"bold",fontSize:{xs:"20px",sm:"25px"}}}>Course content</Typography>
              </Grid>
              <Grid item xs={12} sx={{display:"flex",justifyContent:"space-between"}}>
                <Grid item>
                <Typography sx={{color:"#595c73",fontSize:'13px'}}>5 sections • 40 lectures • {data?.totalHours} total length</Typography>
                </Grid>
                <Grid item my={1}>
                    <Typography sx={{fontSize:{xs:"10px",sm:"15px"},color:"#6d28d2",fontWeight:"bold"}}>Expand all sections</Typography>
                </Grid>
              </Grid>

              <Grid item xs={12}>
              {           contentOne.map((cont,iindex)=>(
           <Accordion key={iindex} defaultExpanded={iindex === 0} sx={{backgroundColor:"#f6f7f9"}}>

        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >

    <Grid item xs={12} >
          <Grid item sx={{display:"flex"}}>
                <Typography sx={{fontWeight:"bold",fontFamily: "--font-stack-text"}}>{cont.name}</Typography>
                </Grid>
                <Typography sx={{fontFamily: "--font-stack-text"}}>{cont.time}</Typography>
            </Grid>

        </AccordionSummary>
        <AccordionDetails>
        {content.map((item,index)=>(
            <>
            <FormGroup>
        {/* <FormControlLabel control={<Checkbox   color="secondary" size="small"/>} label={<Grid item sx={{}}><Typography sx={{fontFamily:"--font-stack-text",fontSize:"15px",marginY:"0.5"}}>{item.name}</Typography> </Grid>  }  />
            */}
        </FormGroup> 
     
</> ))}
      
        </AccordionDetails>
      </Accordion>
      )) 
}

              </Grid>
        </Grid>
    </Grid>
    </>
  )
}

export default InnerCourseComponentThree