// import React from 'react'
import { FiSearch } from "react-icons/fi"
import { FaRegEnvelope } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import CourseItems from "./CourseItems"

export default function Home() {
  return (
    <>
      <div className=" hero-section">
        {/* hero Section */}
        <div className="container heroSectionTitle  ">
          <h1>Find The Best IT Course & Kick Start Your Career</h1>
          <div className="search_tabs">
            <ul className=" d-flex heroSectionCoursesTabs">
              <li className=" me-3 "><NavLink to={"/tab1"}>Course Category</NavLink></li>
              <li className="heroSectionLi2"><NavLink to={"/tab2"} >Courses</NavLink></li>
            </ul>
          </div>
          <div className="search-bar  ">
            <div className="search-bar-child d-flex">
              <input type="search " />
              <button id="searchbtn" type="button" ><FiSearch className="icon" /> Search</button>
            </div>
          </div>
        </div>
        <div className="enqueryNowMain">
          <button className=" enquerybtn">  <FaRegEnvelope className="iconmsg" />&nbsp;&nbsp;
            <span> Enquery Now </span>
          </button>
        </div>
      </div>
      {/* Course Categories section */}
      <section className="Course_Categories">
      <h1>Course Categories</h1>
      <div className="container">
        <div className="courseItemsdiv  bg-danger ">
          {/* <div className="col col-2 bg-danger courseItems"> */}
            <CourseItems/>
            <CourseItems/>
            <CourseItems/>
            <CourseItems/>
            <CourseItems/>
            <CourseItems/>
            <CourseItems/>
            <CourseItems/>
            <CourseItems/>
            <CourseItems/>
            <CourseItems/>
            <CourseItems/>
            <CourseItems/>
            <CourseItems/>
            <CourseItems/>
            <CourseItems/>
            <CourseItems/>
            <CourseItems/>
          {/* </div> */}
          
         
       
        </div>
      </div>
      </section>
    </>
  )
}
