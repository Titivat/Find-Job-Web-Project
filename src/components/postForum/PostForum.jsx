import React from "react";  
import "./PostForum.css";  


function postForum() {
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
                    <input type="text" 
                    placeholder="Title" className="post-forum-input-item 
                               post-forum-input-item-top">
                                
                    </input>
                    <textarea type="text" placeholder="Description" className="post-forum-input-item
                               post-forum-input-item-bottom"></textarea>
                </div>

                <hr/>

                <div className="post-forum-button-container">
                        <button 
                            className="post-forum-button-style"
                            onClick={ () => { closePopup();                         postForum(); } }>
                            Post
                        </button> 

                        <button 
                            className="post-forum-button-style"
                            onClick={ closePopup }>Cancle</button>  
                </div>
            </div>  
        </div>  
    );   
}  

export default Popup;