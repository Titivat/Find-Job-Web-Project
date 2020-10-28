import './ForumPage.css';

function ForumPage(){
    
    return(
        <div>
            <div className="forum-page-container">
                <h1 className="forum-page-title">Engineer</h1>

                <div className="forum-page-input-section">
                    <p>image</p>
                    <p>input colum</p>
                </div>

                <p className="forum-page-discription">Post:</p>

                <div className="forum-content-container">
                    <p className="forum-contnet-item">post1</p>
                    <p className="forum-contnet-item">post2</p>
                    <p className="forum-contnet-item">post3</p>
                    <p className="forum-contnet-item">post4</p>
                    <p className="forum-contnet-item">post5</p>
                </div>

            </div> 
        </div>
    );
}

export default ForumPage;