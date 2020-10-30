import './MainPageItem1.css';

function MainPageItem1(){
    return(
        <div>
            <div className="main-page-item1-container">
                <div className="main-page-left-item">
                    <p className="main-page-left-item-background-img">image in the background</p>
                    <p>long text quote</p>
                    <p>Confucius</p>
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