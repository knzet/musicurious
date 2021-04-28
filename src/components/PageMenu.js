import HamburgerMenu from 'react-hamburger-menu';
import Menu, { SubMenu, MenuItem } from 'rc-menu';
import React from 'react';

class PageMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: true };
        // this.navClick = () => this.props.navClick;
    }
    handleClick() {
        this.setState({
            open: !this.state.open,
        });
    }

    render() {
        return (
            <>
                {/* <HamburgerMenu
                    isOpen={this.state.open}
                    menuClicked={this.handleClick.bind(this)}
                    width={40}
                    height={40}
                    strokeWidth={1}
                    rotate={0}
                    className="Menu"
                    color="black"
                    borderRadius={0}
                    animationDuration={0.5}
                /> */}
                <div className={this.state.open ? 'Menu-Items' : 'invisible'}>
                    <Menu
                        className="Menu-Container"
                        mode="vertical"
                        onClick={this.props.navClick}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        <MenuItem
                            id="header"
                            className={`Menu-Item ${
                                this.props.page === 'home' ? 'active' : ''
                            }`}
                        >
                            Home
                        </MenuItem>
                        <MenuItem
                            className={`Menu-Item ${
                                this.props.page === 'search' ? 'active' : ''
                            }`}
                        >
                            Find People by zip code
                        </MenuItem>
                        <MenuItem
                            className={`Menu-Item ${
                                this.props.page === 'profile' ? 'active' : ''
                            }`}
                        >
                            User Profile
                        </MenuItem>
                    </Menu>
                </div>
            </>
        );
    }
}

export default PageMenu;
