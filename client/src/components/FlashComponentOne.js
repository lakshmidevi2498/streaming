import { Avatar, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';

const FlashComponentOne = () => {
  const swiperRef = useRef(null);
  const [images, setImages] = useState([]);
  // const videoRefs = useRef([]);
  const videoRef = useRef(null);
  const [asset, setAsset] = useState([])
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate()
  const [videoProgress, setVideoProgress] = useState({});

  useEffect(() => {
    const storedProgress = JSON.parse(localStorage.getItem("videoProgress")) || {};
    setVideoProgress(storedProgress);
    console.log("storedProgress", storedProgress)
  }, []);

  const storedProgress = JSON.parse(localStorage.getItem("videoProgress")) || {};
  console.log("storedProgress", storedProgress);

  const progressArray = Object.entries(storedProgress).map(([id, progress]) => ({
    id,
    progress,
  }));

  console.log(progressArray);


  useEffect(() => {
    const fetchVideo = async () => {

      try {

        const res = await axios.get('https://streaming-jobh.onrender.com/video-data')
     
        setAsset(res.data.videoData)

        console.log('Video data received:', res);

      } catch (error) {
        console.error('Error fetching video:', error);
      }
    };

    fetchVideo();
  }, []);




  const VideoPlayer = ({ src ,thumbnail}) => {
    return (
      <video
        ref={videoRef}
        controls
        controlsList="nodownload"
        poster={thumbnail} 
        onPlay={() => console.log("Video is playing")}
        onPause={() => console.log("Video is paused")}
        style={{
          width: "100%",
          height: "150px",
          display: "block",
          objectFit: "cover",
        }}
      >
        <source src={src} type="video/mp4" />
      </video>
    );
  };


  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  }, [asset]);



  const handleInnerPage = (item) => {
    navigate('/inner', { state: { video: item } });
  };

  const couresImages = ["https://sdrc.co.in/wp-content/uploads/2020/09/JSON-Web-Tokens-03.jpg", "https://www.persistent.com/wp-content/uploads/2016/02/blog-banner-Is-your-Node.js-application-production-ready-scaled.jpg", "https://www.mbloging.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fyynr1uml%2Fproduction%2Fd3f0ff2ab5398aaffb00fa0b3afcb238772f42e7-1024x576.jpg%3Fw%3D1024%26auto%3Dformat&w=3840&q=75",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs-bTdZ257OYmFjOHYbIeUB8oz6st3C3hO-A&s", "https://cdn.shopaccino.com/igmguru/articles/ruby-on-rails-installation-22394845857861_l.png?v=531"
  ]
  const content = ["Authnetication", "Node js", "React js", "Node js", "Ruby on Rails"]
  const contentTwo = ["Authentication using jwt in Node", "Important topics in Node", "Introduction to React", "Rest API's with Express in Node", "Introduction to Ruby on Rails"]
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={10} mt={3}>
          <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }} gap={2}>
            <Grid item><Avatar sx={{ padding: "10px", backgroundColor: "black", fontWeight: "bold" }}>U</Avatar></Grid>
            <Grid item sx={{ display: "block", alignItems: "center" }}>
              <Typography sx={{ color: "black", fontSize: "26px", fontWeight: "bold" }}>Welcome back, User</Typography>
              <Typography sx={{ textDecoration: "underline", color: "#6d28d2", fontWeight: "bold", fontSize: "14px" }}>Add occupation and interests</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} mt={4}>
            <Typography variant='h4' sx={{ fontFamily: "poppins", fontWeight: "bold" }}>Let's start learning</Typography>
          </Grid>
          <Grid container justifyContent="center" width="100%" >
            <Swiper
              spaceBetween={1}
              // loop={true}
              navigation={{
                nextEl: ".custom-swiper-button-next",
                prevEl: ".custom-swiper-button-prev",
              }}
              initialSlide={0}
              modules={[Navigation]}
              onSwiper={(swiper) => { swiperRef.current = swiper; }}
              breakpoints={{
                1440: { slidesPerView: 3 },
                1024: { slidesPerView: 2 },
                764: { slidesPerView: 1 },
                576: { slidesPerView: 1 },
                320: { slidesPerView: 1 },
              }}
            >
              {asset?.map((item, index) => (

                <SwiperSlide key={index} style={{ width: "100%", margin: 0, padding: 0 }}>

                  {/* {index === 0 &&  */}
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                      margin: 0,
                      padding: 0,

                    }} onClick={() => {
                      // handlePlayVideo(),
                      handleInnerPage(item)
                    }}
                  >
                    <CardContent>
                      <Grid item sx={{ display: "flex", width: "100%", border: "2px solid lightgray", justifyContent: "center", textAlign: "center" }} xs={12}>
                        <Grid item xs={5} sx={{ p: 0, display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
                          <VideoPlayer src={item.secure_url} thumbnail={couresImages[index] ||  "https://via.placeholder.com/150"} />
                        </Grid>
                        <Grid item xs={7} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>

                          <Grid item sx={{ justifyContent: "center", textAlign: "center" }} mt={0.5}>
                            <Typography sx={{ color: "gray", fontSize: "12px" }}>
                              Video about {content[index]}
                            </Typography>
                          </Grid>


                          <Grid item sx={{ justifyContent: "center", alignItems: "center", textAlign: "center" }} mt={3}>
                            <Typography sx={{ color: "black", fontSize: "15px" }}>
                              {contentTwo[index]}
                            </Typography>
                          </Grid>


                          <Grid item sx={{ mt: "auto" }}>
                            {storedProgress[item._id] !== undefined ? (
                              <LinearProgress
                                variant="determinate"
                                value={storedProgress[item._id]}
                                sx={{
                                  height: "8px",
                                  backgroundColor: "gray",
                                  "& .MuiLinearProgress-bar": {
                                    backgroundColor: "#6d28d2",
                                  },
                                }}
                              />
                            ) : (
                              // 
                              <Grid item sx={{ display: "flex" }}>
                                <Typography sx={{ color: "gray", textAlign: "start", ml: 1, fontSize: "13px", fontWeight: "bold" }}>Lecture : &nbsp; </Typography>
                                <Typography sx={{ color: "gray", fontSize: "13px" }}>  {item.hours}</Typography>
                              </Grid>

                            )}
                          </Grid>
                        </Grid>

                      </Grid>
                    </CardContent>
                  </Grid>
                  {/* // } */}
                </SwiperSlide>
              ))}

              <Grid item
                className="custom-swiper-button-prev"
                sx={{
                  display: "flex",
                  position: 'absolute',
                  top: '50%',
                  left: '10px',
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                  padding: 1,
                  borderRadius: "50px",
                  backgroundColor: 'white',
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' },
                }}
              >
                <ChevronLeftIcon />
              </Grid>

              <Grid item
                className="custom-swiper-button-next"
                sx={{
                  display: "flex",
                  position: 'absolute',
                  top: '50%',
                  right: '10px',
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                  padding: 1,
                  borderRadius: "50px",
                  backgroundColor: 'white',
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' },
                }}
              >
                <ChevronRightIcon />
              </Grid>
            </Swiper>

          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default FlashComponentOne