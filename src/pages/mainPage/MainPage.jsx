import MainPageItem1 from './mainPageContent/mainPageItem1/MainPageItem1.jsx';
import MainPageItem2 from './mainPageContent/mainPageItem2/MainPageItem2.jsx';
import MainPageItem3 from './mainPageContent/mainPageItem3/MainPageItem3.jsx';

import './MainPage.css'

function MainPage(){

    return(
        <div>
            <MainPageItem1 />
            <MainPageItem2 />
            <MainPageItem3 />
        </div>
    );
}

export default MainPage;