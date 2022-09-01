import React from 'react';
import GreenText from './GreenText';

function ProfileCard(props) {
    return (
        <div className='ProfileCard_Wrapper'>
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
            <p className='font_md'>Profile Completeness:</p>
            <div className="progress">
                <div className="progress-bar bgSuccess" role="progressbar" style={{width: '100%',height:'5px'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            <div className='base_Padding base_border'>
                <GreenText title="40 Available Connects"/>
            </div>
            <div className='base_Padding font_md'>
             <p>My Categories</p>
             <GreenText title="Web Development"/>
            </div>
        </div>

    );
}

export default ProfileCard;