import './MainPageItem3.css'
import officeImg from '../../../../images/office.png';

function MainPageItem3(){
    return(
        <div>
            <div className="main-page-item3-container">

                <img src={officeImg} className="main-page-item3-lefft">
                </img>

                <div className="main-page-item3-right">
                    <p className="main-page-iten3-right-title">About us</p>
                    <p>Job spot is a platform </p>
                    <p>that allows people to find a </p>
                    <p>job and company they love.</p>
                </div>

            </div>
        </div>
    );
}

export default MainPageItem3;