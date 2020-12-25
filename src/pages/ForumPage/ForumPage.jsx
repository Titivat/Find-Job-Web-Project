import './ForumPage.css';
import PopUpPostForum from '../../components/postForum/PopUpPostForum.jsx';
import Header from '../../components/header/Header.jsx';
import ProfileIcon from '../../components/profileIcon/ProfileIcon.jsx';
import Forum from '../../components/forum/forum.jsx';
import React, { useState } from 'react';

function ForumPage( props ){
    var count = 0;
    
    const [ isPop, setPop] = useState( false );

    const { forumName } = props.location
    const forumNumber = forumNameToId( forumName )

    const userId = null

    const [postList, setPostList] = useState([{
            title: 'Build a Pharmacy Inventory manager with Django.',
            userId:'123',
            description: "bulid a pharmacy is easy"
        },
        {
            title: 'A tips for a good interview',
            userId:'456',
            description: "be prepair"
        },
        {
            title: 'React server component',
            userId:'789',
            description: "easy to bulid component"
        },
        {
            title: 'How the web is really built',
            userId:'12',
            description: "from beging to the end"
        },
        {
            title: 'Understand peer dependecies',
            userId:'568',
            description: "from basic"
        },
        {
            title: 'Frontend Talk',
            userId:'104',
            description: "road map to fontend"
        }
    ])

    function forumNameToId( name ) {
        if( name === "Enginear"){
            return 1
        }else if( name === "Business"){
            return 2
        }else if( name == "Design"){
            return 3
        }
        
    }

    function togglePopup(){ 
        setPop( !isPop ) 
    } 
    
    function handleAddPost( name, value){
        if( userId === null ){
            alert("you must login first");
        }else{
            const newelement = {
                title: name,
                userId: userId,
                description: value
            }
    
            setPostList( [...postList, newelement])
        }
    }

    function defineColour ( number ){
        if( number === 0){
            return "#2D4059"
        }else if( number == 1){
            return "#EA5455"
        }else{
            return "#DECDC3"
        }
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
                                        togglePopup={togglePopup}
                                        userId={ item.userId }
                                        title={ item.title } 
                                        description={ item.description }
                                        backgroundColor={
                                            ( index % 3 === 0) ? defineColour( count = 0) : defineColour( count += 1)
                                        }
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
                <PopUpPostForum 
                    text='Create post'
                    isDisable ={ false }  
                    title="Title"
                    description="Description"
                    handleAddPost={ handleAddPost }
                    closePopup={ togglePopup }  
                />  
              : null  
            }  
        </div>
    );
}

export default ForumPage;