import React, { useEffect } from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";
import AuthModal from "@/components/Modal/AuthModal";
import Modal from "react-modal";
import { useState } from "react";
// import { useSession } from "next-auth/react";
const cx = classNames.bind(styles);
export default function Header() {
  // const session = useSession();
  // useEffect(() => {
  //   console.log(session);

  // },[])
  const [singupModal, showSignupModal] = useState(false);
  const handleSignupModal = () => {
    showSignupModal(!singupModal);
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0",
      overflow: "hidden",
    },

    overlay: {
      backgroundColor: "#00000087",
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  const [close, setClose] = useState(false);
  function setCloseModal(value) {
    console.log(value);
    setClose(value);
  }
  function closeModal() {
    setIsOpen(close);
  }
  return (
    <header className={cx("header-wrapper")}>
      <div className={cx("container")}>
        <div>
          <button onClick={openModal}>Open Modal</button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <AuthModal setCloseModal={setCloseModal} />
          </Modal>
        </div>
        <div className={cx("header-content")}>
          <div className={cx("left-content")}>
            <div className={cx("submenu")}>
              <i className={cx("fa-solid fa-bars")}></i>
            </div>
            <Link href={"/"} className={cx("header-logo")}></Link>
          </div>
          <div className={cx("right-content")}>
            <div className={cx("up-content")}>
              <div className={cx("search-are")}>
                <img
                  className={cx("search-icon")}
                  src="https://salt.tikicdn.com/ts/upload/33/d0/37/6fef2e788f00a16dc7d5a1dfc5d0e97a.png"
                  alt="icon-search"
                />
                <input
                  type="text"
                  placeholder="Giao nhanh 2H &amp; đúng khung giờ"
                  className={cx("search-input")}
                />
                <button className={cx("search-btn")}>Tìm kiếm</button>
              </div>
              <div className={cx("user-shortcut")}>
                <Link href={"/"}>
                  <div className={cx("homepageBtn")}>
                    <img
                      src="https://salt.tikicdn.com/ts/upload/32/56/db/d919a4fea46f498b5f4708986d82009d.png"
                      alt="header_menu_item_home"
                    />
                    Trang chủ
                  </div>
                </Link>
                <div className={cx("accountBtn")}>
                  <img
                    src="https://salt.tikicdn.com/ts/upload/07/d5/94/d7b6a3bd7d57d37ef6e437aa0de4821b.png"
                    alt="header_header_account_img"
                  />
                  <span onClick={handleSignupModal}>Tài khoản</span>

                  <div className={cx("dropdown-menu")}>
                    <a
                      className={cx("menu-item")}
                      rel="nofollow"
                      href="/customer/account/edit?src=header_my_account"
                    >
                      <p title="Thông tin tài khoản">Thông tin tài khoản</p>
                    </a>

                    <a
                      className={cx("menu-item")}
                      rel="nofollow"
                      href="/sales/order/history?src=header_my_account"
                    >
                      <p title="Đơn hàng của tôi">Đơn hàng của tôi</p>
                    </a>
                    <a
                      className={cx("menu-item")}
                      rel="nofollow"
                      href="/customer/help-center?src=header_my_account"
                    >
                      <p title="Trung tâm hỗ trợ">Trung tâm hỗ trợ</p>
                    </a>
                    <a
                      className={cx("menu-item")}
                      data-view-id="header_header_account_item"
                    >
                      <p title="Đăng xuất">Đăng xuất</p>
                    </a>
                  </div>
                </div>
                <Link href={"/checkout/cart"}>
                  <div className={cx("cart-wrapper")}>
                    <img
                      className={cx("cart-icon")}
                      src="https://salt.tikicdn.com/ts/upload/51/e2/92/8ca7e2cc5ede8c09e34d1beb50267f4f.png"
                      alt="header_header_img_Cart"
                    />
                    <span className={cx("ItemCart")}>3</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className={cx("down-content")}>
              <div className={cx("category-listing")}>
                <a
                  data-view-id="header_quicklinks_item"
                  data-view-index="0"
                  href="/lam-dep-suc-khoe/c1520"
                >
                  khỏe đẹp
                </a>
                <a
                  data-view-id="header_quicklinks_item"
                  data-view-index="1"
                  href="/nha-cua-doi-song/c1883"
                >
                  nhà cửa
                </a>
                <a
                  data-view-id="header_quicklinks_item"
                  data-view-index="2"
                  href="/nha-sach-tiki/c8322"
                >
                  sách
                </a>
                <a
                  data-view-id="header_quicklinks_item"
                  data-view-index="3"
                  href="/the-thao-da-ngoai/c1975"
                >
                  thể thao
                </a>
                <a
                  data-view-id="header_quicklinks_item"
                  data-view-index="4"
                  href="/tikingon/trai-cay/c44824"
                >
                  trái cây
                </a>
                <a
                  data-view-id="header_quicklinks_item"
                  data-view-index="5"
                  href="/tikingon/thit-trung/c54276"
                >
                  thịt, trứng
                </a>
                <a
                  data-view-id="header_quicklinks_item"
                  data-view-index="6"
                  href="/tikingon/rau-cu-qua/c54302"
                >
                  rau củ quả
                </a>
                <a
                  data-view-id="header_quicklinks_item"
                  data-view-index="7"
                  href="/tikingon/sua-bo-pho-mai/c54330"
                >
                  sữa, bơ, phô mai
                </a>
                <a
                  data-view-id="header_quicklinks_item"
                  data-view-index="8"
                  href="/tikingon/ca-thuy-hai-san/c54290"
                >
                  hải sản
                </a>
                <a
                  data-view-id="header_quicklinks_item"
                  data-view-index="9"
                  href="/tikingon/gao-mi-nong-san/c54384"
                >
                  gạo, mì ăn liền
                </a>
              </div>
              <div className={cx("location")}>
                <img
                  src="https://salt.tikicdn.com/ts/upload/88/5c/9d/f5ee506836792eb7775e527ef8350a44.png"
                  alt="header-icon-location"
                />
                <h4 className={cx("title")}>Giao đến:</h4>
                <div className={cx("address")}>
                  Q. 1, P. Bến Nghé, Hồ Chí Minh
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
