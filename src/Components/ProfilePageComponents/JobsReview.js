import React from 'react';
import StarIcon from '../Icon/StarIcon';
import BlackTitleText from '../SingleComponents/BlackTitleText';

function JobsReview(props) {
    return (
        <div className='base_Padding'>
            <BlackTitleText title="Front-end engineer needed to create a website"/>
            <p  className='base_Font_size_Xs d-flex align-items-center'>< StarIcon/>< StarIcon/>< StarIcon/>< StarIcon/>< StarIcon/>Feb 28, 2022 - May 23, 2022 </p>
            <p className='jobReviewFont'>
            "They did everything required. General good quality of code. Fast responsiveness. We still us the work."
            </p>
        </div>
    );
}

export default JobsReview;