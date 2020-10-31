import './ProfileBar.css'

function ProfileBar( props ){

    return(
        <div>
            <div className="profile-bar-container">
                <div className="profile-bar-left-item">
                    <div>
                        <p>User name:</p>
                        <p>email:</p>
                        <p>city:</p>
                        <p>seniority:</p>
                        <p>industries:</p>
                        <p>tag:</p>
                        <p>resume:</p>
                    </div>
                </div>

                <div className="profile-bar-right-item">
                    <p>Titivat auetumrongsawat</p>
                    <p>titivatmo@gmial.com</p>
                    <p>Bangkok</p>
                    <p>intern</p>
                    <p>software enginear</p>
                    <p>tag tag</p>
                    <button className="profile-bar-right-item-btn">+</button>
                </div>

                <p className="profile-bar-button-container">
                    <button className="profile-bar-edit-button">edit profile</button>
                </p>
            </div>

            
        </div>
    );
}

export default ProfileBar;