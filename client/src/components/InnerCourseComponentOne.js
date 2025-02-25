import { Box, Button, Chip, Divider, Grid, Rating, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardAltOutlinedIcon from '@mui/icons-material/KeyboardAltOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import StarIcon from '@mui/icons-material/Star';
import PeopleIcon from '@mui/icons-material/People';
import InnerCourseComponentTwo from './InnerCourseComponentTwo';
import InnerCourseComponentThree from './InnerCourseComponentThree';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModalComponent from './ModalComponent';
import CloseIcon from '@mui/icons-material/Close';

const InnerCourseComponentOne = () => {
  const [data, setData] = useState([])
  const [demo, setDemo] = useState(null)
  const [modal, setModal] = useState(false)
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = useState(null)
  const location = useLocation();
  const { video } = location.state || {};
  console.log("video", video)
  useEffect(() => {


    setData(video)

  }, [video])

  const handleShowVideo = (demo, title) => {
    setModal(true)
    setOpen(true)
    setDemo(demo)
    setTitle(title)

  }


  return (
    <>
      <Grid container justifyContent='center' mb={{xs:380,sm:330,md:200}}>
        <Grid item xs={12} sx={{ justifyContent: "center" , }}>
          <Grid item xs={12} sx={{ backgroundColor: "#1d1e27", color: {xs:"black",md:"white"}, height: {xs:"450px",sm:"310px"} ,}} py={2}>
            <Grid item xs={10}md={11} lg={8.5} sx={{ justifyContent: "center", alignItems: "center", textAlign: "start", marginX: "auto", height: "auto", }}>
              <Grid item xs={12} sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between"  }} gap={10}>
                <Grid item md={8} sx={{  height: "100vh", order:{xs:2,md:1}}}>
                  <Grid item xs={12} sx={{ color: "#bac4fc", alignItems: "center", display: "flex", }}>
                    <Grid item><Typography sx={{ fontWeight: "bold", fontSize: "12px",display:{xs:"none",sm:"block"} }}>Design </Typography></Grid>
                    <Grid item mt={.4}><ChevronRightIcon fontSize="small" sx={{display:{xs:"none",sm:"block"} }}/></Grid>
                    <Grid item><Typography sx={{ fontWeight: "bold", fontSize: "12px",display:{xs:"none",sm:"block"}  }}>Graphic Design & Illustration </Typography></Grid>
                    <Grid item mt={.4}><ChevronRightIcon fontSize="small" sx={{display:{xs:"none",sm:"block"} }} /></Grid>
                    <Grid item> <Typography sx={{ fontWeight: "bold", fontSize: "12px" }}>{data?.course}</Typography></Grid>
                  </Grid>

                  <Grid item xs={12} my={2} sx={{ color: {xs:"black",md:"white"} }}>
                    <Typography sx={{ fontSize: {xs:"14px",sm:"25px"},  color: {xs:"black",md:"white"}, fontWeight: "bold" }}>{data?.title}</Typography>
                  </Grid>
                  <Grid item xs={12} my={2}>
                    <Typography sx={{ fontSize: "15px",  color: {xs:"black",md:"white"} }}>{data?.description}</Typography>
                  </Grid>
                  <Grid item xs={12} sx={{ display: "flex" }} gap={0.5}>
                    <Typography sx={{  color: {xs:"black",md:"white"}, fontSize: "12px" }}>Created by</Typography><Typography sx={{ color: "#bac4fc", textDecoration: "underline", fontSize: "12px" }}>{data?.creator}</Typography>
                  </Grid>

                  <Grid item my={2}>
                    <Grid item sx={{ display: {xs:"block",sm:"flex"} }} gap={1}>
                      <Grid item >
                        <NewReleasesIcon sx={{ fontSize: "15px" }} />
                      </Grid>
                      <Typography sx={{ fontSize: "13px" }}>Last updated 1/2025</Typography>
                      <Grid item >
                        <LanguageIcon sx={{ fontSize: "15px" }} />
                      </Grid>
                      <Typography sx={{ fontSize: "13px" }}>English</Typography>
                      <Grid item >
                        <KeyboardAltOutlinedIcon sx={{ fontSize: "15px" }} />
                      </Grid>
                      <Typography sx={{ fontSize: "13px" }}>English [Auto], Arabic [Auto], </Typography>
                      <Typography sx={{ textDecoration: "underline", color: "#bac4fc", fontSize: "13px" }}>14 more</Typography>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sx={{ border: "1px solid lightgray", display: {xs:"none",sm:"flex"}, backgroundColor: "white", color: "black", borderRadius: 2 }} gap={2}>
                    <Grid
                      item
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#5022c3",
                        borderTopLeftRadius: "8px",
                        borderBottomLeftRadius: "8px",
                      }}
                      xs={2}
                    >
                      <VerifiedOutlinedIcon sx={{ color: "white" }} />
                      <Typography sx={{ fontWeight: "bold", color: "white" }}>Premium</Typography>
                    </Grid>

                    <Grid item py={1} xs={5}>
                      <Box sx={{ display: "inline", fontSize: "14px" }}>
                        Access this top-rated course, plus 12,000+ more top-rated courses, with a Udemy plan
                        <Box
                          component="span"
                          sx={{
                            color: "#5022c3",
                            fontWeight: "bold",
                            textDecoration: "underline",
                            fontSize: "15px",
                            marginLeft: "4px"
                          }}
                        >
                          See Plans & Pricing
                        </Box>
                      </Box>
                    </Grid>

                    <Grid
                      item
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        margin: "auto",
                        borderLeft: "1px solid lightgray",
                        borderRight: "1px solid lightgray",
                      }}
                      xs={3}
                    >
                      <Typography sx={{ fontWeight: "bold", color: "black", textAlign: "center", fontSize: "25px" }}>
                        {data?.star}
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Rating
                          name="text-feedback"
                          value={Number(data?.star) || 0}
                          readOnly
                          precision={0.5}
                          sx={{ fontSize: "15px", color: "#c67515" }}
                          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                      </Box>
                      <Typography sx={{ textDecoration: "underline", color: "#595c73", fontSize: "13px" }}>
                        {data?.rating} ratings
                      </Typography>
                    </Grid>
                    <Grid item xs={3} sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      margin: "auto",
                      py: 1
                    }}>
                      <PeopleIcon />
                      <Typography sx={{ fontWeight: "bold" }}>{data?.learner}</Typography>
                      <Typography sx={{ color: "#595c73", fontSize: "13px" }}>learners</Typography>
                    </Grid>

                  </Grid>
               <Grid item sx={{position:"relative"}}>
                  <InnerCourseComponentTwo data={data} />
                  <InnerCourseComponentThree data={data} />
                  </Grid>
                </Grid>


                <Grid item md={4} sx={{
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  borderRadius: "8px",
                  p: 2,
                  bgcolor: "white",
                //   position: "sticky",
                // top:30,
                height: "auto",  
                overflowY: "auto",
                order:{xs:1,md:2}
                }}>
                  <Grid item xs={12} sx={{}}>
                    <Grid item onClick={() => handleShowVideo(data.demoUrl, data.title)}>
                      <Box component='img' src={data?.demoImage} width="100%" height='100%' sx={{ border: "2px solid y" }} />
                    </Grid>


                    <Grid item sx={{ backgroundColor: "white", color: "black" }}>
                      <Grid item sx={{ display: "flex", textAlign: "center", backgroundColor: "white", borderBottom: " 2px solid lightgray" }} xs={12} gap={2} >
                        <Grid item xs={6} py={1} sx={{ borderBottom: " 2px solid black", }}>
                          <Typography sx={{ color: "black", fontWeight: "bold" }}>Personal</Typography>
                        </Grid>
                        <Grid item xs={6} py={1}>
                          <Typography sx={{ color: "gray", fontWeight: "bold" }}>Teams</Typography>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} px={2} sx={{ backgroundColor: "white" }}>
                        <Grid item xs={12} sx={{ display: "flex", }} gap={1} my={1}>
                          <VerifiedOutlinedIcon sx={{ color: "#5022c3", fontSize: "15px" }} />
                          <Typography sx={{ color: "gray", fontSize: "13px" }}>This Premium course is included in plans</Typography>
                        </Grid>
                        <Grid item sx={{ display: "flex", alignItems: 'center' }} gap={2} my={.5}>
                          <Typography sx={{ fontWeight: "bold", color: "black", fontSize: "22px" }}>₹{data?.rate}</Typography>
                          <Typography sx={{ color: "#595c73", fontSize: "16px", textDecoration: "line-through" }}>₹{data?.discount}</Typography>
                          <Typography sx={{ color: "#595c73", fontSize: "16px", display:{xs:"none",sm:"flex"}}}>₹{data?.percentage} % off</Typography>
                        </Grid>

                        <Grid item sx={{ display: "flex", color: "red", }} >
                          <AccessAlarmsIcon sx={{ fontSize: "medium" }} />&nbsp;&nbsp;
                          <Typography sx={{ fontWeight: "bold", fontSize: "13px" }}>1 day&nbsp;</Typography><Typography sx={{ fontSize: "13px" }}>left at this price!</Typography>
                        </Grid>
                        <Grid item sx={{ display: "flex" }} gap={2} xs={12} mt={2}>
                          <Grid item xs={10} sx={{justifyContent:"center",display:"flex"}}>
                            <Button sx={{
                              color: "white", backgroundColor: "#5022c3", textTransform: "inherit",
                              px: {xs:2,sm:8,md:2,lg:7}, py: 1.2,
                              fontWeight: "bold"
                            }}>Add to cart</Button>
                          </Grid>
                          <Grid item xs={2} sx={{}}>
                            <Box sx={{ display: "inline-block", color: "#5022c3", border: "1px solid #5022c3", borderRadius: "50%", p: 1 }}><FavoriteBorderIcon sx={{ fontSize: "24px", color: "5022c3", display: "flex" }} /></Box>
                          </Grid>
                        </Grid>

                        <Grid item xs={12} mt={.5} sx={{justifyContent:"center",display:"flex"}}>
                          <Button variant='outlined' sx={{ border: "2px solid #5022c3", color: "#5022c3", paddingX: {xs:"50px",sm:"104px",md:"80px",lg:"80px"}, textTransform: "inherit" }}>Buy now</Button>
                        </Grid>


                      </Grid>

                    </Grid>
                    <Grid item xs={12} sx={{ color: "black", textAlign: "center" }} my={1}>
                      <Typography sx={{ fontSize: "12px" }}>30-Day Money-Back Guarantee</Typography>
                      <Typography sx={{ fontSize: "12px" }}> Full Lifetime Access</Typography>
                    </Grid>
                    <Grid item sx={{ display: "flex", justifyContent: "space-between" }} px={2}>
                      <Typography sx={{ borderBottom: "2px solid #6d28d2", color: "black", fontSize: {xs:"10px",sm:"13px"} }}>Start</Typography>
                      <Typography sx={{ borderBottom: "2px solid #6d28d2", color: "black", fontSize: {xs:"10px",sm:"13px"} }}>Gift this Course</Typography>
                      <Typography sx={{ borderBottom: "2px solid #6d28d2", color: "black", fontSize: {xs:"10px",sm:"13px"} }}>Apply Coupon</Typography>
                    </Grid>

                    <Grid item sx={{ border: "1px dashed lightgray" }} my={2}>
                      <Grid item sx={{ display: "flex", justifyContent: 'space-between' }} p={1}>
                        <Grid item>
                          <Typography sx={{ fontWeight: "bold", fontSize: {xs:"12px",sm:"14px"}, color: "black" }}>ST4MT240225A is applied</Typography>
                          <Typography sx={{ fontWeight: "medium", fontSize: "13px", color: "gray" }}>Udemy coupon</Typography>
                        </Grid>
                        <Grid item><CloseIcon sx={{ color: "#6d28d2" }} /></Grid>
                      </Grid>
                    </Grid>
                    <Grid item sx={{ display: {xs:"block",sm:"flex"}, justifyContent: 'space-between' }} p={1} gap={2}>
                      <Grid item>
                        <TextField placeholder='Enter coupon' size='small' />
                      </Grid>
                      <Grid item mt={{xs:1,sm:0}}><Button variant="contained" sx={{ backgroundColor: "#6d28d2", textTransform: "inherit", fontWeight: "bold" }}>Apply </Button></Grid>
                    </Grid>

                    <Grid item sx={{ display: 'flex', color: "black" }}>
                      <Divider sx={{ display: "flex", alignItems: "center", color: "black", width: "100%" }}>
                        <Chip label="or" size="small" />
                      </Divider>

                    </Grid>

                    <Grid item xs={12} my={1}>
                      <Typography sx={{ fontWeight: "bold", color: "black", fontSize: "20px" }}>Subscribe to Udemy’s top courses</Typography>
                    </Grid>
                    <Grid item>
                      <Typography sx={{ color: "gray", fontSize: "13px", display: "inline" }}>
                        Get this course, plus 12,000+ of our top-rated courses, with Personal Plan.
                      </Typography>
                      <Box component="span" sx={{ color: "#6d28d2", textDecoration: "underline", display: "inline" }}>
                        {" "}Learn more
                      </Box>
                    </Grid>

                    <Grid item xs={12} sx={{marginX:"auto",justifyContent:"center",display:"flex"}} mt={2}>
                      <Button variant='outlined' sx={{ color: "#6d28d2", border: "2px solid #6d28d2",fontWeight:"bold",textTransform:"initial" }}>Start Subscription</Button>
                    </Grid>

                  </Grid>

                </Grid>
              </Grid>


            </Grid>
          </Grid>

          {modal && (
            <ModalComponent open={open} setOpen={setOpen} demo={demo} title={title} />
          )}
        </Grid>
      </Grid>
    </>
  )
}

export default InnerCourseComponentOne