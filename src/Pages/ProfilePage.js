import React from 'react';
import Nav from '../Components/Nav/Nav';
import '../Components/ProfilePageComponents/ProfilePageCompo.css'
import ProfilePageUpper from '../Components/ProfilePageComponents/ProfilePageUpper';


function ProfilePage(props) {
    return (
        <div>
            <Nav />
            <ProfilePageUpper/>

        </div>
    );
}

export default ProfilePage;
