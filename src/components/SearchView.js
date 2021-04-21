import React from 'react';
import ProfileView from './ProfileView';
import accounts from '../DummyUsers.js';

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
                        handleFollowClick={this.props.handleFollowClick.bind(
                            this
                        )}
                        handleContactClick={this.props.handleContactClick.bind(
                            this
                        )}
                        user={accounts[0]}
                        className="Profile"
                    ></ProfileView>
                    <ProfileView
                        renderType="search"
                        onProfileClick={this.props.handleProfileClick.bind(
                            this
                        )}
                        handleFollowClick={this.props.handleFollowClick.bind(
                            this
                        )}
                        handleContactClick={this.props.handleContactClick.bind(
                            this
                        )}
                        user={accounts[1]}
                        className="Profile"
                    ></ProfileView>
                </div>
                <div className="SearchProfileContainer">
                    <ProfileView
                        renderType="search"
                        onProfileClick={this.props.handleProfileClick.bind(
                            this
                        )}
                        handleFollowClick={this.props.handleFollowClick.bind(
                            this
                        )}
                        handleContactClick={this.props.handleContactClick.bind(
                            this
                        )}
                        user={accounts[2]}
                        className="Profile"
                    ></ProfileView>
                    <ProfileView
                        renderType="search"
                        onProfileClick={this.props.handleProfileClick.bind(
                            this
                        )}
                        handleFollowClick={this.props.handleFollowClick.bind(
                            this
                        )}
                        handleContactClick={this.props.handleContactClick.bind(
                            this
                        )}
                        user={accounts[3]}
                        className="Profile"
                    ></ProfileView>
                </div>
            </div>
        );
    }
}

export default SearchView;
