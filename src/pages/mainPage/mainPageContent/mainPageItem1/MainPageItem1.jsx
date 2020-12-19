import './MainPageItem1.css';
import ellipse1 from '../../../../images/ellipse1.png';

function MainPageItem1(){
    return(
        <div>
            <div className="main-page-item1-container">
                <div className="main-page-left-item">
                    <img className="main-page-left-item-background-img" src={ellipse1} >
                    </img>

                    <p className="main-page-left-text">
                        Choose a job you love,
                        <p>and you will never have to </p>
                        work a day in your life.

                        <p className="main-page-left-buttom-text">-Confucius</p>
                    </p>

                    
                </div>

                <div className="main-page-right-item">
                    <p className="main-page-right-item-background-img">image in the background</p>
                    <p>image</p>
                    <p>Find jobs</p>
                </div>
            </div>

            <hr/>
        </div>
    );
}

export default MainPageItem1;