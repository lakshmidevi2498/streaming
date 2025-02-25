import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

const InnerCourseComponentTwo = ({ data }) => {
    const icon = [
        "https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg","https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg","https://s.udemycdn.com/partner-logos/v4/box-dark.svg",
        "https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg","https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg"
    ]
    const content = [
        "Design icons, business cards, illustrations, and characters", "Clean up face imperfections, improve and repair photos", "Use creative effects to design stunning text styles", "Remove people or objects from photos",
        "Cut away a person from their background", "Master selections, layers, and working with the layers panel"
    ]

    const contentOne = [
        { icon: <OndemandVideoIcon sx={{ fontSize: "20px", color: "#333444", }} />, text: "22.5 hours on-demand video" },
        { icon: <SystemUpdateAltIcon sx={{ fontSize: "20px", color: "#333444", }} />, text: "237 downloadable resources" },
        { icon: <AssignmentOutlinedIcon sx={{ fontSize: "20px", color: "#333444", }} />, text: "Assignments" },
        { icon: <PhoneAndroidOutlinedIcon sx={{ fontSize: "20px", color: "#333444", }} />, text: "Access on mobile and TV" },
        { icon: <InsertDriveFileOutlinedIcon sx={{ fontSize: "20px", color: "#333444", }} />, text: "3 articles" },
        { icon: <EmojiEventsOutlinedIcon sx={{ fontSize: "20px", color: "#333444", }} />, text: "Certificate of completion" },
    ]
    return (
        <>
            <Grid container justifyContent="center" my={5}>
                <Grid item xs={12} sx={{ border: "1px solid lightgray" ,}} p={2}>
                    <Grid item xs={12} sx={{}}>
                        <Typography sx={{ fontWeight: "bold", fontSize: {xs:"20px",sm:"25px"}, color: "black" }}>What you'll learn</Typography>
                    </Grid>
                    <Grid container justifyContent="center" mt={3}>
                        {content.map((item, index) => (
                            <Grid item xs={12} sm={6} key={index} gap={5} >
                                <Grid item sx={{ display: "flex", }} gap={1} mb={1} >
                                    <CheckIcon sx={{ fontSize: "16px", color: "#595c73", }} />
                                    <Typography sx={{ fontSize: "14px", color: "#595c73", }}>{item}</Typography>
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>

                </Grid>

                <Grid item xs={12} my={2}>
                    <Grid item xs={12}>
                        <Typography sx={{ fontWeight: "bold", color: "black", fontSize: {xs:"20px",sm:"25px"} }}>Explore related topics</Typography>
                    </Grid>
                    <Grid item xs={12} mt={2} sx={{ display: "flex", flexDirection: {xs:"column",sm:"row"} }} gap={1}>
                        <Grid item sx={{ border: "1px solid black", px: 1.2, py: 0.8, borderRadius: 1, alignItems: "center", my: "auto" }}>
                            <Typography sx={{ fontWeight: "bold", color: "black", fontSize: "13px", }}>{data?.course}</Typography>
                        </Grid>
                        <Grid item sx={{ border: "1px solid black", px: 1.2, py: 0.8, borderRadius: 1, alignItems: "center", my: "auto" }}>
                            <Typography sx={{ fontWeight: "bold", color: "black", fontSize: "13px", }}>Graphic Design & Illustration</Typography>
                        </Grid>
                        <Grid item sx={{ border: "1px solid black", px: 1.2, py: 0.8, borderRadius: 1, alignItems: "center", my: "auto" }}>
                            <Typography sx={{ fontWeight: "bold", color: "black", fontSize: "13px", }}>Design</Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} mt={5}>
                    <Grid item >
                        <Typography sx={{ color: "black", fontWeight: "bold", fontSize: {xs:"20px",sm:"25px"}}}>This course includes:</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" mt={3}>
                            {contentOne.map((item, index) => (
                                <Grid item xs={12} sm={6} key={index} gap={5} >
                                    <Grid item sx={{ display: "flex", }} gap={1} mb={1} >
                                        {item.icon}
                                        <Typography sx={{ fontSize: "16px", color: "#333444", }}>{item.text}</Typography>
                                    </Grid>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} sx={{ justifyContent: "center", border: "2px solid lightgray", color: "black" }} mt={5} p={2}>
                    <Grid item xs={12}>
                        <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>Top companies offer this course to their employees</Typography>
                    </Grid>
                    <Grid item>
                        <Box sx={{ display: "inline",  }}>
                            <Typography component="span" sx={{fontSize: "13px",color:"#595c73"}}>
                                This course was selected for our collection of top-rated courses trusted by businesses worldwide.
                            </Typography>
                            <Typography
                                component="span"
                                sx={{ textDecoration: "underline", color: "#6d28d2", marginLeft: "4px",fontSize: "13px" }}
                            >
                                Learn more
                            </Typography>
                        </Box>
                         <Grid item  sx={{ display: {xs:"block",sm:"flex"} ,justifyContent:{sm:"space-between"}}} xs={12}>
                                                        {icon.map((item, index) => (
                                                            <Grid item key={index} >
                                                                <Grid item >
                                                                    <Box component="img" src={item} width="100%" height="100%" sx={{width:{xs:"100px"},height:{xs:"40px"}}}/>
                                                                </Grid>
                                                            </Grid>
                                                        ))}
                                                    </Grid>
                    </Grid>

                </Grid>
            </Grid>

        </>
    )
}

export default InnerCourseComponentTwo