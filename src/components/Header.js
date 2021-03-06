import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withRouter } from "react-router";

import "./Header.css";

const routes = [];

const mobileRoutes = [];

class Header extends Component {
    constructor(props) {
        super(props);

        // set the initial state
        this.state = {
            open: null,
            selectedIndex: this.getSelectedIndex(props.location)
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location) {
            // check new index
            const selectedIndex = this.getSelectedIndex(nextProps.location);
            // set the index if it isn't the current index
            if (selectedIndex !== this.state.selectedIndex) {
                this.setState({ selectedIndex });
            }
        }
    }

    getSelectedIndex = location => {
        let index = -1;

        if (!location) return index;

        switch (location.pathname) {
            case "/application":
                index = 0;
                break;
            case "/adopt":
                index = 1;
                break;
            case "/foster":
                index = 2;
                break;
            case "/volunteer":
                index = 3;
                break;
            case "/corporate-sponsorships":
                index = 4;
                break;
            case "/mission":
                index = 5;
                break;
            case "/our-story":
                index = 6;
                break;
            case "/contact":
                index = 7;
                break;
            case "/donate":
                index = 8;
                break;
            default:
                index = -1;
                break;
        }

        return index;
    };

    mapSelectedIndex = index => {
        const { selectedIndex } = this.state;

        switch (selectedIndex) {
            case 0:
            case 1:
                if (index === 0) return "selected";
                break;
            case 2:
            case 3:
            case 4:
                if (index === 1) return "selected";
                break;
            case 5:
            case 6:
                if (index === 2) return "selected";
                break;
            case 7:
                if (index === 3) return "selected";
                break;
            default:
                return "";
        }
        return "";
    };

    handleClick = event => {
        this.setState({ open: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ open: null });
    };

    makeDesktopMenu() {
        return (
            <div className="desktop-menu">
                {routes.map((route, index) => {
                    let selected = this.mapSelectedIndex(index);

                    return (
                        <div key={route.name}>
                            <div className={selected}>
                                <b>{route.name}</b>
                            </div>
                            <ul className="submenu">
                                <span className="triangle">
                                    <span
                                        className="triangle-arrow"
                                        style={{ marginLeft: route.triangleMargin }}
                                    />
                                </span>
                                {route.links.map(link => {
                                    return (
                                        <li key={link.index}>
                                            <DesktopMenuItem
                                                name={link.name}
                                                link={link.link}
                                                index={link.index}
                                                icon={link.icon}
                                            />
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
        );
    }

    makeMobileMenu() {
        return (
            <div className="mobile-menu">
                <IconButton color="inherit" onClick={this.handleClick}>
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="mobile-menu"
                    anchorEl={this.state.open}
                    open={Boolean(this.state.open)}
                    onClose={this.handleClose}
                >
                    {mobileRoutes.map((route, index) => (
                        <Link to={route.link} key={route.name}>
                            <MenuItem
                                selected={index === this.state.selectedIndex}
                                onClick={this.handleClose}
                            >
                                <b>{route.name}</b>
                            </MenuItem>
                        </Link>
                    ))}
                </Menu>
            </div>
        );
    }

    render() {
        return (
            <div className="menu">
                <div>
                    <Link to="/">
                        <img src="/images/StarGreen.png" alt="Stocks" height={40} />
                    </Link>
                </div>
                {this.makeDesktopMenu()}
                {this.makeMobileMenu()}
            </div>
        );
    }
}

// const DonateButton = ({ color }) => (
//     <div>
//         <Button component={GoToDonate} className={"header-button " + color} size="small">
//             Donate
//         </Button>
//     </div>
// );
//
// const GoToDonate = props => <Link to="/donate" {...props} />;

const DesktopMenuItem = ({ name, link, index, icon }) => {
    return (
        <Link to={link} className="desktop-menu-item-container">
            <img height={20} src={icon} alt="Pawprint" />
            <span className="desktop-menu-item">
                <b>{name}</b>
            </span>
        </Link>
    );
};

Header = withRouter(Header);

export default Header;
