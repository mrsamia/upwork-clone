import React from 'react';
import GreenText from './SingleComponents/GreenText';

function ProposalCard(props) {
    return (
        <div className='ProfileCard_Wrapper mr_left'>
            <div className='base_Padding base_border'>
                <h3>Proposals</h3>
                <GreenText title="My Proposals" />
            </div>
            <div className='base_Padding'>
                <GreenText title="2 active candidates" />
                <GreenText title="4 submitted proposals" />
            </div>

        </div>
    );
}

export default ProposalCard;