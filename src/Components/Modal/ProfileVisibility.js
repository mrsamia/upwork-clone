import React from 'react';
import RadioButton from '../SingleComponents/RadioButton';

function ProfileVisibility(props) {
    const data = [
        {
            id: "1",
            for: "1",
            label: "Public",
            text:"Your profile is visible to the general public and will show up in search engine results"
        },
        {
            id: "2",
            for: "2",
            label: "Upwork Users Only",
            text:"Only logged in Upwork users will see your profile"
        },
        {
            id: "3",
            for: "3",
            label: "Private",
            text:"Your profile will not appear in search results on Upwork or search engines. It will not be visible via a direct link for non-Upwork users. Upwork users who have a direct link to your profile will see limited information. Clients you have worked with or submitted a proposal to will see your full profile."
        }
    ]

    return (
        <div>
            <p>Who do you want to see your profile? Simply select an option to control your visibility and searchability. Market your profile when and where you want.</p>
         <div>
         {
                data.map((e) => {
                    return (
                      <div>
                          <RadioButton id={e.id} for={e.for} label={e.label} />
                        <p className='base_Font_size_Xs'>{e.text}</p>
                      </div>
                    )

                })
            }
         </div>
        </div>
    );
}

export default ProfileVisibility;