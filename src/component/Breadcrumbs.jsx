// import { NavLink } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { NavLink,  } from 'react-router-dom';

export default function Breadcrumbs() {
    // let navigate = useNavigate()
  return (
    <Breadcrumb className='brd'>
      <Breadcrumb.Item className='brdsub'><NavLink className={"brdsub"} to={"/"}>Home</NavLink></Breadcrumb.Item>
      
      <Breadcrumb.Item className='brdsub text-light' active>Certificate</Breadcrumb.Item>
    </Breadcrumb>
  );
}

 