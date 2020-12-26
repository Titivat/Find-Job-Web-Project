import './Header.css'
import logo from '../../images/logo.png'
import {BrowserRouter as Link} from 'react-router-dom';

function Header( props ){
    const { isDisplay } = props 

    return(
        <div className="header-container">
            <div className="header-left-item">
                <a><img alt="description of image" href="#" className="header-left-img" src={logo}></img ></a>

                <div className="header-left-text">
                    <a href="/">job spot </a>
                    <a> | </a>
                    <a>about us</a>
                </div>
            </div>

            <div className="header-right-item">
                < DisplaySignUp isDisplay = { isDisplay } >
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
                <a>sign in</a> 
                <a> &nbsp; | &nbsp; </a>
                <a>sign up</a>
              </div>
              : 
              <div>{props.children}</div>
              
    );
}

export default Header;