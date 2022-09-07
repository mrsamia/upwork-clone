import React from 'react';
import Button from './SingleComponents/Button';
import './components.css';
import network_logo from './Logos/network.svg';
import { Link } from "react-router-dom";

function StartNetworkingItems(props) {
    return (
        <div className='Start_Networking_Wrapper row'>
            <div className='col-9'>
                <div>
                    <h3>Start connecting with other pros like you</h3>
                </div>
                <div>
                    <p className='txt_p'>
                        Build a network of professionals on Upwork and message them to share ideas. More collaborative features are coming soon, so start making connections today!
                    </p>
                </div>
                <div>
                <Link to='/yourNetwork' > <Button name="Start Your Network" className="start_netwrk_btn" /> </Link>
                </div>
            </div>
            <div className='col-3'>
                <img src={network_logo} className="network_logo" alt="logo" />
            </div>
        </div>

    );
}

export default StartNetworkingItems;