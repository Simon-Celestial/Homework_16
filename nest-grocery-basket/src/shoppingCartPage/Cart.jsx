import "./Cart.css";
import React, { useContext } from "react";
import { CartContext } from "../context/CartContextWrapper/CartContextWrapper";
import Header from "../components/header/Header";
import Footer from "../components/footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronUp,
  faChevronDown,
  faHouse,
  faTrashCan,
  faRightFromBracket,
  faArrowLeftLong,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Cart = () => {
  const { goods, setGoods } = useContext(CartContext);
  return (
    <div className="cart-wrapper">
      <Header />
      <div className="cart-container">
        <div className="cart-nav">
          <Link to="/">
            <div className="nav-cart-item">
              <FontAwesomeIcon icon={faHouse} />
              <p>Home</p>
            </div>
          </Link>
          <FontAwesomeIcon icon={faChevronRight} />
          <div className="nav-cart-item">
            <p>Shop</p>
          </div>
          <FontAwesomeIcon icon={faChevronRight} />
          <div className="nav-cart-item">
            <p>Cart</p>
          </div>
        </div>
        <div className="cart-product-count">
          <div className="cart-product-content">
            <div className="cart-product-title">
              <p>Your Cart</p>
              <b>
                There are <span>{Array.from(new Set(goods)).length}</span>{" "}
                products in your cart
              </b>
            </div>
            <div className="product-delete-btn" onClick={() => setGoods([])}>
              <FontAwesomeIcon icon={faTrashCan} />
              <p>Clear Cart</p>
            </div>
          </div>
        </div>
        <div className="products-items-block">
          <div className="products-left-wrapper">
            <div className="products-left">
              <div className="products-left-info">
                <div className="select-product">
                  <input type="checkbox" />
                  <p>Product</p>
                </div>
                <div className="products-information">
                  <p>Unit Price</p>
                  <p>Quantity</p>
                  <p>Subtotal</p>
                  <p>Remove</p>
                </div>
              </div>
              {Array.from(new Set(goods)).map((product, index) => (
                <div
                  key={`cart_${index}_${product.productName}`}
                  className="left-products-items-container"
                >
                  <div className="left-products-checkbox">
                    <input type="checkbox" />
                  </div>
                  <div className="left-products-img">
                    <img src={product.imgFront} alt="" />
                  </div>
                  <div className="left-products-title">
                    <p>{product.productName}</p>
                    <div className="product-rating-block">
                      <div className="rating-wrapper">
                        <div className="rating-stars"></div>
                      </div>
                      <p>{product.ratingValue}</p>
                    </div>
                  </div>
                  <div className="left-product-price product-unit-price">
                    <p>${product.discountedPrice}</p>
                  </div>
                  <div className="left-product-quantity">
                    <div className="quantity-box">
                      <p>{goods.filter((it) => it === product).length}</p>
                    </div>
                    <div className="quantity-control">
                      <FontAwesomeIcon
                        onClick={() => {
                          setGoods((prev) => [...prev, product]);
                        }}
                        icon={faChevronUp}
                        className="quantity-arrows"
                      />
                      <FontAwesomeIcon
                        onClick={() => {
                          setGoods((prev) =>
                            prev.filter((it, i) => i !== prev.indexOf(product))
                          );
                        }}
                        icon={faChevronDown}
                        className="quantity-arrows"
                      />
                    </div>
                  </div>
                  <div className="left-product-price product-subtotal">
                    <p>
                      $
                      {(goods.filter((it) => it === product).length *
                        product.discountedPrice).toFixed(2)}
                    </p>
                  </div>
                  <div className="product-basket-deletion">
                    <FontAwesomeIcon
                      onClick={() => {
                        setGoods((prev) => prev.filter((it) => it !== product));
                      }}
                      icon={faTrashCan}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="products-left-buttons-block">
              <Link to="/">
                <button>
                  <FontAwesomeIcon icon={faArrowLeftLong} /> Continue Shopping
                </button>
              </Link>
              <button>
                <FontAwesomeIcon icon={faArrowsRotate} />
                Update Cart
              </button>
            </div>
          </div>
          <div className="products-right">
            <div className="products-right-content">
              <div className="products-right-title">
                <div className="products-right-title-item">
                  <p>Subtotal</p>
                  <b className="product-right-price">${goods.map(it => it.discountedPrice).reduce((a, b) => (a + b), 0).toFixed(2)}</b>
                </div>
                <div className="products-right-title-item span-wrapper">
                  <span></span>
                </div>
                <div className="products-right-title-item">
                  <p>Shipping</p>
                  <b>Free</b>
                </div>
                <div className="products-right-title-item">
                  <p>Estimate for</p>
                  <b>United Kingdom</b>
                </div>
                <div className="products-right-title-item span-wrapper">
                  <span></span>
                </div>
                <div className="products-right-title-item">
                  <p>Total</p>
                  <b className="product-right-price">${goods.map(it => it.discountedPrice).reduce((a, b) => (a + b), 0).toFixed(2)}</b>
                </div>
              </div>
              <button className="products-checkout">
                Proceed To CheckOut
                <FontAwesomeIcon icon={faRightFromBracket} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
