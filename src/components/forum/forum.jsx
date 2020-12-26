import './forum.css';
import PopUpPostForum from '../../components/postForum/PopUpPostForum.jsx';
import ProfileIcon from '../profileIcon/ProfileIcon.jsx'
import React, { useState } from 'react';

function Forum( props ){
    const { profile, title, userId , backgroundColor , description } = props
    
    const [ isPop, setPop] = useState( false );

    function togglePopup(){ 
        setPop( !isPop ) 
    } 

    return(
        <div 
            style={{backgroundColor: backgroundColor }} 
            className="forum-container"
            onClick={ togglePopup }
        >
            <div className="forum-top-part">
                <ProfileIcon img={ profile } radius={"50%"}
                size={['78px','78px']}/>

                <p className="forum-username">#{userId}</p>
            </div>

            <div className="forum-content">
                { title }
            </div>

            { isPop ?  
                <PopUpPostForum 
                    text='View post'
                    title={title}
                    description={description}
                    isDisable ={ true } 
                    closePopup={ togglePopup }  
                />  
              : null  
            }  
        </div>
    );
}

export default Forum;