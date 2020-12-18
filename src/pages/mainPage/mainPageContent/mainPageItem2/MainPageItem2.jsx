import './MainPageItem2.css'
import enginearImg from '../../../../images/enginearImg.jpg'; 
import designImg from '../../../../images/designImg.jpg'; 
import businessImg from '../../../../images/businessImg.jpg'; 

function MainPageItem2(){
    return(
        <div>
            <div className="main-page-item2-title">
                <p>Job field</p>
                <p>discription</p>
            </div>

            <div className="main-page-item2-job-forum-container">
                <div className="main-page-item2-forum-item">
                    <img className="main-page-item2-image" src={enginearImg} />
                    
                    <hr className="main-page-item2-line"/>

                    <div className="main-page-item2-forum-item-description">
                        <p>Engineer</p>
                        <p>image</p>
                    </div>
                    
                </div>

                <div className="main-page-item2-forum-item">
                    <img className="main-page-item2-image" src={businessImg} />

                    <hr className="main-page-item2-line"/>

                    <div className="main-page-item2-forum-item-description">
                        <p>Business</p>
                        <p>image</p>
                    </div>
                </div>

                <div className="main-page-item2-forum-item">
                    <img className="main-page-item2-image" src={designImg} />

                    <hr className="main-page-item2-line"/>
                    
                    <div className="main-page-item2-forum-item-description">
                        <p>Design</p>
                        <p>image</p>
                    </div>
                </div>
            </div>

            <hr/>
        </div>
    );
}

export default MainPageItem2;