import React, { useEffect, useState } from "react";
import styles from "./store.module.scss";
import classNames from "classnames/bind";
import { useRouter } from "next/router";
import { renderShopInfor } from "@/redux/slice/sellerReducer";
import { useSelector, useDispatch } from "react-redux";
import { renderProsByShopId } from "@/redux/slice/productReducer";
const cx = classNames.bind(styles);
function sellerPage() {
  const router = useRouter();
  const shopId = router.query.shopId;
  const dispatch = useDispatch();
  const mapStateToProps = useSelector((state) => {
    return {
      inforArr: state.seller.inforArr,
      prosInShop: state.product.prosInShop,
    };
  });
  useEffect(() => {
    try {
      dispatch(renderShopInfor(shopId));
      dispatch(renderProsByShopId(shopId));
    } catch (error) {
      console.log(error);
    }
  }, [shopId]);
  console.log(mapStateToProps.inforArr);
  console.log(mapStateToProps.prosInShop);
  const [pane, switchPane] = useState(1);
  const handleSwitchPane = (num) => {
    switchPane(num);
  };
  const currencyFormat = (num) => {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  };
  return (
    <div className={cx("container")}>
      <div
        className={cx("header-wrapper")}
        style={{
          backgroundImage: `url("https://salt.tikicdn.com/ts/sellercenterFE/2d/24/dc/8b6b6c4ef997c6ad31f5ab7bed44e850.png")`,
        }}
      >
        <div id="seller-info-wrapper" className={cx("header-seller")}>
          <div className={cx("header-logo")}>
            <img
              src="https://salt.tikicdn.com/cache/w220/ts/seller/21/ce/5c/b52d0b8576680dc3666474ae31b091ec.jpg"
              alt="Tiki Trading "
              width="100%"
            />
          </div>
          <div className={cx("seller-name-wrapper")}>
            <h1 className={cx("seller-name")}>
              {mapStateToProps.inforArr && mapStateToProps.inforArr.name}
            </h1>
            <div className={cx("info-row")}>
              <img
                src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png"
                alt="store-badge-img"
                className={cx("image-badge")}
              />
            </div>
            <div className={cx("badge-wrapper")}>
              <div className={cx("header-badge-wrapper")}>
                <div className={cx("wrapper-follow")}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.37301 2.73241L9.92801 5.88241L13.405 6.38841C13.4818 6.39949 13.554 6.43184 13.6133 6.48182C13.6727 6.5318 13.7169 6.5974 13.7409 6.6712C13.7648 6.74499 13.7677 6.82403 13.7491 6.89935C13.7305 6.97468 13.6911 7.04329 13.6355 7.09741L11.119 9.54741L11.713 13.0104C11.7261 13.0869 11.7176 13.1655 11.6883 13.2374C11.6591 13.3093 11.6103 13.3716 11.5475 13.4172C11.4847 13.4628 11.4104 13.4899 11.333 13.4956C11.2556 13.5012 11.1782 13.485 11.1095 13.4489L8.00001 11.8164L4.89001 13.4504C4.82125 13.4863 4.74383 13.5024 4.66645 13.4966C4.58908 13.4909 4.51484 13.4637 4.45211 13.4181C4.38937 13.3725 4.34062 13.3102 4.31136 13.2383C4.28211 13.1665 4.2735 13.0879 4.28651 13.0114L4.88051 9.55041L2.36401 7.10041C2.30841 7.04629 2.26907 6.97768 2.25045 6.90235C2.23183 6.82702 2.23468 6.74799 2.25867 6.6742C2.28266 6.6004 2.32684 6.5348 2.38619 6.48482C2.44555 6.43484 2.51771 6.40249 2.59451 6.39141L6.07151 5.88291L7.62651 2.73291C7.66091 2.66332 7.71407 2.60474 7.77999 2.56375C7.84592 2.52277 7.92198 2.50103 7.99961 2.50098C8.07723 2.50092 8.15333 2.52257 8.2193 2.56346C8.28528 2.60435 8.33852 2.66287 8.37301 2.73241Z"
                      fill="#FFC400"
                    ></path>
                  </svg>
                </div>
                <div className={cx("header-sub-info")}>
                  {mapStateToProps.inforArr && mapStateToProps.inforArr.rating}{" "}
                  / 5
                </div>
              </div>
              <div className={cx("header-line-row")}></div>
              <div className={cx("header-badge-wrapper")}>
                <div className={cx("wrapper-follow")}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.5 8C5.1195 8 4 6.3805 4 5V4.5C4 3.1195 5.1195 2 6.5 2C7.8805 2 9 3.1195 9 4.5V5C9 6.3805 7.8805 8 6.5 8Z"
                      fill="white"
                      fillOpacity="0.7"
                    ></path>
                    <path
                      d="M8.765 12.4065C8.2715 11.919 8 11.27 8 10.5775C8 10.075 8.147 9.597 8.4145 9.1855C7.8345 9.076 7.1865 9 6.5 9C5.088 9 3.8355 9.319 3.013 9.5965C2.405 9.802 2 10.3745 2 11.016V13H9.3655L8.765 12.4065Z"
                      fill="white"
                      fillOpacity="0.7"
                    ></path>
                    <path
                      d="M13.5315 9.46C13.1925 9.125 12.726 8.961 12.2485 9.008C11.9755 9.0355 11.7185 9.131 11.4995 9.2825C11.2805 9.131 11.024 9.0355 10.7505 9.008C10.274 8.962 9.8065 9.125 9.4675 9.46C9.1665 9.758 9 10.155 9 10.5775C9 11 9.1665 11.397 9.468 11.695L11.5 13.703L13.532 11.6955C13.8335 11.397 14 11 14 10.5775C14 10.155 13.8335 9.758 13.5315 9.46Z"
                      fill="white"
                      fillOpacity="0.7"
                    ></path>
                  </svg>
                </div>
                <div className={cx("header-sub-info")}>
                  Người theo dõi: 494.1k+
                </div>
              </div>
            </div>
          </div>
          <div className={cx("header-store-action-section")}></div>
        </div>
        <div className={cx("header-menu-wrapper")}>
          <div className={cx("wrapper-tab-menu")}>
            <div className={cx("wrapper-option")}>
              <div
                className={cx("text-option")}
                onClick={() => handleSwitchPane(1)}
              >
                <div
                  className={
                    pane === 1 ? cx("underline") : cx("underline disable")
                  }
                ></div>
                Cửa Hàng
              </div>
            </div>
            <div className={cx("wrapper-option")}>
              <div
                className={cx("text-option")}
                onClick={() => handleSwitchPane(2)}
              >
                <div
                  className={
                    pane === 2 ? cx("underline") : cx("underline disable")
                  }
                ></div>
                Tất Cả Sản Phẩm
              </div>
            </div>
            <div className={cx("wrapper-option")}>
              <div
                className={cx("text-option")}
                onClick={() => handleSwitchPane(3)}
              >
                <div
                  className={
                    pane === 3 ? cx("underline") : cx("underline disable")
                  }
                ></div>
                Hồ Sơ Cửa Hàng
              </div>
            </div>
          </div>
          <div className={cx("search-input-wrapper")}>
            <div className={cx("search-icon-wrapper")}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.2611 13.1449C11.2988 13.9147 10.0781 14.375 8.75 14.375C5.6434 14.375 3.125 11.8566 3.125 8.75C3.125 5.6434 5.6434 3.125 8.75 3.125C11.8566 3.125 14.375 5.6434 14.375 8.75C14.375 10.0781 13.9147 11.2988 13.1449 12.2611L16.6919 15.8081C16.936 16.0521 16.936 16.4479 16.6919 16.6919C16.4479 16.936 16.0521 16.936 15.8081 16.6919L12.2611 13.1449ZM4.375 8.75C4.375 6.33375 6.33375 4.375 8.75 4.375C11.1662 4.375 13.125 6.33375 13.125 8.75C13.125 9.94774 12.6437 11.0331 11.8639 11.8231C11.8569 11.8296 11.8499 11.8362 11.8431 11.8431C11.8362 11.8499 11.8296 11.8569 11.8231 11.8639C11.0331 12.6437 9.94774 13.125 8.75 13.125C6.33375 13.125 4.375 11.1662 4.375 8.75Z"
                  fill="#38383D"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Tìm sản phẩm tại cửa hàng"
              className={cx("search-input")}
              value=""
            />
          </div>
        </div>
        <div className={cx("overlay-background")}></div>
      </div>
      <div className={pane === 1 ? cx("store-pane") : cx("store-pane disable")}>
        <div className={cx("product-list-vertical")}>
          <div className={cx("product-row-wrapper")}>
            <div className={cx("widget-title")}>
              <h2>Bán chạy nhất</h2>
              <a
                href="#"
                target="_blank"
                className={cx("widget-title-viewall")}
              >
                Xem tất cả
              </a>
            </div>
            <div type="flex" className={cx("product-row-container")}>
              <a
                href="/san-pham-so/the-cao-game?spid=192048498"
                className={cx("best-selling-product-wrapper")}
              >
                <div className={cx("product-item")}>
                  <div className={cx("best-selling-product-thumbnail")}>
                    <div className={cx("product-thumbnail")}>
                      <picture className={cx("image-container")}>
                        <source
                          type="image/webp"
                          srcSet="
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 1x,
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 2x
                    "
                        />
                        <img
                          src="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png"
                          className={cx("styled-image")}
                          alt="Mã thẻ game Garena 100K"
                          srcSet="
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 1x,
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 2x
                    "
                        />
                      </picture>
                      <div className={cx("product-badge-ship")}>
                        <img
                          src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png"
                          alt="badge icon"
                        />
                      </div>
                    </div>
                    <div className={cx("best-selling-ranking-badge")}>
                      <img
                        src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/ranking-top1.svg"
                        alt="Ranking badge icon"
                      />
                    </div>
                  </div>
                  <div className={cx("container-content")}>
                    <div className={cx("product-name")}>
                      <h3>Mã thẻ game Garena 100K</h3>
                    </div>
                    <div className={cx("product-container-rating")}>
                      <div className={cx("text-rating")}>4.8</div>
                      <img
                        src="https://salt.tikicdn.com/ts/tmp/76/32/ae/3b087e1ae6fa94a7cade963cc2e1311c.png"
                        alt=""
                        className={cx("wrapper-follow")}
                      />
                      <div className={cx("line-wrap")}></div>
                      <span className={cx("percent")}>Đã bán 5k+</span>
                    </div>
                    <div className={cx("price-discount")}>
                      <div className={cx("price-discount-value")}>
                        <span>97.000</span>
                      </div>
                      <div className={cx("discount-currency")}>₫</div>
                      <div className={cx("price-discount-percent")}>-3%</div>
                    </div>
                    <div className={cx("product-benefit-wrapper")}></div>
                    <div className={cx("product-badge-wrapper")}>
                      <div className={cx("prodcut-line-badge-row")}></div>
                      <div className={cx("product-badge-wrapper-text")}>
                        <div className={cx("ship-text")}>
                          Thanh toán qua thẻ &amp; ví
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="/ly-thuyet-tro-choi-p271379451.html?spid=271379452"
                className={cx("best-selling-product-wrapper")}
              >
                <div className={cx("product-item")}>
                  <div className={cx("best-selling-product-thumbnail")}>
                    <div className={cx("product-thumbnail")}>
                      <picture className={cx("image-container")}>
                        <source
                          type="image/webp"
                          srcSet="
                      https://salt.tikicdn.com/cache/w300/ts/product/8a/b6/ba/1d95b88597f28e42d8ca91e3b3ff600f.jpg.webp 1x,
                      https://salt.tikicdn.com/cache/w300/ts/product/8a/b6/ba/1d95b88597f28e42d8ca91e3b3ff600f.jpg.webp 2x
                    "
                        />
                        <img
                          src="https://salt.tikicdn.com/cache/w300/ts/product/8a/b6/ba/1d95b88597f28e42d8ca91e3b3ff600f.jpg"
                          className={cx("styled-image")}
                          alt="Lý Thuyết Trò Chơi"
                          srcSet="
                      https://salt.tikicdn.com/cache/w300/ts/product/8a/b6/ba/1d95b88597f28e42d8ca91e3b3ff600f.jpg 1x,
                      https://salt.tikicdn.com/cache/w300/ts/product/8a/b6/ba/1d95b88597f28e42d8ca91e3b3ff600f.jpg 2x
                    "
                        />
                      </picture>
                      <div className={cx("product-badge-ship")}>
                        <img
                          src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png"
                          alt="badge icon"
                        />
                      </div>
                    </div>
                    <div className={cx("best-selling-ranking-badge")}>
                      <img
                        src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/ranking-top2.svg"
                        alt="Ranking badge icon"
                      />
                    </div>
                  </div>
                  <div className={cx("container-content")}>
                    <div className={cx("product-name")}>
                      <h3>Lý Thuyết Trò Chơi</h3>
                    </div>
                    <div className={cx("product-container-rating")}>
                      <div className={cx("text-rating")}>4.7</div>
                      <img
                        src="https://salt.tikicdn.com/ts/tmp/76/32/ae/3b087e1ae6fa94a7cade963cc2e1311c.png"
                        alt=""
                        className={cx("wrapper-follow")}
                      />
                      <div className={cx("line-wrap")}></div>
                      <span className={cx("percent")}>Đã bán 1.9k</span>
                    </div>
                    <div className={cx("price-discount")}>
                      <div className={cx("price-discount-value")}>
                        <span>124.000</span>
                      </div>
                      <div className={cx("discount-currency")}>₫</div>
                      <div className={cx("price-discount-percent")}>-31%</div>
                    </div>
                    <div className={cx("product-benefit-wrapper")}></div>
                    <div className={cx("product-badge-wrapper")}>
                      <div className={cx("prodcut-line-badge-row")}></div>
                      <div className={cx("product-badge-wrapper-text")}>
                        <div className={cx("ship-text")}>Giao thứ 4, 29/11</div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="/san-pham-so/the-cao-game?spid=192048542"
                className={cx("best-selling-product-wrapper")}
              >
                <div className={cx("product-item")}>
                  <div className={cx("best-selling-product-thumbnail")}>
                    <div className={cx("product-thumbnail")}>
                      <picture className={cx("image-container")}>
                        <source
                          type="image/webp"
                          srcSet="
                      https://salt.tikicdn.com/cache/w300/ts/product/81/78/66/02ec1b5b5b446e0af6197bec737c8456.png.webp 1x,
                      https://salt.tikicdn.com/cache/w300/ts/product/81/78/66/02ec1b5b5b446e0af6197bec737c8456.png.webp 2x
                    "
                        />
                        <img
                          src="https://salt.tikicdn.com/cache/w300/ts/product/81/78/66/02ec1b5b5b446e0af6197bec737c8456.png"
                          className={cx("styled-image")}
                          alt="Mã thẻ game Garena 200K"
                          srcSet="
                      https://salt.tikicdn.com/cache/w300/ts/product/81/78/66/02ec1b5b5b446e0af6197bec737c8456.png 1x,
                      https://salt.tikicdn.com/cache/w300/ts/product/81/78/66/02ec1b5b5b446e0af6197bec737c8456.png 2x
                    "
                        />
                      </picture>
                      <div className={cx("product-badge-ship")}>
                        <img
                          src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png"
                          alt="badge icon"
                        />
                      </div>
                    </div>
                    <div className={cx("best-selling-ranking-badge")}>
                      <img
                        src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/ranking-top3.svg"
                        alt="Ranking badge icon"
                      />
                    </div>
                  </div>
                  <div className={cx("container-content")}>
                    <div className={cx("product-name")}>
                      <h3>Mã thẻ game Garena 200K</h3>
                    </div>
                    <div className={cx("product-container-rating")}>
                      <div className={cx("text-rating")}>5</div>
                      <img
                        src="https://salt.tikicdn.com/ts/tmp/76/32/ae/3b087e1ae6fa94a7cade963cc2e1311c.png"
                        alt=""
                        className={cx("wrapper-follow")}
                      />
                      <div className={cx("line-wrap")}></div>
                      <span className={cx("percent")}>Đã bán 5k+</span>
                    </div>
                    <div className={cx("price-discount")}>
                      <div className={cx("price-discount-value")}>
                        <span>194.000</span>
                      </div>
                      <div className={cx("discount-currency")}>₫</div>
                      <div className={cx("price-discount-percent")}>-3%</div>
                    </div>
                    <div className={cx("product-benefit-wrapper")}></div>
                    <div className={cx("product-badge-wrapper")}>
                      <div className={cx("prodcut-line-badge-row")}></div>
                      <div className={cx("product-badge-wrapper-text")}>
                        <div className={cx("ship-text")}>
                          Thanh toán qua thẻ &amp; ví
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className={cx("all-product-container")}>
          <div className={cx("product-row-wrapper")}>
            <div className={cx("widget-title")}>
              <h2>
                <div className={cx("title-wrapper")}>
                  <span>Tất cả sản phẩm:</span>
                  <span className={cx("count-text")}> 10000+ kết quả</span>
                </div>
              </h2>
            </div>
            <div className={cx("product-filter-and-sort-bar-wrapper")}>
              <div className={cx("product-filter-and-sort-bar-sort-section")}>
                <a value="" className={cx("sort-item")}>
                  Phổ biến
                </a>
                <a value="order_desc" className={cx("sort-item")}>
                  Bán chạy
                </a>
                <a value="newest" className={cx("sort-item")}>
                  Hàng mới
                </a>
                <a value="price_asc" className={cx("sort-item")}>
                  Giá thấp đến cao
                </a>
                <a value="price_desc" className={cx("sort-item")}>
                  Giá cao đến thấp
                </a>
              </div>
              <div className={cx("product-filter-and-sort-bar-divider")}></div>
            </div>
            <div type="flex" className={cx("product-row-container")}>
              {mapStateToProps.prosInShop &&
                mapStateToProps.prosInShop.length > 0 &&
                mapStateToProps.prosInShop.map((item, index) => {
                  return (
                    <a
                      key={index}
                      href="/san-pham-so/the-cao-game?spid=192048498"
                      className={cx("styled-wrapper")}
                    >
                      <div className={cx("product-container")}>
                        <div className={cx("product-thumbnail")}>
                          <picture className={cx("image-container")}>
                            <source
                              type="image/webp"
                              srcSet={item.productImage}
                            />
                            <img
                              src={item.productImage}
                              className={cx("styled-image")}
                              alt="Mã thẻ game Garena 100K"
                              srcSet={item.productImage}
                            />
                          </picture>
                          <div className={cx("product-badge-ship")}>
                            <img
                              src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png"
                              alt="badge icon"
                            />
                          </div>
                        </div>
                        <div className={cx("product-info")}>
                          <div className={cx("product-name")}>
                            <h3>{item.productName}</h3>
                          </div>
                          <div className={cx("product-container-rating")}>
                            <div
                              className={cx("product-container-text-rating")}
                            >
                              {item.rating}
                            </div>
                            <img
                              src="https://salt.tikicdn.com/ts/tmp/76/32/ae/3b087e1ae6fa94a7cade963cc2e1311c.png"
                              alt=""
                              className={cx("wrapper-follow")}
                            />
                            <div className={cx("line-wrap")}></div>
                            <span className={cx("percent")}>
                              Đã bán {item.sold}
                            </span>
                          </div>
                          <div className={cx("product-price-discount")}>
                            <div className={cx("price-discount-value")}>
                              <span>
                                {currencyFormat(item.productSalePrice)}
                              </span>
                            </div>
                            <div className={cx("discount-currency")}>₫</div>
                          </div>

                          <div className={cx("product-benefit-wrapper")}></div>
                          <div className={cx("badge-wrapper")}>
                            <div className={cx("line-badge-row")}></div>
                            <div className={cx("badge-wrapper-text")}>
                              <div className={cx("ship-text")}>
                                Thanh toán qua thẻ &amp; ví
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  );
                })}
            </div>
          </div>
          <div>
            <div className={cx("footer-view")}>
              <button className={cx("view-more-button")}>Xem Thêm</button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          pane === 2 ? cx("all-product-pane") : cx("all-product-pane disable")
        }
      >
        <div className={cx("producttab-row")}>
          <div className={cx("sidebar-root")}>
            <div className={cx("block")}>
              <h4 className={cx("h4-title")}>Danh mục sản phẩm</h4>
              <div className={cx("list-collapsed")}>
                <div className={cx("item-row")}>
                  <a className={cx("item")}>Làm Đẹp - Sức Khỏe</a>
                </div>
                <div className={cx("item-row")}>
                  <a className={cx("item")}>Điện Gia Dụng</a>
                </div>
                <div className={cx("item-row")}>
                  <a className={cx("item")}>Điện Thoại - Máy Tính Bảng</a>
                </div>
                <div className={cx("item-row")}>
                  <a className={cx("item")}>Máy Ảnh - Máy Quay Phim</a>
                </div>
                <div className={cx("item-row")}>
                  <a className={cx("item")}>Thiết Bị Số - Phụ Kiện Số</a>
                </div>
                <div className={cx("item-row")}>
                  <a className={cx("item")}>Laptop - Máy Vi Tính - Linh kiện</a>
                </div>
                <div className={cx("item-row")}>
                  <a className={cx("item")}>Cross Border - Hàng Quốc Tế</a>
                </div>
                <div className={cx("item-row")}>
                  <a className={cx("item")}>Đồ Chơi - Mẹ &amp; Bé</a>
                </div>
                <div className={cx("item-row")}>
                  <a className={cx("item")}>Điện Tử - Điện Lạnh</a>
                </div>
                <div className={cx("item-row")}>
                  <a className={cx("item")}>Nhà Sách Tiki</a>
                </div>
                <div className={cx("item-row")}>
                  <a className={cx("item")}>Giày - Dép nam</a>
                </div>
                <div className={cx("item-row")}>
                  <a className={cx("item")}>Bách Hóa Online</a>
                </div>
                <div className={cx("item-row")}>
                  <a className={cx("item")}>Thể Thao - Dã Ngoại</a>
                </div>
                <div className={cx("item-row")}>
                  <a className={cx("item")}>Nhà Cửa - Đời Sống</a>
                </div>
                <div className={cx("item-row")}>
                  <a className={cx("item")}>Voucher - Dịch vụ</a>
                </div>
              </div>
              <a href="javascript:" className={cx("toggler")}>
                Xem Thêm
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className={cx("all-product-container")}>
            <div className={cx("product-row-wrapper")}>
              <div className={cx("widget-title")}>
                <h2>
                  <div className={cx("title-wrapper")}>
                    <span>Tất cả sản phẩm:</span>
                    <span className={cx("count-text")}> 10000+ kết quả</span>
                  </div>
                </h2>
              </div>
              <div className={cx("product-filter-and-sort-bar-wrapper")}>
                <div className={cx("product-filter-and-sort-bar-sort-section")}>
                  <a value="" className={cx("sort-item")}>
                    Phổ biến
                  </a>
                  <a value="order_desc" className={cx("sort-item")}>
                    Bán chạy
                  </a>
                  <a value="newest" className={cx("sort-item")}>
                    Hàng mới
                  </a>
                  <a value="price_asc" className={cx("sort-item")}>
                    Giá thấp đến cao
                  </a>
                  <a value="price_desc" className={cx("sort-item")}>
                    Giá cao đến thấp
                  </a>
                </div>
                <div
                  className={cx("product-filter-and-sort-bar-divider")}
                ></div>
              </div>
              <div type="flex" className={cx("product-row-container")}>
                {mapStateToProps.prosInShop &&
                  mapStateToProps.prosInShop.length > 0 &&
                  mapStateToProps.prosInShop.map((item, index) => {
                    return (
                      <a
                        key={index}
                        href="/san-pham-so/the-cao-game?spid=192048498"
                        className={cx("styled-wrapper")}
                      >
                        <div className={cx("product-container")}>
                          <div className={cx("product-thumbnail")}>
                            <picture className={cx("image-container")}>
                              <source
                                type="image/webp"
                                srcSet={item.productImage}
                              />
                              <img
                                src={item.productImage}
                                className={cx("styled-image")}
                                alt="Mã thẻ game Garena 100K"
                                srcSet={item.productImage}
                              />
                            </picture>
                            <div className={cx("product-badge-ship")}>
                              <img
                                src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png"
                                alt="badge icon"
                              />
                            </div>
                          </div>
                          <div className={cx("product-info")}>
                            <div className={cx("product-name")}>
                              <h3>{item.productName}</h3>
                            </div>
                            <div className={cx("product-container-rating")}>
                              <div
                                className={cx("product-container-text-rating")}
                              >
                                {item.rating}
                              </div>
                              <img
                                src="https://salt.tikicdn.com/ts/tmp/76/32/ae/3b087e1ae6fa94a7cade963cc2e1311c.png"
                                alt=""
                                className={cx("wrapper-follow")}
                              />
                              <div className={cx("line-wrap")}></div>
                              <span className={cx("percent")}>
                                Đã bán {item.sold}
                              </span>
                            </div>
                            <div className={cx("product-price-discount")}>
                              <div className={cx("price-discount-value")}>
                                <span>
                                  {currencyFormat(item.productSalePrice)}
                                </span>
                              </div>
                              <div className={cx("discount-currency")}>₫</div>
                            </div>

                            <div
                              className={cx("product-benefit-wrapper")}
                            ></div>
                            <div className={cx("badge-wrapper")}>
                              <div className={cx("line-badge-row")}></div>
                              <div className={cx("badge-wrapper-text")}>
                                <div className={cx("ship-text")}>
                                  Thanh toán qua thẻ &amp; ví
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    );
                  })}
              </div>
            </div>
            <div>
              <div className={cx("footer-view")}>
                <button className={cx("view-more-button")}>Xem Thêm</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          pane === 3
            ? cx("store-profile-pane")
            : cx("store-profile-pane disable")
        }
      >
        <div className={cx("storeinfo-row")}>
          <div className={cx("storeinfo-col")}>
            <span className={cx("info-label")}>
              <img
                alt="bio"
                src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/time-new.svg"
              />
              <span className={cx("info-label")}>Thành viên từ năm </span>
            </span>
            <span className={cx("info-value")}>2017</span>
          </div>
          <div className={cx("storeinfo-col")}>
            <span className={cx("info-label")}>
              <img
                alt="product"
                src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/product-new.svg"
              />
              <span className={cx("info-label")}>Sản phẩm</span>
            </span>
            <span className={cx("info-value")}>2000+</span>
          </div>
          <div className={cx("storeinfo-col")}>
            <span className={cx("info-label")}>
              <img
                alt="time"
                src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/bio-new.svg"
              />
              <span className={cx("info-label")}>Mô tả cửa hàng</span>
            </span>
            <span className={cx("info-value")}>
              Mua online sản phẩm của cửa hàng Tiki Trading trên Tiki.vn. ✓ chất
              lượng cao, uy tín, giá tốt ✓ Chính hãng ✓ Giao hàng toàn quốc
            </span>
          </div>
          <div className={cx("storeinfo-col")}>
            <span className={cx("info-label")}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 3.43164C10.2379 3.43164 10.4552 3.56669 10.5605 3.78L12.3463 7.39788L16.3399 7.97814C16.5753 8.01234 16.7709 8.17724 16.8444 8.4035C16.9179 8.62975 16.8566 8.87812 16.6863 9.04419L13.7966 11.8611L14.4785 15.8385C14.5187 16.073 14.4223 16.3099 14.2299 16.4498C14.0375 16.5896 13.7823 16.6081 13.5718 16.4974L10 14.6202L6.42829 16.4974C6.21771 16.6081 5.96258 16.5896 5.77013 16.4498C5.57769 16.3099 5.48131 16.073 5.52151 15.8385L6.20348 11.8611L3.31375 9.04419C3.1434 8.87812 3.08209 8.62975 3.15561 8.4035C3.22913 8.17724 3.42472 8.01234 3.66015 7.97814L7.65375 7.39788L9.43958 3.78C9.54487 3.56669 9.76213 3.43164 10 3.43164ZM10 5.46867L8.62921 8.24578C8.53817 8.43023 8.36219 8.55807 8.15863 8.58765L5.0931 9.03306L7.31129 11.1953C7.45857 11.3389 7.52579 11.5458 7.49103 11.7485L6.96749 14.8019L9.70925 13.3609C9.89129 13.2652 10.1087 13.2652 10.2908 13.3609L13.0325 14.8019L12.509 11.7485C12.4742 11.5458 12.5415 11.3389 12.6888 11.1953L14.9069 9.03306L11.8414 8.58765C11.6378 8.55807 11.4619 8.43023 11.3708 8.24578L10 5.46867Z"
                  fill="#808089"
                ></path>
              </svg>
              <span className={cx("info-label")}>Đánh giá</span>
            </span>
            <span className={cx("info-value")}>4.7 / 5</span>
            <div className={cx("wrapper-follow")}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.37301 2.73241L9.92801 5.88241L13.405 6.38841C13.4818 6.39949 13.554 6.43184 13.6133 6.48182C13.6727 6.5318 13.7169 6.5974 13.7409 6.6712C13.7648 6.74499 13.7677 6.82403 13.7491 6.89935C13.7305 6.97468 13.6911 7.04329 13.6355 7.09741L11.119 9.54741L11.713 13.0104C11.7261 13.0869 11.7176 13.1655 11.6883 13.2374C11.6591 13.3093 11.6103 13.3716 11.5475 13.4172C11.4847 13.4628 11.4104 13.4899 11.333 13.4956C11.2556 13.5012 11.1782 13.485 11.1095 13.4489L8.00001 11.8164L4.89001 13.4504C4.82125 13.4863 4.74383 13.5024 4.66645 13.4966C4.58908 13.4909 4.51484 13.4637 4.45211 13.4181C4.38937 13.3725 4.34062 13.3102 4.31136 13.2383C4.28211 13.1665 4.2735 13.0879 4.28651 13.0114L4.88051 9.55041L2.36401 7.10041C2.30841 7.04629 2.26907 6.97768 2.25045 6.90235C2.23183 6.82702 2.23468 6.74799 2.25867 6.6742C2.28266 6.6004 2.32684 6.5348 2.38619 6.48482C2.44555 6.43484 2.51771 6.40249 2.59451 6.39141L6.07151 5.88291L7.62651 2.73291C7.66091 2.66332 7.71407 2.60474 7.77999 2.56375C7.84592 2.52277 7.92198 2.50103 7.99961 2.50098C8.07723 2.50092 8.15333 2.52257 8.2193 2.56346C8.28528 2.60435 8.33852 2.66287 8.37301 2.73241Z"
                  fill="#FFC400"
                ></path>
              </svg>
            </div>
            <span className={cx("info-label")}>(5.4tr+)</span>
          </div>
          <div className={cx("storeinfo-col")}>
            <span className={cx("info-label")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <g fill="none" fillRule="evenodd">
                  <g>
                    <g>
                      <g>
                        <g>
                          <g>
                            <g>
                              <g fill="#787878">
                                <path
                                  d="M9.655 17.241H2.07c-.38 0-.69-.308-.69-.69v-.689c.003-2.509 1.515-4.77 3.833-5.73 2.318-.959 4.985-.429 6.76 1.344.274.234.682.218.937-.036.254-.255.27-.663.036-.937-.74-.743-1.625-1.326-2.6-1.71 1.73-1.205 2.479-3.395 1.847-5.407C11.561 1.373 9.696.004 7.586.004S3.612 1.374 2.98 3.386c-.631 2.012.117 4.202 1.848 5.407C1.916 9.93-.001 12.736 0 15.863v.689c0 1.142.926 2.069 2.069 2.069h7.586c.381 0 .69-.31.69-.69 0-.38-.309-.69-.69-.69zM4.138 4.828c0-1.905 1.544-3.449 3.448-3.449 1.905 0 3.448 1.544 3.448 3.449 0 1.904-1.543 3.448-3.448 3.448-.914 0-1.791-.363-2.438-1.01-.647-.647-1.01-1.524-1.01-2.438z"
                                  transform="translate(-836 -447) translate(180 271) translate(640) translate(0 12) translate(0 152) translate(16 12) translate(1.667)"
                                ></path>
                                <path
                                  d="M15.966 13.241c-.386-.48-.952-.779-1.566-.827-.455-.03-.909.083-1.297.324-.387-.243-.84-.356-1.296-.324-.613.047-1.179.343-1.566.82-.81 1.044-.767 2.517.104 3.51l1.938 2.187c.208.242.512.381.83.381.32 0 .624-.139.832-.381l1.917-2.186c.867-.993.91-2.461.104-3.504zm-1.125 2.621l-1.738 1.924-1.737-1.924c-.417-.485-.446-1.193-.07-1.71.147-.188.364-.308.6-.331h.056c.206.004.402.085.551.227.34.306.855.306 1.194 0 .162-.155.382-.235.606-.22.237.023.454.143.6.33.375.515.35 1.219-.062 1.704z"
                                  transform="translate(-836 -447) translate(180 271) translate(640) translate(0 12) translate(0 152) translate(16 12) translate(1.667)"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <span className={cx("info-label")}>Người theo dõi</span>
            </span>
            <span className={cx("info-value")}>494.5k+</span>
          </div>
          <div className={cx("storeinfo-col")}>
            <span className={cx("info-label")}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_637_52320)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.5 9.375C2.5 5.79304 5.96588 3.125 10 3.125C14.0341 3.125 17.5 5.79304 17.5 9.375C17.5 10.8451 16.8749 12.164 15.9046 13.2202L16.2459 16.1784C16.2712 16.3977 16.1789 16.6141 16.0031 16.7477C15.8273 16.8812 15.594 16.9121 15.3895 16.8289L11.8998 15.4094C11.2727 15.572 10.651 15.625 10 15.625C5.96588 15.625 2.5 12.957 2.5 9.375ZM10 4.375C6.40912 4.375 3.75 6.70696 3.75 9.375C3.75 12.043 6.40912 14.375 10 14.375C10.6489 14.375 11.2092 14.316 11.7579 14.1514C11.8945 14.1104 12.0409 14.1173 12.173 14.1711L14.8832 15.2735L14.6291 13.0716C14.6072 12.8821 14.6731 12.693 14.8081 12.5581C15.7174 11.6487 16.25 10.5501 16.25 9.375C16.25 6.70696 13.5909 4.375 10 4.375Z"
                    fill="#808089"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_637_52320">
                    <rect
                      width="15"
                      height="15"
                      fill="white"
                      transform="translate(2.5 2.5)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <span className={cx("info-label")}>Phản hồi Chat</span>
            </span>
            <span className={cx("info-value")}>Chưa có</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default sellerPage;
