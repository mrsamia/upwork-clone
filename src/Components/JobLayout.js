import React, { useState } from 'react';
import JobItems from './JobItems';
import BestMatches from './SingleComponents/BestMatches';


function JobLayout(props) {
    const [value, setvalue] = useState(1)
    function onclick1() {
        setvalue(1)
        console.log("clicked")
    }
    function onclick2() {
        setvalue(2)
        console.log("clicked")
    }
    function onclick3() {
        setvalue(3)
        console.log("clicked")
    }
    console.log(value)
    return (
        <div className='ProfileCard_Wrapper minus_mrgn'>
            <div className='base_Padding '>
                <h3>Jobs you might like</h3>
            </div>
            <div className='d-flex base_border'>
                <BestMatches title="Best Matches" value={value === 1} onClick={onclick1} />
                <BestMatches title="Most Recent" value={value === 2} onClick={onclick2} />
                <BestMatches title="Saved Jobs" value={value === 3} onClick={onclick3} />
            </div>
            <div className='base_Padding base_border'>
                <p>Browse jobs that match your experience to a client's hiring preferences. Ordered by most relevant.</p>
            </div>
            <div>
                <JobItems/>
                <JobItems/>
                <JobItems/>
            </div>
            

        </div>
    );
}

export default JobLayout;