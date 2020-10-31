import './Header.css'

function Header(){

    return(
        <div className="header-container">
            <div className="header-left-item">
                logo
            </div>

            <div className="header-right-item">
                <a>sign in</a>
                <a> | </a>
                <a>sign up</a>
            </div>
        </div>
    );
}

export default Header;