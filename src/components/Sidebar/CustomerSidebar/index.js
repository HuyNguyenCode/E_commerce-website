import classNames from "classnames/bind";
import styles from "./AccountManageSidebar.module.scss";
import AccountIcon from "@/components/SVGImg/AccountIcon";
import NotiIcon from "@/components/SVGImg/NotiIcon";
import OrderIcon from "@/components/SVGImg/OrderIcon";
import AddressIcon from "@/components/SVGImg/AddressIcon";
import CommentIcon from "@/components/SVGImg/CommentIcon";
import SeenIcon from "@/components/SVGImg/SeenIcon";
import LoveIcon from "@/components/SVGImg/LoveIcon";
import TelephoneIcon from "@/components/SVGImg/TelephoneIcon";
import StarIcon from "@/components/SVGImg/StarIcon";

import { useEffect, useState, memo } from "react";

const cx = classNames.bind(styles);

const listItem = [
  {
    href: "/customer/account/edit",
    title: "Thông tin tài khoản",
    icon: AccountIcon,
    navName: "account",
    pathName: "Thông tin tài khoản",
  },
  {
    href: "/customer/notification",
    title: "Thông báo của tôi",
    icon: NotiIcon,
    navName: "notification",
    pathName: "Thông báo của tôi",
  },
  {
    href: "/sales/order/history",
    title: "Quản lý đơn hàng",
    icon: OrderIcon,
    navName: "history",
    pathName: "Đơn hàng của tôi",
  },
  {
    href: "/customer/address",
    title: "Sổ địa chỉ",
    icon: AddressIcon,
    navName: "address",
    pathName: "Sổ địa chỉ",
  },
  {
    href: "/review-hub",
    title: "Đánh giá sản phẩm",
    icon: CommentIcon,
    navName: "review",
  },
  {
    href: "/danh-rieng-cho-ban",
    title: "Sản phẩm bạn đã xem",
    icon: SeenIcon,
    navName: "seen",
  },
  {
    href: "/customer/wishlist",
    title: "Sản phẩm yêu thích",
    icon: LoveIcon,
    navName: "wishlist",
  },
  {
    href: "/customer/review",
    title: "Nhận xét của tôi",
    icon: StarIcon,
    navName: "star",
    pathName: "Nhận xét của tôi",
  },
  {
    href: "/customer/help-center?src=sidebar_my_account",
    title: "Hỗ trợ khách hàng",
    icon: TelephoneIcon,
    navName: "support",
    pathName: "Hỗ trợ khách hàng",
  },
];

function AccountManageSidebar({ selectedNav }) {
  const [activeNav, setActiveNav] = useState(selectedNav);

  useEffect(() => {
    setActiveNav(selectedNav);
  }, []);
  return (
    <div className={cx("sidebar-wrapper")}>
      <div className={cx("sidebar-content")}>
        <div className={cx("navigation")}>
          <div className={cx("breadcrumb")}>
            <a className={cx("breadcrumb-item")} href="/">
              <span>Trang chủ</span>
            </a>
            <span className={cx("icon-next")}>
              <svg
                width="6"
                height="11"
                viewBox="0 0 6 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#808089"
                  fillRule="evenodd"
                  d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L6.35355 5.64645C6.54882 5.84171 6.54882 6.15829 6.35355 6.35355L1.35355 11.3536C1.15829 11.5488 0.841709 11.5488 0.646447 11.3536C0.451184 11.1583 0.451184 10.8417 0.646447 10.6464L5.29289 6L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z"
                ></path>
              </svg>
            </span>
            {listItem.map((item, index) => {
              return (
                <a
                  key={index}
                  href={item.pathName}
                  className={cx("breadcrumb-item")}
                >
                  <span title={item.pathName}>
                    {activeNav === item.navName ? item.pathName : ""}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
        <aside className={cx("sidebar-container")}>
          <div className={cx("account-avatar")}>
            <img
              src="https://salt.tikicdn.com/desktop/img/avatar.png"
              alt="avatar"
            />
            <div className={cx("info")}>
              Tài khoản của
              <strong>Greeny Tiki</strong>
            </div>
          </div>
          <ul className={cx("customer-account-item")}>
            {listItem.map((item, index) => {
              let IconSidebar = item.icon;
              return (
                <li key={index}>
                  <a
                    className={
                      activeNav === item.navName ? cx("is-active") : ""
                    }
                    href={item.href}
                  >
                    <IconSidebar />
                    <span>{item.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default memo(AccountManageSidebar);
