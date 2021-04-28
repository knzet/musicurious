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
                    {/* // only render results that match the query */}
                    {accounts.map((user) => {
                        return user.skills.toUpperCase().includes(
                            this.props.query.toUpperCase()
                            //  || // TODO make this safe if user does not have a bio
                            //     user.bio.contains(this.props.query)
                        ) ? (
                            <ProfileView
                                renderType="search"
                                // Make sure that this function has the same name as the one in
                                //    renderTinyProfile in ProfileView
                                // If the comment of the other function has this code: 113, that is
                                //    the function.
                                onProfileClick={this.props.handleProfileClick.bind(
                                    this
                                )}
                                handleFollowClick={this.props.handleFollowClick.bind(
                                    this
                                )}
                                handleContactClick={this.props.handleContactClick.bind(
                                    this
                                )}
                                user={user}
                                className="Profile"
                            ></ProfileView>
                        ) : null;
                    })}
                </div>
            </div>
        );
    }
}

export default SearchView;
