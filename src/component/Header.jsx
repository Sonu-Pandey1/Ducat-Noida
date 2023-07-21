import {BiPhoneCall } from "react-icons/Bi";
import {MdFacebook} from "react-icons/Md";
import {AiFillTwitterCircle,AiOutlineInstagram} from "react-icons/Ai";
import {LiaLinkedinIn} from "react-icons/Lia";
import {TfiYoutube} from "react-icons/Tfi";

import "../component/Header.css"

export default function Header() {
    return (
        <>
            <div className="row  pt-3  header">
                <div className="col col-md-6">
                    <div className="container">
                        <ul className="d-flex ms-5 ps-4 headerUl1  ">

                            {/* <li><FaFacebook className="fa"/></li> */}
                            <li><MdFacebook style={{color:"var(--white)"}}/></li>
                            <li><AiFillTwitterCircle style={{color:"var(--white)"}}/></li>
                            <li> <LiaLinkedinIn style={{color:"var(--white)"}} /></li>
                            <li><TfiYoutube style={{color:"var(--white)"}} /></li>
                            <li><AiOutlineInstagram style={{color:"var(--white)"}} /></li>

                        </ul>
                    </div>
                </div>
                <div className="col col-md-6">

                    <ul className="ms-auto me-5 pe-5 headerSpan ">
                        <span className="px-2"> <i className="fa-brands fa-whatsapp" style={{ color: "#ffffff" }}></i>+91 99-9999-3213</span>
                        <span className="px-2"><BiPhoneCall/>+91 70-70-90-50-90</span>
                        <span className="px-2"><i className="fa-solid fa-envelope-circle-check"  style={{ color: "#ffffff" }}></i> info@ducatindia.com</span>
                    </ul>
                </div>
            </div>
        </>
    )
}
