// import React from 'react'

import { FiSearch } from "react-icons/fi"
import { FaRegEnvelope } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import CourseItems from "./CourseItems"
import Carousel from "react-elastic-carousel"
import BatchesList from "./BatchesList"

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
        <h3>Course Categories</h3>
        <div className="Course_CategoriesDiv1">
          <div className="courseItemsdiv">
            <CourseItems title={"Java"} img={"https://admin.ducatindia.com/courseCategory/1677400384470javalogo.png"} />
            <CourseItems title={"Python"} img={"	https://admin.ducatindia.com/courseCategory/1676710400706Python.png"} />
            <CourseItems title={".NET"} img={"https://admin.ducatindia.com/courseCategory/1681898331586Dot%20Net.jpg"} />
            <CourseItems title={"Software Testing"} img={"	https://admin.ducatindia.com/courseCategory/1676710430403Software%20Testing.png"} />
            <CourseItems title={"Web-Designing - Full Stack Development"} img={"	https://admin.ducatindia.com/courseCategory/1676710723550Web%20Development.png"} />
            <CourseItems title={"Programming Languages"} img={"	https://admin.ducatindia.com/courseCategory/1676710707679Programming%20Language.png"} />
            <CourseItems title={"Cloud Computing"} img={"	https://admin.ducatindia.com/courseCategory/1676710557623Cloud%20Computing.png"} />
            <CourseItems title={"Mobile Application Development"} img={"	https://admin.ducatindia.com/courseCategory/1676710455929Mobile%20Application.png"} />
            <CourseItems title={"CAD Traning"} img={"https://admin.ducatindia.com/courseCategory/1676710570278CAD%20Training.png"} />
            <CourseItems title={"Network & Security"} img={"https://admin.ducatindia.com/courseCategory/1676710673312Network%20&%20Security.png"} />
            <CourseItems title={"Digital Marketing"} img={"https://admin.ducatindia.com/courseCategory/1676710584084Digital%20Marketing.png"} />
            <CourseItems title={"MIS-Advanced excel -Bi Tools"} img={"https://admin.ducatindia.com/courseCategory/1676710526930Advanced%20Excel.png"} />
            <CourseItems title={"Multimedia Animation - Graphics"} img={"https://admin.ducatindia.com/courseCategory/1676710689698Multimedia%20Animation.png"} />
            <CourseItems title={"ERP"} img={"	https://admin.ducatindia.com/courseCategory/1676710601349ERP%20LOGO.png"} />
            <CourseItems title={"Industrial Tranning"} img={"https://admin.ducatindia.com/courseCategory/1676710617927Industrial%20Training.png"} />
            <CourseItems title={"Microsoft Dynamic"} img={"https://admin.ducatindia.com/courseCategory/1676710652215Microsoft%20Dyanamic.png"} />
            <CourseItems title={"React"} img={"https://icon2.cleanpng.com/20180629/gi/kisspng-react-angularjs-javascript-library-front-and-back-atom-5b35ea5bda9a42.9151947115302600598954.jpg"} />
            <CourseItems title={"Others"} img={"https://cdn-icons-png.flaticon.com/128/888/888878.png"} />

          </div>
        </div>
      </section>
      {/* Popular Courses */}
      <section className="Popular-Courses">
        <h3>Popular Courses</h3>
        <div className="carsol  mt-4 pb-4 pt-4">
          <Carousel className="styling-example " itemsToShow={3} enableAutoPlay={true} pagination={false} >
            <div><CourseItems btn={true} title={"MERN STACK"} img={"https://admin.ducatindia.com/course/1686720666118Mernstack.jpg"} /></div>
            <div><CourseItems btn={true} title={"WEB DESIGNING"} img={"https://admin.ducatindia.com/course/1676885368692web%20designing.jpg"} /></div>
            <div><CourseItems btn={true} title={"ETHICAL HACKING v12"} img={"https://admin.ducatindia.com/course/1676886015025Ethical%20Hacking.jpg"} /></div>
            <div><CourseItems btn={true} title={"PHOTOGRAPHY"} img={"https://png.pngtree.com/png-vector/20220502/ourmid/pngtree-blue-aperture-photography-logo-png-image_4561840.png"} /></div>
            <div><CourseItems btn={true} title={"BEST PYTHON TRANING COURSE"} img={"https://admin.ducatindia.com/course/1677044014782Python%20%202.jpg"} /></div>
            <div><CourseItems btn={true} title={"BEST ERP SAP TRANING INSITUTE"} img={"https://admin.ducatindia.com/course/1676885174856Erp.jpg"} /></div>
            <div><CourseItems btn={true} title={"DIGITAL MARKETING"} img={"https://admin.ducatindia.com/course/1688465092051digital-marketing-course%20in%20Delhi.jpg"} /></div>
            <div><CourseItems btn={true} title={"PYTHON FULL STACK DEVELOPER"} img={"https://admin.ducatindia.com/course/1686720747674PythonFullstack.jpg"} /></div>
            <div><CourseItems btn={true} title={"JAVA EXPERT"} img={"https://admin.ducatindia.com/course/1677043956520java%20New.jpg"} /></div>
            <div><CourseItems btn={true} title={"MEAN STACK"} img={"https://admin.ducatindia.com/course/1686720562373MEANSTACK1.jpg"} /></div>
            <div><CourseItems btn={true} title={"JAVA FULL STACK DEVELOPER"} img={"https://admin.ducatindia.com/course/1677490908031JavaFullStack.jpg"} /></div>
            <div><CourseItems btn={true} title={"FRONT END DEVELOPER"} img={"https://admin.ducatindia.com/course/1676886015025Ethical%20Hacking.jpg"} /></div>
          </Carousel>
        </div>
      </section>

      {/* section Upcoming Batches */}
      <section className="Upcoming-Batches">
        <h1>Upcoming Batches</h1>
        <h5>Choose Your Nearest Location</h5>
        <div className="ourBrancheslist">
          <div className=" branchsTabs d-flex justify-content-between">
            <button>Noida Sector 16</button>
            <button>Noida Sector 63</button>
            <button>Pitampura</button>
            <button>South Ex..</button>
            <button>Ghaziabad</button>
            <button>Gurugram</button>
          </div>
          <div className="container">
            <div className=" row batchesListMain">
               <div className="col-4"> <BatchesList /></div>
               <div className="col-4"> <BatchesList /></div>
               <div className="col-4"> <BatchesList /></div>
               <div className="col-4"> <BatchesList /></div>
               <div className="col-4"> <BatchesList /></div>
               <div className="col-4"> <BatchesList /></div>
            </div>
            <div className="btncontainer d-flex justify-content-center mt-5 ">
              <button className="btn btn-outline-primary subbtn">Load More</button>
            </div>
          </div>

        </div>

      </section>
    </>
  )
}
