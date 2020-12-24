import React from "react";  
import "./PostForum.css";  

function Popup( props ){ 
    const nameInput = React.createRef();
    const valueInput = React.createRef();

    const { closePopup, handleAddPost } = props

    return (  
        <div className='popup'>  
            <div className='popup_inner'>  
                <h1 className="post-forum-title">Create Post</h1>  

                <hr/>

                <div className="post-forum-input-container">
                    <input 
                        ref={ nameInput }
                        type="text" 
                        placeholder="Title" 
                        className="post-forum-input-item 
                               post-forum-input-item-top"
                    >     
                    </input>
                    <textarea 
                        ref={ valueInput }
                        type="text" 
                        placeholder="Description" className="post-forum-input-item
                                    post-forum-input-item-bottom">
                    </textarea>
                </div>

                <hr/>

                <div className="post-forum-button-container">
                        <button 
                            className="post-forum-button-style"
                            onClick={ () => { 
                                closePopup();                     
                                handleAddPost( nameInput.current.value, 
                                                valueInput.current.value 
                                            ); 
                            } }
                        >
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