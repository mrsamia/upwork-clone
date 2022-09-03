import React from 'react';
import GreenText from './SingleComponents/GreenText';

function ProjectCatalogCard(props) {
    return (
        <div className='ProfileCard_Wrapper mr_left'>
        <div className='base_Padding base_border'>
            <h3>Your Network</h3>   
        </div>
        <div className='base_Padding'>
            <GreenText title="4 connections" />
        </div>
    </div>
    );
}

export default ProjectCatalogCard;