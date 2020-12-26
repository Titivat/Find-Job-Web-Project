import React from 'react';
import './Button.css';

function Button( props  ){
    const { name, fontSize, size , textColour, bcColour, onClick} = props

    return(
        <button style={{ borderRadius: '15px',
                         width: size[0], 
                         height : size[1] ,
                         fontSize: fontSize,
                         backgroundColor: bcColour,
                         borderColor: bcColour,
                         color: textColour,
                       }}
                onClick = { onClick }
        >
            {name}
        </button>
        
    );
}

export default Button;