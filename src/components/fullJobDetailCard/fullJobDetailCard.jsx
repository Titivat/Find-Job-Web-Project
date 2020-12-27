import "./fullJobDetailCard.css";

function FullJobDetailCard(props) {
  const { compName, compCity, compDetail, time } = props;
  console.log("Full COmpany");
  const fullCompanyDetail = props.fullCompanyDetail;
  console.log(fullCompanyDetail);

  const detailList = [
    "Senniority level: " + props.fullCompanyDetail.senirotiy,
    "Employment Type: " + props.fullCompanyDetail.employmentType,
    "City: " + props.fullCompanyDetail.compCity,
  ];

  function jobDetail(details) {
    return (
      <div>
        {details.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    );
  }

  return (
    <div className="full-job-detail-card-container">
      <div className="full-job-detail-top-container">
        <div className="full-job-detail-top-text">
          <p>{compName}</p>
          <p>{compDetail}</p>
          <p>{compCity}</p>
          <p>{time}</p>
        </div>
      </div>

      <button className="full-job-detail-button" onClick={props.onApplyJob}>
        Apply now
      </button>

      <div className="full-job-detail-top-container ">
        <p className="full-job-detail-top-text">Detail:</p>

        <p className="full-job-detail-top-text">{jobDetail(detailList)}</p>
      </div>
    </div>
  );
}

export default FullJobDetailCard;
