/* eslint-disable react/prop-types */
// import { NavLink } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { NavLink,  } from 'react-router-dom';

export default function Breadcrumbs({Path}) {
    // let navigate = useNavigate()
  return (
    <Breadcrumb className=' text-center ms-3 brd'>
      <NavLink className={"navlinkss"} to={"/"}>Home </NavLink>
      
      <Breadcrumb.Item className='brdsub text-light' active> {Path}</Breadcrumb.Item>
    </Breadcrumb>
  );
}

 