import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {
    faCartShopping,
    faEye,
    faShuffle,
} from "@fortawesome/free-solid-svg-icons";

const MainItems = ({
                       onAdd,
                       imgFront,
                       imgBack,
                       productName,
                       ratingValue,
                       productShop,
                       discountedPrice,
                       normalPrice,
                       color,
                       badgeText,
                   }) => {
    return (
        <div className="product-img-block">
            {badgeText && (
                <div
                    style={{
                        background: color || "unset",
                    }}
                    className="colored-mark"
                >
                    {badgeText}
                </div>
            )}
            <div className="img-container">
                <div className="img-container-buttons">
                    <div className="icon-wrapper">
                        <FontAwesomeIcon icon={faHeart}/>
                    </div>
                    <div className="icon-wrapper">
                        <FontAwesomeIcon icon={faShuffle} rotation={270}/>
                    </div>
                    <div className="icon-wrapper">
                        <FontAwesomeIcon icon={faEye}/>
                    </div>
                </div>
                <img src={imgFront} alt="product" className="front-img"/>
                <img src={imgBack} alt="product" className="back-img"/>
            </div>
            <div className="product-block-title">
                <p>Snack</p>
                <h2>{productName}</h2>
                <div className="product-rating-block">
                    <div className="rating-wrapper">
                        <div className="rating-stars"></div>
                    </div>
                    <p>{ratingValue}</p>
                </div>
                <div className="product-store-name">
                    <p>By</p>
                    <p>{productShop}</p>
                </div>
            </div>
            <div className="product-price-block">
                <div className="price-value">
                    <b>${discountedPrice}</b>
                    <p>${normalPrice}</p>
                </div>
                <div
                    onClick={onAdd}
                    className="add-button-wrapper"
                >
                    <div
                         className="add-button-move">
                        <FontAwesomeIcon icon={faCartShopping}/>
                        <p>Add</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainItems;
