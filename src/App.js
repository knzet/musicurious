import './styles/App.css';
import './styles/Menu.css';
import './styles/Profile.css';
import 'react-tabs/style/react-tabs.css';
import PageMenu from './components/PageMenu';
import ProfileView from './components/ProfileView';
import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.navClick = this.navClick.bind(this);
    }
    state = {
        page: 'home',
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
                {(function (page) {
                    if (page === 'profile') {
                        return <ProfileView className="Profile"></ProfileView>;
                    } else if (page === 'home') {
                    } else if (page === 'search') {
                    } else {
                        return (
                            <div>
                                attempting to render {this.state.page} page
                            </div>
                        );
                    }
                })(this.state.page)}
            </div>
        );
    }
}

export default App;
