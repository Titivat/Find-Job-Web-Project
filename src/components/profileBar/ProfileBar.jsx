import './ProfileBar.css'

function ProfileBar( props ){
    const {userName, email, city, seniority, industries, tag, resume } = props;

    const userNameProfile = [userName, email, city, seniority, industries]

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
                    { userNameProfile.map( item  => checkEmpty( item ) )}
                    
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

function checkEmpty( string ){

    return(
    ( string === undefined) ? <p>&nbsp;</p> : <p> { string }</p>
    );
}

export default ProfileBar;