"use client";
import React from "react";
import classNames from "classnames/bind";
import styles from "./ChatServiceLayout.module.scss";
const cx = classNames.bind(styles);

export default function ChatServiceLayout({ children }) {
  return (
    <div className={cx("layout-wrapper")}>
      <div className={cx("container")}>
        <div className={cx("main-content")}>
          <div className={cx("layout-content")}>{children}</div>
        </div>
      </div>
    </div>
  );
}
