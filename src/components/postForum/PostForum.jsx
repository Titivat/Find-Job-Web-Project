import React from "react";  
import "./PostForum.css";  

function Popup( props ){ 
    const { closePopup, text } = props

    return (  
        <div className='popup'>  
            <div className='popup_inner'>  
                <h1>{ text }</h1>  
                <button onClick={ closePopup }>close me</button>  
            </div>  
        </div>  
    );   
}  

export default Popup;