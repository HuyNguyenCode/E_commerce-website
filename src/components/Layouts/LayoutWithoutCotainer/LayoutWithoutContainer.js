"use client";
import React from "react";
import classNames from "classnames/bind";
import styles from "./LayoutWithoutContainer.module.scss";
const cx = classNames.bind(styles);

export default function LayoutWithoutCotainer({ children }) {
  return (
    <div className={cx("layout-wrapper")}>
      <div className={cx("main-content")}>
        <div className={cx("layout-content")}>{children}</div>
      </div>
    </div>
  );
}
