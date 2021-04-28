import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import SpotifyPlayer from 'react-spotify-player';
import userimg from '../userimg.jpeg';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';

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

    /*
    This is responsible for rendering a tiny profile icon
    that links to the actual profile
    Parameter:
        profile - an Account instance
     */
    renderTinyProfile(profile){
        return (
          <div className={'TinyProfile'}>
              <img src={userimg}
                   title={profile.userName}
                   className={'TinyProfileImage'}
                   onClick={()=>{
                       this.props.handleProfileClick(profile)
                   }}/>
          </div>
        );
    }

    render() {
        return (
            <div className="ProfileContainer">
                <div className={'Profile'}>
                    <div className="ProfileImageContainer">
                        <img
                            src={userimg}
                            className="ProfileImage"
                            width="150px"
                            height="150px"
                            alt="placeholder img"
                        />

                        <div
                            className={'DisplayName'}
                            onClick={
                                // don't need to click name to go to profile when we are viewing the profile, only on search page
                                this.props.renderType === 'search'
                                    ? () => {
                                          this.props.onProfileClick(
                                              this.state.user
                                          );
                                      }
                                    : null
                            }
                        >
                            {this.state.user.userName}
                        </div>
                    </div>
                    <div className={'ProfileInfo'}>
                        <div className={'ProfileItems'}>
                            Skills: {this.state.user.skills}
                        </div>

                        <div className={'ProfileItems'}>
                            {/* {console.log(this.props.user)} */}
                            Goals: {this.props.user.goals}
                        </div>

                        {this.state.user.isUser ? (
                            <div className={'ProfileItems'}>
                                Groups:
                                {this.state.user.groups.map((profile)=>(
                                    this.renderTinyProfile(profile)
                                ))}
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
                )}
                {/* search render skips the tabs */}
            </div>
        );
    }
}

export default ProfileView;
