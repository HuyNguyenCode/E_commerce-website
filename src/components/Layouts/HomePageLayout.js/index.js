"use client";
import React from "react";
import Header from "@/components/Headers/MainHeader";
import Footer from "@/components/Footers/MainFooter";
import SideBar from "@/components/Sidebar/HomepageSidebar";
import classNames from "classnames/bind";
import styles from "./HomePageLayout.module.scss";
import ReduxProvider from "@/redux/provider";

const cx = classNames.bind(styles);

export default function HomePageLayout({ children }) {
  return (
    <ReduxProvider>
      <div className={cx("layout-wrapper")}>
        <Header />
        <div className={cx("container")}>
          <div className={cx("main-content")}>
            <SideBar />
            <div className={cx("layout-content")}>
              {children}
              <Footer side={"homepage"} />
            </div>
          </div>
        </div>
      </div>
    </ReduxProvider>
  );
}
