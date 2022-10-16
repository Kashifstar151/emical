import React from 'react'
import { Link } from 'react-router-dom'
import logo2 from '../Images/logo2.png'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
	return (
		<>
			<footer className='container-fluid'>
				<div className="footer-wrap">
					<div className="container first_class">
						<div className="row">
							<div className="col-md-4 col-sm-6">
								<h6 className='text-white'>Main office -G - 41, Gandhi Nagar, Near Defence Colony,Padav Gwalior 474002 (M.P) </h6>
								<p>Second Branch -  Sat 1 ,Flat - 811, Logix Zest Blossom, Sector 143, Noida  201306 ( U.P)</p>

							</div>
							<div className="col-md-4 col-sm-6">


							</div>
							<div className="col-md-4 col-sm-6">
							<div className="col-md-12 mb-2"><h3 style={{ textAlign: "right" }}>Stay Connected </h3></div>
								<div className="col-md-12">
									<div className="standard_social_links">
										<div className='row'>
											<li className='col ' ><a href="https://www.facebook.com/sonaliitax" target="_blank"><FaFacebook style={{backgroundColor:"white",borderRadius:"1rem" , height:"2rem",width:"2rem",padding:"2px"}} /></a>

											</li>
											<li className='col' ><a href="https://in.linkedin.com/company/itaxeasy-pvt-limited" target="_blank"><FaLinkedin style={{backgroundColor:"white",borderRadius:"1rem" , height:"2rem",width:"2rem",padding:"2px"}}/></a>

											</li>
											<li className='col'><a href="https://www.youtube.com/channel/UCPIBwAH6WY0zbprHooMjx8g" target="_blank"><FaYoutube style={{backgroundColor:"white",borderRadius:"1rem" , color:"red", height:"2rem",width:"2rem",padding:"2px"}}/></a>

											</li>
											<li className='col' ><a href="https://www.instagram.com/_itax_easy/" target="_blank"><FaInstagram style={{backgroundColor:"white",borderRadius:"1rem" , height:"2rem",width:"2rem",padding:"2px"}}/></a>

											</li>
											<li className='col' ><a href="https://wa.me/8770877270" target="_blank"><FaWhatsapp style={{backgroundColor:"white",borderRadius:"1rem" , height:"2rem",width:"2rem", color:"green",padding:"2px"}}/></a>

											</li>
											{/* <li className="round-btn btn-envelop"><Link to="/tc"><i className="fa fa-envelope" aria-hidden="true"></i></Link>

					</li> */}
										</div>
									</div>
								</div>
								
								
							</div>
						</div>
					</div>
					<div className="second_class">
						<div className="container second_class_bdr">
							<div className="row">
								<div className="col-md-4 col-sm-6">

									<div className="footer-logo"><img style={{ width: "6rem" }} src={logo2} alt="logo" />
									</div>
									<p>India's Most Trusted Accounting And Financial Platform Continuing The Legacy Of Accounting Firm N.S. Bedi And Associates Since 1972.</p>
							
								</div>
								<div className="col-md-3 col-sm-6">
									<h3>Quick Links</h3>
									<ul className="footer-links">
										<li><Link to="/">Home</Link>
										</li>
										<li><Link to="/about">About us</Link>
										</li>

										<li><Link to="/Contectus">Contact Us</Link>
										</li>
										<li><Link to="/tc" >Terms &amp; Conditions</Link>
										</li>
										<li><Link to="/disclaimerpolicy" >Disclaimer Policy</Link>
										</li>
										<li><Link to="/eula">Software License</Link>
										</li>
									</ul>
								</div>
								<div className="col-md-3 col-sm-6 ">
									<h3 className='ps-4' >We Offer </h3>
									<ul className="footer-links">
										<li><Link to="/jobs">Fresher Jobs</Link>
										</li>
										<li><Link to="/internship">Internship</Link>
										</li>

									</ul>
									<div className="clearfix"></div>
								</div>
								<div className="col-md-2 col-sm-6">
									<h3 className='ps-4'>Any Questions</h3>
									<ul className="footer-links">
										<li><Link to="tel:8770877270">Contact us:- +91-8770877270</Link>
										</li>
									

										<li><Link to="/">support@itaxeasy.com</Link>
										</li>
										<li>
										<Link to="/settings">Settings</Link>
										</li>
									</ul>
									
								</div>
								

							</div>

						</div>
					</div>

					<div className="row" >

						<div className="container-fluid" >
							<div className="copyright" style={{ backgroundColor: "#142136" }}> Copyright 2022 | All Rights Reserved By iTaxEasy</div>
						</div>

					</div>
				</div>

			</footer>



		</>
	)
}

export default Footer