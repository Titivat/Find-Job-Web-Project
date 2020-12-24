import './ForumPage.css';
import PostForum from '../../components/postForum/PostForum.jsx';
import Header from '../../components/header/Header.jsx';
import ProfileIcon from '../../components/profileIcon/ProfileIcon.jsx';
import Forum from '../../components/forum/forum.jsx';
import React, { useState } from 'react';

function ForumPage( props ){
    
    const [ isPop, setPop] = useState( false );

    const { forumName } = props.location

    const userId = Math.floor(Math.random() * 10000000)

    const [postList, setPostList] = useState([{
            title: 'Build a Pharmacy Inventory manager with Django.',
            userId:'123',
            description: ""
        },
        {
            title: 'A tips for a good interview',
            userId:'456',
            description: ""
        },
        {
            title: 'React server component',
            userId:'789',
            description: ""
        },
        {
            title: 'How the web is really built',
            userId:'12',
            description: ""
        },
        {
            title: 'Understand peer dependecies',
            userId:'568',
            description: ""
        },
        {
            title: 'Frontend Talk',
            userId:'104',
            description: ""
        }
    ])

    function togglePopup(){ 
        setPop( !isPop ) 
    } 
    
    function handleAddPost( name, value){
        console.log( name, value )

        const newelement = {
            title: name,
            userId: userId,
            description: ""
        }

        setPostList( [...postList, newelement])

        console.log( postList )
    }

    return(
        <div>
            <Header isDisplay={ true }/>

            <div className="forum-page-container">
                <h1 className="forum-page-title">{ forumName } forum</h1>

                <div className="forum-page-input-section">
                    <ProfileIcon 
                        radius={"50%"}
                        size={['78px', '78px']}
                    />
          
                    <button  
                        onClick={ () => togglePopup()}                   
                        className='forum-page-button'>What is in your mind?
                    </button>
                </div>

                <p className="forum-page-discription-text">Post:</p>

                <div  className="forum-content-container">
                    { postList.map( (item, index) => {
                        return <div className="forum-contnet-item">
                                    <Forum 
                                        userId={ item.userId }
                                        title={ item.title } 
                                        />
                                </div>
                       })

                    }
                    
                    <div className="forum-contnet-item">
                        {/*dummy item*/}
                    </div>

                </div>

            </div> 

            { isPop ?  
                <PostForum 
                    text='Create post'  
                    handleAddPost={ handleAddPost }
                    closePopup={ () => togglePopup() }  
                />  
              : null  
            }  
        </div>
    );
}

export default ForumPage;