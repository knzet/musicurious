import HamburgerMenu from 'react-hamburger-menu';
import Menu, { SubMenu, MenuItem } from 'rc-menu';
import React from 'react';

class PageMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: true };
        this.navClick = this.navClick.bind(this);
    }

    handleClick() {
        this.setState({
            open: !this.state.open,
        });
    }
    navClick = (key, item, domEvent, keyPath) => {
        console.log({ key, item });
    };

    render() {
        return (
            <>
                <HamburgerMenu
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
                />
                <div className={this.state.open ? 'Menu-Items' : 'invisible'}>
                    <Menu
                        className="Menu-Container"
                        mode="vertical"
                        onClick={this.navClick}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        <MenuItem id="header" className="Menu-Item">
                            Musicurious
                        </MenuItem>
                        <MenuItem className="Menu-Item">
                            Find People by zip code
                        </MenuItem>
                        <MenuItem className="Menu-Item">User Profile</MenuItem>
                    </Menu>
                </div>
            </>
        );
    }
}

export default PageMenu;
