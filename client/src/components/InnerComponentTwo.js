import { Box, Button, Divider, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import XIcon from '@mui/icons-material/X';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const InnerComponentTwo = () => {
    const [less, setLess] = useState(false)
    const [more, setMore] = useState(false)
    const contentOne = ["Connecting MySQL database with Ruby on Rails", "Understand CRUD operation in Ruby on Rails", "Creating Basic API using Ruby on Rails", "Implementing Ajax with Ruby on Rails", "Demo of a Login page using Ruby on Rails"]
    const contentTwo = ["Basic knowledge of HTML5 to structure the webpage", "Basic knowledge of CSS3 to style the webpage", "Knowledge of JavaScript"]
    const contentThree = ["Web developers", "Ruby on Rails Developers", "Full Stack Developers"]
    const icon = [<XIcon sx={{ fontSize: "23px", color: "white", }} />
        , <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="white"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="white" d="M13.5 21.888C18.311 21.164 22 17.013 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.013 3.689 9.165 8.5 9.888V15H9a1.5 1.5 0 0 1 0-3h1.5v-2A3.5 3.5 0 0 1 14 6.5h.5a1.5 1.5 0 0 1 0 3H14a.5.5 0 0 0-.5.5v2H15a1.5 1.5 0 0 1 0 3h-1.5z" /></g></svg>
        , <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2M8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12a1.57 1.57 0 1 1 0 3.12m12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z" /></svg>
        , <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M12.244 4c.534.003 1.87.016 3.29.073l.504.022c1.429.067 2.857.183 3.566.38c.945.266 1.687 1.04 1.938 2.022c.4 1.56.45 4.602.456 5.339l.001.152v.174c-.007.737-.057 3.78-.457 5.339c-.254.985-.997 1.76-1.938 2.022c-.709.197-2.137.313-3.566.38l-.504.023c-1.42.056-2.756.07-3.29.072l-.235.001h-.255c-1.13-.007-5.856-.058-7.36-.476c-.944-.266-1.687-1.04-1.938-2.022c-.4-1.56-.45-4.602-.456-5.339v-.326c.006-.737.056-3.78.456-5.339c.254-.985.997-1.76 1.939-2.021c1.503-.419 6.23-.47 7.36-.476zM9.999 8.5v7l6-3.5z" /></svg>
        , <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 500"><path fill="white" d="M387 128c-11.8 0-21.3 9.5-21.3 21.3v213.3c0 58.9-47.7 106.7-106.7 106.7s-106.7-47.8-106.7-106.7v-256c0-35.3 28.6-64 64-64s64 28.7 64 64V320c0 11.8-9.6 21.3-21.3 21.3s-21.3-9.5-21.3-21.3V149.3c0-11.8-9.6-21.3-21.3-21.3c-11.8 0-21.3 9.5-21.3 21.3V320c0 35.4 28.6 64 64 64s64-28.6 64-64V106.7C323 47.8 275.2 0 216.3 0S109.7 47.8 109.7 106.7v256c0 82.5 66.9 149.3 149.3 149.3s149.3-66.9 149.3-149.3V149.3c0-11.8-9.5-21.3-21.3-21.3" /></svg>
    ]
    return (
        <>
            <Grid item xs={12} px={3} sx={{}}>
                <Grid item sx={{ display: {xs:"block",md:"flex"}, }} gap={18}>
                    <Grid item>
                        <Typography sx={{ fontFamily: "--font-stack-text" }}>By the numbers</Typography>
                    </Grid>
                    <Grid item sx={{ display: "block" }}>
                        <Typography sx={{ fontFamily: "--font-stack-text" }}> Skill level: Intermediate Level</Typography>
                        <Typography sx={{ fontFamily: "--font-stack-text" }}>Students: 4381</Typography>
                        <Typography sx={{ fontFamily: "--font-stack-text" }}>Languages: English</Typography>
                        <Typography sx={{ fontFamily: "--font-stack-text" }}>Captions: Yes</Typography>
                    </Grid>
                    <Grid item sx={{ display: "block" }}>
                        <Typography sx={{ fontFamily: "--font-stack-text" }}>Lectures: 18</Typography>
                        <Typography sx={{ fontFamily: "--font-stack-text" }}>Video: 2 total hours</Typography>
                    </Grid>

                </Grid>
                <Grid item py={3}><Divider /></Grid>
                <Grid item sx={{ display: {xs:"block",sm:"flex"},}} gap={24}>
                    <Grid item sx={{ display: "block" }}>
                        <Typography sx={{ fontFamily: "--font-stack-text" }}>Features</Typography>

                    </Grid>
                    <Grid item sx={{ display: {xs:"block",sm:"flex"},}}>
                        <Grid item sx={{ display: "flex" }}>
                            <Typography sx={{ display: "flex", gap: 1, fontFamily: "--font-stack-text" }}>
                                Available on
                                <Box component="span" sx={{ color: "#6d28d2", textDecoration: "underline", fontWeight: "bold", fontFamily: "--font-stack-text" }}>
                                    iOS
                                </Box>
                                and
                                <Box component="span" sx={{ color: "#6d28d2", textDecoration: "underline", fontWeight: "bold", fontFamily: "--font-stack-text" }}>
                                    Android
                                </Box>
                            </Typography>
                        </Grid>
                    </Grid>


                </Grid>
                <Grid item py={3}><Divider /></Grid>
                <Grid item sx={{ display: {xs:"block",md:"flex"}, }} gap={21}>
                    <Grid item>
                        <Typography sx={{ fontFamily: "--font-stack-text" }}>Description</Typography>
                    </Grid>
                    <Grid item sx={{ display: "block" }}>
                        <Typography sx={{ fontFamily: "--font-stack-text" }}>
                            Ruby on Rails is one of the most effective ways to quickly create web apps It is highly relevant and in demand in the modern economy. The Rails framework has been used by businesses, to build their products. Building with Rails is a great opportunity to practice the other abilities you've already mastered, such as using object-oriented programming and creating static websites with HTML and CSS.</Typography>

                        <Typography sx={{ fontFamily: "--font-stack-text" }}>This course will help you to explore more about the Ruby on Rails. In this course you will learn what is Ruby on Rails, Architecture of Ruby on Rails, IDE used for the Ruby on Rails and what is Active record migration, how to install and setup the Ruby on Rails in Windows 10 along with you will learn how install and Set up the MySQL and how to connect MySQL database with Ruby on Rails application, and what does migration dose in rails application, how to perform the CRUD operation in Ruby on Rails and how to create the API in Ruby on Rail and implementation of Ajax functionality in rails application, along with this you will learn how to build the login web application in Ruby on Rails. In this course you will learn the about Ruby on Rails, how to download and set up the Ruby on rails.</Typography>

                        {less &&
                            <> <Typography sx={{ fontFamily: "--font-stack-text" }}>Further you will learn how to Configure MySQL connection using MySQL2 gem. Then you will understand the CRUD operation in Ruby on Rails Additionally you will learn the working of Ruby on Rails with Ajax. Along with this you will learn the creating the basic API in Ruby on Rails. And you will learn the how to build the login page in Ruby on Rails.</Typography>
                                <Grid item mt={2}>
                                    <Typography sx={{ fontWeight: "bold", fontFamily: "--font-stack-text" }}>What you’ll learn</Typography>
                                    {contentOne.map((item, index) => (
                                        <Grid item>  <Box component="li"    key={index}   sx={{  listStyleType: "disc",   pl: 2,    fontFamily: "--font-stack-text"   }}  >   {item} </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                                <Grid item mt={2}>
                                    <Typography sx={{ fontWeight: "bold", fontFamily: "--font-stack-text" }}>Are there any course requirements or prerequisites?</Typography>
                                    {contentTwo.map((item, index) => (
                                        <Grid item>  <Box component="li"    key={index}   sx={{  listStyleType: "disc",   pl: 2,    fontFamily: "--font-stack-text"   }}  >   {item} </Box>
                                        </Grid>))}
                                </Grid>
                            </>}

                        {less && <Grid item mt={2}>
                            <Typography sx={{ fontWeight: "bold", fontFamily: "--font-stack-text" }}>Who this course is for</Typography>
                            {contentThree.map((item, index) => (
                                <Grid item>  <Box component="li"    key={index}   sx={{  listStyleType: "disc",   pl: 2,    fontFamily: "--font-stack-text"   }}  >   {item} </Box>
                                        </Grid>))}
                        </Grid>}

                    </Grid>
                </Grid>
                {!less && <Grid item xs={12} sx={{ display: "flex", justifyContent: "start" }} onClick={() => { setLess(true) }}>
                    <Button sx={{ textTransform: "inherit", color: "#6d28d2", fontWeight: "bold", fontFamily: "--font-stack-text" }}>Show more <KeyboardArrowDownIcon fontSize='small' /></Button>
                </Grid>}
                {less &&
                    <> <Grid item py={3}><Divider /></Grid>

                        <Grid item xs={12} sx={{ display: {xs:"block",md:"flex"}, }} gap={21}>
                            <Grid item>
                                <Typography sx={{ fontFamily: "--font-stack-text" }}>Instructor</Typography>
                            </Grid>
                            <Grid item>
                                <Grid item sx={{ display: "flex", alignItems: "center" }} gap={2}>
                                    <Grid item><Box component="img" src="https://img-c.udemycdn.com/user/200_H/123060066_c89b_2.jpg" sx={{ borderRadius: 50, width: "70px", height: "70px" }} /></Grid>
                                    <Grid item >
                                        <Grid item sx={{ dispaly: "block" }}>
                                            <Typography sx={{ fontWeight: "bold", fontFamily: "--font-stack-text" }}>Proton Expert Systems & Solutions</Typography>
                                            <Typography sx={{ fontFamily: "--font-stack-text" }}>Proton Expert Systems & Solutions</Typography>
                                        </Grid>
                                    </Grid>

                                </Grid>

                                <Grid item xs={12}>
                                    <Grid item sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} gap={0} sm={4} my={2}>
                                        {icon.map((item, index) => (
                                            <Box
                                                key={index}
                                                sx={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    // mx: 0.5,
                                                    backgroundColor: "#9194ac",
                                                    padding: 0.5,
                                                    margin: "auto",
                                                }}
                                            >
                                                {item}
                                            </Box>
                                        ))}
                                    </Grid>
                                </Grid>

                                <Grid item xs={12} sx={{ display: "block" }}>
                                    <Typography sx={{ fontFamily: "--font-stack-text" }}>I'm Tran Ba Vinh Son, a software engineer living in beautiful city - Hanoi, Vietnam! My interests range from technology to programming. And I love building side project as a hobby at home.</Typography>
                                    <Typography sx={{ fontFamily: "--font-stack-text" }}>I have experience in Ruby on Rails, Android and Java. </Typography>
                                    <Typography sx={{ fontFamily: "--font-stack-text" }}>Sign up to my courses and join me in this amazing adventure today.</Typography>
                                </Grid>



                            </Grid>

                        </Grid>
                    </>}
                {less && <Grid item xs={12} sx={{ display: "flex", justifyContent: "start" }} onClick={() => setLess(false)}>
                    <Button sx={{ textTransform: "inherit", color: "#6d28d2", fontWeight: "bold", fontFamily: "--font-stack-text" }}>Show less<KeyboardArrowUpIcon fontSize='small' /></Button>
                </Grid>}

            </Grid>
        </>
    )
}

export default InnerComponentTwo