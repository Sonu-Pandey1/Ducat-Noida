// import { FaFacebook } from "react-icons/fa";
import "../component/Header.css"

export default function Header(){
    return(
        <>
            <div className="container-fulid d-flex header">
            <ul className="d-flex">
            
                {/* <li><FaFacebook className="fa"/></li> */}
                <li><img className="fa" src="https://cdn-icons-png.flaticon.com/128/1384/1384168.png" alt="error" /></li>
                <li><img className="fa" src="https://cdn-icons-png.flaticon.com/128/1384/1384075.png" alt="error" /></li>
                <li><img className="fa" src="https://cdn-icons-png.flaticon.com/128/1384/1384171.png" alt="error" /></li>
                <li><img className="fa" src="https://cdn-icons-png.flaticon.com/128/1384/1384070.png" alt="error" /></li>
                <li><img className="fa" src="https://cdn-icons-png.flaticon.com/128/747/747976.png" alt="error" /></li>
                
            </ul>
            <p className="">+91 99-9999-3213</p>
            <p>+91 70-70-90-50-90</p>
            <p>info@ducatindia.com</p>

            </div>
        </>
    )
}