// import React from 'react'
import { NavLink } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";


export default function Certificate() {
  return (
    <>
      <div className="CertificateContainer">
        <h1>Certificate</h1>
        <Breadcrumbs className={"CertificateBreadcrumb"} Path={ " / Certificate"} />
      </div>
      <section className="Certificatemain d-flex justify-content-center">
        <NavLink className={"navlink"} to={"/apply-for-certificate"}>Apply For Certificate</NavLink>
        <NavLink className={"navlink"} to={"/download-certificate"}>Download Certificate</NavLink>
        <NavLink className={"navlink"} to={"/verify-certificate"}>verify Certificate</NavLink>
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
