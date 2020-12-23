import React from "react";  
import "./PostForum.css";  


function onClick() {
    console.log("I am click")
}
function Popup( props ){ 
    const { closePopup } = props

    return (  
        <div className='popup'>  
            <div className='popup_inner'>  
                <h1 className="post-forum-title">Create Post</h1>  
                <hr/>

                <div className="post-forum-input-container">
                    <input type="text" className="post-forum-input-item"></input>
                    <input type="text" className="post-forum-input-item"></input>
                </div>

                <hr/>

                <div className="post-forum-button-container">
                        <button onClick={ () => { closePopup(); onClick(); } }>Post</button> 
                        <button onClick={ closePopup }>Cancle</button>  
                </div>
            </div>  
        </div>  
    );   
}  

export default Popup;