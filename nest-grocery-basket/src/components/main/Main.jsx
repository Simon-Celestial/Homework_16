import React, {useCallback, useContext} from "react";
import "./Main.css";
import {CartContext} from "../../context/CartContextWrapper/CartContextWrapper";
import MainItems from "./MainItems";
import firstProductFront from "../../assets/images/product-item-1-front.jpg"
import firstProductBack from "../../assets/images/product-item-1-back.jpg"
import secondProductFront from "../../assets/images/product-item-2-front.jpg"
import secondProductBack from "../../assets/images/product-item-2-back.jpg"
import thirdProductFront from "../../assets/images/product-item-3-front.jpg"
import thirdProductBack from "../../assets/images/product-item-3-back.jpg"
import forthProductFront from "../../assets/images/product-item-4-front.jpg"
import forthProductBack from "../../assets/images/product-item-4-back.jpg"
import fifthProductFront from "../../assets/images/product-item-5-front.jpg"
import fifthProductBack from "../../assets/images/product-item-5-back.jpg"
import sixProductFront from "../../assets/images/product-item-6-front.jpg"
import sixProductBack from "../../assets/images/product-item-6-back.jpg"
import sevenProductFront from "../../assets/images/product-item-7-front.jpg"
import sevenProductBack from "../../assets/images/product-item-7-back.jpg"
import eightProductFront from "../../assets/images/product-item-8-front.jpg"
import eightProductBack from "../../assets/images/product-item-8-back.jpg"
import nineProductFront from "../../assets/images/product-item-9-front.jpg"
import nineProductBack from "../../assets/images/product-item-9-back.jpg"
import tenProductFront from "../../assets/images/product-item-10-front.jpg"
import tenProductBack from "../../assets/images/product-item-10-back.jpg"


let mainImgBlockArray = [
    {
        imgFront: firstProductFront,
        imgBack: firstProductBack,
        productName: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        ratingValue: "(4.0)",
        productShop: "NestFood",
        discountedPrice: 28.85,
        normalPrice: 32.80,
        color: '#f74b81',
        badgeText: 'Hot',
    },
    {
        imgFront: secondProductFront,
        imgBack: secondProductBack,
        productName: "Gorton’s Beer Battered Fish Fillets with soft paper",
        ratingValue: "(3.5)",
        productShop: "Old El Paso",
        discountedPrice: 23.85,
        normalPrice: 25.8,
        color: '#67bcee',
        badgeText: 'Sale'
    },
    {
        imgFront: thirdProductFront,
        imgBack: thirdProductBack,
        productName: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
        ratingValue: "(4.7)",
        productShop: "StarKist",
        discountedPrice: 48.85,
        normalPrice: 52.80,
        color: '#3BB77E',
        badgeText: 'New'
    },
    {
        imgFront: forthProductFront,
        imgBack: forthProductBack,
        productName: "Chobani Complete Vanilla Greek Yogurt",
        ratingValue: "(4.1)",
        productShop: "Bizim Market",
        discountedPrice: 28.85,
        normalPrice: 32.80
    },
    {
        imgFront: fifthProductFront,
        imgBack: fifthProductBack,
        productName: "Foster Farms Takeout Crispy Classic Buffalo Wings",
        ratingValue: "(4.5)",
        productShop: "NestFood",
        discountedPrice: 17.85,
        normalPrice: 19.80,
        color: '#f59758',
        badgeText: '-14%'

    },
    {
        imgFront: sixProductFront,
        imgBack: sixProductBack,
        productName: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        ratingValue: "(4.2)",
        productShop: "NestFood",
        discountedPrice: 28.85,
        normalPrice: 32.80,
    },
    {
        imgFront: sevenProductFront,
        imgBack: sevenProductBack,
        productName: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        ratingValue: "(3.9)",
        productShop: "Azersun",
        discountedPrice: 18.85,
        normalPrice: 25.30,
    },
    {
        imgFront: eightProductFront,
        imgBack: eightProductBack,
        productName: "Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g",
        ratingValue: "(3.8)",
        productShop: "NestFood",
        discountedPrice: 18.85,
        normalPrice: 22.80,
        color: '#67bcee',
        badgeText: 'Sale'

    },
    {
        imgFront: nineProductFront,
        imgBack: nineProductBack,
        productName: "Foster Farms Takeout Crispy Classic Buffalo Wings",
        ratingValue: "(4.5)",
        productShop: "Final",
        discountedPrice: 48.85,
        normalPrice: 39.75,
        color: '#f74b81',
        badgeText: 'Hot'
    },
    {
        imgFront: tenProductFront,
        imgBack: tenProductBack,
        productName: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
        ratingValue: "(4.0)",
        productShop: "StarKist",
        discountedPrice: 48.85,
        normalPrice: 52.80,
    }
];

const Main = () => {
    const {
        setGoods
    } = useContext(CartContext);
    const onAdd = useCallback((item) => {
        setGoods(prev => [...prev, item]);
    }, [])
    return (
        <main className="main-wrapper">
            <div className="products-navigation">
                <div className="products-title">
                    <h2>Popular Products</h2>
                </div>
                <div className="products-nav-items">
                    <p>All</p>
                    <p>Milks & Dairies</p>
                    <p>Coffee & Teas</p>
                    <p>Pet Foods</p>
                    <p>Meats</p>
                    <p>Vegetables</p>
                    <p>Fruits</p>
                </div>
            </div>
            <div className="all-products-wrapper">
                {mainImgBlockArray.map((item, i) => {
                    return <MainItems
                        key={i}
                        onAdd={() => onAdd(item)}
                        {...item}
                    />
                })
                }
            </div>
        </main>
    )
}
export default Main;
