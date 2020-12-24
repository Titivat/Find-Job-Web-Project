import "./ProfileBar.css";

function ProfileBar(props) {
  let skills = props.user.skills.map((skill) => skill.skill);
  let skillsString = skills.join(", ");

  const userNameProfile = [
    props.user.username,
    props.user.email,
    props.user.city,
    props.user.seniority,
    props.user.industries,
  ];

  return (
    <div>
      <div className="profile-bar-container">
        <div className="profile-bar-left-item">
          <div>
            <p>User name:</p>
            <p>email:</p>
            <p>city:</p>
            <p>seniority:</p>
            <p>industries:</p>
            <p>resume:</p>
            <p style={{ marginTop: "41px" }}>tag:</p>
          </div>
        </div>

        <div className="profile-bar-right-item">
          {userNameProfile.map((item) => checkEmpty(item))}
          {/* <input type="file" className="profile-bar-right-item-btn"></input> */}
          <button onClick={ () => props.fileInputRef.current.click()}>+</button>

          {checkEmpty(skillsString)}
        </div>
      </div>
      <p className="profile-bar-button-container">
        <button
          className="profile-bar-edit-button"
          onClick={props.onToggleShowPopUp}
        >
          edit profile
        </button>
      </p>
    </div>
  );
}

function checkEmpty(string) {
  return string === undefined ? <p>&nbsp;</p> : <p> {string}</p>;
}

export default ProfileBar;
