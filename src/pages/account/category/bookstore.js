import React from "react";
import styles from "./bookstore.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
export default function CategoryLayout() {
  return (
    <>
      <div className={cx("container-category")}>
        <div className={cx("category-view-style")}>
          <div className={cx("sidebar")}>
            <div className={cx("container-sidebar")}>
              <div className={cx("block")}>
                <h4 className={cx("h4-title")}>Danh Mục Sản Phẩm</h4>
                <div className={cx("list-collapsed")}>
                  <a
                    data-view-id="search_filter_item"
                    data-view-index="0"
                    data-view-content='{"click_data":{"trace_id":"dLjt7REM4rntyN8I"}}'
                    className={cx("item-category")}
                    href="#!"
                  >
                    English Book
                  </a>
                  <a
                    data-view-id="search_filter_item"
                    data-view-index="1"
                    data-view-content='{"click_data":{"trace_id":"dLjt7REM4rntyN8I"}}'
                    className={cx("item-category")}
                    href="#!"
                  >
                    Sách Tiếng Việt
                  </a>
                  <a
                    data-view-id="search_filter_item"
                    data-view-index="2"
                    data-view-content='{"click_data":{"trace_id":"dLjt7REM4rntyN8I"}}'
                    className={cx("item-category")}
                    href="#!"
                  >
                    Văn Phòng Phẩm
                  </a>
                  <a
                    data-view-id="search_filter_item"
                    data-view-index="3"
                    data-view-content='{"click_data":{"trace_id":"dLjt7REM4rntyN8I"}}'
                    className={cx("item-category")}
                    href="#!"
                  >
                    Quà Lưu Niệm
                  </a>
                </div>
              </div>
            </div>
            <div className={cx("block")}>
              <h4 className={cx("h4-title")}>Đánh giá</h4>
              <div className={cx("rating-list")}>
                <a
                  data-view-id="search_filter_item"
                  data-view-index="0"
                  data-view-content='{"click_data":{"trace_id":"7ztHxb54ME9VKZ3g"}}'
                  className={cx("item")}
                  rel="nofollow"
                  href="#!"
                >
                  <p className={cx("stars-wrapper")}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="14"
                      height="14"
                      viewBox="0 0 12 12"
                      className={cx("star-icon")}
                    >
                      <path
                        fill="#fdd835"
                        transform="matrix(-1 0 0 1 11 1)"
                        d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"
                      ></path>
                      <path
                        fill="#fdd835"
                        transform="translate(1 1)"
                        d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="14"
                      height="14"
                      viewBox="0 0 12 12"
                      className={cx("star-icon")}
                    >
                      <path
                        fill="#fdd835"
                        transform="matrix(-1 0 0 1 11 1)"
                        d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"
                      ></path>
                      <path
                        fill="#fdd835"
                        transform="translate(1 1)"
                        d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="14"
                      height="14"
                      viewBox="0 0 12 12"
                      className={cx("star-icon")}
                    >
                      <path
                        fill="#fdd835"
                        transform="matrix(-1 0 0 1 11 1)"
                        d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"
                      ></path>
                      <path
                        fill="#fdd835"
                        transform="translate(1 1)"
                        d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="14"
                      height="14"
                      viewBox="0 0 12 12"
                      className={cx("star-icon")}
                    >
                      <path
                        fill="#fdd835"
                        transform="matrix(-1 0 0 1 11 1)"
                        d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"
                      ></path>
                      <path
                        fill="#fdd835"
                        transform="translate(1 1)"
                        d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="14"
                      height="14"
                      viewBox="0 0 12 12"
                      className={cx("star-icon")}
                    >
                      <path
                        fill="#fdd835"
                        transform="matrix(-1 0 0 1 11 1)"
                        d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"
                      ></path>
                      <path
                        fill="#fdd835"
                        transform="translate(1 1)"
                        d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"
                      ></path>
                    </svg>
                  </p>{" "}
                  <span className={cx("text")}>từ 5 sao</span>
                </a>
                <a
                  data-view-id="search_filter_item"
                  data-view-index="1"
                  data-view-content='{"click_data":{"trace_id":"7ztHxb54ME9VKZ3g"}}'
                  className={cx("item")}
                  rel="nofollow"
                  href="#!"
                >
                  <p className={cx("stars-wrapper")}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="14"
                      height="14"
                      viewBox="0 0 12 12"
                      className={cx("star-icon")}
                    >
                      <path
                        fill="#fdd835"
                        transform="matrix(-1 0 0 1 11 1)"
                        d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"
                      ></path>
                      <path
                        fill="#fdd835"
                        transform="translate(1 1)"
                        d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="14"
                      height="14"
                      viewBox="0 0 12 12"
                      className={cx("star-icon")}
                    >
                      <path
                        fill="#fdd835"
                        transform="matrix(-1 0 0 1 11 1)"
                        d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"
                      ></path>
                      <path
                        fill="#fdd835"
                        transform="translate(1 1)"
                        d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="14"
                      height="14"
                      viewBox="0 0 12 12"
                      className={cx("star-icon")}
                    >
                      <path
                        fill="#fdd835"
                        transform="matrix(-1 0 0 1 11 1)"
                        d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"
                      ></path>
                      <path
                        fill="#fdd835"
                        transform="translate(1 1)"
                        d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="14"
                      height="14"
                      viewBox="0 0 12 12"
                      className={cx("star-icon")}
                    >
                      <path
                        fill="#fdd835"
                        transform="matrix(-1 0 0 1 11 1)"
                        d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"
                      ></path>
                      <path
                        fill="#fdd835"
                        transform="translate(1 1)"
                        d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="14"
                      height="14"
                      viewBox="0 0 12 12"
                      className={cx("star-icon")}
                    >
                      <path
                        fill="#b8b8b8"
                        transform="matrix(-1 0 0 1 11 1)"
                        d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"
                      ></path>
                      <path
                        fill="#b8b8b8"
                        transform="translate(1 1)"
                        d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"
                      ></path>
                    </svg>
                  </p>{" "}
                  <span className={cx("text")}>từ 4 sao</span>
                </a>
                <a
                  data-view-id="search_filter_item"
                  data-view-index="2"
                  data-view-content='{"click_data":{"trace_id":"7ztHxb54ME9VKZ3g"}}'
                  className={cx("item")}
                  rel="nofollow"
                  href="#!"
                >
                  <p className={cx("stars-wrapper")}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="14"
                      height="14"
                      viewBox="0 0 12 12"
                      className={cx("star-icon")}
                    >
                      <path
                        fill="#fdd835"
                        transform="matrix(-1 0 0 1 11 1)"
                        d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"
                      ></path>
                      <path
                        fill="#fdd835"
                        transform="translate(1 1)"
                        d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="14"
                      height="14"
                      viewBox="0 0 12 12"
                      className={cx("star-icon")}
                    >
                      <path
                        fill="#fdd835"
                        transform="matrix(-1 0 0 1 11 1)"
                        d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"
                      ></path>
                      <path
                        fill="#fdd835"
                        transform="translate(1 1)"
                        d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="14"
                      height="14"
                      viewBox="0 0 12 12"
                      className={cx("star-icon")}
                    >
                      <path
                        fill="#fdd835"
                        transform="matrix(-1 0 0 1 11 1)"
                        d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"
                      ></path>
                      <path
                        fill="#fdd835"
                        transform="translate(1 1)"
                        d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="14"
                      height="14"
                      viewBox="0 0 12 12"
                      className={cx("star-icon")}
                    >
                      <path
                        fill="#b8b8b8"
                        transform="matrix(-1 0 0 1 11 1)"
                        d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"
                      ></path>
                      <path
                        fill="#b8b8b8"
                        transform="translate(1 1)"
                        d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="14"
                      height="14"
                      viewBox="0 0 12 12"
                      className={cx("star-icon")}
                    >
                      <path
                        fill="#b8b8b8"
                        transform="matrix(-1 0 0 1 11 1)"
                        d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"
                      ></path>
                      <path
                        fill="#b8b8b8"
                        transform="translate(1 1)"
                        d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"
                      ></path>
                    </svg>
                  </p>{" "}
                  <span className={cx("text")}>từ 3 sao</span>
                </a>
              </div>
            </div>
            <div className={cx("block")}>
              <h4 className={cx("h4-title")}>Giá</h4>
              <div className={cx("fast-price-filter")}>
                <div className={cx("item")}>
                  <span className="">Dưới 40.000</span>
                </div>
                <div className={cx("item")}>
                  <span className="">40.000 -&gt; 120.000</span>
                </div>
                <div className={cx("item")}>
                  <span className="">120.000 -&gt; 280.000</span>
                </div>
                <div className={cx("item")}>
                  <span className="">Trên 280.000</span>
                </div>
              </div>
              <div className={cx("price-small-text")}>Chọn khoảng giá</div>
              <div className={cx("input-group")}>
                <input pattern="[0-9]*" placeholder="Giá từ" value="0" />
                <span>-</span>
                <input pattern="[0-9]*" placeholder="Giá đến" value="0" />
              </div>
              <button>Áp dụng</button>
            </div>
            <div className={cx("block")}>
              <h4 className={cx("h4-title")}>Thương Hiệu</h4>
              <div className={cx("list-collapsed")}>
                <label>
                  <label className={cx("checkbox-fake")}>
                    <input type="checkbox" />
                    <div>
                      <span>finish</span>
                    </div>
                  </label>
                </label>
                <label>
                  <label className={cx("checkbox-fake")}>
                    <input type="checkbox" />
                    <div>
                      <span>AIN Closet</span>
                    </div>
                  </label>
                </label>
                <label>
                  <label className={cx("checkbox-fake")}>
                    <input type="checkbox" />
                    <div>
                      <span>LEGO</span>
                    </div>
                  </label>
                </label>
                <label>
                  <label className={cx("checkbox-fake")}>
                    <input type="checkbox" />
                    <div>
                      <span>CATRIO</span>
                    </div>
                  </label>
                </label>
                <label>
                  <label className={cx("checkbox-fake")}>
                    <input type="checkbox" />
                    <div>
                      <span>Winwintoys</span>
                    </div>
                  </label>
                </label>
              </div>
              <a className={cx("toggler")}>
                Xem thêm
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  color="#0B74E5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                </svg>
              </a>
            </div>

            <div className={cx("block")}>
              <h4 className={cx("h4-title")}>Nhà cung cấp</h4>
              <div className={cx("list-collapsed")}>
                <label>
                  <label className={cx("checkbox-fake")}>
                    <input type="checkbox" />
                    <div>
                      <span>King Cotton</span>
                    </div>
                  </label>
                </label>
                <label>
                  <label className={cx("checkbox-fake")}>
                    <input type="checkbox" />
                    <div>
                      <span>GOKING</span>
                    </div>
                  </label>
                </label>
                <label>
                  <label className={cx("checkbox-fake")}>
                    <input type="checkbox" />
                    <div>
                      <span>Hương Trà Quần Áo Trẻ Em</span>
                    </div>
                  </label>
                </label>
                <label>
                  <label className={cx("checkbox-fake")}>
                    <input type="checkbox" />
                    <div>
                      <span>TLG GOLD</span>
                    </div>
                  </label>
                </label>
              </div>
              <a className={cx("toggler")}>
                Xem thêm
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  color="#0B74E5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className={cx("category-view-site-right")}>
            <div className={cx("inner")}>
              <div className={cx("search-summary")}>
                <div className={cx("h2-title")}>
                  <h2>Nhà Sách</h2>
                </div>
                <div className={cx("sorter-root")}>
                  <div className={cx("sorter-bottom")}>
                    <div className={cx("sorter-tab")}>
                      <div className={cx("sort-list")}>
                        <a
                          data-view-id="search_sort_item"
                          data-view-index="0"
                          data-view-content='{"click_data":{"trace_id":"Rbf2nEvz4VoweLhK"}}'
                          className=""
                          rel="nofollow"
                          // href="/do-choi-me-be/c2549?sort=default"
                        >
                          Phổ biến
                        </a>
                        <a
                          data-view-id="search_sort_item"
                          data-view-index="1"
                          data-view-content='{"click_data":{"trace_id":"Rbf2nEvz4VoweLhK"}}'
                          className=""
                          rel="nofollow"
                          // href="/do-choi-me-be/c2549?sort=top_seller"
                        >
                          Bán chạy
                        </a>
                        <a
                          data-view-id="search_sort_item"
                          data-view-index="2"
                          data-view-content='{"click_data":{"trace_id":"Rbf2nEvz4VoweLhK"}}'
                          className=""
                          rel="nofollow"
                          // href="/do-choi-me-be/c2549?sort=newest"
                        >
                          Hàng mới
                        </a>
                        <a
                          data-view-id="search_sort_item"
                          data-view-index="3"
                          data-view-content='{"click_data":{"trace_id":"Rbf2nEvz4VoweLhK"}}'
                          className=""
                          rel="nofollow"
                          // href="/do-choi-me-be/c2549?sort=price,asc"
                        >
                          Giá thấp đến cao
                        </a>
                        <a
                          data-view-id="search_sort_item"
                          data-view-index="4"
                          data-view-content='{"click_data":{"trace_id":"Rbf2nEvz4VoweLhK"}}'
                          className=""
                          rel="nofollow"
                          // href="/do-choi-me-be/c2549?sort=price,desc"
                        >
                          Giá cao đến thấp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx("product-list-wrapper")}>
                <a
                  href="/san-pham-so/the-cao-game?spid=192048498"
                  className={cx("styled-wrapper")}
                >
                  <div className={cx("product-container")}>
                    <div className={cx("product-thumbnail")}>
                      <picture className={cx("image-container")}>
                        <source
                          type="image/webp"
                          srcSet="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 2x"
                        />
                        <img
                          src="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png"
                          className={cx("styled-image")}
                          alt="Mã thẻ game Garena 100K"
                          srcSet="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 2x"
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
                        <h3>Mã thẻ game Garena 100K</h3>
                      </div>
                      <div className={cx("product-container-rating")}>
                        <div className={cx("product-container-text-rating")}>
                          4.8
                        </div>
                        <img
                          src="https://salt.tikicdn.com/ts/tmp/76/32/ae/3b087e1ae6fa94a7cade963cc2e1311c.png"
                          alt=""
                          className={cx("wrapper-follow")}
                        />
                        <div className={cx("line-wrap")}></div>
                        <span className={cx("percent")}>Đã bán 5k+</span>
                      </div>
                      <div className={cx("product-price-discount")}>
                        <div className={cx("price-discount-value")}>
                          <span>97.000</span>
                        </div>
                        <div className={cx("discount-currency")}>₫</div>
                        <div className={cx("price-discount-percent")}>-3%</div>
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
                <a
                  href="/san-pham-so/the-cao-game?spid=192048498"
                  className={cx("styled-wrapper")}
                >
                  <div className={cx("product-container")}>
                    <div className={cx("product-thumbnail")}>
                      <picture className={cx("image-container")}>
                        <source
                          type="image/webp"
                          srcSet="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 2x"
                        />
                        <img
                          src="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png"
                          className={cx("styled-image")}
                          alt="Mã thẻ game Garena 100K"
                          srcSet="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 2x"
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
                        <h3>Mã thẻ game Garena 100K</h3>
                      </div>
                      <div className={cx("product-container-rating")}>
                        <div className={cx("product-container-text-rating")}>
                          4.8
                        </div>
                        <img
                          src="https://salt.tikicdn.com/ts/tmp/76/32/ae/3b087e1ae6fa94a7cade963cc2e1311c.png"
                          alt=""
                          className={cx("wrapper-follow")}
                        />
                        <div className={cx("line-wrap")}></div>
                        <span className={cx("percent")}>Đã bán 5k+</span>
                      </div>
                      <div className={cx("product-price-discount")}>
                        <div className={cx("price-discount-value")}>
                          <span>97.000</span>
                        </div>
                        <div className={cx("discount-currency")}>₫</div>
                        <div className={cx("price-discount-percent")}>-3%</div>
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
                <a
                  href="/san-pham-so/the-cao-game?spid=192048498"
                  className={cx("styled-wrapper")}
                >
                  <div className={cx("product-container")}>
                    <div className={cx("product-thumbnail")}>
                      <picture className={cx("image-container")}>
                        <source
                          type="image/webp"
                          srcSet="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 2x"
                        />
                        <img
                          src="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png"
                          className={cx("styled-image")}
                          alt="Mã thẻ game Garena 100K"
                          srcSet="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 2x"
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
                        <h3>Mã thẻ game Garena 100K</h3>
                      </div>
                      <div className={cx("product-container-rating")}>
                        <div className={cx("product-container-text-rating")}>
                          4.8
                        </div>
                        <img
                          src="https://salt.tikicdn.com/ts/tmp/76/32/ae/3b087e1ae6fa94a7cade963cc2e1311c.png"
                          alt=""
                          className={cx("wrapper-follow")}
                        />
                        <div className={cx("line-wrap")}></div>
                        <span className={cx("percent")}>Đã bán 5k+</span>
                      </div>
                      <div className={cx("product-price-discount")}>
                        <div className={cx("price-discount-value")}>
                          <span>97.000</span>
                        </div>
                        <div className={cx("discount-currency")}>₫</div>
                        <div className={cx("price-discount-percent")}>-3%</div>
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
                <a
                  href="/san-pham-so/the-cao-game?spid=192048498"
                  className={cx("styled-wrapper")}
                >
                  <div className={cx("product-container")}>
                    <div className={cx("product-thumbnail")}>
                      <picture className={cx("image-container")}>
                        <source
                          type="image/webp"
                          srcSet="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 2x"
                        />
                        <img
                          src="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png"
                          className={cx("styled-image")}
                          alt="Mã thẻ game Garena 100K"
                          srcSet="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 2x"
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
                        <h3>Mã thẻ game Garena 100K</h3>
                      </div>
                      <div className={cx("product-container-rating")}>
                        <div className={cx("product-container-text-rating")}>
                          4.8
                        </div>
                        <img
                          src="https://salt.tikicdn.com/ts/tmp/76/32/ae/3b087e1ae6fa94a7cade963cc2e1311c.png"
                          alt=""
                          className={cx("wrapper-follow")}
                        />
                        <div className={cx("line-wrap")}></div>
                        <span className={cx("percent")}>Đã bán 5k+</span>
                      </div>
                      <div className={cx("product-price-discount")}>
                        <div className={cx("price-discount-value")}>
                          <span>97.000</span>
                        </div>
                        <div className={cx("discount-currency")}>₫</div>
                        <div className={cx("price-discount-percent")}>-3%</div>
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
                <a
                  href="/san-pham-so/the-cao-game?spid=192048498"
                  className={cx("styled-wrapper")}
                >
                  <div className={cx("product-container")}>
                    <div className={cx("product-thumbnail")}>
                      <picture className={cx("image-container")}>
                        <source
                          type="image/webp"
                          srcSet="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 2x"
                        />
                        <img
                          src="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png"
                          className={cx("styled-image")}
                          alt="Mã thẻ game Garena 100K"
                          srcSet="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 2x"
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
                        <h3>Mã thẻ game Garena 100K</h3>
                      </div>
                      <div className={cx("product-container-rating")}>
                        <div className={cx("product-container-text-rating")}>
                          4.8
                        </div>
                        <img
                          src="https://salt.tikicdn.com/ts/tmp/76/32/ae/3b087e1ae6fa94a7cade963cc2e1311c.png"
                          alt=""
                          className={cx("wrapper-follow")}
                        />
                        <div className={cx("line-wrap")}></div>
                        <span className={cx("percent")}>Đã bán 5k+</span>
                      </div>
                      <div className={cx("product-price-discount")}>
                        <div className={cx("price-discount-value")}>
                          <span>97.000</span>
                        </div>
                        <div className={cx("discount-currency")}>₫</div>
                        <div className={cx("price-discount-percent")}>-3%</div>
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
                <a
                  href="/san-pham-so/the-cao-game?spid=192048498"
                  className={cx("styled-wrapper")}
                >
                  <div className={cx("product-container")}>
                    <div className={cx("product-thumbnail")}>
                      <picture className={cx("image-container")}>
                        <source
                          type="image/webp"
                          srcSet="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 2x"
                        />
                        <img
                          src="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png"
                          className={cx("styled-image")}
                          alt="Mã thẻ game Garena 100K"
                          srcSet="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 2x"
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
                        <h3>Mã thẻ game Garena 100K</h3>
                      </div>
                      <div className={cx("product-container-rating")}>
                        <div className={cx("product-container-text-rating")}>
                          4.8
                        </div>
                        <img
                          src="https://salt.tikicdn.com/ts/tmp/76/32/ae/3b087e1ae6fa94a7cade963cc2e1311c.png"
                          alt=""
                          className={cx("wrapper-follow")}
                        />
                        <div className={cx("line-wrap")}></div>
                        <span className={cx("percent")}>Đã bán 5k+</span>
                      </div>
                      <div className={cx("product-price-discount")}>
                        <div className={cx("price-discount-value")}>
                          <span>97.000</span>
                        </div>
                        <div className={cx("discount-currency")}>₫</div>
                        <div className={cx("price-discount-percent")}>-3%</div>
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
                <a
                  href="/san-pham-so/the-cao-game?spid=192048498"
                  className={cx("styled-wrapper")}
                >
                  <div className={cx("product-container")}>
                    <div className={cx("product-thumbnail")}>
                      <picture className={cx("image-container")}>
                        <source
                          type="image/webp"
                          srcSet="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 2x"
                        />
                        <img
                          src="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png"
                          className={cx("styled-image")}
                          alt="Mã thẻ game Garena 100K"
                          srcSet="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 2x"
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
                        <h3>Mã thẻ game Garena 100K</h3>
                      </div>
                      <div className={cx("product-container-rating")}>
                        <div className={cx("product-container-text-rating")}>
                          4.8
                        </div>
                        <img
                          src="https://salt.tikicdn.com/ts/tmp/76/32/ae/3b087e1ae6fa94a7cade963cc2e1311c.png"
                          alt=""
                          className={cx("wrapper-follow")}
                        />
                        <div className={cx("line-wrap")}></div>
                        <span className={cx("percent")}>Đã bán 5k+</span>
                      </div>
                      <div className={cx("product-price-discount")}>
                        <div className={cx("price-discount-value")}>
                          <span>97.000</span>
                        </div>
                        <div className={cx("discount-currency")}>₫</div>
                        <div className={cx("price-discount-percent")}>-3%</div>
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
                <a
                  href="/san-pham-so/the-cao-game?spid=192048498"
                  className={cx("styled-wrapper")}
                >
                  <div className={cx("product-container")}>
                    <div className={cx("product-thumbnail")}>
                      <picture className={cx("image-container")}>
                        <source
                          type="image/webp"
                          srcSet="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 2x"
                        />
                        <img
                          src="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png"
                          className={cx("styled-image")}
                          alt="Mã thẻ game Garena 100K"
                          srcSet="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 2x"
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
                        <h3>Mã thẻ game Garena 100K</h3>
                      </div>
                      <div className={cx("product-container-rating")}>
                        <div className={cx("product-container-text-rating")}>
                          4.8
                        </div>
                        <img
                          src="https://salt.tikicdn.com/ts/tmp/76/32/ae/3b087e1ae6fa94a7cade963cc2e1311c.png"
                          alt=""
                          className={cx("wrapper-follow")}
                        />
                        <div className={cx("line-wrap")}></div>
                        <span className={cx("percent")}>Đã bán 5k+</span>
                      </div>
                      <div className={cx("product-price-discount")}>
                        <div className={cx("price-discount-value")}>
                          <span>97.000</span>
                        </div>
                        <div className={cx("discount-currency")}>₫</div>
                        <div className={cx("price-discount-percent")}>-3%</div>
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
                <a
                  href="/san-pham-so/the-cao-game?spid=192048498"
                  className={cx("styled-wrapper")}
                >
                  <div className={cx("product-container")}>
                    <div className={cx("product-thumbnail")}>
                      <picture className={cx("image-container")}>
                        <source
                          type="image/webp"
                          srcSet="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 2x"
                        />
                        <img
                          src="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png"
                          className={cx("styled-image")}
                          alt="Mã thẻ game Garena 100K"
                          srcSet="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 2x"
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
                        <h3>Mã thẻ game Garena 100K</h3>
                      </div>
                      <div className={cx("product-container-rating")}>
                        <div className={cx("product-container-text-rating")}>
                          4.8
                        </div>
                        <img
                          src="https://salt.tikicdn.com/ts/tmp/76/32/ae/3b087e1ae6fa94a7cade963cc2e1311c.png"
                          alt=""
                          className={cx("wrapper-follow")}
                        />
                        <div className={cx("line-wrap")}></div>
                        <span className={cx("percent")}>Đã bán 5k+</span>
                      </div>
                      <div className={cx("product-price-discount")}>
                        <div className={cx("price-discount-value")}>
                          <span>97.000</span>
                        </div>
                        <div className={cx("discount-currency")}>₫</div>
                        <div className={cx("price-discount-percent")}>-3%</div>
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
                <a
                  href="/san-pham-so/the-cao-game?spid=192048498"
                  className={cx("styled-wrapper")}
                >
                  <div className={cx("product-container")}>
                    <div className={cx("product-thumbnail")}>
                      <picture className={cx("image-container")}>
                        <source
                          type="image/webp"
                          srcSet="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 2x"
                        />
                        <img
                          src="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png"
                          className={cx("styled-image")}
                          alt="Mã thẻ game Garena 100K"
                          srcSet="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 2x"
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
                        <h3>Mã thẻ game Garena 100K</h3>
                      </div>
                      <div className={cx("product-container-rating")}>
                        <div className={cx("product-container-text-rating")}>
                          4.8
                        </div>
                        <img
                          src="https://salt.tikicdn.com/ts/tmp/76/32/ae/3b087e1ae6fa94a7cade963cc2e1311c.png"
                          alt=""
                          className={cx("wrapper-follow")}
                        />
                        <div className={cx("line-wrap")}></div>
                        <span className={cx("percent")}>Đã bán 5k+</span>
                      </div>
                      <div className={cx("product-price-discount")}>
                        <div className={cx("price-discount-value")}>
                          <span>97.000</span>
                        </div>
                        <div className={cx("discount-currency")}>₫</div>
                        <div className={cx("price-discount-percent")}>-3%</div>
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
                <a
                  href="/san-pham-so/the-cao-game?spid=192048498"
                  className={cx("styled-wrapper")}
                >
                  <div className={cx("product-container")}>
                    <div className={cx("product-thumbnail")}>
                      <picture className={cx("image-container")}>
                        <source
                          type="image/webp"
                          srcSet="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 2x"
                        />
                        <img
                          src="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png"
                          className={cx("styled-image")}
                          alt="Mã thẻ game Garena 100K"
                          srcSet="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 2x"
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
                        <h3>Mã thẻ game Garena 100K</h3>
                      </div>
                      <div className={cx("product-container-rating")}>
                        <div className={cx("product-container-text-rating")}>
                          4.8
                        </div>
                        <img
                          src="https://salt.tikicdn.com/ts/tmp/76/32/ae/3b087e1ae6fa94a7cade963cc2e1311c.png"
                          alt=""
                          className={cx("wrapper-follow")}
                        />
                        <div className={cx("line-wrap")}></div>
                        <span className={cx("percent")}>Đã bán 5k+</span>
                      </div>
                      <div className={cx("product-price-discount")}>
                        <div className={cx("price-discount-value")}>
                          <span>97.000</span>
                        </div>
                        <div className={cx("discount-currency")}>₫</div>
                        <div className={cx("price-discount-percent")}>-3%</div>
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
                <a
                  href="/san-pham-so/the-cao-game?spid=192048498"
                  className={cx("styled-wrapper")}
                >
                  <div className={cx("product-container")}>
                    <div className={cx("product-thumbnail")}>
                      <picture className={cx("image-container")}>
                        <source
                          type="image/webp"
                          srcSet="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 2x"
                        />
                        <img
                          src="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png"
                          className={cx("styled-image")}
                          alt="Mã thẻ game Garena 100K"
                          srcSet="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 2x"
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
                        <h3>Mã thẻ game Garena 100K</h3>
                      </div>
                      <div className={cx("product-container-rating")}>
                        <div className={cx("product-container-text-rating")}>
                          4.8
                        </div>
                        <img
                          src="https://salt.tikicdn.com/ts/tmp/76/32/ae/3b087e1ae6fa94a7cade963cc2e1311c.png"
                          alt=""
                          className={cx("wrapper-follow")}
                        />
                        <div className={cx("line-wrap")}></div>
                        <span className={cx("percent")}>Đã bán 5k+</span>
                      </div>
                      <div className={cx("product-price-discount")}>
                        <div className={cx("price-discount-value")}>
                          <span>97.000</span>
                        </div>
                        <div className={cx("discount-currency")}>₫</div>
                        <div className={cx("price-discount-percent")}>-3%</div>
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
                <a
                  href="/san-pham-so/the-cao-game?spid=192048498"
                  className={cx("styled-wrapper")}
                >
                  <div className={cx("product-container")}>
                    <div className={cx("product-thumbnail")}>
                      <picture className={cx("image-container")}>
                        <source
                          type="image/webp"
                          srcSet="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 2x"
                        />
                        <img
                          src="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png"
                          className={cx("styled-image")}
                          alt="Mã thẻ game Garena 100K"
                          srcSet="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 2x"
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
                        <h3>Mã thẻ game Garena 100K</h3>
                      </div>
                      <div className={cx("product-container-rating")}>
                        <div className={cx("product-container-text-rating")}>
                          4.8
                        </div>
                        <img
                          src="https://salt.tikicdn.com/ts/tmp/76/32/ae/3b087e1ae6fa94a7cade963cc2e1311c.png"
                          alt=""
                          className={cx("wrapper-follow")}
                        />
                        <div className={cx("line-wrap")}></div>
                        <span className={cx("percent")}>Đã bán 5k+</span>
                      </div>
                      <div className={cx("product-price-discount")}>
                        <div className={cx("price-discount-value")}>
                          <span>97.000</span>
                        </div>
                        <div className={cx("discount-currency")}>₫</div>
                        <div className={cx("price-discount-percent")}>-3%</div>
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
                <a
                  href="/san-pham-so/the-cao-game?spid=192048498"
                  className={cx("styled-wrapper")}
                >
                  <div className={cx("product-container")}>
                    <div className={cx("product-thumbnail")}>
                      <picture className={cx("image-container")}>
                        <source
                          type="image/webp"
                          srcSet="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 2x"
                        />
                        <img
                          src="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png"
                          className={cx("styled-image")}
                          alt="Mã thẻ game Garena 100K"
                          srcSet="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 2x"
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
                        <h3>Mã thẻ game Garena 100K</h3>
                      </div>
                      <div className={cx("product-container-rating")}>
                        <div className={cx("product-container-text-rating")}>
                          4.8
                        </div>
                        <img
                          src="https://salt.tikicdn.com/ts/tmp/76/32/ae/3b087e1ae6fa94a7cade963cc2e1311c.png"
                          alt=""
                          className={cx("wrapper-follow")}
                        />
                        <div className={cx("line-wrap")}></div>
                        <span className={cx("percent")}>Đã bán 5k+</span>
                      </div>
                      <div className={cx("product-price-discount")}>
                        <div className={cx("price-discount-value")}>
                          <span>97.000</span>
                        </div>
                        <div className={cx("discount-currency")}>₫</div>
                        <div className={cx("price-discount-percent")}>-3%</div>
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
                <a
                  href="/san-pham-so/the-cao-game?spid=192048498"
                  className={cx("styled-wrapper")}
                >
                  <div className={cx("product-container")}>
                    <div className={cx("product-thumbnail")}>
                      <picture className={cx("image-container")}>
                        <source
                          type="image/webp"
                          srcSet="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 2x"
                        />
                        <img
                          src="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png"
                          className={cx("styled-image")}
                          alt="Mã thẻ game Garena 100K"
                          srcSet="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 2x"
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
                        <h3>Mã thẻ game Garena 100K</h3>
                      </div>
                      <div className={cx("product-container-rating")}>
                        <div className={cx("product-container-text-rating")}>
                          4.8
                        </div>
                        <img
                          src="https://salt.tikicdn.com/ts/tmp/76/32/ae/3b087e1ae6fa94a7cade963cc2e1311c.png"
                          alt=""
                          className={cx("wrapper-follow")}
                        />
                        <div className={cx("line-wrap")}></div>
                        <span className={cx("percent")}>Đã bán 5k+</span>
                      </div>
                      <div className={cx("product-price-discount")}>
                        <div className={cx("price-discount-value")}>
                          <span>97.000</span>
                        </div>
                        <div className={cx("discount-currency")}>₫</div>
                        <div className={cx("price-discount-percent")}>-3%</div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
