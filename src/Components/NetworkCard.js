import React from 'react';
import GreenText from './SingleComponents/GreenText';

function NetworkCard(props) {
    return (
        <div className='ProfileCard_Wrapper mr_left'>
            <div className='base_Padding base_border'>
                <h3>Project Catalog</h3>
                <GreenText title="My Project Dashboard" />
            </div>
            <div className='base_Padding'>
                <GreenText title="Create a Catalog project" /><span>clients to purchase instantly</span>

            </div>

        </div>
    );
}

export default NetworkCard;