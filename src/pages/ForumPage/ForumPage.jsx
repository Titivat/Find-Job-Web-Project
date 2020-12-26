import './ForumPage.css';
import PopUpPostForum from '../../components/postForum/PopUpPostForum.jsx';
import Header from '../../components/header/Header.jsx';
import ProfileIcon from '../../components/profileIcon/ProfileIcon.jsx';
import Forum from '../../components/forum/forum.jsx';
import Api from '../../Api.js'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ForumPage( props ){
    let count = 0;
    const apiApth = "https://hungry-pug-10.loca.lt"

    const [ isPop, setIsPop] = useState( false );

    const [ postItem, setisPost] = useState( {} );

    const { forumName } = props.location
    const forumNumber = forumNameToId( forumName )

    const userId = 4

    const [postList, setPostList] = useState([])

    function forumNameToId( name ) {
        if( name === "Enginear"){
            return 2
        }else if( name === "Business"){
            return 3
        }else if( name == "Design"){
            return 4
        }
        
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            fetch(`${apiApth}/api/post/forum/${forumNumber}`,
            {
                method: "GET",
                headers: new Headers({'Content-Type': 'application/json'})
            }
            ).then(res => res.json())
            .then(response => {
                const postList = []

                response.map( (item) => {
                    const newElement = {
                        title: item.title,
                        userId: item.issuer,
                        description: item.desc
                    }
                    postList.push( newElement )
                }) 
                setPostList( postList.reverse() )
            }).catch(error => console.log(`error: ${error}`));
        },  );
    });

    useEffect(() => {
        // Send a POST request
        axios({
            method: 'post',
            url: `${apiApth}/api/post/`,
            data: postItem
        });
    }, [ postItem ]);

    function togglePopup(){ 
        setIsPop( !isPop ) 
    } 
    
    function handleAddPost( title, value){
        if( userId === null ){
            alert("you must login first");
        }else{
            const newElement = {
                "issuer": userId,
                "title": title,
                "desc": value,
                "forum": forumNumber,
            }

            setisPost( newElement )
        }
    }

    function defineColour ( number ){if( number === 0){return "#2D4059"}else if( number == 1){return "#EA5455"}else{return "#DECDC3"}}

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