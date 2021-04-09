import './styles/App.css';
import './styles/Menu.css';
import './styles/Profile.css';
import 'react-tabs/style/react-tabs.css';
import PageMenu from './components/PageMenu';
import ProfileView from './components/ProfileView';
import React, { Component } from 'react';
import Account from './backend/Account.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.navClick = this.navClick.bind(this); // need to bind click handler to the right context, in case the component gets re-rendered
        this.handleFollowClick = this.handleFollowClick.bind(this);
        this.handleContactClick = this.handleContactClick.bind(this);
    }
    state = {
        page: 'home',
        follow: '',
    };

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
                                user={new Account("Van", true)}
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
                    } else if (page === 'search') {
                    } else {
                        return <div>attempting to render {page} page</div>;
                    }
                    // this line is wacky, the immediately invoked function needs to pass this as a parameter so it needs to be bound
                }.bind(this)(this.state.page)}
            </div>
        );
    };
}

export default App;
