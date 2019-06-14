import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import SocialLinks from "../components/SocialLinks";

import "./Footer.css";

const routes = [
    {
        name: "Application",
        link: "/application"
    },
    {
        name: "Adoptable Dogs",
        link: "/adopt"
    },
    {
        name: "Foster",
        link: "/foster"
    },
    {
        name: "Volunteer",
        link: "/volunteer"
    }
];

const routes2 = [
    {
        name: "Corporate Sponsorships",
        link: "/corporate-sponsorships"
    },
    {
        name: "Mission",
        link: "/mission"
    },
    {
        name: "Our Story",
        link: "/our-story"
    },
    {
        name: "Contact",
        link: "/contact"
    }
];

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="top-shadow" style={{ position: "absolute", zIndex: "100" }}>
                    <div />
                </div>
                <div className="footer-logo">
                    <Link to="/">
                        <b>Senior Paws Sanctuary</b>
                    </Link>
                    <div className="footer-links">
                        <SocialLinks />
                    </div>
                </div>
                <div className="footer-text">
                    {routes.map(route => (
                        <div key={route.name}>
                            <Link to={route.link}>{route.name}</Link>
                        </div>
                    ))}
                </div>
                <div className="footer-text">
                    {routes2.map(route => (
                        <div key={route.name}>
                            <Link to={route.link}>{route.name}</Link>
                        </div>
                    ))}
                </div>
                <div className="footer-button">
                    <Button component={GoToContact} size="large">
                        Contact Us
                    </Button>
                </div>
            </div>
        );
    }
}

const GoToContact = props => <Link to="/contact" {...props} />;

export default Footer;
