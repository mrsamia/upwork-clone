import React from 'react';
import JobItems from './JobItems';
import BlackTitleText from './SingleComponents/BlackTitleText';

function JobLayout(props) {
    return (
        <div className='ProfileCard_Wrapper minus_mrgn'>
            <div className='base_Padding '>
                <h3>Jobs you might like</h3>
            </div>
            <div className='d-flex base_border '>
                <div className='pad_left font_color'>
                    <BlackTitleText title="Best Matches" />
                </div>
                <div className='pad_left'>
                    <BlackTitleText title="Most Recent" />
                </div>
                <div className='pad_left'>
                    <BlackTitleText title="Saved Jobs" />
                </div>
            </div>
            <div className='base_Padding base_border'>
                <p>Browse jobs that match your experience to a client's hiring preferences. Ordered by most relevant.</p>
            </div>
            <div className='base_Padding base_border'>
                <JobItems/>
            </div>
            <div className='base_Padding base_border'>
                <JobItems/>
            </div>

        </div>
    );
}

export default JobLayout;