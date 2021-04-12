import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import SpotifyPlayer from 'react-spotify-player';

class ProfileView extends React.Component {
    constructor(props) {
        super(props);
        // group flag adds an extra tag

        this.state = {
            open: true,
            user: this.props.user,

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
                             {this.state.user.name}
                        </div>
                    </div>
                    <div className={'ProfileInfo'}>
                        <div className={'ProfileItems'}>
                            Skills: {this.state.user.skills}
                        </div>

                        <div className={'ProfileItems'}>
                            Goals: {this.state.user.goals}
                        </div>

                        {this.state.user.isUser ? (
                            <div className={'ProfileItems'}>
                                Groups:
                                <ul>
                                    {this.state.user.groups.map((group)=>
                                    <li key ={group.toString()}>
                                        {group.name}
                                    </li>)}
                                </ul>
                            </div>
                        ) : null}

                        <div className={'ProfileItems'}>
                            Spotify/bandcamp link:
                        </div>

                        <button
                            className={'ProfileButton'}
                            onClick={() =>
                                this.props.handleFollowClick(
                                    this.state.user.name
                                )
                            }
                        >
                            Follow
                        </button>
                        <button
                            className={'ProfileButton'}
                            onClick={() =>
                                this.props.handleContactClick(
                                    this.state.user.name
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
                <Tabs className={'ProfileTabs'}>
                    <TabList>
                        <Tab>Bio</Tab>
                        <Tab>Demos</Tab>
                        <Tab>Followers</Tab>
                        {this.props.user.isUser ? null : <Tab>Members</Tab>}
                    </TabList>

                    <TabPanel>
                        <div className={'BioContainer'}>
                            <div className={'Bio'}>
                                {this.props.user.bio}
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
                    {this.state.user.isUser ? null : (
                        <TabPanel>group members tab</TabPanel>
                    )}
                </Tabs>

            </div>
        );
    }
}

export default ProfileView;
