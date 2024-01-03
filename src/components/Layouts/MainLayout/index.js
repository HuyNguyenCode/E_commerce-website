"use client";
import React from "react";
import Header from "@/components/Headers/MainHeader";
import Footer from "@/components/Footers/MainFooter";
import classNames from "classnames/bind";
import styles from "./MainLayout.module.scss";
const cx = classNames.bind(styles);

export default function MainLayout({ children }) {
  return (
    <div className={cx("layout-wrapper")}>
      <Header />
      <div className={cx("layout-content")}>{children}</div>
      <Footer />
    </div>
  );
}
