import React from 'react';
import ProfileView from './ProfileView';

class SearchView extends React.Component {
    constructor(props) {
        super(props);
        // group flag adds an extra tag

        this.state = {};
    }

    render() {
        return (
            <div className="SearchView">
                <div className="SearchProfileContainer">
                    <ProfileView
                        renderType="search"
                        onProfileClick={this.props.handleProfileClick.bind(
                            this
                        )}
                        user={{
                            userName: 'test Name',
                            group: false,
                            skills:
                                'Drummer, Singer, Guitarist, Pianoist, Formal music education, Songwriting',
                            goals: 'pro, looking for producer',
                        }}
                        className="Profile"
                    ></ProfileView>
                    <ProfileView
                        renderType="search"
                        onProfileClick={this.props.handleProfileClick.bind(
                            this
                        )}
                        user={{
                            userName: 'test Name',
                            group: false,
                            skills:
                                'Drummer, Singer, Guitarist, Pianoist, Formal music education, Songwriting',
                            goals: 'pro, looking for producer',
                        }}
                        className="Profile"
                    ></ProfileView>
                </div>{' '}
                <div className="SearchProfileContainer">
                    <ProfileView
                        renderType="search"
                        onProfileClick={this.props.handleProfileClick.bind(
                            this
                        )}
                        user={{
                            userName: 'test Name',
                            group: false,
                            skills:
                                'Drummer, Singer, Guitarist, Pianoist, Formal music education, Songwriting',
                            goals: 'pro, looking for producer',
                        }}
                        className="Profile"
                    ></ProfileView>
                    <ProfileView
                        renderType="search"
                        onProfileClick={this.props.handleProfileClick.bind(
                            this
                        )}
                        user={{
                            userName: 'test Name',
                            group: false,
                            skills:
                                'Drummer, Singer, Guitarist, Pianoist, Formal music education, Songwriting',
                            goals: 'pro, looking for producer',
                        }}
                        className="Profile"
                    ></ProfileView>
                </div>
            </div>
        );
    }
}

export default SearchView;
