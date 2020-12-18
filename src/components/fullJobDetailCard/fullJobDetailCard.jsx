import './fullJobDetailCard.css'

function FullJobDetailCard(){

    const detailList = ['Senniority level',
                  'Entry Level',
                  'Employment',
                  'Job function',
                  'Marketing, oublic Realtions,',
                  'Writing/Editing'
                ]

    function jobDetail( details ){
        return(
            <div>
                { details.map( (item) => <p>{item}</p> )}
            </div>
        );
    }

    return(
        <div className="full-job-detail-card-container">
            <div className="full-job-detail-top-container">
                <div className="full-job-detail-top-text">
                    <p>PR & Social Media / Marketing</p>
                    <p>Sharke Hand( Thailand ) Co.,Ltd.</p>
                    <p>Bangkok, Bangkok City, Thailand</p>
                    <p>1 month ago</p>
                </div>
            </div>

            <button className="full-job-detail-button">Apply now</button>

            <div className="full-job-detail-top-container ">
                <p className="full-job-detail-top-text">Detail:</p>

                <p className="full-job-detail-top-text">
                    { ( detailList) }
                </p>
            </div>
        </div>
    );
}


export default FullJobDetailCard;