import "./JobDescriptionCard.css";
import ProfileIcon from "../profileIcon/ProfileIcon.jsx";

function JobDescriptionCard(props) {
  const {
    compName,
    compDetail,
    compCity,
    status,
    time,
    haveButton,
    backgroundColor,
    clickToDisplay,
    handleDeleate,
  } = props;

  const container = {
    display: "flex",
    backgroundColor: backgroundColor,
    borderRadius: "20px",
    justifyContent: "spaceBetween",
    border: "1px solid #000000",
  };

  const comonentValue = {
    compName: compName,
    compDetail: compDetail,
    compCity: compCity,
    status: status,
    time: time,
  };

  const companyDetail = props.fullCompanyDetail;

  return (
    <div style={container} onClick={() => clickToDisplay(companyDetail)}>
      <p className="job-description-card-profile">
        <ProfileIcon
          img={props.image}
          radius={"20px"}
          size={["57px", "56px"]}
        />
      </p>

      <p className="job-description-card-detail">
        <p>{compName}</p>
        <p>{compDetail}</p>
        <p>{compCity}</p>

        <div className="job-description-card-status">
          <p>{status}</p>
          <p>&nbsp;&nbsp;{time}</p>
        </div>
      </p>

      {haveButton && (
        <button
          onClick={() => handleDeleate(comonentValue)}
          className="job-description-button"
        >
          x
        </button>
      )}
    </div>
  );
}

export default JobDescriptionCard;
