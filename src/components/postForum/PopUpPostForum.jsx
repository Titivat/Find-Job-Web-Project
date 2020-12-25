import React from "react";  
import "./PopUpPostForum.css";  

function PopUpPostForum( props ){ 
    const nameInput = React.createRef();
    const valueInput = React.createRef();

    const { closePopup, handleAddPost , text , isDisable, title, description } = props

    let disable = "";

    ( isDisable ) && ( disable = "disable" ); 

    return (  
        <div className='popup'>  
            <div className='popup_inner'>  
                <h1 className="post-forum-title">{text}</h1>  

                <hr/>

                <div className="post-forum-input-container">
                    <input 
                        disabled={ disable }
                        ref={ nameInput }
                        type="text" 
                        placeholder={ title } 
                        className="post-forum-input-item 
                               post-forum-input-item-top"
                    >     
                    
                    </input>
                    <textarea 
                        disabled={ disable }
                        ref={ valueInput }
                        type="text" 
                        placeholder={description}
                        className="post-forum-input-item
                                    post-forum-input-item-bottom"
                    >
                        
                    </textarea>
                </div>

                <hr/>

                <div className="post-forum-button-container">
                    
                    {( !isDisable) && (<button 
                        className="post-forum-button-style"
                        onClick={ () => { 
                            closePopup();                     
                            handleAddPost( nameInput.current.value, 
                                            valueInput.current.value 
                                        ); 
                        } }
                    >
                        Post
                    </button> )}

                    <button 
                        className="post-forum-button-style"
                        onClick={ closePopup }
                    >
                        Cancle
                    </button>  
                </div>
            </div>  
        </div>  
    );   
}  

export default PopUpPostForum;