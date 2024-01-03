"use client";
import React from "react";
import Header from "@/components/Headers/MainHeader";
import Footer from "@/components/Footers/MainFooter";
import CustomerSidebar from "@/components/Sidebar/CustomerSidebar";
import classNames from "classnames/bind";
import styles from "./CustomerLayout.module.scss";
import { memo } from "react";
const cx = classNames.bind(styles);

function CustomerLayout({ children, selectedNav }) {
  return (
    <div className={cx("customer-layout-wrapper")}>
      <Header />
      <div className={cx("customer-layout-container")}>
        <div className={cx("main-content")}>
          <CustomerSidebar selectedNav={selectedNav} />
          <div className={cx("layout-content")}>{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default memo(CustomerLayout);
