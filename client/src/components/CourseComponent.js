import { Box, Button, Grid, Tooltip, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import axios from "axios";
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import  { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from "react-router-dom";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

const CourseComponent = () => {
  const swiperRef = useRef(null);
  const [course, setCourse] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/content");
        setCourse(res.data.courseContent);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  const handleNavigate = (item) => {
    console.log("item",item)
    navigate('/course', { state: { video: item } });
  }
 
  return (
    <>
      <Grid container justifyContent="center">
        <Grid  item xs={12} sx={{justifyContent:"center",margin:"auto",}}>
        <Grid item xs={10} mb={7} sx={{justifyContent:"center",margin:"auto",}}>
          <Grid item xs={12}>
            <Typography sx={{ fontWeight: "bold", fontSize: "30px" }}>What to learn next</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ fontWeight: "bold", fontSize: "20px" }} my={2}>Recommended for you</Typography>
          </Grid>
          <Grid container justifyContent="center" width="100%">
           

            {course.length > 0 ? (
              <>
              <Swiper
                spaceBetween={10}
                navigation={{
                  nextEl: ".custom-swiper-button-next",
                  prevEl: ".custom-swiper-button-prev",
                }}
                initialSlide={0}
                modules={[Navigation]}
                style={{ height: "auto" }}
                breakpoints={{
                  1440: { slidesPerView: 5 },
                  1024: { slidesPerView: 4 },
                  764: { slidesPerView: 3 },
                  576: { slidesPerView: 1 },
                  320: { slidesPerView: 1 },
                }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
              >
              {course.map((item, index) => (
  <SwiperSlide key={index} style={{ minHeight: "auto" }}>
    <Grid 
      item 
      xs={12} 
      onMouseEnter={() => setHoverIndex(index)} 
      onMouseLeave={() => setHoverIndex(null)} 
      sx={{ position: "relative", padding: 1, borderRadius: "10px" }}onClick ={()=>handleNavigate(item)}
    >
      <Box component="img" src={item.demoImage} width="100%" borderRadius="10px" />

 
      {hoverIndex !== null && hoverIndex  === index && (
     <Tooltip
     title={
       <Box sx={{  backgroundColor: "white",p:1 }}>
         <Typography sx={{ fontWeight: "bold", fontSize: "15px", color: "black" }}>
           {course[hoverIndex]?.title.length > 50
             ? `${course[hoverIndex].title.slice(0, 70)}..`
             : course[hoverIndex]?.title}
         </Typography>
        
         <Grid container alignItems="center" mt={1} spacing={1}>
           <Grid item>
             <Button
               sx={{
                 padding: 0.5,
                 color: "white",
                 backgroundColor: "#5022c3",
                 textTransform: "inherit",
                 fontSize: "12px",
                 fontWeight: "bold",
                 height: "24px",
               }}
             >
               <VerifiedOutlinedIcon sx={{ fontSize: "15px", mr: 0.5 }} />
               Premium
             </Button>
           </Grid>
           {course[hoverIndex]?.bestSeller === "true" && (
             <Grid item>
               <Button
                 sx={{
                   color: "#265263",
                   backgroundColor: "#c2e9eb",
                   textTransform: "inherit",
                   fontSize: "12px",
                   fontWeight: "bold",
                   height: "24px",
                 }}
               >
                 Bestseller
               </Button>
             </Grid>
           )}
         </Grid>

         <Grid item sx={{color: "#265263",display:"flex"}} gap={1} my={.5}>
          <Typography sx={{ fontSize:"12px"}}>Updated </Typography><Typography sx={{ fontWeight:"bold",fontSize:"12px"}}>January 2025</Typography>
         </Grid>
         <Grid item sx={{color: "#595c73",display:"flex"}}>
          <Typography sx={{  fontSize: "12px", my: 0.3 }}>{course[hoverIndex]?.totalHours} total hours &#8226;</Typography><Typography sx={{  fontSize: "12px", my: 0.3 }}>&nbsp;All Levels &#8226;</Typography><Typography sx={{  fontSize: "12px", my: 0.3 }}>&nbsp;Subtitles</Typography>
         </Grid>
         <Grid item>
          <Typography sx={{fontSize:"14px",color: "#595c73"}}> {course[hoverIndex]?.description}</Typography>
         </Grid>

         <Grid item >
             <Grid item sx={{display:"flex",}} gap={2} my={2}>
                   <CheckIcon sx={{ fontSize:"16px",color: "#595c73",}}/>
                   <Typography sx={{fontSize:"14px",color: "#595c73",}}>You will be able to start earning money from your {course[hoverIndex].course} Skills.</Typography>
                   </Grid>
                   <Grid item sx={{display:"flex"}} gap={2} mb={2}>
                   <CheckIcon sx={{ fontSize:"16px",color: "#595c73",}}/>
                   <Typography sx={{fontSize:"14px",color: "#595c73",}}>You will be able to add {course[hoverIndex]?.course} to your CV</Typography>
                   </Grid>
                   <Grid item sx={{display:"flex"}} gap={2} mb={2}>
                   <CheckIcon sx={{ fontSize:"16px",color: "#595c73",}}/>
                   <Typography sx={{fontSize:"14px",color: "#595c73",}}>You will have over 20 of your own projects to add to your portfolio.</Typography>
                   </Grid>
            
         </Grid>

         <Grid item sx={{display:"flex"}} gap={2} xs={12}>
          <Grid item xs={10} sx={{}}>
          <Button sx={{  color: "white",  backgroundColor: "#5022c3",textTransform:"inherit",
            px:8.8 ,py:1,
            fontWeight:"bold"}}>Add to cart</Button>
            </Grid>
            <Grid item xs={2} sx={{}}>
          <Box sx={{display:"inline-block",color:"#5022c3",border:"1px solid #5022c3",borderRadius:"50%",p:1}}><FavoriteBorderIcon sx={{fontSize:"24px",color:"5022c3",display:"flex"}}/></Box>
          </Grid>
         </Grid>
        
       </Box>
     }
     open
     arrow
     placement="right"
     componentsProps={{
       tooltip: {
         sx: {
           bgcolor: "white",
           color: "black",
           border: "1px solid lightgray", 
           boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",  
           borderRadius:2
         },
       },
       arrow: {
         sx: {
           color: "white", 
           "&:before": {
             border: "1px solid lightgray",  
           },
         },
       },
     }}
   >
     <Box component="span" />
   </Tooltip>
   
      )}

      <Typography sx={{ fontWeight: "bold", color: "black", fontSize: "15px" }}>
        {item.title.length > 50 ? `${item.title.slice(0, 48)}..` : item.title}
      </Typography>
      <Typography sx={{ color: "#595c73", fontSize: "12px", my: 0.3 }}>{item.creator}</Typography>

      <Grid item sx={{ display: "flex", alignItems: 'center' }} gap={1}>
        <Typography sx={{ color: "#9c510c", fontWeight: "bold" }}>{item.star}</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Rating
            name="text-feedback"
            value={item.star}
            readOnly
            precision={0.5}
            sx={{ fontSize: "15px", color: "#c67515" }}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" color="#c67515" />}
          />
        </Box>
        <Typography sx={{ color: "#595c73", fontSize: "12px" }}>({item.rating})</Typography>
      </Grid>

      <Grid item sx={{ display: "flex", alignItems: 'center' }} gap={2} my={.5}>
        <Typography sx={{ fontWeight: "bold", color: "black", fontSize: "15px" }}>₹{item.rate}</Typography>
        <Typography sx={{ color: "#595c73", fontSize: "15px", textDecoration: "line-through" }}>₹{item.discount}</Typography>
      </Grid>

      <Grid item sx={{ display: "flex" }} gap={1}>
        <Button sx={{ padding: 1, color: "white", backgroundColor: "#5022c3", textTransform: "inherit", fontSize: "12px", fontWeight: "bold", height: "24px" }}>
          <VerifiedOutlinedIcon sx={{ fontSize: "15px", fontWeight: "bold", mr: 0.5 }} />
          Premium
        </Button>
        {item.bestSeller === 'true' && (
          <Button sx={{ color: "#265263", backgroundColor: "#c2e9eb", textTransform: "inherit", fontSize: "12px", fontWeight: "bold", height: "24px" }}>
            Bestseller
          </Button>
        )}
      </Grid>
    </Grid>
  </SwiperSlide>
))}

{/* <Grid
item
className="custom-swiper-button-prev"
sx={{
  position: "absolute",
  top: "50%",
  left: "15px",
  transform: "translateY(-50%)",
  zIndex: 20,
  padding: 1,
  borderRadius: "50px",
  backgroundColor: "red",
  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.9)" },
}}
>
<ChevronLeftIcon />
</Grid>

<Grid
item
className="custom-swiper-button-next"
sx={{
  position: "absolute",
  display:"flex",
  top: "50%",
  right: "-15px",
  transform: "translateY(-50%)",
  zIndex: 10,
  padding: 1,
  borderRadius: "50px",
  backgroundColor: "red",
  border:"2px solid red",
  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.9)" },
}}
>
<ChevronRightIcon />
</Grid> */}

              </Swiper>




</>
            ) : (
              <Typography>Loading courses...</Typography>
            )}
          </Grid>
        </Grid>

        </Grid>
      </Grid>
    </>
  );
};

export default CourseComponent;
