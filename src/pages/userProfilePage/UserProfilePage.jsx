import './UserProfilePage.css'
import Headers from '../../components/header/Header.jsx';
import ProfileBar from '../../components/profileBar/ProfileBar.jsx'
import JobDescriptionCard from '../../components/JobDescriptionCard/JobDescriptionCard.jsx'

function UserProfilePage(){
    
    return(
        <div>
            <Headers />

            <div className="user-profile-page-container">
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
                            <JobDescriptionCard 
                                haveButton = {true}
                                compName = 'PR & Social Media / Marketing'
                                compDetail = 'Sharke Hand( Thailand ) Co.,Ltd.'
                                compCity = 'Bangkok, Bangkok City, Thailand'
                                status = 'pending'
                                time = '1 month'
                                backgroundColor = "#2D4059"
                            />
                        </div>

                        <div className="item">
                            <JobDescriptionCard 
                                haveButton = {true}
                                compName = 'PR & Social Media / Marketing'
                                compCity = 'Bangkok, Bangkok City, Thailand'
                                compDetail = 'Sharke Hand( Thailand ) Co.,Ltd.'
                                status = 'pending'
                                time = '1 month'
                                backgroundColor = "#2D4059"
                            />
                        </div>

                        <div className="item">
                            <div className="dummy-square">

                            </div>
                        </div>

                    </div>
                </div>

            </div>  
        </div>
    );
}

export default UserProfilePage;