import './Header.css'
import logo from '../../images/logo.png'
import {BrowserRouter as Link} from 'react-router-dom';

function Header( props ){
    const { isDisplay } = props 

    return(
        <div className="header-container">
            <div className="header-left-item">
                <a href="/"><img alt="description of image" href="#" className="header-left-img" src={logo}></img ></a>

                <div className="header-left-text">
                    <a className="header-no-display-a" href="/">job spot </a>
                </div>
            </div>

            <div className="header-right-item">
                < DisplaySignUp 
                    isDisplay = { isDisplay } >
                    { props.children }
                </DisplaySignUp>
            </div>
        </div>
    );
}

function DisplaySignUp( props  ){
    const { isDisplay } = props

    return ( ( isDisplay )  ? 
              <div>
                <a className="header-no-display-a" href="/login">sign in</a> 
                <a> &nbsp; | &nbsp; </a>
                <a className="header-no-display-a" href="/signUp">sign up</a>
              </div>
              : 
              <div><a className="header-no-display-a" href="/">Profile</a></div>
              
    );
}

export default Header;