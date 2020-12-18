import './SearchBar.css';

function SearchBar(){

    return(
        <div className="searchbar-container">
            <p className="searchbar-head-font">Fliter your result</p>

            <div className="searchbar-content-container">

                <div className="searchbar-search-container">
                    <p className="seachbar-text-color">Seach here:</p>
                    <p className="seachbar-button-style">
                        <input className="serach-style" type="text" maxlength="20" size="40" />
                    </p>
                </div>

                <div className="searchbar-search-container">
                    <p className="seachbar-text-color">Job Type:</p>
                    <p className="seachbar-button-style">
                        <select className="seachbar-droup-box">
                            <option value="item-1">Item 1</option>
                            <option value="item-2">Item 2</option>
                            <option value="item-3">Item 3</option>
                            <option value="item-4">Item 4</option>
                        </select>
                    </p>
                </div>

                <div className="searchbar-search-container">
                    <p className="seachbar-text-color">Company:</p>
                    <p className="seachbar-button-style">
                        <select className="seachbar-droup-box">
                            <option value="item-1">Item 1</option>
                            <option value="item-2">Item 2</option>
                            <option value="item-3">Item 3</option>
                            <option value="item-4">Item 4</option>
                        </select>
                    </p>
                </div>

                <div className="searchbar-search-container">
                    <p className="seachbar-text-color">Location:</p>
                    <p className="seachbar-button-style">
                        <select className="seachbar-droup-box">
                            <option value="item-1">Item 1</option>
                            <option value="item-2">Item 2</option>
                            <option value="item-3">Item 3</option>
                            <option value="item-4">Item 4</option>
                        </select>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;