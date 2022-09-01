import React from 'react';
import ProfileCard from '../Components/ProfileCard';
import StartNetworkingItems from '../Components/StartNetworkingItems';

function StartNetworking(props) {
    return (
        <div className='row'>
            <div className='col-8'>
                <StartNetworkingItems/>
            </div>
            <div className='col-3'>
                <ProfileCard/>
            </div>
        </div>
    );
}

export default StartNetworking;