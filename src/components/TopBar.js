import React from 'react';
import SearchField from 'react-search-field';
import bellimg from '../Bell.png';

class TopBar extends React.Component {
    // constructor(props) {
    //     super(props);
    //     // this.handleSearch = this.props.handleSearch.bind(this);
    // }

    // state = {
    //     query: '',
    // };

    render() {
        return (
            <>
                <div className={'TopContainer'}>
                    <div className={'logo'}>Musicurious</div>
                    <div className={'SearchBar'}>
                        <SearchField
                            placeholder="Search..."
                            // onEnter = {}
                            onSearchClick={this.props.handleSearch}
                            // if not working, remember that it only filters by skills. searching empty string returns all profiles
                        />
                    </div>
                    <div className={'Utility'}>
                        <div className={'AlertImg'}>
                            {' '}
                            <img src={bellimg} className={'bell'} alt={'Bell'}></img>{' '}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default TopBar;
