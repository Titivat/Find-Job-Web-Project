import './SearchBar.css';

function SearchBar( props ){
    const { seach } = props

    return(
        <div className="searchbar-container">
            <p className="searchbar-head-font">Fliter your result</p>

            <div className="searchbar-content-container">

                <div className="searchbar-search-container">
                    <p className="seachbar-text-color">Seach here:</p>
                    <p className="seachbar-button-style">
                        <input onChange={ seach } className="serach-style" type="text" maxlength="20" size="40" />
                    </p>
                </div>

                <div className="searchbar-search-container">
                    <p className="seachbar-text-color">Job Type:</p>
                    <p className="seachbar-button-style">
                        <select className="seachbar-droup-box">
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Contract">Contract</option>
                            <option value="Internship">Internship</option>
                            <option value="Temporary">Temporary</option>
                        </select>
                    </p>
                </div>

                <div className="searchbar-search-container">
                    <p className="seachbar-text-color">Time:</p>
                    <p className="seachbar-button-style">
                        <select className="seachbar-droup-box">
                            <option value="24">Past 24 hours</option>
                            <option value="7">Past Week</option>
                            <option value="30">Past Month</option>
                        </select>
                    </p>
                </div>

                <div className="searchbar-search-container">
                    <p className="seachbar-text-color">Location:</p>
                    <p className="seachbar-button-style">
                        <select className="seachbar-droup-box">
                            <option value="Bangkok">Bangkok</option>
                            <option value="Sathon">Sathon</option>
                            <option value="Watthana">Watthana</option>
                            <option value="Phra Nakhon">Phra Nakhon</option>
                        </select>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;