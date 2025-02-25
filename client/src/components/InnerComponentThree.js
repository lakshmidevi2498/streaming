import { Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';


const InnerComponentThree = () => {

    const content = [{name:"6.Create User model with Authentication Token",time:"6"},{name:"7.Sign Up API",time:"8"},{name:"8.Test Sign Up with Postman",time:"7"},{name:"9.Sign In API",time:"9"},{name:"10.Logout API",time:"9"}]
    const contentOne =[{name:"Section 1:Introduction",time:"0/2 | 1min"},{name:"Section 2:Basic Rails Api  Application",time:"0/3 | 6min"},{name:"Section 3:Authnetication System",time:"1/5 | 41min"},{name:"Section 4:Login Facebook via API",time:"0/4 | 16min"},{name:"Section 5:Customizing JSON Response",time:"0/4 | 37min"},{name:"Section 6:Some techniques to improve Rails performance",time:"0/2 | 13min"},{name:"Upload image using API",time:"0/2 | 10min"},]
  return (
    <>
   
        <Grid item xs={12} sx={{}}>
            <Grid item sx={{display:"flex",justifyContent:"space-between"}}p={1.5}>
                <Typography sx={{fontFamily: "--font-stack-text",fontWeight:"bold" }}>Course Content</Typography>
                <CloseIcon fontSize='small'/>
            </Grid>
            <Grid item xs={12}><Divider/></Grid>

            {           contentOne.map((cont,iindex)=>(
           <Accordion key={iindex} defaultExpanded={iindex === 2}>

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
        <FormControlLabel control={<Checkbox   color="secondary" size="small"/>} label={<Grid item sx={{}}><Typography sx={{fontFamily:"--font-stack-text",fontSize:"15px",marginY:"0.5"}}>{item.name}</Typography> </Grid>  }  />
           
        </FormGroup> 
     <Grid item sx={{display:"flex"}} gap={1} my={.5} ml={3}>
     <OndemandVideoIcon sx={{color:"#9fa1b7",marginTop:0.1}} fontSize="small"/><Typography sx={{fontFamily: "--font-stack-text",color:"#9fa1b7"}}>{item.time} min</Typography>
</Grid>
</> ))}
      
        </AccordionDetails>
      </Accordion>
      )) 
}

        </Grid>
    
    </>
  )
}

export default InnerComponentThree