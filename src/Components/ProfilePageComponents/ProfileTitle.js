import React from 'react';
import PenIcon from '../PenIcon';

function ProfileTitle(props) {
    return (
        <div className='pt-5 row'>
            <div className='col-8 d-flex '>
                <h3 className='pad_left'>Expert React.js Developer</h3>
                <PenIcon/>
            </div>
            <div className='col-4 d-flex justify-content-end'>
                <h4>$30.00/hr </h4>
                <PenIcon/>
            </div>
        </div>
    );
}

export default ProfileTitle;