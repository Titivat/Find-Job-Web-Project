import MainPageItem1 from './mainPageContent/mainPageItem1/MainPageItem1.jsx';
import MainPageItem2 from './mainPageContent/mainPageItem2/MainPageItem2.jsx';
import MainPageItem3 from './mainPageContent/mainPageItem3/MainPageItem3.jsx';
import Headers from '../../components/header/Header.jsx';

import './MainPage.css'

function get(){
    console.log( 'id')
    console.log( localStorage.getItem('id') );

    console.log( 'email')
    console.log( localStorage.getItem('email') );

    console.log( 'type')
    console.log( localStorage.getItem('type') );

    console.log( 'isLogin')
    console.log( localStorage.getItem('isLogin') );
}

function MainPage(){

    return(
        <div className="mainpage-scroll">
            <Headers  isDisplay={ true } />
            <button onClick={ get }></button>
            <MainPageItem1 />
            <MainPageItem2 />
            <MainPageItem3 />
        </div>
    );
}

export default MainPage;