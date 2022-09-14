import React from 'react';
import RadioButton from '../SingleComponents/RadioButton';

function HoursPerWeek(props) {

    const data = [
        {
            id: "flexRadioDefault1",
            label: "More than 30 hrs/week ",
            for: "flexRadioDefault1"
        },
        {
            id: "flexRadioDefault2",
            label: "Less than 30 hrs/week ",
            for: "flexRadioDefault2"
        },
        {
            id: "flexRadioDefault3",
            label: "As needed - open to offers",
            for: "flexRadioDefault13"
        },
        {
            id: "flexRadioDefault3",
            label: " None",
            for: "flexRadioDefault13"
        }
    ]
    return (
        <div>
            <p>Knowing how much you can work helps Upwork find the right jobs for you. How we use this info</p>
            <div>
                <p> I can currently work:</p>
                {
                    data.map((e) => {
                        return (
                            <RadioButton id={e.id} label={e.label} for={e.for} />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default HoursPerWeek;