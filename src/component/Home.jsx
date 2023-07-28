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
      {/* section Our Students Say */}
      <section className="Our_Students_Say">
      <h1>Our Students Say</h1>
      <div className="carsol  mt-4 pb-4 pt-4">
          <Carousel className="styling-example " itemsToShow={3} enableAutoPlay={true} pagination={false} >
            <div><CourseItems review={true} title={"Sonu Pandey"} para={'"Ducat is really very good inisitute here you can get all the services and all the spacial courese for your spacial goal here you can see that tha techars ae very frendly  so you can easely ask any query ease learnin courses are available here ."'} img={"https://images.unsplash.com/photo-1519764622345-23439dd774f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"} /></div>
            <div><CourseItems review={true} para={'"Ducat is really very good inisitute here you can get all the services and all the spacial courese for your spacial goal here you can see that tha techars ae very frendly  so you can easely ask any query ease learnin courses are available here ."'} title={"Shivam Gupta"} img={"https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"} /></div>
            <div><CourseItems review={true} para={'"Ducat is really very good inisitute here you can get all the services and all the spacial courese for your spacial goal here you can see that tha techars ae very frendly  so you can easely ask any query ease learnin courses are available here ."'} title={"Khushi"} img={"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"} /></div>
            <div><CourseItems review={true} para={'"Ducat is really very good inisitute here you can get all the services and all the spacial courese for your spacial goal here you can see that tha techars ae very frendly  so you can easely ask any query ease learnin courses are available here ."'}  title={"Vishal pandey"} img={"https://images.unsplash.com/photo-1530107973768-581951e62d34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"} /></div>
            <div><CourseItems review={true} para={'"Ducat is really very good inisitute here you can get all the services and all the spacial courese for your spacial goal here you can see that tha techars ae very frendly  so you can easely ask any query ease learnin courses are available here ."'}  title={"Shubham Gupta"} img={"https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"} /></div>
          </Carousel>
        </div>
      </section>
      {/* Our Clients */}
      <section className="Our_Clients">
      <h1>Our Clients</h1>
      <div className="carsol mt-4 pb-4 pt-4">
          <Carousel className="styling-example " itemsToShow={6} enableAutoPlay={true} pagination={false} >
            <div><CourseItems clint={true} title={"Steria"}  img={"https://admin.ducatindia.com/clients/1676892246870Steria.png"} /></div>
            <div><CourseItems clint={true} title={"TATA Consultancy Services"}  img={"https://admin.ducatindia.com/clients/1676892273832TATA%20Consultancy%20Services.png"} /></div>
            <div><CourseItems clint={true} title={"Jubilant"}  img={"https://admin.ducatindia.com/clients/1676892297227Jubilant.png"} /></div>
            <div><CourseItems clint={true} title={"Infosys"}  img={"https://admin.ducatindia.com/clients/1676892318860infosys.png"} /></div>
            <div><CourseItems clint={true} title={"Ibilt"}  img={"https://admin.ducatindia.com/clients/1676891813273Ibilt.png"} /></div>
            <div><CourseItems clint={true} title={"Accenture"}  img={"https://admin.ducatindia.com/clients/1676891842962Accenture.png"} /></div>
            <div><CourseItems clint={true} title={"Aditya Birla Group"}  img={"https://admin.ducatindia.com/clients/1676891900421Aditya%20Birla%20Group.png"} /></div>
            <div><CourseItems clint={true} title={"Algoscale"}  img={"https://admin.ducatindia.com/clients/1676891928669Algoscale.png"} /></div>
            <div><CourseItems clint={true} title={"BAJAJ"}  img={"https://admin.ducatindia.com/clients/1676891956504BAJAJ.png"} /></div>
            <div><CourseItems clint={true} title={"Birlasoft"}  img={"https://admin.ducatindia.com/clients/1676892103444Birlasoft.png"} /></div>
            <div><CourseItems clint={true} title={"CSC"}  img={"https://admin.ducatindia.com/clients/1676892139481CSC.png"} /></div>
            <div><CourseItems clint={true} title={"Cognizant"}  img={"https://admin.ducatindia.com/clients/1676892165559Cognizant.png"} /></div>
            <div><CourseItems clint={true} title={"Hewitt"}  img={"https://admin.ducatindia.com/clients/1676892192426Hewitt.png"} /></div>
            <div><CourseItems clint={true} title={"IBM"}  img={"https://admin.ducatindia.com/clients/1676892216598IBM.png"} /></div>
            
          </Carousel>
        </div>

      </section>
    </>
  )
}
