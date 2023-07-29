// import React from 'react'
// import { NavLink } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";


export default function Contact() {
  return (
    <div className="">
      <div className="CertificateContainer ">
        <h1>Contact</h1>
        <Breadcrumbs className={"CertificateBreadcrumb"} Path={ " / Contact"} />
      </div>
      <div className="formwrapper">
      <section className="contactSection">
      <form className="row g-3 needs-validation" novalidate>
  <div className="col-md-4">
    <label htmlFor="validationCustom01" className="form-label">First name</label>
    <input type="text" className="form-control" id="validationCustom01" placeholder="Enter your Name" required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustom02" className="form-label">Last name</label>
    <input type="text" className="form-control" id="validationCustom02" placeholder="Enter your Last Name" required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustomUsername" className="form-label">Username</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" placeholder="Enter your UserName" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
      <div className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationCustom03" className="form-label">City</label>
    <input type="text" placeholder="Enter your City" className="form-control" id="validationCustom03" required/>
    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationCustom04" className="form-label">State</label>
    <select className="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>Noida</option>
      <option>Delhi</option>
      <option>Mathura</option>
      <option>gurugram</option>
      <option>meri city ni hai pura india mera ghar hai </option>
    </select>
    <div className="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationCustom05" className="form-label">Zip</label>
    <input type="text" placeholder="Enter your Zip Code" className="form-control" id="validationCustom05" required/>
    <div className="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label className="form-check-label" htmlFor="invalidCheck">
        Agree to terms and conditions. ?
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
      </section>
      </div>

      <section className="contextContactinfocards">
            <h1>Contact Info</h1>
            <p>Ducat India</p>

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
    </div>
  )
}
