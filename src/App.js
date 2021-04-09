import './styles/App.css';
import './styles/Menu.css';
import './styles/Profile.css';
import './styles/Search.css';
import 'react-tabs/style/react-tabs.css';
import PageMenu from './components/PageMenu';
import ProfileView from './components/ProfileView';
import SearchView from './components/SearchView';
import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.navClick = this.navClick.bind(this); // need to bind click handler to the right context, in case the component gets re-rendered
        this.handleFollowClick = this.handleFollowClick.bind(this);
        this.handleContactClick = this.handleContactClick.bind(this);
        this.handleProfileClickFromSearch = this.handleProfileClickFromSearch.bind(
            this
        );
    }
    state = {
        page: 'search',
        user: {},
        follow: '',
    };
    // handlers /////////////////////////////////
    // if adding a new handler, bind to this in constructor

    handleFollowClick = (profile) => {
        console.log('follow ' + profile);
        alert('follow ' + profile + ' ?');
        this.setState({ follow: profile });
    };
    handleContactClick = (profile) => {
        console.log('contact ' + profile);
        this.setState({ contact: profile });
    };

    navClick = (key, item, domEvent, keyPath) => {
        console.log({ key, item, domEvent, keyPath });
        if (key.key === 'item_2') {
            this.setState({ page: 'profile' });
        } else if (key.key === 'item_1') {
            this.setState({ page: 'search' });
        } else if (key.key === 'item_0') {
            this.setState({ page: 'home' });
        }
    };

    handleProfileClickFromSearch = (user) => {
        this.setState({ page: 'profile', user: user });
        // renderProfile(user);
    };
    //////////////////////////////////

    render() {
        return (
            <div className="App">
                {/* <div width="100%" background-color="red">
                search
            </div> */}
                <PageMenu
                    className="Menu"
                    navClick={this.navClick.bind(this)}
                ></PageMenu>
                {function (page) {
                    if (page === 'profile') {
                        return (
                            <ProfileView
                                user={{
                                    userName: 'test Name',
                                    group: false,
                                    skills:
                                        'Drummer, Singer, Guitarist, Pianoist, Formal music education, Songwriting',
                                    goals: 'pro, looking for producer',
                                }}
                                className="Profile"
                                handleFollowClick={this.handleFollowClick.bind(
                                    this
                                )}
                                handleContactClick={this.handleContactClick.bind(
                                    this
                                )}
                                group={true}
                            ></ProfileView>
                        );
                    } else if (page === 'home') {
                        <div>test div</div>;
                    } else if (page === 'search') {
                        return (
                            <SearchView
                                handleProfileClick={this.handleProfileClickFromSearch.bind(
                                    this
                                )}
                            ></SearchView>
                        );
                    } else {
                        return <div>attempting to render {page} page</div>;
                    }
                    // this line is wacky, the immediately invoked function needs to pass this as a parameter so it needs to be bound
                }.bind(this)(this.state.page)}
            </div>
        );
    }
}

export default App;
