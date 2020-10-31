import './UserProfilePage.css'
import Headers from '../../components/header/Header.jsx';
import ProfileBar from '../../components/profileBar/ProfileBar.jsx'
import JobDescriptionCard from '../../components/JobDescriptionCard/JobDescriptionCard.jsx'

function UserProfilePage(){
    
    return(
        <div>
            <Headers />

            <div className="User-profile-page-container">
                <div className="user-profile-left-item">
                    <p className="user-profile-head-font">Profile</p>

                    <div className="user-profile-content">
                        <ProfileBar 
                            userName="Titivat auetumrongsawat"
                            email="titivatmo@gmial.com"
                            city="Bangkok"
                            seniority="intern"
                            industries="software enginear"
                        />
                    </div>

                </div>

                <div className="user-profile-right-item">
                    <p className="user-profile-head-font">Apply Job</p>

                    <div className="user-profile-jobs-container">
                        <div className="item">
                            <JobDescriptionCard />
                        </div>

                        <div className="item">
                            <JobDescriptionCard />
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    );
}

export default UserProfilePage;