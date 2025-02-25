import { Avatar, Box, Button, Divider, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import MenuComponent from './MenuComponent';

const NavbarComponent = ({value}) => {
    const [menu, setMenu] = useState(false)
    const [token, setToken] = useState(localStorage.getItem('token') || null)
    const [hoverItem, setHoverItem] = useState(null)
      const [open, setOpen] = React.useState(false);
    
      const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
      };
    const navigate = useNavigate()
    useEffect(()=>{
console.log("token",token)
    },[token])

    const handleMenuOpen = () => {
        setMenu(true)
        console.log("menu", menu)
    }

    const menuContent = ["Browse Certifications", "Certificatio preparation", "Development", "Business", "Finance& Accounting", "IT& Software", "Office Productivity", "Personal Development", "Design", "Marketing", "Lifestyle", "Photography&video", "Health&Fitness", "Music", "Teaching&Academics"]
    const subMenus = [{ "Certificatio preparation": ["Amazon Web Services (AWS) Certifications", "Microsoft Certifications", "Cisco Certification", "CompTIA Certifications", "Project Management Institute (PMI) Certifications", "Google Cloud Certification", "Six Sigma Certifications", "Oracle Certifications"] },
    ]
    const subMenu = [{ "Certificatio preparation": ["Cloud Certification", "Network Certification", "Cybersecurity Certification", "Project Management Certification"] },
     { "Development": ["Web Development", "Data Science", "Mobile Development", "Programming language", "Game DEvelopment", "Database Design & Development", "Software Testing", "Software Engineer", "Software Development Tools", "No-code Developments"] },
    { "Business": ["Enterpreneurship", "Communication", "Management", "Sales", "Business Strategy", "Operations", "Project Management", "Business Law", "Business Analytics &Intelligency", "Human Resources", "Industry", "E-commerce", "Media", "Real Estate", "Other Business"] }, {
        "Finance& Accounting": ["Accounting Bookkepping", "Compliance", "Cryptocurrency& Blockchain", "Economics", "Finance", "Finance Cert &Exam Prep", "Financila Modeling & Analysis", "Investing & Trading", "Monet Management Tools", "Taxes", "Other Finance & Accounting"]
    },
    { "IT& Software": ["IT Certifications", 'Network & Security', "Hardware", "Operating System & Server", "Other IT & Server"] }, {
        "Office Productivity": ["Microsoft", "Google", "SAP", "Oracel", "Other Office Productivity"]
    }, { "Personal Development": ["Personal Transformation", "Personal productivity", "Leadership", "Career Development", "Parenting Relationships", "Happiness", "Esoteric Practices", "Religional & Spirituality"] },
    { "Design": ["Web Design", "Graphic Design & Illustration", "Design Tools", "User Experience Design", "Game Design", "3D & Animation", "Fashion Design", "Architectural Design", "Interior Design", "Other Design"] },
    { "Marketing": ["Digital Marketing", "Search Engine Optimisation", "Social Media Marketing", "Branding", "Marketing Fundametals", "Marketing Analytics & Automation", "Public Relations", "Paid Advertising", "Video & Mobile MArketing", "Content Marketing", "Growth Hacking", "Affiliate Marketing", "Product Marketing", "Other Marketing"] },
    { "Lifestyle": ["Arts & Crafts", "Beauty & Makeup", "Esoteric Practices", "Food & Beverage", "Gaming", "home Improvement &Gradening", "Pet Care & Training", "Travel", "Other LifeStyle"] },
    { "Photography&video": ["Digital Photography", "Photography", "Portrait Photography", "Photography Tools", "Commercial Photography", "Video Design", "Other Photography & Video"] },
    { "Health&Fitness": ["Fitness", "General Health", "Sports", "Nutrition & Diet", "Yoga", "Mental Health", "Marital Arts & Self Defence", "Safety & FirstAid", "Dance", "Meditation", "Other Health & Fitness"] },
    { "Music": ["Instruments", "Music Production", "Music Fundamentals", "Vocal", "Music Techniques", "Music Software", "Other Music"] },
    { "Teaching&Academics": ["Engineering", "Humanities", "Math", "Science", "Online Education", "Social Science", "Language Learning", "Teaching Training", "Test Prep", "Other Teaching & Academics"] }]
    const Search = styled("div")(({ theme }) => ({
        position: "relative",
        borderRadius: "24px",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        border: "1px solid #ccc",
        width: "100%",
        maxWidth: "750px",
        display: "flex",
        alignItems: "center",
        padding: "5px 0px",
        transition: "all 0.3s ease",

    }));

    const SearchIconWrapper = styled("div")(({ theme }) => ({
        padding: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#9a8c94",
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        marginLeft: theme.spacing(1),
        flex: 1,
        color: "#303141",
     
        "& input": {
            padding: "5px 0",
            color: '#303141',
        },
        "& input::placeholder": {
        color: "#303141", 
        fontFamily: "font-stack-text", 
        opacity: 1,  
    },
    }));
    const CustomLinks = styled(Typography)(({ theme }) => ({
        fontSize: token ? "1rem" : "1rem",
        // padding:2,
        cursor: "pointer",
        transition: "color 0.3s ease, background-color 0.3s ease",
        color: "#303141", fontFamily: "font-stack-text",
        "&:hover": {
            color: '#6d28d2',
            //   backgroundColor: "rgb(203, 188, 221)", 
        },
    }));
    const handleHover = (item) => {
        console.log("Hovered over:", item);
        setHoverItem(item)
    };



    const NoMaxWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))({
        [`& .${tooltipClasses.tooltip}`]: {
            maxWidth: 'none',
        },
    });


    const content = ["Development", "Business", "Finance& Accounting", "IT& Software", "Office Productivity", "Design", "Marketing", "Health&Fitness", "Music"]
    const tooltipContent = (item) => {
        const matchedSubMenu = subMenu.find(sub => Object.keys(sub)[0] === item);
    
        if (matchedSubMenu) {
            const key = Object.keys(matchedSubMenu)[0];
            const subItems = matchedSubMenu[key];

            const limitedSubItems = subItems.slice(0, 7);

            return  limitedSubItems.map((subItem, index) => ( 
                <Typography >{subItem}</Typography>
            ))
        }
    
        return `No content found for ${item}`;
    };
    
    

    return (
        <>
            <Grid container justifyContent="center" >
                <Grid item xs={12} sx={{ backgroundColor: "white", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",overflow:"hidden" ,}}>
                    
                    <Grid item xs={12} px={{xs:2,sm:3}} py={1} sx={{ display: "flex",overflow:"hidden" ,alignItems:"center" ,justifyContent:{xs:"space-between",md:"none"}}} gap={1}>
                    <Grid item xs={2} sx={{justifyContent:{xs:"start",md:"none"},display:{xs:"flex",md:"none"},}}  onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </Grid>
                        <Grid item xs ={8} md={1.5} sx={{justifyContent:{xs:"center",md:"center"},marginX:"auto",display:"flex",}}>
                            <Box component='img' src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg' width="100%" height="100%" sx={{ width: {xs:"80px",sm:"100px"}, height: "50px",cursor:"pointer" }} onClick={()=>navigate('/')}/>
                        </Grid>
                        <Grid item xs={0.8} sx={{ alignItems: "center", padding: 1, borderRadius: 2, margin: "auto", "&:hover": { backgroundColor: "rgb(239, 229, 251)", color: '#6d28d2', }, textAlign: "center" ,display:{xs:"none",md:"flex"},}} >
                            <Typography
                                // onClick={handleMenuOpen} 
                                onMouseEnter={() => setMenu(!menu)}
                                sx={{textAlign:"center", cursor: "pointer", color: "#303141", fontFamily: "font-stack-text" }}>Explore</Typography>
                        </Grid>
                        <Grid item md={token?5 :5.5} lg={token?6 :5.5} sx={{ alignItems: "center", margin: "auto", display:{xs:"none",md:"flex"},}}>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search for anything"
                                    inputProps={{ "aria-label": "search" }} sx={{ color: "#303141" }}
                                />
                            </Search>
                        </Grid>
                        <Grid item xs={2} md={token?5 :6} sx={{ alignItems: "center", display: "flex",justifyContent:{xs:"end",md:"none"}, }} gap={token ? 1 : 1}>
                            {!token && 
                            <Grid item sx={{ padding: 1, borderRadius: 2, "&:hover": { backgroundColor: "rgb(239, 229, 251)", }, display:{xs:"none",lg:"flex"}}}>
                                <CustomLinks >Plans& Pricing</CustomLinks>
                            </Grid>}
                            <Grid item sx={{ padding: 1, borderRadius: 2, "&:hover": { backgroundColor: "rgb(239, 229, 251)", }, display:{xs:"none",lg:"flex"}}}>
                                <CustomLinks>Udemy Business</CustomLinks>
                            </Grid>
                            <Grid item sx={{ padding: 1, borderRadius: 2, "&:hover": { backgroundColor: "rgb(239, 229, 251)", }, display:{xs:"none",md:"flex"}}}>
                                <CustomLinks>Teach on Udemy</CustomLinks>
                            </Grid>
                            {token && <Grid item sx={{ padding: 1, borderRadius: 2, "&:hover": { backgroundColor: "rgb(239, 229, 251)", }, display:{xs:"none",md:"flex"}}}>
                                <CustomLinks>My learning</CustomLinks>
                            </Grid>}
                            <Grid item   sx={{display:"flex"}} gap={{xs:0,md:0}}>
                            <SearchIcon sx={{ fontSize: "20px" ,display:{md:"none"}}} />
                                <ShoppingCartOutlinedIcon sx={{ fontSize: "20px" }} />
                            </Grid>
                            {token && <>
                                <Grid item sx={{display:{xs:"none",md:"flex"}}}><FavoriteBorderIcon sx={{ fontSize: "20px" }} /></Grid>
                                <Grid item sx={{display:{xs:"none",md:"flex"}}}><NotificationsNoneOutlinedIcon sx={{ fontSize: "20px" }} /></Grid>  </>}
                            {token ? <>
                                <Grid item sx={{display:{xs:"none",md:"flex"}}}>
                                    <Avatar sx={{backgroundColor:"black",fontWeight:"bold"}}>U</Avatar>
                                </Grid>
                            </> :
                                <><Grid item sx={{display:{xs:"none",md:"flex"}}}><Button varinat="outlined" sx={{ color: "#6d28d2", border: "2px solid #6d28d2" }}>Login</Button></Grid>
                                    <Grid item sx={{display:{xs:"none",md:"flex"}}}><Button varinat="contained" sx={{ backgroundColor: "#6d28d2", color: "white" }}>Signup</Button></Grid>
                                    <Grid item sx={{display:{xs:"none",md:"flex"}}}><Button varinat="outlined" sx={{ color: "black", border: "2px solid #6d28d2" }}><LanguageOutlinedIcon /></Button></Grid>
                                </>}

                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider orientation="horizontal" flexItem />
                    </Grid>
                    <Grid item xs={12} sx={{display:{xs:"none",md:value},overflow:"hidden" }}>
                        <Grid item xs={12}>
                            <Grid container justifyContent="center">
                                {content.map((item, index) => (
                                    <NoMaxWidthTooltip
                                        key={index}
                                        title={tooltipContent(item)}  
                                        placement="bottom"
                                        arrow
                                        slotProps={{
                                            tooltip: {
                                              sx: {
                                                backgroundColor: "black",  
                                                padding: "8px 12px",  
                                                width: "97vw",  
                                                fontSize: "1rem", 
                                                color: "white",  
                                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", 
                                                justifyContent:"center",
                                                display:{xs:"none",md:"flex"},
                                                textAlign:"center",
                                                gap:5,
                                                overflow:"hidden"
                                              },
                                            },
                                            popper: {
                                              sx: {
                                                [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]: {
                                                  marginTop: '3px',
                                                  overflow:"hidden"
                                                },
                                                [`&.${tooltipClasses.popper}[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]: {
                                                  marginBottom: '0px',
                                                  overflow:"hidden"
                                                },
                                                [`&.${tooltipClasses.popper}[data-popper-placement*="right"] .${tooltipClasses.tooltip}`]: {
                                                  marginLeft: '0px',
                                                  overflow:"hidden"
                                                },
                                                [`&.${tooltipClasses.popper}[data-popper-placement*="left"] .${tooltipClasses.tooltip}`]: {
                                                  marginRight: '0px',
                                                  overflow:"hidden"
                                                },
                                              },
                                            },
                                            arrow: {
                                                sx: {
                                                    color: "black",  
                                                }
                                            }
                                          }}
                                    >
                                        <Grid item sx={{ padding: 1.5, display: "flex", justifyContent: "center", "&:hover": { backgroundColor: "rgb(239, 229, 251)" }, cursor: "pointer" }}>
                                            <Typography sx={{ color: "#303141", fontFamily: "font-stack-text", '&:hover': { color: '#6d28d2' } }}>
                                                {item} 
                                            </Typography>
                                        </Grid>
                                    </NoMaxWidthTooltip>
                                ))}
                            </Grid>

                        </Grid>
                    </Grid>
                    {menu &&
                        <Box
                            sx={{
                                position: "absolute",
                                top: 130,
                                left: 70,
                                zIndex: 20,
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                backgroundColor: "white",
                                width: "auto",
                                border: "1px solid lightgray",
                                height: "auto",
                                
                            }}
                        >
                            <Grid container sx={{ flexDirection: "column", position: "relative", height: "90vh" }}>
                                {menuContent.map((item, index) => (
                                    <Grid item key={index} sx={{ position: "relative" }}>

                                        <Grid
                                            container
                                            alignItems="center"
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                paddingX: 2,
                                                paddingY: 1,
                                                '&:hover': { backgroundColor: "rgb(239, 229, 251)" },
                                                cursor: "pointer",
                                                minWidth: "300px",

                                            }}
                                            onMouseEnter={() => handleHover(item)}
                                        >
                                            <CustomLinks sx={{ fontWeight: index === 0 ? "bold" : "normal" }}>
                                                {item}
                                            </CustomLinks>
                                            <ChevronRightIcon sx={{ color: "#303141", fontSize: "16px", display: index === 0 ? 'none' : "flex" }} />
                                        </Grid>

                                        {index === 1 && <Divider orientation="horizontal" />}
                                    </Grid>
                                ))}


                                {hoverItem && (
                                    <Grid
                                        sx={{
                                            position: "absolute",
                                            top: 0,
                                            left: "100%",
                                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                            backgroundColor: "white",
                                            minWidth: "300px",
                                            paddingY: 1,
                                            border: "1px solid lightgray",
                                            borderTop: "none",
                                            height: "90vh"
                                        }}
                                    >
                                        {subMenu.find((sub) => Object.keys(sub)[0] === hoverItem)?.[hoverItem]?.map(
                                            (subItem, subIndex) => (
                                                <Grid
                                                    container
                                                    alignItems="center"
                                                    key={subIndex}
                                                    sx={{
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        paddingX: 2,
                                                        paddingY: 1,
                                                        '&:hover': { backgroundColor: "rgb(239, 229, 251)" },
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    <CustomLinks sx={{ fontWeight: "normal" }}>
                                                        {subItem}
                                                    </CustomLinks>
                                                    <ChevronRightIcon sx={{ color: "#303141", fontSize: "16px" }} />
                                                </Grid>
                                            )
                                        )}
                                    </Grid>
                                )}
                            </Grid>
                        </Box>


                    }
                </Grid>
                <MenuComponent toggleDrawer={toggleDrawer} open ={open} setOpen ={setOpen}/>
            </Grid>
        </>
    )
}

export default NavbarComponent