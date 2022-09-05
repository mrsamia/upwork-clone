import React from 'react';
import Upwork_logo from '../Logos/Upwork_logo.svg';
import help_logo from '../Logos/help.svg';
import notification_logo from '../Logos/notification.svg';
import directContract_logo from '../Logos/directContract.svg';
import { FiSearch } from "react-icons/fi";
import './Nav.css';
function Nav(props) {
    return (
        <nav className=" navbar navbar-expand-lg navbar-light nav_bg ">
            <div className='container '>
                {/* <img src={Upwork_logo} className="App-logo" alt="logo" /> */}
                <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
                <img src={Upwork_logo} className="App-logo" alt="logo" />
                    <form className="form-inline my-2 my-lg-0">
                    {/* <FiSearch className='fi'/>  */}
                    <input className="form-control mr-sm-2 frm_cntrl" type="search" placeholder="Search" aria-label="Search" />
                        {/* <button type="submit" aria-label="Search" class="nav-btn-icon"><span size="md" aria-hidden="true" class="up-s-nav-icon nav-search-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M10.688 18.377a7.688 7.688 0 100-15.377 7.688 7.688 0 000 15.377zm5.428-2.261L21 21"></path></svg></span></button> */}
                    </form>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link  dropbtn activenavItems" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Find Work
                            </a>
                            <div className="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#"> Find Work</a>
                                <a className="dropdown-item" href="#">Your Network</a>
                                <a className="dropdown-item" href="#">Save Jobs</a>
                                <a className="dropdown-item" href="#">Proposals</a>
                                <a className="dropdown-item" href="#">profile</a>
                                <a className="dropdown-item" href="#">My Status</a>
                                <a className="dropdown-item" href="#">My Project Dashboard</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link  dropbtn navItems" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                My Jobs
                            </a>
                            <div className="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#"> Find Work</a>
                                <a className="dropdown-item" href="#">Your Network</a>
                                <a className="dropdown-item" href="#">Save Jobs</a>
                                <a className="dropdown-item" href="#">Proposals</a>
                                <a className="dropdown-item" href="#">profile</a>
                                <a className="dropdown-item" href="#">My Status</a>
                                <a className="dropdown-item" href="#">My Project Dashboard</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link  dropbtn navItems" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Reports
                            </a>
                            <div className="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#"> Find Work</a>
                                <a className="dropdown-item" href="#">Your Network</a>
                                <a className="dropdown-item" href="#">Save Jobs</a>
                                <a className="dropdown-item" href="#">Proposals</a>
                                <a className="dropdown-item" href="#">profile</a>
                                <a className="dropdown-item" href="#">My Status</a>
                                <a className="dropdown-item" href="#">My Project Dashboard</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link  dropbtn navItems" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Messages
                            </a>
                        </li>
                    </ul>

                    <div>
                        <img src={help_logo} className="help_logo" alt="logo" />
                    </div>
                    <div>
                        <img src={notification_logo} className="help_logo" alt="logo" />
                    </div>
                    <div>
                        <img src={directContract_logo} className="help_logo" alt="logo" />
                    </div>
                    <div>
                        <img alt="" src="https://www.upwork.com/profile-portraits/c1Wj60NlHObbuoHYiow7JG6hHFWg3cXcrumSAD6jeiUPwEJpA3YoSyqn5lcQn-ZQbJ" className=" samia_logo" />
                    </div>
                </div>


            </div>
        </nav>
    );
}

export default Nav;