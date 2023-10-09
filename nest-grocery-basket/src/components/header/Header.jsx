import React, {useContext} from "react";
import "./Header.css";
import {CartContext} from "../../context/CartContextWrapper/CartContextWrapper";
import downArrow from "../../assets/images/down-arrow.png";
import franceFlag from "../../assets/images/france.png";
import germanyFlag from "../../assets/images/germany.png";
import russiaFlag from "../../assets/images/russia.png";
import nestLogo from "../../assets/images/nest-logo.svg";
import searchImg from "../../assets/images/search.png";
import locationImg from "../../assets/images/location.png";
import circleImg from "../../assets/images/circle.svg";
import cartImg from "../../assets/images/cart.svg";
import heartImg from "../../assets/images/heart.svg";
import userImg from "../../assets/images/user.svg";
import exitImg from "../../assets/images/logout.png";
import voucherImg from "../../assets/images/voucher.png";
import settingsImg from "../../assets/images/setting.png";
import closeImg from "../../assets/images/close.png";
import categoryImg from "../../assets/images/categories.png";
import greenFire from "../../assets/images/green-fire.svg";
import headphonesImg from "../../assets/images/headphone.svg";
import menuImg from "../../assets/images/menu.png";
import {Link} from "react-router-dom";


const Header = () => {
    const {
        goods, setGoods,
    } = useContext(CartContext);
    return (
        <header className="header-wrapper">
            <div className="header-top-container">
                <div className="header-top-items">
                    <a href=" " className="header-text-border">About Us</a>
                    <a href=" " className="header-text-border">My Account</a>
                    <a href=" " className="header-text-border">Wishlist</a>
                    <a href=" ">Order Tracking</a>
                </div>
                <div className="header-top-items header-marquee-block">
                    <marquee behavior="scroll" direction="down" scrolldelay="500" scrollamount="5px">100% Secure
                        delivery without contacting the courier
                    </marquee>
                </div>
                <div className="header-top-items">
                    <div className="header-options-container">
                        <p>Need help?</p>
                        <p>Call Us:</p>
                        <p className="green-color-number">+1800 900</p>
                        <div className="header-text-arrow">
                            <p>English
                                <img src={downArrow} alt="down-arrow"/>
                                <div className="lang-dropdown languages-dropdown">
                                    <p>
                                        <img src={franceFlag} alt="france"/>
                                        Français</p>
                                    <p>
                                        <img src={germanyFlag} alt="germany"/>
                                        Deutsch</p>
                                    <p>
                                        <img src={russiaFlag} alt="russia"/>
                                        Pусский</p>
                                </div>
                            </p>
                            <p>USD
                                <img src={downArrow} alt="down-arrow"/>
                                <div className="lang-dropdown money-dropdown">
                                    <p>
                                        <img src={franceFlag} alt="france"/>
                                        INR</p>
                                    <p>
                                        <img src={germanyFlag} alt="germany"/>
                                        MBP</p>
                                    <p>
                                        <img src={russiaFlag} alt="russia"/>
                                        EU</p>
                                </div>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-middle-container">
                <div className="logo-box">
                    <Link to="/">
                        <img src={nestLogo} alt="site-logo"/>
                    </Link>
                </div>
                <img className="menu" src={menuImg} alt="menu"/>
                <div className="header-search-box">
                    <div className="category-selection">
                        <b>All Categories
                            <img src={downArrow} alt="down-arrow"/>
                        </b>
                    </div>
                    <form action="#">
                        <input type="text" id="headerSearch" placeholder="Search for items..."/>
                    </form>
                    <img src={searchImg} alt="search"/>
                </div>
                <div className="location-wrapper">
                    <img src={locationImg} alt="location"/>
                    <p>Your Location</p>
                    <img src={downArrow} alt="down-arrow"/>
                </div>
                <div className="header-actions-wrapper">
                    <div className="action-item action-green-circle">
                        <img src={circleImg} alt="circle"/>
                        <p>Compare</p>
                        <div className="green-circle">3</div>
                    </div>
                    <div className="action-item action-green-circle">
                        <img src={heartImg} alt="heart"/>
                        <p>Wishlist</p>
                        <div className="green-circle">6</div>
                    </div>
                    <div className="action-item action-green-circle cart-dropdown-activation">
                        <div className="cart-dropdown-container">
                            {
                                Array.from(new Set(goods)).map(product => (
                                    <div key={`header_cart_${product.productName}`}
                                         className="goods-container">
                                        <img src={product.imgFront} alt="daisy-bag"/>
                                        <div className="goods-title">
                                            <p>{product.productName}</p>
                                            <p>{goods.filter(it => it === product).length} x
                                                ${product.discountedPrice}</p>
                                            <img
                                                onClick={() => {
                                                    setGoods(prev => prev.filter(it => it !== product))
                                                }}
                                                src={closeImg}
                                                alt="close-mark"
                                                className="close-mark"
                                            />
                                            <p
                                                onClick={() => {
                                                    setGoods(prev => [...prev, product])
                                                }}
                                                className="add-mark"
                                            >+</p>
                                            <p
                                                onClick={() => {
                                                    setGoods(prev => prev.filter((it, i) => i !== prev.indexOf(product)))
                                                }}
                                                className="subtract-mark"
                                            >-</p>
                                        </div>
                                    </div>
                                ))
                            }
                            <div className="goods-price-block">
                                <p>Total</p>
                                <p>${goods.map(it => it.discountedPrice).reduce((a, b) => (a + b), 0).toFixed(2)}</p>
                            </div>
                            <div className="goods-buttons-block">
                                <Link to="/cart">
                                    <button>View cart</button>
                                </Link>

                                <button>Checkout</button>
                            </div>
                        </div>
                        <img src={cartImg} alt="cart"/>
                        <p>Cart</p>
                        <div className="green-circle">{Array.from(new Set(goods)).length}</div>
                    </div>
                    <div className="action-item account-dropdown">
                        <img src={userImg} alt="user"/>
                        <p>Account</p>
                        <div className="account-dropdown-item">
                            <div className="account-dropdown-content">
                                <img src={userImg} alt="account"/>
                                <p>My Account</p>
                            </div>
                            <div className="account-dropdown-content">
                                <img src={locationImg} alt="orders-tracking"/>
                                <p>Order Tracking</p>
                            </div>
                            <div className="account-dropdown-content">
                                <img src={voucherImg} alt="voucher"/>
                                <p>My Voucher</p>
                            </div>
                            <div className="account-dropdown-content">
                                <img src={heartImg} alt="wishlist"/>
                                <p>My Wishlist</p>
                            </div>
                            <div className="account-dropdown-content">
                                <img src={settingsImg} alt="setting"/>
                                <p>Settings</p>
                            </div>
                            <div className="account-dropdown-content">
                                <img src={exitImg} alt="sign-out"/>
                                <p>Sign Out</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bottom-container">
                <div className="navigation-container">
                    <div className="nav-categories-button">
                        <img src={categoryImg} alt="category"/>
                        <a href="#">Browse All Categories</a>
                        <img src={downArrow} alt="down-arrow"/>
                    </div>
                    <div className="navigation-items">
                        <div className="navigation-item">
                            <img src={greenFire} alt="fire-logo"/>
                            <a href=" ">Deals</a>
                        </div>
                        <div className="navigation-item">
                            <a href=" ">Home</a>
                            <img src={downArrow} alt="down-arrow"/>
                        </div>
                        <div className="navigation-item">
                            <a href=" ">About</a>
                        </div>
                        <div className="navigation-item">
                            <a href=" ">Shop</a>
                            <img src={downArrow} alt="down-arrow"/>
                        </div>
                        <div className="navigation-item">
                            <a href=" ">Vendors</a>
                            <img src={downArrow} alt="down-arrow"/>
                        </div>
                        <div className="navigation-item">
                            <a href=" ">Mega Menu</a>
                            <img src={downArrow} alt="down-arrow"/>
                        </div>
                        <div className="navigation-item">
                            <a href=" ">Blog</a>
                            <img src={downArrow} alt="down-arrow"/>
                        </div>

                        <div className="navigation-item">
                            <a href="#">Pages</a>
                            <img src={downArrow} alt="down-arrow"/>
                        </div>
                        <div className="navigation-item">
                            <a href=" ">Contact</a>
                        </div>
                    </div>
                </div>
                <div className="support-container">
                    <img src={headphonesImg} alt="headphones"/>
                    <div className="support-title">
                        <p>1900 - 888</p>
                        <span>24/7 Support Center</span>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;
