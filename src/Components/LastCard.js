import React from 'react';
import JobTitleSixteen from './SingleComponents/JobTitleSixteen';

function LastCard(props) {

    const value= (
        [
            {
                title: "Direct Contracts"
            },
            {
                title: "Get Paid"
            },
            {
                title: "Community & Forums"
            },
            {
                title: "Help Center"
            }
        ]
    )

    return (
        <div className='ProfileCard_Wrapper mr_left'>
            {
                value.map((e) => {
                    return (
                        <div className='base_Padding base_border'>
                            <JobTitleSixteen title={e.title} />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default LastCard;