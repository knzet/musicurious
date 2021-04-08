import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import SpotifyPlayer from 'react-spotify-player';

class ProfileView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: true };
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
                    <img
                        className="ProfileImage"
                        width="200px"
                        height="200px"
                        alt="placeholder img"
                    />
                    <div className={'DisplayName'}>Name</div>
                    <div className={'ProfileInfo'}>
                        <div className={'ProfileItems'}>
                            Skills: Drummer, Singer, Guitarist, Pianoist, Formal
                            music education, Songwriting
                        </div>

                        <div className={'ProfileItems'}>
                            Goals: pro, looking for producer
                        </div>

                        <div className={'ProfileItems'}>
                            Group(s): Group A, Group B
                        </div>

                        <div className={'ProfileItems'}>
                            Spotify/bandcamp link:
                        </div>

                        <button className={'ProfileButton'}> Follow </button>
                        <button className={'ProfileButton'}> Contact </button>
                        <button className={'ProfileOptions'}> ... </button>
                    </div>
                </div>

                <Tabs className={'ProfileTabs'}>
                    <TabList>
                        <Tab>Bio</Tab>
                        <Tab>Demos</Tab>
                        <Tab>Followers</Tab>
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
                </Tabs>
            </div>
        );
    }
}

export default ProfileView;
