// import "../App.css";
// import logo from "../Images/logo.png";
// import axios from "axios";
// import React from "react";
// import { Link, Navigate, useNavigate } from "react-router-dom";
// // import Login from "../../pages/Login";
// import { useState, useEffect } from "react";
// // import { useAuth } from "../../context/AuthContext";

// const Navbar = () => {

//   // const { currentUser } = useAuth();
//   // console.log("this is current user" + currentUser);
//   const navigate = useNavigate();
//   useEffect(() => {
//     // 👇️ scroll to top on page load
//     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
//   }, []);



//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem("user"));
//     if (data != null) {
//       // setUser(true);
//     }
//   }, []);

//   const logOut = () => {
//     navigate("/login")
    
//     localStorage.removeItem('user');



//   };
//   return (
//     <>
//       <button
//         onClick={() => {
//           window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
//         }}
//         style={{
//           position: "fixed",
//           borderRadius: "1rem",
//           fontSize: "20px",
//           bottom: "40px",
//           right: "40px",
//           backgroundColor: "rgb(42, 38, 95)",
//           color: "#fff",
//           textAlign: "center",
//         }}
//       >
//         ^
//       </button>
//       <nav className="navbar fixed-top " style={{ backgroundColor: "white" }}>
//         <div className="branding ms-3">
//           <Link to="/">
//             <img style={{ height: "4rem" }} src={logo} alt="" />
//           </Link>
//         </div>
//         <label htmlFor="input-hamburger" className="hamburger "></label>
//         <input type="checkbox" id="input-hamburger" hidden />
//         <ul className="menu" style={{ paddingLeft: "0px" }}>
//           <li className="has-dropdown">
//             <Link
//               to="/"
//               style={{ pointerEvents: "none" }}
//               className="menu-link "
//             >
//               <span className="arrow"></span>&ensp;Our Products
//             </Link>
//             <ul className="submenu">
//               <li className="has-dropdown">
//                 <Link to="#easygst" className="menu-link">
//                   Easy GST
//                 </Link>
//                 {/* <ul className="submenu">
//                   <li><Link to="/gstr" className="menu-link" >GSTR1</Link></li>
//                   <li><Link to="/" className="menu-link" data-bs-toggle="modal" data-bs-target="#modalSignin">GSTR3B</Link></li>
//                   <li><Link to="/" className="menu-link" data-bs-toggle="modal" data-bs-target="#modalSignin">GSTR4</Link></li>
//                   <li><Link to="/" className="menu-link" data-bs-toggle="modal" data-bs-target="#modalSignin">GSTR7</Link></li>
//                   <li><Link to="/" className="menu-link" data-bs-toggle="modal" data-bs-target="#modalSignin">GSTR9</Link></li>
//                   <li><Link to="/" className="menu-link" data-bs-toggle="modal" data-bs-target="#modalSignin">GSTR9C</Link></li>
//                 </ul> */}
//               </li>
//               <li className="has-dropdown">


//                 <Link
//                   to="/companyreg"
//                   style={{ pointerEvents: "none" }}
//                   className="menu-link"
//                 >
//                   Easy Company Registration
//                 </Link>
//                 {/* <ul className="submenu">
//                 <li><Link to="/" className="menu-link">Check Company Name </Link></li>
//                  <li><Link to="/" className="menu-link" data-bs-toggle="modal" data-bs-target="#modalSignin">ROC Filling </Link></li>
//                   <li><Link to="/" className="menu-link" data-bs-toggle="modal" data-bs-target="#modalSignin">LLP Registration </Link></li>
//                   <li><Link to="/" className="menu-link" data-bs-toggle="modal" data-bs-target="#modalSignin">OPC Registration </Link></li>
//                   <li><Link to="/" className="menu-link" data-bs-toggle="modal" data-bs-target="#modalSignin">Nidhi Company Registration </Link></li>
//                   <li><Link to="/" className="menu-link" data-bs-toggle="modal" data-bs-target="#modalSignin">Regitered Office Change </Link></li>
//                   <li><Link to="/" className="menu-link" data-bs-toggle="modal" data-bs-target="#modalSignin">Share Allotment </Link></li>
//                   <li><Link to="/" className="menu-link" data-bs-toggle="modal" data-bs-target="#modalSignin">GST Registration  </Link></li>
//                   <li><Link to="/" className="menu-link" data-bs-toggle="modal" data-bs-target="#modalSignin">TAN Registration  </Link></li>


// i

//                 </ul> */}
//               </li>
//               <li className="has-dropdown">
//                 <Link to="/easyitr" className="menu-link">
//                   Easy ITR
//                 </Link>
//                 {/* <ul className="submenu">
//                   <li><Link to="/easyitr1" className="menu-link" >ITR1</Link></li>
//                   <li><Link to="/" className="menu-link" data-bs-toggle="modal" data-bs-target="#modalSignin">ITR2</Link></li>
//                   <li><Link to="/" className="menu-link" data-bs-toggle="modal" data-bs-target="#modalSignin">ITR3</Link></li>
//                   <li><Link to="/" className="menu-link" data-bs-toggle="modal" data-bs-target="#modalSignin">ITR4</Link></li>
//                 </ul> */}
//               </li>
//               <li className="has-dropdown">
//                 <Link
//                   to="/"
//                   style={{ pointerEvents: "none" }}
//                   className="menu-link"
//                 >
//                   Easy Audit
//                 </Link>
//                 {/* <ul className="submenu">
//                   <li><Link to="/audit" className="menu-link" data-bs-toggle="modal" data-bs-target="#modalSignin">Upload Bank Statement</Link></li>
//                   <li><Link to="/audit" className="menu-link" data-bs-toggle="modal" data-bs-target="#modalSignin">Sale</Link></li>
//                   <li><Link to="/audit" className="menu-link" data-bs-toggle="modal" data-bs-target="#modalSignin">Purchase</Link></li>
//                   <li><Link to="/audit" className="menu-link" data-bs-toggle="modal" data-bs-target="#modalSignin">Balance Sheet</Link></li>


//                 </ul> */}
//               </li>

//               <li className="has-dropdown">
//                 <Link
//                   to="/"
//                   style={{ pointerEvents: "none" }}
//                   className="menu-link"
//                 >
//                   Easy E-Library
//                 </Link>
//                 {/* <ul className="submenu">
//                   <li><Link to="/" className="menu-link" data-bs-toggle="modal" data-bs-target="#modalSignin">GST Case LAW</Link></li>
//                   <li><Link to="/" className="menu-link" data-bs-toggle="modal" data-bs-target="#modalSignin">IT Case LAW</Link></li>



//                 </ul> */}
//               </li>
//             </ul>
//           </li>
//           <li className="has-dropdown">
//             <Link
//               to="/"
//               style={{ pointerEvents: "none" }}
//               className="menu-link"
//             >
//               <span className="arrow"></span>&ensp; Our Services
//             </Link>
//             <ul className="submenu">
//               <li className="has-dropdown">
//                 <Link
//                   to="/"
//                   style={{ pointerEvents: "none" }}
//                   className="menu-link"
//                 >
//                   Easy GST Links
//                 </Link>
//                 <ul className="submenu">
//                   <li>
//                     <Link to="/searchbygst" className="menu-link">
//                       Search By GSTIN
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/searchbypan" className="menu-link">
//                       Search By PAN
//                     </Link>
//                   </li>

//                   {/* <li>
//                     <Link to="/trackgstretrun" className="menu-link">
//                       Track GST Return
//                     </Link>
//                   </li> */}
//                 </ul>
//               </li>
//               <li className="has-dropdown">
//                 <Link
//                   to="/"
//                   style={{ pointerEvents: "none" }}
//                   className="menu-link"
//                 >
//                   Easy Income Tax Links
//                 </Link>
//                 <ul className="submenu">
//                   {/* <li><Link to="/" className="menu-link" data-bs-toggle="modal" data-bs-target="#modalSignin">Easy ITR Status</Link></li> */}
//                   {/* <li><Link to="/https://eportal.incometax.gov.in/iec/foservices/#/login" className="menu-link" >Easy ITR Return Filling</Link></li> */}
//                   {/* <li><Link to="/" className="menu-link" data-bs-toggle="modal" data-bs-target="#modalSignin">Easy E-Pan</Link></li> */}
//                   {/* <li><Link to="/verifyreturn" className="menu-link">Easy E-Verify Return</Link></li> */}
//                   {/* <li><Link to="/" className="menu-link" data-bs-toggle="modal" data-bs-target="#modalSignin">Easy E-Pay Tax</Link></li> */}
//                   {/* <li><Link to="/" className="menu-link" data-bs-toggle="modal" data-bs-target="#modalSignin">Know TAN Details</Link></li> */}
//                   {/* <li><Link to="/verifypan" className="menu-link" >Easy Verify Your PAN</Link></li> */}

//               {/* <li><Link to="/knowyourao" className="menu-link">Easy Know Your AO</Link></li> */}
//                   <li>
//                     <Link to="/getpandetails" className="menu-link">
//                       Easy PAN Details
//                     </Link>
//                   </li>
//                   {/* <li>
//                     <Link to="/searchtan" className="menu-link">
//                       Search TAN
//                     </Link>
//                   </li> */}

//                 </ul>
//               </li>
//               <li className="has-dropdown">
//                 <Link
//                   to="/"
//                   style={{ pointerEvents: "none" }}
//                   className="menu-link"
//                 >
//                   {" "}
//                   Easy Bank Links
//                 </Link>
//                 <ul className="submenu">
//                   <li>
//                     <Link to="/ifsccode" className="menu-link">
//                       IFSC Code
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/Verifybank" className="menu-link">
//                       Verify Bank Account
//                     </Link>
//                   </li>

//                   {/* <li><Link to="/" style={{pointerEvents: "none"}} className="menu-link" data-bs-toggle="modal" data-bs-target="#modalSignin">Easy Bank Statement</Link></li> */}
//                 </ul>
//               </li>
//               {/* <li className="has-dropdown">
//                 <Link to="/" style={{ pointerEvents: "none" }} className="menu-link"> Easy Reports

//                 </Link>
//                  <ul className="submenu">
//                   <li><Link to="/" className="menu-link" data-bs-toggle="modal" data-bs-target="#modalSignin">CMA Data</Link></li>
//                   <li><Link to="/" className="menu-link" data-bs-toggle="modal" data-bs-target="#modalSignin">Project Report</Link></li>

//                   <li><Link to="/" className="menu-link" data-bs-toggle="modal" data-bs-target="#modalSignin">Estimated Report</Link></li>
//                 </ul> 

//               </li> */}
//               <li className="has-dropdown">
//                 <Link
//                   to="/"
//                   style={{ pointerEvents: "none" }}
//                   className="menu-link"
//                 >
//                   {" "}
//                   Easy Aadhaar Links{" "}
//                 </Link>
//                 <ul className="submenu">
//                   <li>
//                     <Link to="/linkaadharstatus" className="menu-link">
//                       Easy Link Aadhaar Status
//                     </Link>
//                   </li>
//                   {/* <li><Link to="/linkaadhaar"  className="menu-link" >Easy Link Aadhaar</Link></li>  */}
//                 </ul>
//               </li>
//             <li className="has-dropdown">
//                 <Link to="/" style={{ pointerEvents: "none" }} className="menu-link">Easy PDF Converter </Link>
//                 <ul className="submenu">
//                   <li className="has-dropdown">
//                 {/* <li><Link to="/extract" className="menu-link" >Extract</Link></li> */}
//                     <li><Link to="/imgtopdf" className="menu-link" >Image to PDF </Link></li>
//                     {/* <li><Link to="/" className="menu-link" >Create Image From PDF </Link></li> */}
//                 {/* <li><Link to="/" className="menu-link" >Merge PDF</Link></li> */}
//                 {/* <li><Link to="/" className="menu-link" >Compress</Link></li> */}

//                   </li>
//                 </ul>
//               </li>
//                  {/*
//               <li className="has-dropdown">
//                 <Link to="/" style={{ pointerEvents: "none" }} className="menu-link"> More Services

//                 </Link>
//                 <ul className="submenu">
//                   <li><Link to="/" className="menu-link" >Health Insurance</Link></li>
//                   <li><Link to="/" className="menu-link" >Lic Plans</Link></li>
//                   <li><Link to="/" className="menu-link" >NPS</Link></li>
                 
//                   <li><Link to="/" className="menu-link" >Mutual Funds</Link></li>
//                   <li><Link to="/" className="menu-link" >SIP</Link></li>s


//                 </ul>
//               </li> */}
//               <li className="has-dropdown">
//                 {/* <Link to="/" style={{ pointerEvents: "none" }} className="menu-link"> Postoffice

//                 </Link> */}
//                 <ul className="submenu">
//                   <li>
//                     <Link to="/pincodeinfo" className="menu-link">
//                       Pincode Information
//                     </Link>
//                   </li>
//                   {/* <li><Link to="/" className="menu-link" >Lic Plans</Link></li> */}
//                 </ul>
//               </li>
//             </ul>
//           </li>

//           <li className="has-dropdown">
//             <Link
//               to="/"
//               style={{ pointerEvents: "none" }}
//               className="menu-link "
//             >
//               <span className="arrow"></span>&ensp;Financial Calculators
//             </Link>
//             <ul className="submenu">
//               <li className="has-dropdown">
//                 <Link
//                   to="/"
//                   style={{ pointerEvents: "none" }}
//                   className="menu-link"
//                 >
//                   Bank Calculators
//                 </Link>
//                 <ul className="submenu">
//                   <li>
//                     <Link to="/emical" className="menu-link2">
//                       EMI Calculator
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/fdcal" className="menu-link2">
//                       FDR Calculator
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/lumpsumcal" className="menu-link2">
//                       LUMP SUM Calculator
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="" className="menu-link2">
//                       SIP Calculator
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/businessloancal" className="menu-link2">
//                       Business Loan Calculator
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/simpleinterestcal" className="menu-link2">
//                       Simple Interest Calculator
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/carloancal" className="menu-link2">
//                       Car Loan Calculator
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/loanaginstcal" className="menu-link2">
//                       Loan Against Property{" "}
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/homeloancal" className="menu-link2">
//                       Home Loan Calculator{" "}
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="" className="menu-link2">
//                       Rd Calculator{" "}
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/compoundinterestcal" className="menu-link2">
//                       Compound Interest{" "}
//                     </Link>
//                   </li>
//                 </ul>
//               </li>

//               <li className="has-dropdown">
//                 <Link
//                   to="/"
//                   style={{ pointerEvents: "none" }}
//                   className="menu-link"
//                 >
//                   Income Tax Calculators
//                 </Link>
//                 {/* <ul className="submenu">
//                   <li>
//                     <Link to="/hracal" className="menu-link2">
//                       HRA Calculator
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/" className="menu-link2">
//                       Income Tax Old Calculator
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="" className="menu-link2">
//                       Income Tax New Calculator
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="" className="menu-link2">
//                       Income Tax New Advance
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="" className="menu-link2">
//                       Income Tax Old Advance
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="" className="menu-link2">
//                       PPF Calculator
//                     </Link>
//                   </li>

//                   <li>
//                     <Link to="/npscal" className="menu-link2">
//                       NPS Calculator{" "}
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="" className="menu-link2">
//                       Capital Gain Calculator{" "}
//                     </Link>
//                   </li>
//                 </ul> */}
//               </li>
//               <li className="has-dropdown">
//                 <Link
//                   to="/"
//                   style={{ pointerEvents: "none" }}
//                   className="menu-link"
//                 >
//                   {" "}
//                   GST Calculators
//                 </Link>
//                 {/* <ul className="submenu">
//                   <li>
//                     <Link to="" className="menu-link2">
//                       GST Calculator
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="" className="menu-link2">
//                       GST Late Fee Calculator
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="" className="menu-link2">
//                       GST Interest Calculator
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="" className="menu-link2">
//                       GST Liabilities Calculator{" "}
//                     </Link>
//                   </li>
//                 </ul> */}
//               </li>
//               <li className="has-dropdown">
//                 <Link
//                   to="/"
//                   style={{ pointerEvents: "none" }}
//                   className="menu-link"
//                 >
//                   {" "}
//                   Investment Calculators
//                 </Link>
//                 {/* <ul className="submenu">
//                   <li>
//                     <Link to="" className="menu-link2">
//                       Health Insurance Calculator
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="" className="menu-link2">
//                       LIC Plan Calculator
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="" className="menu-link2">
//                       Mutual Fund Calculator
//                     </Link>
//                   </li>
//                 </ul> */}
//               </li>
//             </ul>
//           </li>

//           <li>
//             <Link to="/" className="menu-link">
//               Blog
//             </Link>
//           </li>

//           <li>
//             <Link to="/startups" className="menu-link">
//               Register a Startup
//             </Link>
//           </li>
//           <li>
//             <Link to="/faqs" className="menu-link">
//               FAQ's
//             </Link>
//           </li>

//           <li>
//             <Link to="/api" className="menu-link">
//               API's
//             </Link>
//           </li>
//           <li>
//             <Link to="/downloads" className="menu-link">
//               Downloads
//             </Link>
//           </li>

//           {currentUser ? (

//             <button
//             style={{
//               width: "8rem",
//               borderRadius: "10px",
//               height: "3.2rem",
//             }}
//               onClick={logOut}
//               className="btn1 me-3  mt-2 bn39 "
//               type="submit"
//             >
//               <span> Sign Out</span>
//             </button>
//           ) : (
//             <Link to="/login" className="noline">
//               <button
//                 type="button"
//                 className=" btn1 me-3  mt-2 bn39  "
//                 style={{
//                   width: "8rem",
//                   borderRadius: "10px",
//                   height: "3.2rem",
//                 }}
//               >
//                 <span className="bn39span">Sign In</span>
//               </button>
//             </Link>
//           )}
//           {/* <Link to="/login"><button type="button" className=" btn1 me-3  mt-2 cssbutton " style={{ height: "3rem", width: "6rem", borderRadius: "10px" }}>Sign In</button></Link> */}
//         </ul>
//       </nav>

//       {/* model sugnup */}

//       <div
//         className="modal modal-signin "
//         id="modalSignin"
//         tabIndex="-1"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog modal-xl" role="document">
//           <div className="modal-content rounded-5 shadow">
//             <div className="modal-header border-bottom-0">
//               {/* <!-- <h5 className="modal-title">Modal title</h5> --> */}

//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <Login />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;
