import React from 'react'
import Typography from '@mui/material/Typography'
import { Box, Button, Grid } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language';

const FooterComponent = () => {
    const icon = ["https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg", "https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg", "https://s.udemycdn.com/partner-logos/v4/box-light.svg", "https://s.udemycdn.com/partner-logos/v4/netapp-light.svg", "https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"]
    const content = [["Certifications by Issuer", "Amazon Web Services (AWS) Certifications", " Six Sigma Certifications", "Microsoft Certifications", "Cisco Certifications", " Tableau Certifications", " See all Certifications"],
    ["Web Development", "Web Development", "JavaScript", " React JS", "Angular", " Java"],
    ["IT Certifications", " Amazon AWS", "AWS Certified Cloud Practitioner", "AZ-900: Microsoft Azure Fundamentals", "AWS Certified Solutions Architect - Associate", "Kubernetes"],
    ["Leadership", "Leadership", "Management Skills", "Project Management", "Personal Productivity", "Emotional Intelligence"],
    ["Certifications by Skill", "Cybersecurity Certification", "Project Management Certification", " Cloud Certification", " Data Analytics Certification", "HR Management Certification", "See all Certifications"],
    ["Data Science", "Data Science", "Python", "Machine Learning", "ChatGPT", "Deep Learning"],
    ["Communication", "Communication Skills", "Presentation Skills", "Public Speaking", "Writing", "PowerPoint"],
    ["Business Analytics & Intelligence", "Microsoft Excel", "SQL", " Microsoft Power BI", "Data Analysis", "Business Analysis"]]

    const contentOne = [
        ["About", " About us","Careers","Contact us","Blog","Investors"],["Discovery Udemy","Get the app","Teach on Udemy"," Plans and Pricing","Affiliate","Help and Support"],
        ["Udemy for Business","Udemy Business"],["Legal & Accessibility", " Accessibility statement"," Privacy policy","Sitemap","Terms"]
    ]

    return (
        <>
            <Grid container justifyContent="center">
                <Grid item xs={12} sx={{ backgroundColor: "#1d1e27", color: "white", }} mt={5}>
                    <Grid item xs={12} px={6} py={2}>
                        <Grid item xs={12} sx={{ display: {sm:'flex'}, justifyContent: {xs:"center",sm:"space-between"}, alignItems: "center" }}>
                            <Grid item >
                                <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>Teach the world online</Typography>
                                <Typography sx={{ fontFamily: "--font-stack-text" }}>Create an online video course, reach students across the globe, and earn money</Typography>
                            </Grid>
                            <Grid item>
                                <Button varinat="outlined" sx={{ border: "2px solid white", textTransform: "inherit", color: "white", fontWeight: "bold" }}>Teach on Udemy</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} py={3} sx={{ borderTop: "2px  solid white", borderBottom: "2px  solid white" }} px={6}>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }} gap={1}>
                            <Grid item xs={8} sm={6} md={7} lg={7}sx={{ display: "flex",}} >
                                <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>Top companies choose <Box component="span" sx={{ color: "#bfc3fb", fontWeight: "bold", fontSize: "20px" }}>Udemy Business</Box > to build in-demand career skills.</Typography>
                            </Grid>
                            <Grid item xs={4} md={5} sx={{ display: "flex" }} gap={2}>
                                {icon.map((item, index) => (
                                    <Grid item key={index} >
                                        <Grid item >
                                            <Box component="img" src={item} width="100%" height="100%" sx={{width:{xs:"100%"},height:{xs:"100%"}}}/>
                                        </Grid>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} py={4} px={6}>
                        <Typography sx={{ fontSize: "20px", fontWeight: "bold", fontFamily: "--font-stack-text" }}>Explore top skills and certifications </Typography>
                        <Grid container justifyContent="center">
                            {content.map((item, index) => (
                                <Grid item sx={{ display: "flex", flexDirection: "column" }} xs={12} sm={6} md={3} key={index} mt={5}>
                                    {item.map((itm, innindex) => (
                                        <Typography key={innindex} sx={{ fontWeight: innindex === 0 ? "bold" : "normal" ,fontFamily: "--font-stack-text",fontSize:innindex === 0 ?"20px":"15px",marginBottom:innindex === 0 ? 1 :0, '&:hover':{textDecoration: innindex === 0 ?"none":"underline"},cursor:"pointer"}}>
                                            {itm}
                                        </Typography>
                                    ))}
                                </Grid>
                            ))}
                        </Grid>

                    </Grid>

                </Grid>
                <Grid item xs={12}  sx={{backgroundColor:"#111116",color:"white"}}>
                <Grid item xs={12} mt={3}  px={6} sx={{borderBottom:"1px solid white",}}>
                        <Grid container justifyContent="center">
                            {contentOne.map((item, index) => (
                                <Grid item sx={{ display: "flex", flexDirection: "column" }} xs={12} sm={6} md={3} key={index} mb={3}>
                                    {item.map((itm, innindex) => (
                                        <Typography key={innindex} sx={{ fontWeight: innindex === 0 ? "bold" : "normal" ,fontFamily: "--font-stack-text",fontSize:innindex === 0 ?"20px":"15px",marginBottom:innindex === 0 ? 1 :0, '&:hover':{textDecoration: innindex === 0 ?"none":"underline"},cursor:"pointer"}}>
                                            {itm}
                                        </Typography>
                                    ))}
                                </Grid>
                            ))}
                        </Grid>

                    </Grid>
                    <Grid item xs={12} px={6}>
                    <Grid item sx={{display:{xs:"block",sm:"flex"},justifyContent:{xs:"center",sm:"space-between"},alignItems:"center"}}py={2}>
                        <Grid item sx={{display:"flex",alignItems:"center"}} gap={2}>
                            {/* <Grid item> */}
                            <Box component='img' src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" width="100%" height="100%" sx={{width:"100px",height:"50px"}} />
                            {/* </Grid>
                            <Grid item> */}
                            <Typography sx={{fontSize:"14px",marginTop:1.5}}>© 2025 Udemy, Inc</Typography>
                            {/* </Grid> */}
                        </Grid>
                        <Grid item>
                            <Typography sx={{fontSize:"14px"}}>Cookie settings</Typography>
                        </Grid>
                        <Grid item>
                            <Grid item sx={{display:"flex"}} gap={1}>
                                <LanguageIcon />
                                <Typography sx={{fontSize:"14px"}}>English</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                </Grid>

             
            </Grid>

        </>
    )
}

export default FooterComponent