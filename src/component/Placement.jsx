// import React from 'react'
// import { NavLink } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import CourseItems from "./CourseItems"
import Carousel from "react-elastic-carousel"


export default function placement() {
  return (
    <>
      <div className="CertificateContainer">
        <h1>Placement</h1>
        <Breadcrumbs className={"CertificateBreadcrumb"} Path={ " / Placement"} />
      </div>
      <section className="placementSection">
      <h4>Placed Student</h4>
      {/* Popular Courses */}
      <section className="Popular-Courses">

        <div className="carsol  mt-4 pb-4 pt-4">
          <Carousel className="styling-example " itemsToShow={3} enableAutoPlay={true} pagination={false} >
            <div><CourseItems btn={true} title={"Ritesh Kumar Gupta"} img={"https://admin.ducatindia.com/placedStudents/1676889942702Ritesh%20Kumar%20gUPTA.PNG"} /></div>

            <div><CourseItems btn={true} title={"Asutosh Kumar Jha"} img={"https://admin.ducatindia.com/placedStudents/1676890153803Ashutosh%20kumar%20jha.PNG"} /></div>

            <div><CourseItems btn={true} title={"Rahul Dirvedi"} img={"https://admin.ducatindia.com/placedStudents/1676890231485Rahul%20Dwivedi.PNG"} /></div>

            <div><CourseItems btn={true} title={"Piyush Chavla"} img={"https://admin.ducatindia.com/placedStudents/1676890312290Piyush%20Chawla.PNG"} /></div>

            <div><CourseItems btn={true} title={"Pankaj Kuma Sing"} img={"https://admin.ducatindia.com/placedStudents/1676890366102Pankaj%20KUmar%20Singh.PNG"} /></div>

            <div><CourseItems btn={true} title={"Ajay Rawat"} img={"https://admin.ducatindia.com/placedStudents/1676890406950Pranav%20Mittal.PNG"} /></div>

            <div><CourseItems btn={true} title={"Rohn Singh"} img={"https://admin.ducatindia.com/placedStudents/1676890445966Shamee%20Kumar%20Singh.PNG"} /></div>

            <div><CourseItems btn={true} title={"Devendra Kumar"} img={"https://admin.ducatindia.com/placedStudents/1676890495569Devesh%20Tomar.PNG"} /></div>

            <div><CourseItems btn={true} title={"Nirbhay"} img={"https://admin.ducatindia.com/placedStudents/1676890548549Vipin%20Chauhan.PNG"} /></div>

            <div><CourseItems btn={true} title={"Yash Bhardwaj"} img={"https://admin.ducatindia.com/placedStudents/1682762830317IMG-20230429-WA0001.jpg"} /></div>

           
          </Carousel>
        </div>
      </section>  
      
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
      <section id="Contact-Us" className="section8parent">
                <section className="section8">
                    <div className="subsection8">
                        <div className="footer">
                            <div className="footerinnerdiv footerinnerdiv1">
                                <h1>Quick Link</h1>
                                <ul className="footerul">
                                    <a href="">
                                        <li className="footerli1">About Us</li>
                                    </a>
                                    <a href="">
                                        <li className="footerli1">Contact Us</li>
                                    </a>
                                    <a href="">
                                        <li className="footerli1">Privacy Policy</li>
                                    </a>
                                    <a href="">
                                        <li className="footerli1">Terms & Condition</li>
                                    </a>
                                    <a href="">
                                        <li className="footerli1">FAQs & Help</li>
                                    </a>
                                </ul>
                            </div>
                            <div className="footerinnerdiv footerinnerdiv2">
                                <h1>Contact</h1>
                                <ul className="footerul2">
                                    <a href="">
                                        <li className="footerli2">123 Street, New York, USA</li>
                                    </a>
                                    <a href="">
                                        <li className="footerli22">+012 345 67890</li>
                                    </a>
                                    <a href="">
                                        <li className="footerli23">info@example.com</li>
                                    </a>
                                </ul>
                                <div className="footersocicalicons">
                                    <a className="btn btn-social" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-social" href=""><i className="fab fa-youtube"></i></a>
                                    <a className="btn btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div className="footerinnerdiv footerinnerdiv3">
                                <h1>Gallery</h1>
                                <div className="footersection3div">
                                    <div className="footersection3innerdiv1">
                                        <div className="footersection3dblinnerdiv d1">
                                            <img
                                                src="https://demo.htmlcodex.com/2151/elearning-html-template/img/course-1.jpg"/>
                                        </div>
                                        <div className="footersection3dblinnerdiv d2">
                                            <img
                                                src="https://demo.htmlcodex.com/2151/elearning-html-template/img/course-2.jpg"/>
                                        </div>
                                        <div className="footersection3dblinnerdiv d3">
                                            <img
                                                src="https://demo.htmlcodex.com/2151/elearning-html-template/img/course-3.jpg"/>
                                        </div>
                                    </div>
                                    <div className="footersection3innerdiv2">
                                        <div className="footersection3dblinnerdiv2 d4">
                                            <img
                                                src="https://demo.htmlcodex.com/2151/elearning-html-template/img/course-2.jpg"/>
                                        </div>
                                        <div className="footersection3dblinnerdiv2 d5">
                                            <img
                                                src="https://demo.htmlcodex.com/2151/elearning-html-template/img/course-3.jpg"/>
                                        </div>
                                        <div className="footersection3dblinnerdiv2 d6">
                                            <img
                                                src="https://demo.htmlcodex.com/2151/elearning-html-template/img/course-1.jpg"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footerinnerdiv footerinnerdiv4">
                                <h1>Newsletter</h1>
                                <p>Dolor amet sit justo amet elitr<br/> clita ipsum elitr est.</p>
                                <div className="btnContainer d-flex">
                                <input type="email" className="email" placeholder="Your email" required/>
                                <button>SignUp</button>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <div className="innerparentdiv">
                            <p>© <a href="#"> Ducat</a>  All Right Reserved. Designed By <a href="#"> Sonu
                                    Pandey</a></p>
                            <ul className="innerparentdivul">
                                <li><a href="">Home</a></li>
                                <li><a href="">Cookies</a></li>
                                <li><a href="">Help</a></li>
                                <li><a href="">FAQs</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
    </>
  )
}
