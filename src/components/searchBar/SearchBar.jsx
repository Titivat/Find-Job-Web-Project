import './SearchBar.css';

function SearchBar(){

    return(
        <div className="searchbar-container">
            <p className="searchbar-head-font">Fliter your result</p>

            <div className="searchbar-content-container">
                <div className="searchbar-search-container">
                    <p>seachHere</p>
                    <p className="seachbar-button-style">Button</p>
                </div>

                <div className="searchbar-search-container">
                    <p>seachHere</p>
                    <p className="seachbar-button-style">Button</p>
                </div>

                <div className="searchbar-search-container">
                    <p>seachHere</p>
                    <p className="seachbar-button-style">Button</p>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;