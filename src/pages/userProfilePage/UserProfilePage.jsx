import './UserProfilePage.css'
import Headers from '../../components/header/Header.jsx';
import ProfileBar from '../../components/profileBar/ProfileBar.jsx'

function UserProfilePage(){
    
    return(
        <div>
            <Headers />

            <div className="User-profile-page-container">
                <div className="user-profile-left-item">
                    <p className="user-profile-head-font">Profile</p>

                    <div className="user-profile-content">
                        <ProfileBar />
                    </div>
                    
                </div>

                <div className="user-profile-right-item">
                    <p className="user-profile-head-font">Apply Job</p>

                    <div className="user-profile-jobs-container">
                        <div className="item">job1</div>
                        <div className="item">job2</div>
                        <div className="item">job3</div>
                        <div className="item">job4</div>
                    </div>
                </div>
            </div>  
        </div>
    );
}

export default UserProfilePage;