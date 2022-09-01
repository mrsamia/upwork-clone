import React from 'react';
import Upwork_logo from '../Logos/Upwork_logo.svg';
import help_logo from '../Logos/help.svg';
import notification_logo from '../Logos/notification.svg';
import directContract_logo from '../Logos/directContract.svg';
import './Nav.css';
function Nav(props) {
    return (
        <nav className=" navbar navbar-expand-lg navbar-light nav_bg d-flex justify-content-center">
            <div className='container'>
                <img src={Upwork_logo} className="App-logo" alt="logo" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2 frm_cntrl" type="search" placeholder="Search" aria-label="Search" />

                    </form>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link  dropbtn navItems" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Find Work
                            </a>
                            <div className="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link  dropbtn navItems" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                My Jobs
                            </a>
                            <div className="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link  dropbtn navItems" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Reports
                            </a>
                            <div className="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link  dropbtn navItems" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Messages
                            </a>
                            <div className="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
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
                        <img alt="" src="https://www.upwork.com/profile-portraits/c1Wj60NlHObbuoHYiow7JG6hHFWg3cXcrumSAD6jeiUPwEJpA3YoSyqn5lcQn-ZQbJ" class=" samia_logo" />
                    </div>
                </div>


            </div>
        </nav>
    );
}

export default Nav;