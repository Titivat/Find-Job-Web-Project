import './MainPageItem1.css';
import ellipse1 from '../../../../images/ellipse1.png';
import ellipse2 from '../../../../images/ellipse2.png';
import decrationImg from '../../../../images/enginearImg.png';
import arrowImg from '../../../../images/arrow.png';

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
                    <div className="main-page-right-item-decoration">
                        <img className="main-page-right-item-background-img" src={ellipse2}></img>

                        <img className="main-page-right-item-decoration-img"  src={decrationImg}></img>
                        
                        <img className="main-page-right-item-arrow-img" src={arrowImg}></img>

                        <a href="/findJobPage">
                            <p  className="main-page-right-item-text">Find jobs</p>
                        </a>
                                            
                    </div>
                </div>
            </div>

            <hr/>
        </div>
    );
}

export default MainPageItem1;