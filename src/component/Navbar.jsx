import {} from "react"
import { NavLink } from "react-router-dom"

export default function Navbar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mx-5  mb-2 mb-lg-0">
        <li className="nav-item px-3">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item dropdown px-3">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Course
          </a>
          <ul className="dropdown-menu ">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown px-3">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link active" aria-current="page" href="#">Placement</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link active" aria-current="page" href="#">Certificate</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link active" aria-current="page" href="#">Blog</a>
        </li>
        <li className="nav-item px-3 ">
          <a className="nav-link active" aria-current="page" href="#">Contact-Us</a>
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