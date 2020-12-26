import MainPageItem1 from './mainPageContent/mainPageItem1/MainPageItem1.jsx';
import MainPageItem2 from './mainPageContent/mainPageItem2/MainPageItem2.jsx';
import MainPageItem3 from './mainPageContent/mainPageItem3/MainPageItem3.jsx';
import Headers from '../../components/header/Header.jsx';

import './MainPage.css'

function MainPage(){

    return(
        <div className="mainpage-scroll">
            <Headers  isDisplay={ true } />
            <MainPageItem1 />
            <MainPageItem2 />
            <MainPageItem3 />
        </div>
    );
}

export default MainPage;