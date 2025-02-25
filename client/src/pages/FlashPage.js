import React from 'react'
import TimeComponent from '../components/TimeComponent'
import NavbarComponent from '../components/NavbarComponent'
import FlashComponentOne from '../components/FlashComponentOne'
import FooterComponent from '../components/FooterComponent'
import TrainingComponent from '../components/TrainingComponent'
import CourseComponent from '../components/CourseComponent'

const FlashPage = () => {
  return (
    <>
    <TimeComponent/>
    <NavbarComponent value={"block"}/>
    <FlashComponentOne/>
    <TrainingComponent/>
    <CourseComponent/>
    <FooterComponent/>
    </>
  )
}

export default FlashPage