import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Avatar, Grid, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LanguageIcon from '@mui/icons-material/Language';

const MenuComponent = ({toggleDrawer,open ,setOpen}) => {


  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List sx={{backgroundColor:"gray"}}>
      <Grid item sx={{display:"flex",}} gap={2} p={1}>
             <Avatar sx={{backgroundColor:"black",fontWeight:"bold"}}>U</Avatar>
             <Grid item sx={{display:"block"}}> 
             <Typography  sx={{fontWeight:"bold"}}>Hi User</Typography>
             <Typography>Welcome</Typography>
             </Grid>
          
            
     </Grid>
     
      </List>
      <Divider />
      <Typography sx={{color:"gray",fontWeight:"bold",p:1}}>Learn</Typography>
      <Typography sx={{color:"gray",p:1}}>Mt Learning</Typography>
      <Divider />
      <Grid item sx={{display:"flex",justifyContent:"space-between"}}p={1}>
      <Typography>Certification preparation</Typography>
       <ChevronRightIcon />
      </Grid>
      <Divider />
      <List>
      <Typography sx={{color:"gray",fontWeight:"bold",p:1}}>Most Popular</Typography>
        {['Web Development', 'Mobile Development', 'Game Development' ,'Enterpreneurship','Finance','IT Certifications','Personal Transformation','Digital Marketing','All categories'].map((text, index) => (
        
            <Grid item sx={{display:"flex",justifyContent:"space-between"}}p={1}>
              <Grid item>
      <Typography>{text}</Typography>
      </Grid>
      <Grid item>
       <ChevronRightIcon />
       </Grid>
      </Grid> 
        ))}
      </List>
      <Divider />
      <List>
      <Typography sx={{color:"gray",fontWeight:"bold",p:1}}>Most Popular</Typography>
        {['Udemy Business', 'Get the App', 'Invite friends' ,'Help and support'].map((text, index) => (
        
            <Grid item sx={{display:"flex",justifyContent:"space-between"}}p={1}>
              <Grid item>
      <Typography>{text}</Typography>
      </Grid>
      <Grid item>
       <ChevronRightIcon />
       </Grid>
      </Grid> 
        ))}
        
      </List>
      <Button variant='outlined' sx={{border:"2px solid #6d28d2" ,color:"#6d28d2"}}><LanguageIcon sx={{ml:1}}/> English</Button>
    </Box>
  );

  return (
    <div>
  
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default MenuComponent
