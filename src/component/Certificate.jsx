// import React from 'react'
import { NavLink } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";


export default function Certificate() {
  return (
    <>
      <div className="CertificateContainer">
        <h1>Certificate</h1>
        <Breadcrumbs className={"CertificateBreadcrumb"} Path={Certificate} />
      </div>
      <section className="Certificatemain">
        <NavLink to={"/apply-for-certificate"}>Apply For Certificate</NavLink>
        <NavLink to={"download-certificate"}>Download Certificate</NavLink>
        <NavLink to={"verify-certificate"}>verify Certificate</NavLink>
      </section>
    </>
  )
}
