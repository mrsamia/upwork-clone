import React from 'react';
import StarIcon from '../Icon/StarIcon';
import Pen_Icon from '../PenIcon';
import BlackTitleText from '../SingleComponents/BlackTitleText';

function JobsReview(props) {
    return (
        <div className='base_Padding'>
            <BlackTitleText title="Front-end engineer needed to create a website"/>
           <div className='d-flex'>
           <p className='base_Font_size_Xs d-flex align-items-center'>< StarIcon/>< StarIcon/>< StarIcon/>< StarIcon/>< StarIcon/>Feb 28, 2022 - May 23, 2022 </p>
            <Pen_Icon/>
           </div>
            <p className='jobReviewFont'>
            "They did everything required. General good quality of code. Fast responsiveness. We still us the work."
            </p>
        </div>
    );
}

export default JobsReview;