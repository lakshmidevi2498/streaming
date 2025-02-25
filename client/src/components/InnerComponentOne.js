import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useLocation, useNavigate } from 'react-router-dom';
import { Tabs, Tab, } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import LanguageIcon from '@mui/icons-material/Language';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import InnerComponentTwo from './InnerComponentTwo';
import InnerComponentThree from './InnerComponentThree';
import FooterComponent from './FooterComponent';
// disablePictureInPicture // Prevents PiP mode




const InnerComponentOne = React.memo(() => {
  const [value, setValue] = useState(0)
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState(null)
  const [id,setId] =useState(null)
  const location = useLocation();
  const navigate = useNavigate()
  const { video } = location.state || {};
  console.log("video object:", video);
  console.log("Type of video:", typeof video);
  console.log("video keys:", Object.keys(video || {}));
  console.log("video._id:", video?._id);
  


  const content = [
    <SearchIcon />, "Overview", "Notes", "Annoucement", "Reviews", "Learning tools"
  ];



  useEffect(() => {
    if (video) {
      setTime(video.hours);
      setId(video._id)
    }
  }, [video]);

  const videoRef = useRef(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTimeUpdate = useCallback(() => {
    if (!video || !videoRef.current) return;
  
    const currentTime = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
  
    if (!duration || isNaN(duration) || duration === 0) return;
  
    const percentage = Math.round((currentTime / duration) * 100);
    setProgress(percentage);
  
    // Store progress for the specific video
    const storedProgress = JSON.parse(localStorage.getItem("videoProgress")) || {};
    storedProgress[video._id] = percentage;
    localStorage.setItem("videoProgress", JSON.stringify(storedProgress));
  
    console.log("Saved Progress for", video._id, ":", percentage);
  }, [video]);
  

  useEffect(() => {
    if (!video || !video._id || !videoRef.current) return;
  
    const storedProgress = JSON.parse(localStorage.getItem("videoProgress")) || {};
    const videoId = video._id;
    const savedProgress = storedProgress[videoId] || 0;
  
    console.log("Loading Video:", videoId, "Saved Progress:", savedProgress);
  
    const handleLoadedMetadata = () => {
      const duration = videoRef.current?.duration;
      if (!isNaN(duration) && duration > 0) {
        videoRef.current.currentTime = (savedProgress / 100) * duration;
        console.log("Set currentTime to:", videoRef.current.currentTime);
      }
    };
  
    videoRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
  
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("loadedmetadata", handleLoadedMetadata);
      }
    };
  }, [video]); 
  

  




  return (
    <Grid conatiner justifyContent="center">
      <Grid item xs={12}>
        <Grid item xs={12} sx={{ backgroundColor: "black", borderBottom: "1px solid gray" }}>
          <Grid ietm xs={12} p={0.5} sx={{ display: "flex", justifyContent: {xs:"center",sm:"space-between"},}}>
            <Grid item sx={{ display: "flex" }} gap={2}>
              <Grid item><Box component='img' src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" width="100%" height="100%" sx={{ width: "100px", height: "50px", cursor: "pointer" }} onClick={() => navigate('/')} /></Grid>
              <Grid item mt={2} sx={{display: {xs:"none",sm:"flex"},}}><Typography sx={{ color: "white",fontSize:{xs:"16px",md:"14px",lg:"16px"} }}>{video?.title}(2025)</Typography></Grid>
            </Grid>
            <Grid item sx={{ display: {xs:"none",md:"flex"}, alignItems: "center", }} gap={2}>
              <Grid item sx={{ display: "flex", }} >
                <StarIcon sx={{ color: "gray" }} fontSize='small' /><Typography sx={{ color: 'white', fontSize:  {xs:"12px",lg:"14px"} }}>Leave a rating</Typography>
              </Grid>
              <Grid item sx={{ display: "flex", }} >
                <Typography sx={{ color: 'white', fontSize: {xs:"12px",lg:"14px"} }}>Your progress</Typography><KeyboardArrowDownIcon sx={{ color: "white" }} fontSize='small' />
              </Grid>
              <Grid item ><Button sx={{ border: "2px solid white", color: "white", textTransform: "inherit" }}>Share  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="m21 12l-7-7v4C7 10 4 15 3 20c2.5-3.5 6-5.1 11-5.1V19z" /></svg>
              </Button>
              </Grid>
              <Grid item ><Button sx={{ border: "2px solid white" }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="white" d="M9 15.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m0-5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m0-5a1.249 1.249 0 1 1 2.5 0a1.25 1.25 0 1 1-2.5 0" /></svg></Button></Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          // spacing={2} 
          sx={{ display: {xs:"block",md:"flex"} }}
        >

          <Grid
            item
            md={8.5}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%"
            }}
          >
            <Grid
              item
              xs={12}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center"
              }}
            >
              <video
                ref={videoRef}
                controls
                controlsList="nodownload"
                onTimeUpdate={handleTimeUpdate}
                style={{ width: "100%", height: "400px", objectFit: "cover" }}
              >
                <source src={video?.videoUrl} type="video/mp4" />
              </video>
            </Grid>

            <Grid item xs={12} p={1}>
              <Grid item xs={12} sx={{ position: 'relative' }}>
                <Tabs
                  value={value}
                  onChange={handleChange}

                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="content tabs"
                  sx={{
                    '& .MuiTabs-indicator': {
                      backgroundColor: 'black !important',
                    },
                    borderBottom: 1,
                    borderColor: 'divider'
                  }}
                >
                  {content.map((item, index) => (
                    <Tab
                      key={index}
                      label={item}

                      sx={{
                        textTransform: 'none',
                        fontSize: '0.8rem',
                        whiteSpace: 'nowrap',
                        fontWeight: 'bold',
                        color: value === index ? 'black' : '#6d6f83',
                        // borderBottom: value === index ? '3px solid black' : 'none', 
                        '&.Mui-selected': {
                          color: 'black !important',
                          borderBottom: '3px solid black !important',
                        },

                      }}
                    />
                  ))}
                </Tabs>

              </Grid>

            </Grid>
            <Grid item xs={12} p={3}>
              <Typography sx={{ fontSize: "20px", fontFamily: "--font-stack-text" }}>{video?.title}</Typography>
            </Grid>

            <Grid item xs={12} px={3} sx={{ display: "flex" }} gap={2}>
              <Grid item sx={{ display: "block" }}>
                <Grid item sx={{ display: "flex", textAlign: "center", margin: "auto" }}>
                  <Typography sx={{ color: "#8c450b", fontWeight: "bold", textAlign: "center" }}>{video?.ratings}</Typography><StarIcon sx={{ color: "#c4710d" }} />
                </Grid>
                <Grid item>
                  <Typography sx={{ fontSize: "12px", textAlign: "center" }}>{video?.ratingCount} ratings</Typography>
                </Grid>

              </Grid>

              <Grid item sx={{ display: "block" }}>
                <Typography sx={{ fontWeight: "bold", textAlign: "center" }}>{video?.reviews}</Typography>
                <Typography sx={{ fontSize: "12px", textAlign: "center" }}>Students</Typography>
              </Grid>

              <Grid item sx={{ display: "block", textAlign: "center" }}>
                <Typography sx={{ fontWeight: "bold" }}>{video?.hours}</Typography>
                <Typography sx={{ fontSize: "12px" }}>Total</Typography>
              </Grid>

            </Grid>

            <Grid item xs={12} px={3} my={1}>
              <Typography sx={{ fontSize: "13px" }}>Last Updated August 2023</Typography>
            </Grid>
            <Grid item xs={12} px={3} sx={{ display: "flex" }} gap={2}>
              <Grid item sx={{ display: "flex" }} gap={.5}>
                <LanguageIcon sx={{ fontSize: "18px" }} /><Typography sx={{ fontSize: "13px" }}>English</Typography>
              </Grid>
              <Grid item sx={{ display: "flex" }} gap={.5}>
                <LanguageIcon sx={{ fontSize: "18px" }} /><Typography sx={{ fontSize: "13px" }}>English[Auto]</Typography>
              </Grid>
            </Grid>

            <Grid item px={3}>
              <Grid item xs={12} my={2} sx={{ display: "flex", border: "2px solid lightgray", borderRadius: 2 }} gap={2} p={1}>
                <Grid item>
                  <AccessAlarmIcon />
                </Grid>
                <Grid item >
                  <Grid item>
                    <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>Schedule learning time</Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={{ fontSize: "13px" }}>Learning a little each day adds up. Research shows that students who make learning a habit are more likely to reach their goals. Set time aside to learn and get reminders using your learning scheduler.</Typography>
                  </Grid>
                  <Grid item my={2} sx={{ display: "flex" }} gap={2}>
                    <Button variant='outlined' sx={{ color: "#6d28d2", border: "2px solid #6d28d2", textTransform: "inherit", fontWeight: "bold" }}>Get started</Button>
                    <Button sx={{ color: "#6d28d2", textTransform: "inherit", fontWeight: "bold" }}>Dismiss</Button>
                  </Grid>
                </Grid>



              </Grid>
            </Grid>

            <InnerComponentTwo />
            <Grid item mt={10}>
              <FooterComponent />
            </Grid>

          </Grid>

          <Grid item md={3.5} sx={{ height: "auto" }}>
            <Grid
              item
              xs={12}
              sx={{
                position: "sticky",
                top: 0,
                height: "auto", // Helps maintain the sticky effect
                overflowY: "auto"
              }} m={0}
            >
              <Grid xs={12} item sx={{}}>
                <InnerComponentThree />
              </Grid>
            </Grid>

          </Grid>


        </Grid>


      </Grid>
    </Grid>
  )
})

export default InnerComponentOne