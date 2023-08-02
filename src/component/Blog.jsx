// import React from 'react'
// import { NavLink } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import CourseItems from "./CourseItems";


export default function Blog() {
  return (
    <>
      <div className="CertificateContainer">
        <h1>Blog</h1>
        <Breadcrumbs className={"CertificateBreadcrumb"} Path={ " / Blog"} />
      </div>
      <section className="BlogSection">
      {/* <h1>This is blog Section </h1> */}
      <div className=" d-flex justify-content-evenly flex-wrap">
      <CourseItems clint={true} img={"https://admin.ducatindia.com/blog/1688722265550Digital%20Marketing.jpg"}/>
      <CourseItems clint={true} img={"https://admin.ducatindia.com/blog/1681662178119Career.png"}/>
      <CourseItems clint={true} img={"https://admin.ducatindia.com/blog/6365f5d9b19b3.png"}/>
      <CourseItems clint={true} img={"https://admin.ducatindia.com/blog/63942b375ec59.png"}/>
      <CourseItems clint={true} img={"https://admin.ducatindia.com/blog/63918ad1408cb.png"}/>
      <CourseItems clint={true} img={"https://admin.ducatindia.com/blog/638b1d4288d4a.jpg"}/>
      <CourseItems clint={true} img={"https://admin.ducatindia.com/blog/6389f62b41946.png"}/>
      <CourseItems clint={true} img={"https://admin.ducatindia.com/blog/638878980e1d2.png"}/>
      <CourseItems clint={true} img={"https://admin.ducatindia.com/blog/6381b97d93fab.png"}/>
      <CourseItems clint={true} img={"https://admin.ducatindia.com/blog/637f0dd44a3ea.png"}/>
      <CourseItems clint={true} img={"https://admin.ducatindia.com/blog/6378c15bf0ff7.png"}/>
      <CourseItems clint={true} img={"https://admin.ducatindia.com/blog/636f798b7e888.png"}/>
      <CourseItems clint={true} img={"https://admin.ducatindia.com/blog/636de6ba2aa14.png"}/>
      <CourseItems clint={true} img={"https://admin.ducatindia.com/blog/636b75ee54f91.png"}/>

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
