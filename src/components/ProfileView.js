import Menu, { SubMenu, MenuItem } from 'rc-menu';
import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

class ProfileView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: true };
    }

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
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

export default ProfileView;
