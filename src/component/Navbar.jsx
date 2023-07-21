import {} from "recat"

export default function Navbar(){
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mx-5  mb-2 mb-lg-0">
        <li class="nav-item px-3">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item dropdown px-3">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Course
          </a>
          <ul class="dropdown-menu ">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown px-3">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link active" aria-current="page" href="#">Placement</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link active" aria-current="page" href="#">Certificate</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link active" aria-current="page" href="#">Blog</a>
        </li>
        <li class="nav-item px-3 ">
          <a class="nav-link active" aria-current="page" href="#">Contact-Us</a>
        </li>
        <Navlink to={"/contact"}>Contact-Us</Navlink>
      </ul>
    </div>
  </div>
</nav>
        
        </>
    )
}