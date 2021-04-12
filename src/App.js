import './styles/App.css';
import './styles/Menu.css';
import './styles/Profile.css';
import './styles/Search.css';
import './styles/TopBar.css';
import 'react-tabs/style/react-tabs.css';
import PageMenu from './components/PageMenu';
import ProfileView from './components/ProfileView';
import SearchView from './components/SearchView';
import createBrowserHistory from 'history/createBrowserHistory';
import React, { Component } from 'react';
import Account from './backend/Account.js';
import TopBar from './components/TopBar';

const history = createBrowserHistory({ forceRefresh: true });

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
        page: 'profile',
        user: { userName: 'testUser' },
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
        var page;
        if (key.key === 'item_2') {
            page = 'profile';
        } else if (key.key === 'item_1') {
            page = 'search';
        } else if (key.key === 'item_0') {
            page = 'home';
        }
        this.setState({ page: page });
        // window.location.pathname !== '/' + page && history.push('/' + page);
    };

    handleProfileClickFromSearch = (user) => {
        this.setState({ page: 'profile', user: user });
        console.log(user);
        // renderProfile(user);
    };
    //////////////////////////////////

    render() {
        return (
            <div className="App">
                <TopBar></TopBar>
                <div className={'Content'}>
                    <PageMenu
                        className="Menu"
                        navClick={this.navClick.bind(this)}
                    ></PageMenu>
                    {function (page) {
                        console.log(window.location.pathname);
                        if (page === 'profile') {
                            return (
                                <ProfileView
                                    user={
                                        // TODO: use dummy users for all the profileviews. if some dummy users have different skills, use the search to filter by skill
                                        new Account({
                                            isUser: true,
                                            userName: 'test Name',
                                            contact: 'email@web.com',
                                            skills:
                                                'Drummer, Singer, Guitarist, Pianoist, Formal music education, Songwriting',
                                            goals: 'pro, looking for producer',
                                        })
                                    }
                                    className="Profile"
                                    handleFollowClick={this.handleFollowClick.bind(
                                        this
                                    )}
                                    handleContactClick={this.handleContactClick.bind(
                                        this
                                    )}
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
            </div>
        );
    }
}

export default App;
