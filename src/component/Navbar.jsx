
import { NavLink } from "react-router-dom"
import "./Navbar.css"
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid m-1">
          <a className="navbar-brand acontainer ms-5 ps-4" href="/"><img src="/images/ducatLogo2.png" style={{ height: "60px" }} alt="errpr"></img></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mx-5 me-auto  mb-2 mb-lg-0 navbarUl">
              <li className=" nav-item  px-2">
                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
              </li>
              <li className="nav-item dropdown px-2">
                <a className="nav-link dropdown-toggle navCoursesVtn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Course
                </a>
                <ul className="dropdown-menu ">
                  <li><NavLink className="dropdown-item" to="#">Action</NavLink></li>
                  <li><NavLink className="dropdown-item" to="#">Action2</NavLink></li>
                  <li><NavLink className="dropdown-item" to="#">Action3</NavLink></li>
                  <li><NavLink className="dropdown-item" to="#">Action4</NavLink></li>

                  {/* <li><hr className="dropdown-divider"/></li> */}
                  {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                </ul>
              </li>
              <li className="nav-item dropdown px-2">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to="#">Action</NavLink></li>
                  <li><NavLink className="dropdown-item" to="#">Action2</NavLink></li>
                  <li><NavLink className="dropdown-item" to="#">Action3</NavLink></li>
                  <li><NavLink className="dropdown-item" to="#">Action4</NavLink></li>
                </ul>
              </li>
              <li className="nav-item px-2">
                <NavLink className="nav-link" aria-current="page" to="/placement">Placement</NavLink>
                {/* <a className="nav-link active" aria-current="page" href="#">Placement</a> */}
              </li>
              <li className="nav-item px-2">
                <NavLink className="nav-link" aria-current="page" to="/certificate">Certificate</NavLink>
                {/* <a className="nav-link active" aria-current="page" href="#">Certificate</a> */}
              </li>
              <li className="nav-item px-2">
                <NavLink className="nav-link" aria-current="page" to="/about">About</NavLink>

                {/* <a className="nav-link active" aria-current="page" href="#">About</a> */}
              </li>
              <li className="nav-item px-2">
                <NavLink className="nav-link" aria-current="page" to="/blog">Blog</NavLink>

                {/* <a className="nav-link active" aria-current="page" href="#">Blog</a> */}
              </li>
              <li className="nav-item px-2 ">
                <NavLink className="nav-link" aria-current="page" to="/contact">Contact Us</NavLink>

                {/* <a className="nav-link active" aria-current="page" href="#">Contact-Us</a> */}
              </li>
              {/* <Navlink to={"/contact"}>Contact-Us</Navlink> */}
              {/* <NavLink to={"/contact"}>contact</NavLink> */}
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}