import React from 'react';

function RadioButton(props) {
    return (
            <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id={props.id} />
                    <label class="form-check-label" for={props.for}>
                       {props.label}
                    </label>
                </div>
    );
}

export default RadioButton;