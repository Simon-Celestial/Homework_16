import React from "react";
import "./footer.css";

import facebookIcon from "../../assets/images/facebook.png"
import twitterIcon from "../../assets/images/twitter.png"
import pinterestIcon from "../../assets/images/pinterest.png"
import youtubeIcon from "../../assets/images/youtube.png"
import instagramIcon from "../../assets/images/instagram.png"
import phoneIcon from "../../assets/images/phone-call.png"

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-container">
                <div className="footer-copyright">
                    <p>© 2022, <span>Nest</span> - HTML Ecommerce Template</p>
                    <p>All rights reserved</p>
                </div>
                <div className="support-block">
                    <div className="support-item">
                        <img src={phoneIcon} alt="call"/>
                        <div className="support-item-title">
                            <b>1900 - 6666</b>
                            <p>Working 8:00 - 22:00</p>
                        </div>
                    </div>
                    <div className="support-item">
                        <img src={phoneIcon} alt="call"/>
                        <div className="support-item-title">
                            <b>1900 - 8888</b>
                            <p>27/7 Support Center</p>
                        </div>
                    </div>
                </div>

                <div className="footer-social-block">
                    <div className="social-row">
                        <b>Follow Us</b>
                        <div className="social-icons-row">
                            <div className="icon-circle">
                                <img src={facebookIcon} alt="fcbk"/>
                            </div>
                            <div className="icon-circle">
                                <img src={twitterIcon} alt="twt"/>
                            </div>
                            <div className="icon-circle">
                                <img src={instagramIcon} alt="inst"/>
                            </div>
                            <div className="icon-circle">
                                <img src={pinterestIcon} alt="pntrst"/>
                            </div>
                            <div className="icon-circle">
                                <img src={youtubeIcon} alt="ytb"/>
                            </div>
                        </div>
                    </div>
                    <div className="social-icons-row">
                        <p>Up to 15% discount on your first subscribe</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Footer;