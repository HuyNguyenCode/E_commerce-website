import React, { Component } from "react";
import classNames from "classnames/bind";
import styles from "./wishlist.module.scss";
import Link from "next/link";
import CustomerLayout from "@/components/Layouts/CustomerLayout";

const cx = classNames.bind(styles);
function WishList() {
  return (
    <div className={cx("wishlist-wrapper")}>
      <div className={cx("heading")}>Danh sách yêu thích </div>
      <div className={cx("styled-empty-content")}>
        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/mascot_fail.svg" />
        <p className="message">
          <span>
            Hãy tim sản phẩm bạn yêu thích khi mua sắm để xem lại thuận tiện
            nhất
          </span>
        </p>
        <Link href="/" className={cx("back")}>
          Tiếp tục mua sắm
        </Link>
      </div>
    </div>
  );
}

WishList.getLayout = (page) => (
  <CustomerLayout selectedNav={"wishlist"}>{page}</CustomerLayout>
);
export default WishList;
