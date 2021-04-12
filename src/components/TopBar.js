import React from 'react';
import SearchField from 'react-search-field';

class TopBar extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <>
                <div className={"TopContainer"}>
                    <div className={"logo"}>Musicurious</div>
                    <div className={"SearchBar"}>
                        <SearchField
                        placeholder='Search...'
                        // onEnter = {}
                        />
                    </div>
                    <div className={"AlertImg"}> <img alt={"Bell Image"}></img> </div>
                </div>
            </>
        );
    }
}

export default TopBar;
