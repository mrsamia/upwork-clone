import React from 'react';

function SkillBadgeButton(props) {
   
    return (
        <div>
           <button className='Skill_Badge'>{props.name}</button>
        </div>
    );
}

export default SkillBadgeButton;