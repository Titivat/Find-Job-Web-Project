import './forum.css';
import ProfileIcon from '../profileIcon/ProfileIcon.jsx'

function Forum( props ){
    const { profile, text, userId } = props

    return(
        <div className="forum-container">
            <div className="forum-top-part">
                <ProfileIcon img={ profile } radius={"50%"}/>

                <p className="forum-username">#{userId}</p>
            </div>

            <div className="forum-content">
                { text }
            </div>
        </div>
    );
}

export default Forum;