import React from 'react';
import JobTitleSixteen from './SingleComponents/JobTitleSixteen';
import SkillBadgeButtonItems from './SkillBadgeButtonItems';
import { IoLocationSharp } from "react-icons/io5";
import HandIcon from './Icon/HandIcon';
import LoveIcon from './Icon/LoveIcon';
import VerifiedIcon from './Icon/VerifiedIcon';
import StarIcon from './Icon/StarIcon';


function JobItems(props) {
    return (
        <div className='base_Padding base_border jobItemWrapper'>
            <div className='jobItemsHeaderWrapper'>
                <div>
                <JobTitleSixteen title="Website development (Online Assessment Tool)" />
                </div>  
                <div className='d-flex'>
                <HandIcon/>
                <LoveIcon/>
                </div>  
            </div>
            <div>
                <p className='base_Font_size_Xs pt'>
                   <span style={{fontWeight:"500"}}> Hourly: $25.00-$47.00</span> - Expert - Est. Time: 1 to 3 months, 30+ hrs/week - Posted 2 hours ago</p>
            </div>
            <div>
                <p className='base_Font_size'>Need help in developing an application from scratch . The application will mainly be a front end for users . It will have mainly have three to four sections and lot of drag and drops from the menu . all the screens have been prepared and need developer to develop it .</p>
            </div>
            <div>
               <SkillBadgeButtonItems/>
            </div>
            <div>
                <p className='base_Font_size_Xs'>Proposals: Less than 5</p>
            </div>
            <div className='d-flex align-items-center'>
                <p className='verifiedIconPad'><VerifiedIcon/></p>
                <p  className='base_Font_size_Xs d-flex align-items-center'>Payment verified $10k+ spent< StarIcon/>< StarIcon/>< StarIcon/></p>
                <p className='base_Font_size_Xs  d-flex align-items-center' style={{paddingLeft:"5px",fontWeight: 500}}><IoLocationSharp /> Germany</p>
            </div>
          
        </div>
    );
}

export default JobItems;