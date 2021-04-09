import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import SpotifyPlayer from 'react-spotify-player';

class ProfileView extends React.Component {
    constructor(props) {
        super(props);
        // group flag adds an extra tag

        this.state = {
            open: true,
            userName: 'test name',
            user: this.props.user, // TODO: pass just user object in props
            groups: this.props.user.groups,
            contact: this.props.user.contact,
            skills: this.props.user.skills,
            goals: this.props.user.goals,
        };
    }
    // spotify player vars
    size = { width: '100%', height: 300 };
    view = 'list'; // or 'coverart'
    theme = 'black'; // or 'white'
    // end spotify
    render() {
        return (
            <div className="ProfileContainer">
                <div className={'Profile'}>
                    <div className="ProfileImageContainer">
                        <img
                            src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                            className="ProfileImage"
                            width="200px"
                            height="200px"
                            alt="placeholder img"
                        />
                        <div
                            className={'DisplayName'}
                            onClick={() =>
                                this.props.onProfileClick(this.state.user)
                            }
                        >
                            {this.state.userName}
                        </div>
                    </div>
                    <div className={'ProfileInfo'}>
                        <div className={'ProfileItems'}>
                            Skills: {this.state.skills}
                        </div>

                        <div className={'ProfileItems'}>
                            Goals: {this.state.goals}
                        </div>

                        {this.props.group ? (
                            <div className={'ProfileItems'}>
                                Group(s): Group A, Group B
                            </div>
                        ) : null}

                        <div className={'ProfileItems'}>
                            Spotify/bandcamp link:
                        </div>

                        <button
                            className={'ProfileButton'}
                            onClick={() =>
                                this.props.handleFollowClick(
                                    this.state.userName
                                )
                            }
                        >
                            Follow
                        </button>
                        <button
                            className={'ProfileButton'}
                            onClick={() =>
                                this.props.handleContactClick(
                                    this.state.userName
                                )
                            }
                        >
                            Contact
                        </button>
                        <button className={'ProfileOptions'}> ... </button>
                    </div>
                </div>
                {this.props.renderType === 'search' ? null : (
                    <Tabs className={'ProfileTabs'}>
                        <TabList>
                            <Tab>Bio</Tab>
                            <Tab>Demos</Tab>
                            <Tab>Followers</Tab>
                            {this.props.group ? <Tab>Members</Tab> : null}
                        </TabList>

                        <TabPanel>
                            <div className={'BioContainer'}>
                                <div className={'Bio'}>
                                    Write you content here...
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <SpotifyPlayer
                                uri="spotify:album:4ss4IGobJB38f1pgogEp7t"
                                size={this.size}
                                view={this.view}
                                theme={this.theme}
                            />
                        </TabPanel>
                        <TabPanel>
                            <div>placeholder tabpanel to silence warnings</div>
                        </TabPanel>
                        {this.state.group ? (
                            <TabPanel>group members tab</TabPanel>
                        ) : null}
                    </Tabs>
                )}
            </div>
        );
    }
}

export default ProfileView;
