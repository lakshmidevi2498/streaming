import React from 'react'
import InnerCourseComponentOne from '../components/InnerCourseComponentOne'
import NavbarComponent from '../components/NavbarComponent'
import TimeComponent from '../components/TimeComponent'
import FooterComponent from '../components/FooterComponent'

const InnerCoursePage = () => {
  return (
    <>
     <TimeComponent />
    <NavbarComponent value={"none"}/>
    <InnerCourseComponentOne />
    <FooterComponent />
    </>
  )
}

export default InnerCoursePage