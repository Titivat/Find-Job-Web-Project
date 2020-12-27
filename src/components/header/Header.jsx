import './Header.css'
import logo from '../../images/logo.png'
import { useSelector , useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react';

function Header( props ){
    const [ isDisplay, setIsDisplay] = useState( true );

    useEffect(() => {
        // Send a POST request
        console.log("I am a header")
        console.log(  localStorage.getItem('isLogin') )
        setIsDisplay( localStorage.getItem('isLogin') )
    });

    return(
        <div className="header-container">
            <div className="header-left-item">
                <a href="/"><img alt="description of image" href="#" className="header-left-img" src={logo}></img ></a>

                <div className="header-left-text">
                    <a className="header-no-display-a" href="/">job spot </a>
                </div>
            </div>

            <div className="header-right-item">
                < DisplaySignUp isDisplay = { isDisplay } >
                </DisplaySignUp>
            </div>
        </div>
    );
}

function logOut(){
    localStorage.setItem('isLogin', false )
    localStorage.setItem('id', "");
    localStorage.setItem('email', "");
    localStorage.setItem('type', "");
}

function changePage( ){
    const type = localStorage.getItem('type');

    if( type === "COMPANY"){
        window.history.push("/companyProfile");
    }else if( type === "EMPLOYEE"){
        console.log( "I am a employeee")
        window.history.push({ pathname:"/userProfilePage"});
    }
}

function DisplaySignUp( props  ){
    const { isDisplay } = props
    console.log(`isDisplay: ${isDisplay}`)

    return ( ( isDisplay )  ? 
              <div>
                  { console.log("I am out")}
                <a className="header-no-display-a" href="/login">sign in</a> 
                <a> &nbsp; | &nbsp; </a>
                <a className="header-no-display-a" href="/signUp">sign up</a>
              </div>
              : 
              
              <div>
                <a className="header-no-display-a" href="" onClick={ () => changePage() }>Profile</a>
                <a className="header-no-display-a" href="" onClick={ () => logOut() }>&nbsp;&nbsp;&nbsp;&nbsp;Log out</a>
              </div>
              
    );
}

export default Header;