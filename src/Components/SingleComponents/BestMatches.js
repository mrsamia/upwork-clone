import React, { useState } from 'react';

function BestMatches(props) {

    return (

        <p className={props.value ? "font_md font_color Best_Most_SavedJob active" : 'font_md  Best_Most_SavedJob'} onClick={props.onClick}>{props.title}</p>

    );
}

export default BestMatches;