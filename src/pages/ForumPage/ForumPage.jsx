import './ForumPage.css';
import logo from '../../images/logo.png';
import Header from '../../components/header/Header.jsx';
import ProfileIcon from '../../components/profileIcon/ProfileIcon.jsx';
import Forum from '../../components/forum/forum.jsx';

function ForumPage( props ){
    const { forumName } = props 

    return(
        <div>
            <Header isDisplay={ true }/>

            <div className="forum-page-container">
                <h1 className="forum-page-title">Engineer forum</h1>

                <div className="forum-page-input-section">
                    <ProfileIcon 
                    radius={"50%"}
                    size={['78px', '78px']}/>
          
                    <button className='forum-page-button'>What is in your mind?</button>
                </div>

                <p className="forum-page-discription-text">Post:</p>

                <div  className="forum-content-container">
                    <div className="forum-contnet-item">
                        <Forum text={'Build a Pharmacy Inventory manager with Django.'} userId={'123'}/>
                    </div>

                    <div className="forum-contnet-item">
                        <Forum text={'Build a Pharmacy Inventory manager with Django.'} userId={'123'}/>
                    </div>

                    <div className="forum-contnet-item">
                        <Forum text={'Build a Pharmacy Inventory manager with Django.'} userId={'456'}/>
                    </div>

                    <div className="forum-contnet-item">
                        <Forum text={'Build a Pharmacy Inventory manager with Django.'} userId={'456'}/>
                    </div>

                    <div className="forum-contnet-item">
                        <Forum text={'Build a Pharmacy Inventory manager with Django.'} userId={'654'}/>
                    </div>

                </div>

            </div> 
        </div>
    );
}

export default ForumPage;