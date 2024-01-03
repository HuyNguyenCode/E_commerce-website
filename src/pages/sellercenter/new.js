import classNames from "classnames/bind";
import styles from "./sellercenter.module.scss";
import React, { useState } from "react";
import LayoutWithoutContainer from "@/components/Layouts/LayoutWithoutCotainer/LayoutWithoutContainer";
const cx = classNames.bind(styles);

function NewSeller() {
  return (
    <div className={cx("new-wrapper")}>
      <div className={cx("store-content")}>
        <aside className={cx("store-sidebar")}>
          <div className={cx("sidebar-content")}>
            <div className={cx("logo")} id="logo">
              <a href="/">
                <img
                  src="https://salt.tikicdn.com/cache/w32/ts/sellercenterFE/93/76/03/2a08fa4ae6a024a752fbba87d145bce8.png"
                  alt="Seller Center"
                  width="32"
                  height="32"
                />
                <h1>Seller Center</h1>
              </a>
            </div>
            <ul
              className={cx("menu")}
              role="menu"
              tabIndex="0"
              data-menu-list="true"
            >
              <li
                role="menuitem"
                tabIndex="-1"
                data-menu-id="rc-menu-uuid-73842-1-/"
              >
                <span className={cx("ant-menu-title-content")}>
                  <a href="/sellercenter/new/">
                    <span
                      role="img"
                      aria-label="bar-chart"
                      className={cx("anticon")}
                    >
                      <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="shop"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M882 272.1V144c0-17.7-14.3-32-32-32H174c-17.7 0-32 14.3-32 32v128.1c-16.7 1-30 14.9-30 31.9v131.7a177 177 0 0014.4 70.4c4.3 10.2 9.6 19.8 15.6 28.9v345c0 17.6 14.3 32 32 32h676c17.7 0 32-14.3 32-32V535a175 175 0 0015.6-28.9c9.5-22.3 14.4-46 14.4-70.4V304c0-17-13.3-30.9-30-31.9zM214 184h596v88H214v-88zm362 656.1H448V736h128v104.1zm234 0H640V704c0-17.7-14.3-32-32-32H416c-17.7 0-32 14.3-32 32v136.1H214V597.9c2.9 1.4 5.9 2.8 9 4 22.3 9.4 46 14.1 70.4 14.1s48-4.7 70.4-14.1c13.8-5.8 26.8-13.2 38.7-22.1.2-.1.4-.1.6 0a180.4 180.4 0 0038.7 22.1c22.3 9.4 46 14.1 70.4 14.1 24.4 0 48-4.7 70.4-14.1 13.8-5.8 26.8-13.2 38.7-22.1.2-.1.4-.1.6 0a180.4 180.4 0 0038.7 22.1c22.3 9.4 46 14.1 70.4 14.1 24.4 0 48-4.7 70.4-14.1 3-1.3 6-2.6 9-4v242.2zm30-404.4c0 59.8-49 108.3-109.3 108.3-40.8 0-76.4-22.1-95.2-54.9-2.9-5-8.1-8.1-13.9-8.1h-.6c-5.7 0-11 3.1-13.9 8.1A109.24 109.24 0 01512 544c-40.7 0-76.2-22-95-54.7-3-5.1-8.4-8.3-14.3-8.3s-11.4 3.2-14.3 8.3a109.63 109.63 0 01-95.1 54.7C233 544 184 495.5 184 435.7v-91.2c0-.3.2-.5.5-.5h655c.3 0 .5.2.5.5v91.2z"></path>
                      </svg>
                    </span>
                    <span className={cx("menu-title")}>Thông tin nhà bán</span>
                  </a>
                </span>
              </li>
              <li role="none">
                <span className={cx("ant-menu-title-content")}>
                  <span
                    role="img"
                    aria-label="shopping-cart"
                    className={cx("anticon")}
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      focusable="false"
                      data-icon="shopping-cart"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z"></path>
                    </svg>
                  </span>
                  <span className={cx("menu-title")}>Quản lý Đơn hàng</span>
                </span>
              </li>
              <li role="none">
                <span className={cx("ant-menu-title-content")}>
                  <span
                    role="img"
                    aria-label="laptop"
                    className={cx("anticon")}
                  >
                    <svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="laptop"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M956.9 845.1L896.4 632V168c0-17.7-14.3-32-32-32h-704c-17.7 0-32 14.3-32 32v464L67.9 845.1C60.4 866 75.8 888 98 888h828.8c22.2 0 37.6-22 30.1-42.9zM200.4 208h624v395h-624V208zm228.3 608l8.1-37h150.3l8.1 37H428.7zm224 0l-19.1-86.7c-.8-3.7-4.1-6.3-7.8-6.3H398.2c-3.8 0-7 2.6-7.8 6.3L371.3 816H151l42.3-149h638.2l42.3 149H652.7z"></path>
                    </svg>
                  </span>
                  <span className={cx("menu-title")}>Quản lý Sản phẩm</span>
                </span>
              </li>
            </ul>
          </div>
        </aside>
        <main className={cx("main-content")}>
          <header className={cx("ant-layout-header")}>
            <div className={cx("header")}>
              <div className={cx("right")}>
                <div className={cx("tikiChatPlatform")}>
                  <div className={cx("tiki-chat-mini")} id="tiki-chat-platform">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      size="18"
                      height="18"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M464 512a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm200 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm-400 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 0 0-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 0 0-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 0 0 112 714v152a46 46 0 0 0 46 46h152.1A449.4 449.4 0 0 0 510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 0 0 142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"></path>
                    </svg>
                    <sup className={cx("ant-badge-count")}>
                      <span className="ant-scroll-number-only">
                        <span className="ant-scroll-number-only-unit current">
                          1
                        </span>
                      </span>
                    </sup>
                  </div>
                </div>
                <span className={cx("noticeButton")}>
                  <span className={cx("ant-badge")}>
                    <button type="button" className={cx("icon-btn")}>
                      <span
                        role="img"
                        aria-label="bell"
                        className="anticon anticon-bell icon___1g-4R"
                      >
                        <svg
                          viewBox="64 64 896 896"
                          focusable="false"
                          data-icon="bell"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z"></path>
                        </svg>
                      </span>
                    </button>
                    <sup className={cx("ant-badge-count")}>
                      <span className="ant-scroll-number-only">
                        <span className="ant-scroll-number-only-unit current">
                          1
                        </span>
                      </span>
                    </sup>
                  </span>
                </span>
                <div className={cx("ant-dropdown-trigger")}>
                  <div className={cx("action-wrapper")}>
                    <div className={cx("account-wrapper")}>
                      <span className={cx("ant-avatar")}>
                        <img
                          src="https://salt.tikicdn.com/cache/w24/ts/sellercenterFE/93/76/03/2a08fa4ae6a024a752fbba87d145bce8.png"
                          alt="avatar"
                        />
                      </span>
                      <span className={cx("name")}>seller123@gmail.com</span>
                      <span
                        role="img"
                        aria-label="down"
                        className={cx("anticon-down")}
                      >
                        <svg
                          viewBox="64 64 896 896"
                          focusable="false"
                          data-icon="down"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <main className={cx("ant-layout-content")}></main>
        </main>
      </div>
    </div>
  );
}
NewSeller.getLayout = (page) => (
  <LayoutWithoutContainer>{page}</LayoutWithoutContainer>
);
export default NewSeller;
