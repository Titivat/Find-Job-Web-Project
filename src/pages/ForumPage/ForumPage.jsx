import './ForumPage.css';
import logo from '../../images/logo.png';
import Header from '../../components/header/Header.jsx';
import ProfileIcon from '../../components/profileIcon/ProfileIcon.jsx';
import Forum from '../../components/forum/forum.jsx';
import React, { useState } from 'react';

function ForumPage( props ){

    const postList = [{
            text: 'Build a Pharmacy Inventory manager with Django.',
            userId:'123'
        },
        {
            text: 'A tips for a good interview',
            userId:'456'
        },
        {
            text: 'React server component',
            userId:'789'
        },
        {
            text: 'How the web is really built',
            userId:'12'
        },
        {
            text: 'Understand peer dependecies',
            userId:'568'
        },
        {
            text: 'Frontend Talk',
            userId:'104'
        }
    ]
    
    
    const { forumName } = props.location

    return(
        <div>
            <Header isDisplay={ true }/>

            <div className="forum-page-container">
                <h1 className="forum-page-title">{ forumName } forum</h1>

                <div className="forum-page-input-section">
                    <ProfileIcon 
                    radius={"50%"}
                    size={['78px', '78px']}/>
          
                    <button className='forum-page-button'>What is in your mind?</button>
                </div>

                <p className="forum-page-discription-text">Post:</p>

                <div  className="forum-content-container">
                    { postList.map( (item) => {
                        return <div className="forum-contnet-item">
                                    <Forum 
                                        userId={ item.userId }
                                        text={ item.text } 
                                        />
                                </div>
                       })

                    }
                    
                    <div className="forum-contnet-item">
                        {/*dummy item*/}
                    </div>

                </div>

            </div> 
        </div>
    );
}

export default ForumPage;