import './forum.css';
import ProfileIcon from '../profileIcon/ProfileIcon.jsx'

function Forum( props ){
    const { profile, title, userId , backgroundColor } = props

    return(
        <div style={{backgroundColor: "#EA5455" }} className="forum-container">
            <div className="forum-top-part">
                <ProfileIcon img={ profile } radius={"50%"}
                size={['78px','78px']}/>

                <p className="forum-username">#{userId}</p>
            </div>

            <div className="forum-content">
                { title }
            </div>
        </div>
    );
}

export default Forum;