import React from 'react';
import SkillBadgeButton from './SingleComponents/SkillBadgeButton';

function SkillBadgeButtonItems(props) {
    const value = ([
        {
            name: "JavaScript"
        },
        {
            name: "WordPress"
        },
        {
            name: "PHP"
        },
        {
            name: "HTML"
        },
        {
            name: " Web Development"
        },
        {
            name: "CSS"
        }
    ])
    return (
        <div className='d-flex'>
            {
                value.map((e)=>{
                    return(
                        <div className='d-flex'>
                            <SkillBadgeButton name={e.name}/>
                        </div>      
                    )   
                })
            } 
        </div>
    );
}

export default SkillBadgeButtonItems;