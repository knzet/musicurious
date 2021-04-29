import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import SpotifyPlayer from 'react-spotify-player';
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
          <div className={'TinyProfile'} key={profile.userName}>
              <img src={profile.avatar}
                   title={profile.userName}
                   className={'TinyProfileImage'}
                   onClick={()=> {
                       // Make sure that this function name is the same as the one in SearchView
                       // If the comment of the other function has this code: 113. that is the function
                       this.props.onProfileClick(profile);
                       this.setState({user: profile});
                   }}/>
          </div>
        );
    }

    /*
    This renders a list of little icons for each account in the provided list
    Parameter:
        list   a list of Account instances
     */
    renderListOfTinyProfiles(list){
        return (
            <div className={'ProfileList'}>
                {(list.length === 0) ? ' None' :
                    list.map((profile)=>(
                        this.renderTinyProfile(profile)
                    ))}
            </div>
        );
    }

    render() {
        return (
            <div className="ProfileContainer">
                <div className={'Profile'}>
                    <div className="ProfileImageContainer">
                        <img
                            src={this.state.user.avatar}
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
                                          this.props.onProfileClick(this.state.user);
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
                            Goals: {this.state.user.goals}
                        </div>

                        <div className={'ProfileItems'}>
                            {this.state.user.isUser ? 'Groups: ' : 'Members: '}
                            {
                                this.state.user.isUser ?
                                    this.renderListOfTinyProfiles(this.state.user.groups)
                                    : this.renderListOfTinyProfiles(this.state.user.members)
                            }
                        </div>

                        <div className={'ProfileItems'}>
                            Spotify/bandcamp link:
                        </div>

                        <button
                            className={'ProfileButton'}
                            onClick={() =>
                                this.props.handleFollowClick(
                                    this.state.user.userName
                                )
                            }
                        >
                            Follow
                        </button>
                        <button
                            className={'ProfileButton'}
                            onClick={() =>
                                this.props.handleContactClick(
                                    this.state.user.userName
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
                            {
                                this.state.user.isUser ?
                                    <Tab>Friends</Tab>
                                    : <Tab>Collaborators</Tab>
                            }
                        </TabList>

                        <TabPanel>
                            <div className={'BioContainer'}>
                                <div className={'Bio'}>
                                    {this.state.user.bio}
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
                            {
                                this.state.user.isUser ?
                                    this.renderListOfTinyProfiles(this.state.user.friends)
                                    : this.renderListOfTinyProfiles(this.state.user.collaborators)
                            }
                        </TabPanel>
                    </Tabs>
                )}
                {/* search render skips the tabs */}
            </div>
        );
    }
}

export default ProfileView;
