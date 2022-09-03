import React from 'react';
import BlackTitleText from './SingleComponents/BlackTitleText';
import GreenText from './SingleComponents/GreenText';
import { FiSearch } from "react-icons/fi";
import PenIcon from './PenIcon';

function ProfileCard(props) {
    return (
        <div className='ProfileCard_Wrapper mr_left'>
            <div className="text-center pt-4">
                <img alt="" src="https://www.upwork.com/profile-portraits/c1Wj60NlHObbuoHYiow7JG6hHFWg3cXcrumSAD6jeiUPwEJpA3YoSyqn5lcQn-ZQbJ" className="profile_logo" />
            </div>
            <div className="text-center">
                <h3 className="mt-20 mb-0 ">
                    <a href="/freelancers/~01fa642fa507159323" className="profile-title">Samia R.</a>
                </h3>
                <p>Expert React.js Developer</p>
            </div>
            <div className='progress_Wrapper'>
                <BlackTitleText title="Profile Completeness" />
                <div className="progress">
                    <div className="progress-bar bgSuccess" role="progressbar" style={{ width: '100%', height: '5px' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
            <div className='base_Padding base_border'>
                <GreenText title="40 Available Connects" />
            </div>
            <div className='base_Padding base_border'>
                <div className='d-flex  '>
                    <BlackTitleText title="Availability Badge" /> <PenIcon />
                </div>
                <div className='d-flex pt'>
                    <BlackTitleText title="Hours per week" /><PenIcon />
                </div>
                <div>
                    <p>As Needed - Open to Offers</p>
                </div>
                <div className='d-flex pt '>
                    <BlackTitleText title="Profile Visibility" /><PenIcon />
                </div>
                <div>
                    <p>Public</p>
                </div>
            </div>
            <div className='base_Padding '>
                <div className='d-flex '>
                    <BlackTitleText title="My Categories" /><PenIcon />
                </div>
                <div>
                    <GreenText title="Web Development" />
                </div>
            </div>

        </div>

    );
}

export default ProfileCard;