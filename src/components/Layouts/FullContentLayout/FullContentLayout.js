"use client";
import React from "react";
import classNames from "classnames/bind";
import styles from "./FullContentLayout.module.scss";
const cx = classNames.bind(styles);

export default function FullContentLayout({ children }) {
  return (
    <div className={cx("layout-wrapper")}>
      <div className={cx("container-wrapper")}>
        <div className={cx("main-content")}>
          <div className={cx("layout-content")}>{children}</div>
        </div>
      </div>
    </div>
  );
}
