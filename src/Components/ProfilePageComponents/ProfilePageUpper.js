import React from 'react';
import Button from '../SingleComponents/Button';

function ProfilePageUpper(props) {
    return (
        <div className='container  ProfileCard_Wrapper'>
            <div className='row'>
                <div className='col-4'>

                </div>
                <div className='col-8'>
                    <div className='d-flex justify-content-end pt-4 pb-4'>
                        <Button name="See Public View" className="see_publcView" />
                        <Button name="Profile Setting" className="Profile_Setting" />
                    </div>
                    <div className='base_left_border  '>
                    <div className='pt-5  base_border '>
                        <h3 className='base_Padding'>Expert React.js Developer</h3>
                        <p className='pt-4 base_Padding'>
                            I am an enthusiastic and self-taught web developer who loves to bring your ideas and projects to life! I have a massive fascination with new technologies and software. I have more than 3+ Years of working experience in a professional environment. I have been practicing programming for the past seven years.
                        </p>
                    </div>
                    <div className='base_Padding'>
                        <h5>Work History</h5>
                        <p className='Completed_jobs pt-4'>Completed jobs</p>
                    </div>
                </div>
                </div>
            </div>

        </div>
    );
}

export default ProfilePageUpper;