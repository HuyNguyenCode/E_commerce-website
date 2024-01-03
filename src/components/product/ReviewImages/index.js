import React from "react";
import styles from "./ReviewImages.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default function ReviewImages() {
  return (
    <div className={cx("container")}>
      <div className={cx("focused-img")}></div>
      <div  className={cx("listOfImgs")}></div>
    </div>
  );
}
