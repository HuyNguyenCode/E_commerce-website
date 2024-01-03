import React from "react";
import CheckoutHeader from "@/components/Headers/CheckoutHeader";
import CheckoutFooter from "@/components/Footers/CheckoutFooter";
import styles from "../MainLayout/MainLayout.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default function CheckoutLayout({ children }) {
  return (
    <div className={cx("layout-wrapper")}>
      <CheckoutHeader />
      <div className={cx("layout-content")}>{children}</div>
      <CheckoutFooter />
    </div>
  );
}
