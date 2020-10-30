import './MainPageItem2.css'

function MainPageItem2(){
    return(
        <div>
            <div className="main-page-item2-title">
                <p>Job field</p>
                <p>discription</p>
            </div>

            <div className="main-page-item2-job-forum-container">
                <div className="main-page-item2-forum-item">
                    Engineer
                </div>

                <div className="main-page-item2-forum-item">
                    Business
                </div>

                <div className="main-page-item2-forum-item">
                    Disign
                </div>
            </div>

            <hr/>
        </div>
    );
}

export default MainPageItem2;