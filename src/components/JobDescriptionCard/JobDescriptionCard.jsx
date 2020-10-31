import './JobDescriptionCard.css'
import ProfileIcon from '../profileIcon/ProfileIcon.jsx'

function JobDescriptionCard(){

    return(
        <div className="job-description-card-container">
            <p><ProfileIcon 
                radius={'20px'}
                size={['57px','56px']}/>
            </p>
            <p>
                detail
            </p>
            <p>x</p>
        </div>
    );
}

export default JobDescriptionCard;