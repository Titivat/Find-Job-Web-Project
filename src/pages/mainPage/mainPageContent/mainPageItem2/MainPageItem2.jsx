import './MainPageItem2.css'
import enginearImg from '../../../../images/enginearImg.png'; 
import designImg from '../../../../images/designImg.jpg'; 
import businessImg from '../../../../images/businessImg.jpg'; 
import businessIcon from '../../../../images/handshake.png'; 
import designIcon from '../../../../images/designIcon.png'; 
import enginearIcon from '../../../../images/enginearIcon.png';  
import Forum from '../../../../components/forum/forum';

import {Link} from "react-router-dom";


function MainPageItem2(){
    return(
        <div>
            <div className="main-page-item2-title">
                <p>Job field:</p>
                <p>pick the file you are interted in</p>
            </div>

            <div className="main-page-item2-job-forum-container">

                <Link to={{ pathname: '/forumPage',forumName: 'Enginear'}} 
                        className="main-page-item2-forum-item">

                    <img className="main-page-item2-image" src={enginearImg} />
                    
                    <hr className="main-page-item2-line"/>

                    <div className="main-page-item2-forum-item-description">
                        <p>Engineer</p>

                        <img className="main-page-item2-icon" src={enginearIcon} />
                    </div>
                    
                </Link>

                <Link to={{ pathname: '/forumPage',forumName: 'Business'}} 
                        className="main-page-item2-forum-item">

                    <img className="main-page-item2-image" src={businessImg} />

                    <hr className="main-page-item2-line"/>

                    <div className="main-page-item2-forum-item-description">
                        <p>Business</p>
                        
                        <img className="main-page-item2-icon" src={businessIcon} />
                    </div>
                </Link>

                <Link to={{ pathname: '/forumPage',forumName: 'Design'}} 
                        className="main-page-item2-forum-item">
                            
                    <img className="main-page-item2-image" src={designImg} />

                    <hr className="main-page-item2-line"/>
                    
                    <div className="main-page-item2-forum-item-description">
                        <p>Design</p>
                        
                        <img className="main-page-item2-icon" src={designIcon} />
                    </div>
                </Link>
            </div>

            <hr/>
        </div>
    );
}

export default MainPageItem2;