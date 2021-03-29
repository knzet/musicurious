import HamburgerMenu from 'react-hamburger-menu';
import React from 'react';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: true };
    }

    handleClick() {
        this.setState({
            open: !this.state.open,
        });
    }

    render() {
        return (
            <div className="Menu-Container">
                <HamburgerMenu
                    isOpen={this.state.open}
                    menuClicked={this.handleClick.bind(this)}
                    width={18}
                    height={15}
                    strokeWidth={1}
                    rotate={0}
                    className="Menu"
                    color="black"
                    borderRadius={0}
                    animationDuration={0.5}
                />
                <div className={this.state.open ? 'Menu-Items' : 'invisible'}>
                    <div className="Menu-Item">menu item 1</div>
                    <div className="Menu-Item">menu item 2</div>
                </div>
            </div>
        );
    }
}

export default Menu;
