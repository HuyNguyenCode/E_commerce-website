import React from "react";
import styles from "./CheckoutHeader.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";
const cx = classNames.bind(styles);
export default function CheckoutHeader() {
  return (
    <header className={cx("header-wrapper")}>
      <div className={cx("container")}>
        <div className={cx("header-content")}>
          <div className={cx("left-content")}>
            <Link href={"/"} className={cx("header-logo")}></Link>
            <span className={cx("divider")}></span>
            <span className={cx("title")}>Thanh toán</span>
          </div>
          <div className={cx("right-content")}>
            <img
              src="https://salt.tikicdn.com/ts/upload/ae/b1/ea/65e64a529e4ff888c875129d3b11ff29.png"
              alt="hotline"
              width="185"
              height="56"
              srcSet="https://salt.tikicdn.com/ts/upload/ae/b1/ea/65e64a529e4ff888c875129d3b11ff29.png"
              className="WebpImg__StyledImg-sc-h3ozu8-0 fWjUGo"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
