import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'black',
  boxShadow: 24,
  p: 4,
};

const  ModalComponent = ({open,setOpen ,demo,title}) => {

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Grid item xs={12} sx={{display:"flex",justifyContent:"end"}}  onClick={handleClose}>
                <CloseIcon sx={{color:"white"}}/>
                </Grid>   
                <Grid item xs={12} my={0.5}>
                <Typography sx={{fontWeight:"bold",color:"gray"}}>Course Preview</Typography>
            </Grid>         
                <Grid item xs={12} my={1}>
                <Typography sx={{fontWeight:"bold",color:"white"}}>{title}</Typography>
            </Grid>
            <Box 
  component="video" 
  src={demo} 
  width="100%" 
  height="100%" 
  controls 
  autoPlay
/>

        </Box>
      </Modal>
    </div>
  );
}
export default ModalComponent;
