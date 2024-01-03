import React, { useRef, useEffect, useState } from "react";
import classNames from "classnames/bind";
import Modal from "react-modal";
import styles from "./cart.module.scss";
import CartDelivery from "@/container/Cart/CartDelivery";
import Promotion from "@/container/Cart/Promotion";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  renderCartProducts,
  increaseProduct,
  decreaseProduct,
  deleteCartItem,
} from "@/redux/slice/cartReducer";
const cx = classNames.bind(styles);
function Cart() {
  const router = useRouter();

  // Calculate the total number of products in the shopping cart

  const [allProducts, setAllProducts] = useState(0);
  useEffect(() => {
    let sumProducts = 0;
    cart.map((shopItem) => {
      shopItem.list_cartItem.map((productItem) => {
        productItem ? sumProducts++ : "";
      });
    });

    setAllProducts(sumProducts);
  }, []);

  const [cart, setCart] = useState([]);
  const [arrChecked, setArrChecked] = useState([]);
  let [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();

  const mapStateToProps = useSelector((state) => {
    return {
      cartProductsArr: state.cart.cartProductsArr,
    };
  });
  // console.log("mapStateToProps.cartProductsArr");
  // console.log(mapStateToProps.cartProductsArr);

  const componentDidMount = async () => {
    try {
      dispatch(renderCartProducts(1));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    componentDidMount();
  }, []);

  useEffect(() => {
    try {
      if (mapStateToProps.cartProductsArr !== null) {
        setCart(mapStateToProps.cartProductsArr);
      }
    } catch (error) {
      console.log(error);
    }
  }, [mapStateToProps.cartProductsArr]);

  // Increase quantity
  const handleIncrease = (productId, cartItemId) => {
    setCart(
      cart.map((shopItem) => {
        return {
          ...shopItem,
          list_cartItem: shopItem.list_cartItem.map((productItem) => {
            if (productId === productItem.product_id) {
              return {
                ...productItem,
                quantity:
                  productItem.quantity +
                  (productItem.quantity < productItem.inventory ? 1 : 0),
                productAmount:
                  productItem.productSalePrice * (productItem.quantity + 1),
              };
            } else {
              return productItem;
            }
          }),
        };
      })
    );

    setArrChecked(
      arrChecked.map((productItem) => {
        if (productId === productItem.product_id) {
          return {
            ...productItem,
            quantity:
              productItem.quantity +
              (productItem.quantity < productItem.inventory ? 1 : 0),
            productAmount:
              productItem.productSalePrice * (productItem.quantity + 1),
          };
        } else {
          return productItem;
        }
      })
    );
    calFinalPrice();
    dispatch(increaseProduct(cartItemId));
  };

  // Decrease quantity
  const handleDecrease = (productId, cartItemId) => {
    // truyền cart, và sửa cart
    setCart(
      cart.map((shopItem) => {
        return {
          ...shopItem,
          list_cartItem: shopItem.list_cartItem.map((productItem) => {
            if (productId === productItem.product_id) {
              if (productItem.quantity > 1) {
                return {
                  ...productItem,
                  quantity:
                    productItem.quantity - (productItem.quantity > 1 ? 1 : 0),
                  productAmount:
                    productItem.productSalePrice * (productItem.quantity - 1),
                };
              } else {
                return productItem;
              }
            } else {
              return productItem;
            }
          }),
        };
      })
    );

    setArrChecked(
      arrChecked.map((productItem) => {
        if (productId === productItem.product_id) {
          return {
            ...productItem,
            quantity: productItem.quantity - (productItem.quantity > 1 ? 1 : 0),
            productAmount:
              productItem.productSalePrice * (productItem.quantity - 1),
          };
        } else {
          return productItem;
        }
      })
    );
    calFinalPrice();
    dispatch(decreaseProduct(cartItemId));
  };

  // Call price and count numbers of product checked
  let [totalChecked, setTotalChecked] = useState(0);
  const calFinalPrice = () => {
    let sumAmount = 0;
    let sumProductsChecked = 0;
    arrChecked.map((productItem) => {
      sumAmount += productItem.productAmount;
      sumProductsChecked++;
    });

    console.log(arrChecked);
    setTotalPrice(sumAmount);
    setTotalChecked(sumProductsChecked);
  };

  const allCheckRef = useRef([]);
  useEffect(() => {
    //Call calFinalPrice() again every time the array containing the checkboxes is changed to recalculate the
    //total amount
    calFinalPrice();
    //Check all if all are checked
    var count = 0;
    cart.map((shopItem) => {
      shopItem.list_cartItem.map((productItem) => {
        productItem ? count++ : "";
      });
    });
    if (arrChecked.length === count) {
      allCheckRef.current[0].checked = true;
    } else {
      allCheckRef.current[0].checked = false;
    }
  }, [arrChecked]);

  //Handle Final Price
  const handleCheckItem = (event, productItem) => {
    var arrCheckedItem = [...arrChecked];
    if (event.target.checked) {
      arrCheckedItem = [...arrChecked, productItem];
    } else {
      arrCheckedItem.splice(arrChecked.indexOf(productItem), 1);
    }
    setArrChecked(arrCheckedItem);
  };

  //Handle Check all
  const ref = useRef([]);
  const handleCalAll = (event) => {
    if (event.target.checked) {
      for (let i = 0; i < ref.current.length; i++) {
        ref.current[i].checked = true;
      }
      var initArr = [];
      cart.map((shopItem) => {
        shopItem.list_cartItem.map((productItem) => {
          initArr = [...initArr, productItem];
        });
      });
      setArrChecked(initArr);
    } else {
      for (let i = 0; i < ref.current.length; i++) {
        ref.current[i].checked = false;
      }
      var emptyArr = [...arrChecked];
      emptyArr.length = 0;
      setArrChecked(emptyArr);
    }
  };

  const currencyFormat = (num) => {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + " ₫";
  };

  const getArrChecked = () => {
    return [...arrChecked];
  };

  const serializedArray = JSON.stringify(getArrChecked());

  //Handle order
  const handleOrder = () => {
    if (totalChecked === 0) {
      alert("Vui lòng chọn sản phẩm");
    } else {
      router.push({
        pathname: "/checkout/payment",
        query: {
          array: serializedArray,
          finalPrice: totalPrice,
        },
      });
    }
  };

  //Hanlde delete product
  const handleDeleteProduct = (cartItemId) => {
    dispatch(deleteCartItem(cartItemId));
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },

    overlay: {
      backgroundColor: "#00000087",
    },
  };

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={cx("checkout-wrapper")}>
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
      <div className={cx("checkout-container")}>
        <div className={cx("checkout-heading")}>
          <h4>Giỏ Hàng</h4>
        </div>
        <div className={cx("checkout-content")}>
          <div className={cx("left-content")}>
            <div className={cx("left-up-content")}>
              <div className={cx("item")}>
                <input
                  ref={(element) => {
                    allCheckRef.current[0] = element;
                  }}
                  type="checkbox"
                  className={cx("check-box")}
                  onChange={(e) => {
                    handleCalAll(e);
                  }}
                />
                <span className={cx("lable-heading-cart")}>
                  Tất cả ({allProducts} sản phẩm)
                </span>
              </div>
              <span className={cx("lable-heading-cart")}>Đơn giá</span>
              <span className={cx("lable-heading-cart")}>Số lượng</span>
              <span className={cx("lable-heading-cart")}>Thành tiền</span>
              <img
                src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg"
                alt="deleted"
                className={cx("deleteBtn")}
              />
            </div>
            {cart &&
              cart.length > 0 &&
              cart.map((item, shopIndex) => {
                return (
                  <div className={cx("left-down-content")} key={shopIndex}>
                    <div className={cx("sellers-group")}>
                      <label className={cx("sellers-checkbox")}>
                        <input type="checkbox" />
                        <span className={cx("checkbox-fake")}>
                          <svg
                            className={cx("checkbox-mark")}
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M22.0725 5.45132C22.6517 6.04365 22.641 6.99334 22.0487 7.57251L10.7987 18.5725C10.2157 19.1425 9.28427 19.1425 8.70132 18.5725L1.95132 11.9725C1.35899 11.3933 1.34832 10.4437 1.92749 9.85132C2.50666 9.25899 3.45635 9.24832 4.04868 9.82749L9.75 15.4021L19.9513 5.42749C20.5437 4.84832 21.4933 4.85899 22.0725 5.45132Z"
                                fill="#ffffff"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="clip0">
                                <rect
                                  width="21"
                                  height="21"
                                  fill="white"
                                  transform="translate(1.5 1.5)"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      </label>
                      <img
                        src="https://salt.tikicdn.com/ts/upload/30/24/79/8317b36e87e7c0920e33de0ab5c21b62.png"
                        alt="seller-link"
                        className="sellers__icon-home"
                      />
                      <a
                        href="https://tiki.vn/cua-hang/tiki-partner"
                        className={cx("sellers-name")}
                        target="_blank"
                        data-view-id="cart_view_seller"
                        data-view-index="6860"
                      >
                        {item && item.shop}
                        <img
                          src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/Path.svg"
                          alt="seller-link"
                        />
                      </a>
                    </div>
                    {item &&
                      item.list_cartItem.length > 0 &&
                      item.list_cartItem.map((productItem, index) => {
                        return (
                          <div className={cx("product-item")} key={index}>
                            <div className={cx("item")}>
                              <input
                                ref={(element) => {
                                  ref.current[index] = element;
                                }}
                                type="checkbox"
                                className={cx("check-box")}
                                onChange={(e) => {
                                  handleCheckItem(e, productItem);
                                }}
                              />
                              <div className={cx("product-infor")}>
                                <div
                                  className={cx("product-img")}
                                  style={{
                                    backgroundImage: `url(${productItem.productImage})`,
                                  }}
                                ></div>
                                <div className={cx("product-title")}>
                                  <div className={cx("product-name")}>
                                    {productItem.productName}
                                  </div>
                                  <div className={cx("product-extra-infor")}>
                                    {productItem.option}
                                  </div>
                                  <div className={cx("product-dilivery")}>
                                    <div className={cx("delivery-img")}></div>
                                    <span>{productItem.giao_thu}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={cx("product-price")}>
                              <span>
                                {productItem.productSalePrice
                                  ? currencyFormat(productItem.productSalePrice)
                                  : ""}
                              </span>
                            </div>
                            <div className={cx("product-amount")}>
                              <span
                                id={cx("quantity-decrease")}
                                className={cx("qty-decrease")}
                                onClick={() =>
                                  handleDecrease(
                                    productItem.product_id,
                                    productItem.cartItem_id
                                  )
                                }
                              >
                                <img
                                  src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/decrease.svg"
                                  alt="decrease"
                                />
                              </span>
                              <input
                                type="tel"
                                className={cx("qty-input")}
                                value={productItem.quantity}
                                onChange={() => {}}
                              />
                              <span
                                id={cx("quantity-increase")}
                                className={cx("qty-increase")}
                                onClick={() =>
                                  handleIncrease(
                                    productItem.product_id,
                                    productItem.cartItem_id
                                  )
                                }
                              >
                                <img
                                  src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/increase.svg"
                                  alt="increase"
                                />
                              </span>
                            </div>
                            <div className={cx("product-total")}>
                              {currencyFormat(productItem.productAmount)}
                            </div>
                            <img
                              src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg"
                              alt="deleted"
                              className={cx("deleteBtn")}
                              onClick={() =>
                                handleDeleteProduct(productItem.cartItem_id)
                              }
                            />
                          </div>
                        );
                      })}
                  </div>
                );
              })}
          </div>
          <div className={cx("right-content")}>
            <CartDelivery
              name={"Student name"}
              phoneNuber={"0578492192"}
              address={
                "Trường ĐH Công Nghệ Thông Tin KP6, Linh Trung, Tp.Thủ Đức"
              }
            />
            <Promotion />
            <div className={cx("sticky-section")}>
              <div className={cx("total-amount-area")}>
                <div className={cx("provisional")}>
                  <span>Tạm tính</span>
                  <span className={cx("price")}>
                    {currencyFormat(totalPrice)}
                  </span>
                </div>
                <div className={cx("total")}>
                  <span>Tổng tiền</span>
                  <div className={cx("total-price")}>
                    <span className={cx("price-final")}>
                      {totalPrice === 0 ? (
                        <span>Vui lòng chọn sản phẩm</span>
                      ) : (
                        currencyFormat(totalPrice)
                      )}
                    </span>
                    <span>(Đã bao gồm VAT nếu có)</span>
                  </div>
                </div>
                <div className={cx("freeship")}>
                  <img
                    src="https://salt.tikicdn.com/ts/upload/70/f9/77/3b172be9ee58c8104fe8a4d40c4f5633.png"
                    alt=""
                    width="81"
                    data-selected="true"
                    data-label-id="0"
                    data-metatip="true"
                  />
                  <span>đã được áp dụng!</span>
                </div>
              </div>
              <button className={cx("btnBtn")} onClick={handleOrder}>
                Mua Hàng ({totalChecked})
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
