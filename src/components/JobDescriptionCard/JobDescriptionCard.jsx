import './JobDescriptionCard.css'
import ProfileIcon from '../profileIcon/ProfileIcon.jsx'

function JobDescriptionCard( props ){
    const { compName, compDetail, compCity, status, time, haveButton , backgroundColor } = props;

    const container = {
        display: "flex",
        backgroundColor: backgroundColor,
        borderRadius: "20px",
        justifyContent: "spaceBetween",
        height: "100%",
    }

    return(
        <div style={ container }>
            <p className="job-description-card-profile"><ProfileIcon 
                radius={'20px'}
                size={['57px','56px']}/>
            </p>

            <p className="job-description-card-detail">
                <p>PR & Social Media / Marketing</p>
                <p>Sharke Hand( Thailand ) Co.,Ltd.</p>
                <p>Bangkok, Bangkok City, Thailand</p>

                <div className="job-description-card-status">
                    <p>pending</p>
                    <p>&nbsp;&nbsp;1 month</p>
                </div>
            </p>

            

            { (haveButton) && <button className="job-description-button">x</button> }
        </div>
    );
}

export default JobDescriptionCard;