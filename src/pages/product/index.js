import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./product.module.scss";
import ProductLayout from "@/components/Layouts/ProductLayout";
import Link from "next/link";
import Widget from "@/components/product/Widget";
import RatingStarsCourses from "@/components/SVGImg/RatingStarsCoures";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { renderProsById } from "@/redux/slice/productReducer";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { addCartItem } from "@/redux/slice/cartReducer";
import { renderShopInfor } from "@/redux/slice/sellerReducer";
import { renderProductsCategory } from "@/redux/slice/categoryReducer";
const cx = classNames.bind(styles);

export default function ProductPage() {
  const router = useRouter();
  const productId = parseInt(router.query.productId);
  const mapStateToProps = useSelector((state) => {
    return {
      proDetail: state.product.proDetail,
      inforArr: state.seller.inforArr,
      isAddSuccess: state.cart.isAddSuccess,
    };
  });

  const dispatch = useDispatch();
  useEffect(() => {
    try {
      dispatch(renderProsById(productId));
      dispatch(renderProductsCategory());
    } catch (error) {
      console.log(error);
    }
  }, [productId]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidestoscroll: 1,
  };
  const currencyFormat = (num) => {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + " ₫";
  };

  useEffect(() => {
    try {
      setProductAmount(mapStateToProps.proDetail.productSalePrice);
      setProductPrice(mapStateToProps.proDetail.productSalePrice);
      setProductOptions(mapStateToProps.proDetail.options);
      setProducDetails(mapStateToProps.proDetail.detail);
      setProductListImage(mapStateToProps.proDetail.productListImage);
      setProductRating(mapStateToProps.proDetail.rating);
      setProductSold(mapStateToProps.proDetail.sold);
      setProductSalePrice(mapStateToProps.proDetail.productSalePrice);
      setProductDes(mapStateToProps.proDetail.description);
      setShopId(mapStateToProps.proDetail.shop_id);
      let productInforArr = [];
      productInforArr = [mapStateToProps.proDetail];

      setProductInfor(
        productInforArr.map((item) => {
          return {
            ...item,
            quantity: 1,
          };
        })
      );
    } catch (error) {
      console.log(error);
    }
  }, [mapStateToProps.proDetail]);

  const [productInfor, setProductInfor] = useState([]);
  const [qty, setQty] = useState(1);
  const [productAmount, setProductAmount] = useState();
  const [productPrice, setProductPrice] = useState();
  const [productOptions, setProductOptions] = useState([]);
  const [producDetails, setProducDetails] = useState([]);
  const [productListImage, setProductListImage] = useState([]);
  const [productRating, setProductRating] = useState();
  const [productSold, setProductSold] = useState();
  const [productSalePrice, setProductSalePrice] = useState();
  const [productDes, setProductDes] = useState();
  const [shopId, setShopId] = useState();
  useEffect(() => {
    try {
      dispatch(renderShopInfor(shopId));
    } catch (error) {
      console.log(error);
    }
  }, [shopId]);

  const handleDecrease = () => {
    let decreaseQty = qty;
    let productAmt = productAmount;
    if (qty > 1) {
      decreaseQty -= 1;
      productAmt = productPrice * (qty - 1);
      setQty(decreaseQty);
      setProductAmount(productAmt);
    }

    setProductInfor(
      productInfor &&
        productInfor.map((item) => {
          return {
            ...item,
            quantity: decreaseQty,
          };
        })
    );
  };

  const handleIncrease = () => {
    let increaseQty = qty;
    let productAmt = productAmount;
    increaseQty += 1;
    productAmt = productPrice * (qty + 1);
    setQty(increaseQty);
    setProductAmount(productAmt);

    setProductInfor(
      productInfor &&
        productInfor.map((item) => {
          return {
            ...item,
            quantity: increaseQty,
          };
        })
    );
  };

  const [selectedColor, setSelectedColor] = useState("");
  const renderColor = (color) => {
    const isColorSelected = color === selectedColor;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 12,
        }}
        onClick={() => handleClick(color)}
      >
        {" "}
        <div
          className={`color ${isColorSelected ? "selected-option" : ""}`}
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            borderRadius: 8,
            color: "#242424",
            borderWidth: 1.6,
            borderStyle: "solid",
            lineHeight: "21px",
            fontSize: "14px",
            fontWeight: 500,
            padding: 10,
          }}
        >
          {color}
        </div>
      </div>
    );
  };

  const handleClick = (color) => {
    setSelectedColor(color);
  };

  const handleClickShop = (e) => {
    e.stopPropagation();
    router.push({
      pathname: "/store/sellerpage",
      shopId: shopId,
      query: {
        shopId: shopId,
      },
    });
  };

  const handleAddToCart = () => {
    const userId = 1;
    const proInfor = { productId, userId, selectedColor, qty };
    dispatch(addCartItem(proInfor));
    if (mapStateToProps.isAddSuccess) {
      alert("add success");
    }
  };
  const serializedArray = JSON.stringify(productInfor);
  const handleBuyNow = () => {
    router.push({
      pathname: "/checkout/payment/",
      query: {
        array: serializedArray,
        finalPrice: productAmount,
      },
    });
  };
  return (
    <div className={cx("container")}>
      <div className={cx("breadcrum")}>
        <Link href={"/"}>
          <span>Trang chủ &nbsp;</span>
        </Link>
        <path> &gt;</path>
        <p>
          &nbsp;{" "}
          {mapStateToProps.proDetail && mapStateToProps.proDetail.productName}{" "}
        </p>
      </div>
      <div className={cx("info-container")}>
        <div className={cx("info-container-left-body")}>
          <div className={cx("product-info")}>
            <div className={cx("left-side")}>
              <div className={cx("review-images")}>
                <Widget>
                  <Carousel>
                    {productListImage &&
                      productListImage.map((item) => (
                        <div id={item.productId}>
                          <img src={item} />
                        </div>
                      ))}
                  </Carousel>
                </Widget>
              </div>
            </div>
            <div className={cx("main-info")}>
              <Widget>
                <div className={cx("brand-author")}></div>
                <h1 className={cx("titledstyled")}>
                  {mapStateToProps.proDetail &&
                    mapStateToProps.proDetail.productName}
                </h1>
                <div className={cx("ratingstyled")}>
                  <div>{productRating}</div>
                  <RatingStarsCourses />
                  {/* <div>({repo.reviews.length})</div> */}
                  <div className={cx("sold-text")}>| Đã bán {productSold}</div>
                </div>
                <div className={cx("product-price")}>
                  <div className={cx("current-price")}>
                    {productSalePrice && currencyFormat(productSalePrice)}
                    <sup
                      style={{
                        color: "#27272a",
                        display: "inline",
                        fontSize: 18,
                        fontWeight: 600,
                        lineHeight: 0,
                      }}
                    >
                      đ
                    </sup>
                  </div>
                </div>
                {productOptions &&
                  productOptions.slice(0, 1).map((item) => {
                    return <div className={cx("option-title")}>{item}</div>;
                  })}
                <div className={cx("product-option")}>
                  {productOptions && productOptions.slice(1).map(renderColor)}
                </div>
              </Widget>
              <Widget>
                <div className={cx("delivery-title")}>Thông tin vận chuyển</div>
                <div className={cx("delivery-content")}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      cursor: "pointer",
                      gap: "4px",
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "150%",
                      flex: "1 1 0%",
                      minHeight: "21px",
                    }}
                  >
                    <span>Giao đến Q. 1, P. Bến Nghé, Hồ Chí Minh</span>
                    <span style={{ color: "rgb(10, 104, 255)" }}>Đổi</span>
                  </div>
                </div>

                <div className={cx("shipping-info")}>
                  <div className={cx("shipping-info__item")}>
                    <div className={cx("shipping-info__item__header")}>
                      <div
                        className="shipping-info__item__header__logo"
                        style={{ width: "32px;" }}
                      >
                        <img
                          src="https://salt.tikicdn.com/ts/upload/04/da/1e/eac32401f048ffd380e50dfeda2a1c55.png"
                          alt=""
                          height="16"
                          width="32"
                        />
                      </div>
                      <div>Giao siêu tốc 2h</div>
                    </div>
                    <div className={cx("shipping-info__item__fee")}>
                      <div className="shipping-info__item__fee_name">
                        <span>
                          Trước 17h hôm nay: 25.000
                          <sup>
                            <small>₫</small>
                          </sup>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={cx("shipping-info__item")}>
                    <div className={cx("shipping-info__item__header")}>
                      <div
                        className="shipping-info__item__header__logo"
                        style={{ width: "32px;" }}
                      >
                        <img
                          src="https://salt.tikicdn.com/ts/upload/6b/59/d9/783a8f53f8c251dbe5f644df40c21c15.png"
                          alt=""
                          height="16"
                          width="32"
                        />
                      </div>
                      <div className="shipping-info__item__header__highlight">
                        Giao đúng sáng mai
                      </div>
                    </div>
                    <div className={cx("shipping-info__item__fee")}>
                      <div className="shipping-info__item__fee_name">
                        <span>
                          8h - 12h, 02/01: 14.000
                          <sup>
                            <small>₫</small>
                          </sup>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Widget>
              <Widget>
                <div
                  style={{
                    color: "#27272a",
                    fontWeight: 600,
                    lineHeight: "24px",
                  }}
                >
                  Sản phẩm tương tự
                </div>
              </Widget>
              <Widget>
                <div
                  className={cx("seller-infor")}
                  onClick={(e) => handleClickShop(e)}
                >
                  <div
                    style={{
                      color: "#27272a",
                      fontWeight: 600,
                      lineHeight: "24px",
                    }}
                  >
                    Thông tin nhà bán
                  </div>
                  <div
                    style={{
                      display: "grid",
                      fontSize: "14px",
                      alignItems: "center",
                      gap: "16px",
                      lineHeight: "16.1px",
                      gridTemplateColumns: "40px 496px",
                      gridTemplateRows: "54.6px",
                    }}
                  >
                    <a
                      style={{
                        color: "#0b74e5",
                        fontFamily: "Inter",
                        fontSize: "14px",
                        lineHeight: "16.1px",
                        boxSizing: "border-box",
                      }}
                    >
                      <img
                        style={{
                          borderRadius: "50%",
                          objectFit: "contain",
                          minWidth: "40px",
                          width: "40px",
                          height: "40px",
                          display: "block",
                          transition: "opacity 250ms ease-in-out 0s",
                        }}
                        src={
                          mapStateToProps.inforArr &&
                          mapStateToProps.inforArr.logo
                        }
                      ></img>
                    </a>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                      }}
                    >
                      <span
                        style={{
                          color: "#242424",
                          fontSize: "15px",
                          fontWeight: 500,
                          lineHeight: "24px",
                        }}
                      >
                        {mapStateToProps.inforArr &&
                          mapStateToProps.inforArr.name}
                      </span>
                      <div
                        className={cx("seller-detail-infor")}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          alignContent: "flex-start",
                          gap: "12px",
                          alignSelf: "stretch",
                        }}
                      >
                        <div
                          className={cx("item review")}
                          style={{
                            display: "flex",
                            paddingRight: "12px",
                            gap: "4px",
                            alignItems: "center",
                            color: "rgb(39, 39, 42)",
                            borderRight: " 1px solid rgb(235, 235, 240)",
                            whiteSpace: "nowrap",
                          }}
                        >
                          <div
                            className={cx("title")}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "4px",
                            }}
                          >
                            <img
                              alt="star-icon"
                              src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                              width="16"
                              height="16"
                            />
                            <span
                              style={{
                                fontSize: "14px",
                                fontStyle: "normal",
                                fontWeight: "500",
                                lineHeight: "150%",
                              }}
                            >
                              {mapStateToProps.inforArr &&
                                mapStateToProps.inforArr.rating}
                            </span>
                          </div>
                          <div className={cx("sub-title")}>
                            (5.4tr+ đánh giá)
                          </div>
                        </div>
                        <div
                          className={cx("item normal")}
                          style={{
                            display: "flex",
                            paddingRight: "12px",
                            gap: "4px",
                            alignItems: "center",
                            color: "rgb(39, 39, 42)",
                            borderRight: " 1px solid rgb(235, 235, 240)",
                            whiteSpace: "nowrap",
                          }}
                        >
                          <div
                            className={cx("title")}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "4px",
                            }}
                          >
                            <span
                              style={{
                                fontSize: "14px",
                                fontStyle: "normal",
                                fontWeight: "500",
                                lineHeight: "150%",
                              }}
                            >
                              496.5k+
                            </span>
                          </div>
                          <div className={cx("sub-title")}>Theo dõi</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Widget>
              <Widget>
                <div
                  className={cx("benefit-title")}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                  }}
                >
                  <div>An tâm mua sắm</div>
                  <picture className="webpimg-container">
                    <source
                      type="image/webp"
                      srcset="https://salt.tikicdn.com/ts/upload/16/42/c1/23a144e53aadf0357f6cd2c98b525902.png"
                    />
                    <img
                      srcset="https://salt.tikicdn.com/ts/upload/16/42/c1/23a144e53aadf0357f6cd2c98b525902.png"
                      width="20"
                      height="20"
                      alt="right-arrow"
                      className="styles__StyledImg-sc-p9s3t3-0 hbqSye loaded"
                      style={{ width: "20px", height: "20px", opacity: "1" }}
                    />
                  </picture>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div className={cx("benefit-item")}>
                    <img
                      alt="compensation-icon"
                      src="https://salt.tikicdn.com/ts/upload/c5/37/ee/76c708d43e377343e82baee8a0340297.png"
                      height="20"
                      width="20"
                    />
                    <div className={cx("content-row")}>
                      <span>
                        <b>Được mở hộp kiểm tra</b> khi nhận hàng.
                      </span>
                    </div>
                  </div>
                  <div className={cx("benefit-item")}>
                    <img
                      alt="compensation-icon"
                      src="https://salt.tikicdn.com/ts/upload/ea/02/b4/b024e431ec433e6c85d4734aaf35bd65.png"
                      height="20"
                      width="20"
                    />
                    <div className={cx("content-row")}>
                      <span>
                        <b>Được hoàn tiền 111%</b> nếu là hàng giả.
                      </span>
                    </div>
                  </div>
                  <div className={cx("benefit-item")}>
                    <img
                      alt="compensation-icon"
                      src="https://salt.tikicdn.com/ts/upload/85/4c/e0/22f9cc1095dc1d7d7fa4f2f767bb6620.png"
                      height="20"
                      width="20"
                    />
                    <div className={cx("content-row")}>
                      <span>
                        <b>Đổi trả miễn phí tại nhà trong 7 ngày</b> nếu sản
                        phẩm lỗi.
                      </span>
                    </div>
                  </div>
                </div>
              </Widget>
              <Widget>
                <div
                  style={{
                    color: "#27272a",
                    fontWeight: "600",
                    lineHeight: "24px",
                  }}
                >
                  Thông tin chi tiết
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {producDetails &&
                    producDetails.length > 0 &&
                    producDetails.map((item, index) => {
                      return (
                        <div
                          className={cx("widget-content")}
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            padding: "8px 0px",
                            borderBottom: "1px solid rgb(235, 235, 240)",
                            fontSize: "14px",
                            lineHeight: "150%",
                            fontWeight: "400",
                            color: "rgb(39, 39, 42)",
                            gap: "8px",
                          }}
                          key={index}
                        >
                          <div
                            className={cx("widget-row-content")}
                            style={{
                              display: "grid",
                              gridTemplateColumns: "55% 45%",
                              gap: "4px",
                              backgroundColor: "#FFFFFF",
                              flex: "1 1 0%",
                              justifyContent: "space-between",
                              fontSize: " 14px",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight: "150%",
                              color: "#27272A",
                              alignItems: "center",
                            }}
                          >
                            <span
                              style={{
                                maxWidth: "300px",
                                color: "#808089",
                              }}
                            >
                              {item.key}
                            </span>

                            <span
                              style={{
                                fontWeight: "400",
                                wordBreak: "break-word",
                                color: "#27272A;",
                              }}
                              className="styles__ProductAttributeValueStyled-sc-1y9nzc6-0 eOGOWf"
                            >
                              {item.value}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </Widget>
              <Widget>
                <div
                  style={{
                    color: "#27272a",
                    fontWeight: 600,
                    lineHeight: "24px",
                  }}
                >
                  Mô tả sản phẩm
                </div>
                <div>{productDes}</div>
              </Widget>
            </div>
          </div>
          <div className={cx("product-reviews")}>
            <Widget>reviews</Widget>
          </div>
        </div>
        <div className={cx("info-container-right-body")}>
          <div className={cx("right-container")}>
            <Widget>
              <div className={cx("buy-box-header")}></div>
              <div className={cx("add-to-cart")}>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    lineHeight: "21px",
                  }}
                >
                  Số lượng
                </p>
                <div className={cx("group-input")}>
                  <button className={cx("")} onClick={handleDecrease}>
                    <img
                      src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg"
                      alt="remove-icon"
                      width="20"
                      height="20"
                    />
                  </button>
                  <input type="text" className={cx("input")} value={qty} />
                  <button onClick={handleIncrease}>
                    <img
                      src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg"
                      alt="add-icon"
                      width="20"
                      height="20"
                    />
                  </button>
                </div>
                <div
                  style={{
                    color: "#27272a",
                    fontWeight: 600,
                    lineHeight: "24px",
                  }}
                >
                  Tạm tính
                </div>
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: 600,
                    lineHeight: "36px",
                  }}
                >
                  {productAmount && currencyFormat(productAmount)}
                </div>
                <button
                  style={{
                    background: "rgb(255, 66, 78)",
                    borderRadius: "4px",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: "300",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "8px",
                    gap: "8px",
                    whiteSpace: "nowrap",
                    color: "rgb(255, 255, 255)",
                    height: "40px",
                    fontSize: "16px",
                    lineHeight: "150%",
                  }}
                  onClick={handleBuyNow}
                >
                  <span
                    style={{
                      color: "#ffffff",
                      fontWeight: 300,
                      lineHeight: "24px",
                      textAlign: "center",
                    }}
                  >
                    Mua ngay
                  </span>
                </button>
                <button
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "8px",
                    gap: "8px",
                    whiteSpace: "nowrap",
                    width: "100%",
                    height: "40px",
                    cursor: "pointer",
                    background: "rgb(255, 255, 255)",
                    fontSize: "16px",
                    lineHeight: "150%",
                    color: "rgb(10, 104, 255)",
                    border: "1px solid rgb(10, 104, 255)",
                    borderRadius: "4px",
                  }}
                  onClick={() => handleAddToCart()}
                >
                  Thêm vào giỏ
                </button>
              </div>
            </Widget>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductPage.getLayout = (page) => <ProductLayout>{page}</ProductLayout>;
