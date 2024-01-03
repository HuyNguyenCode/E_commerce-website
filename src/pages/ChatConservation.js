import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import styles from "./ChatConversation.module.scss";
import ChatServiceLayout from "@/components/Layouts/ChatServiceLayout/ChatServiceLayout";
const cx = classNames.bind(styles);
const ChatConservation = () => {
  const [chatMode, showChatMode] = useState(false);
  const handleShowChatMode = () => {
    showChatMode(!chatMode);
  };

  const [mode, selectMode] = useState(1);

  const handleSelectChatMode = (num) => {
    if (num === 1) {
      selectMode(1);
    } else {
      selectMode(2);
    }
  };

  useEffect(() => {
    const iframe = document.getElementById("chatgpt-service");
    console.log("iframe: ");
    console.log(iframe);
  }, []);

  const handleCloseIframe = () => {
    window.parent.postMessage("closeIframe", "*");
  };
  return (
    <div className={cx("conversation-wrapper")}>
      <div id="header" className={cx("conversation-header")}>
        <div className={cx("avatar-outer")}>
          <div type="two" size="40" className={cx("avatar-by-name")}>
            GT
          </div>
          <div className={cx("header-text")}>Greeny Tiki</div>
          &nbsp;
        </div>
        <div className={cx("header-icon")}>
          <div className={cx("close-icon")} onClick={handleCloseIframe}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.57739 15.2441C3.25195 15.5695 3.25195 16.0971 3.57739 16.4226C3.90283 16.748 4.43047 16.748 4.7559 16.4226L9.99998 11.1785L15.2441 16.4226C15.5695 16.748 16.0971 16.748 16.4226 16.4226C16.748 16.0971 16.748 15.5695 16.4226 15.2441L11.1785 9.99998L16.4226 4.7559C16.748 4.43047 16.748 3.90283 16.4226 3.57739C16.0971 3.25195 15.5695 3.25195 15.2441 3.57739L9.99998 8.82147L4.7559 3.57739C4.43047 3.25196 3.90283 3.25196 3.57739 3.57739C3.25195 3.90283 3.25195 4.43047 3.57739 4.7559L8.82147 9.99998L3.57739 15.2441Z"
                fill="#38383D"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className={cx("conversation-content")}>
        <div className={cx("left-content")}>
          <div id="filter" className={cx("filter-channel")}>
            <div className={cx("filter-channel-inner")}>
              <label className={cx("filter-channel-input")}>
                <div className={cx("input-search-icon")}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.26105 10.1449C8.29876 10.9147 7.07813 11.375 5.75 11.375C2.6434 11.375 0.125 8.8566 0.125 5.75C0.125 2.6434 2.6434 0.125 5.75 0.125C8.8566 0.125 11.375 2.6434 11.375 5.75C11.375 7.07813 10.9147 8.29876 10.1449 9.26105L13.6919 12.8081C13.936 13.0521 13.936 13.4479 13.6919 13.6919C13.4479 13.936 13.0521 13.936 12.8081 13.6919L9.26105 10.1449ZM1.375 5.75C1.375 3.33375 3.33375 1.375 5.75 1.375C8.16625 1.375 10.125 3.33375 10.125 5.75C10.125 6.94774 9.64369 8.03306 8.86394 8.82311C8.85687 8.82957 8.84991 8.83622 8.84306 8.84306C8.83622 8.84991 8.82957 8.85687 8.82311 8.86394C8.03306 9.64369 6.94774 10.125 5.75 10.125C3.33375 10.125 1.375 8.16625 1.375 5.75Z"
                      fill="#808089"
                    ></path>
                  </svg>
                </div>
                <input
                  autocomplete="off"
                  id="filter-search-input"
                  type="text"
                  value=""
                  placeholder="Tìm theo người dùng..."
                  className="styles__StyledInputSearchInput-sc-qze4xz-3 bioqZF"
                />
              </label>
            </div>
          </div>
          <div id="scrollableDiv" className={cx("list-channel")}>
            <div className={cx("infinite-scroll-component")}>
              <div className={cx("scroll-wrapper")}>
                <div className={cx("recommendation-channel")}>
                  <div className={cx("recommendation-lable")}>
                    Có thể bạn quan tâm
                  </div>
                  <div className={cx("recommendation-item")}>
                    <img
                      src="https://salt.tikicdn.com/cache/100x100/ts/product/4c/ce/5a/677a5e001b4fd62098b08ae5d4a8d6b6.png"
                      className={cx("recommendation-item-thumbnail")}
                    />
                    <img
                      src="https://vcdn.tikicdn.com/ts/seller/14/0a/3f/734a6745884bfbf0fa72bdebaf35f35e.png"
                      className={cx("recommendation-item-subthumbnail")}
                    />
                    <div className={cx("recommendation-item-content")}>
                      <div className={cx("recommendation-item-text")}>
                        Xe Ô Tô FORD RANGER XLS 2.2L 4X2 MT - Trắng
                      </div>
                      <div className={cx("recommendation-item-sub-text")}>
                        Sài Gòn Ford
                      </div>
                    </div>
                    <div className={cx("recommendation-item-button")}>
                      Chat ngay
                    </div>
                  </div>
                  <div className={cx("recommendation-item")}>
                    <img
                      src="https://salt.tikicdn.com/cache/100x100/ts/product/47/90/b5/8e04bd68ac546011efa90b052c675515.png"
                      className={cx("recommendation-item-thumbnail")}
                    />
                    <img
                      src="https://vcdn.tikicdn.com/ts/seller/87/2e/22/34a631ea0cb52fe503b6308fc9b37c5a.jpg"
                      className={cx("recommendation-item-subthumbnail")}
                    />
                    <div className={cx("recommendation-item-content")}>
                      <div className={cx("recommendation-item-text")}>
                        KEM Ủ KERATIN CONEY PHỤC HỒI TÓC HƯ TỔN chính hãƞg Ý
                        RECOVERY CREAM 730ML + Gội xả gói Karseell 15ml
                      </div>
                      <div className={cx("recommendation-item-sub-text")}>
                        Á ĐÔNG HAIRSHOP
                      </div>
                    </div>
                    <div className={cx("recommendation-item-button")}>
                      Chat ngay
                    </div>
                  </div>
                </div>
                <div className={cx("channel-item")}>
                  <div className={cx("avatar-outer")}>
                    <div size="56" className={cx("avatar-wrapper")}>
                      <div
                        style={{
                          display: "block",
                          overflow: "hidden",
                          position: "absolute",
                          inset: "0px",
                          boxSizing: "border-box",
                          margin: "0px",
                        }}
                      >
                        <img
                          alt="Đầm YuRin"
                          className={cx("avatar")}
                          src="https://chat-service.tiki.vn/_next/image?url=https%3A%2F%2Fvcdn.tikicdn.com%2Fts%2Fseller%2F4b%2F54%2F1a%2Ff385a79a716cb3505f152e7af8c769aa.png&w=1920&q=75"
                          decoding="async"
                          data-nimg="fill"
                          sizes="100vw"
                          srcSet="https://chat-service.tiki.vn/_next/image?url=https%3A%2F%2Fvcdn.tikicdn.com%2Fts%2Fseller%2F4b%2F54%2F1a%2Ff385a79a716cb3505f152e7af8c769aa.png&w=1920&q=75"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={cx("item-wrapper")}>
                    <div className={cx("item-name")}>
                      <span>Đầm YuRin</span>
                      <div className={cx("icon-verify")}>
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="https://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 0C4.81331 0 3.65328 0.351894 2.66658 1.01118C1.67989 1.67047 0.910851 2.60754 0.456725 3.7039C0.00259972 4.80026 -0.11622 6.00666 0.115291 7.17054C0.346802 8.33443 0.918247 9.40352 1.75736 10.2426C2.59648 11.0818 3.66557 11.6532 4.82946 11.8847C5.99335 12.1162 7.19975 11.9974 8.2961 11.5433C9.39246 11.0892 10.3295 10.3201 10.9888 9.33342C11.6481 8.34673 12 7.18669 12 6C11.9954 4.41012 11.3618 2.88668 10.2375 1.76246C9.11332 0.638241 7.58988 0.00461698 6 0ZM5.35356 8.35345C5.15829 8.54871 4.84171 8.54871 4.64645 8.35345L2.6465 6.3535C2.45127 6.15827 2.45127 5.84173 2.6465 5.6465C2.84174 5.45127 3.15827 5.45127 3.3535 5.6465L5 7.293L8.6465 3.6465C8.84174 3.45127 9.15827 3.45127 9.3535 3.6465C9.54873 3.84173 9.54873 4.15827 9.3535 4.3535L5.35356 8.35345Z"
                            fill="#1A94FF"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className={cx("item-title")}>
                      Bạn đã nhận được coupon
                    </div>
                  </div>
                  <div className={cx("item-rest")}>
                    <div className={cx("item-date")}>07/11</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("right-content")}>
          <div
            id="header-message-detail"
            className={cx("message-detail-header")}
          >
            <a className={cx("detail-header-wrapper")} target="">
              <div className={cx("detail-header-avatar")}>
                <div type="one" size="36" className={cx("avatar-by-name")}>
                  A
                </div>
              </div>
              <div className={cx("detail-header-infor")}>
                <div className={cx("info__name")}>
                  <span>Đầm YuRin</span>
                  <div className={cx("icon-verify")}>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 0C4.81331 0 3.65328 0.351894 2.66658 1.01118C1.67989 1.67047 0.910851 2.60754 0.456725 3.7039C0.00259972 4.80026 -0.11622 6.00666 0.115291 7.17054C0.346802 8.33443 0.918247 9.40352 1.75736 10.2426C2.59648 11.0818 3.66557 11.6532 4.82946 11.8847C5.99335 12.1162 7.19975 11.9974 8.2961 11.5433C9.39246 11.0892 10.3295 10.3201 10.9888 9.33342C11.6481 8.34673 12 7.18669 12 6C11.9954 4.41012 11.3618 2.88668 10.2375 1.76246C9.11332 0.638241 7.58988 0.00461698 6 0ZM5.35356 8.35345C5.15829 8.54871 4.84171 8.54871 4.64645 8.35345L2.6465 6.3535C2.45127 6.15827 2.45127 5.84173 2.6465 5.6465C2.84174 5.45127 3.15827 5.45127 3.3535 5.6465L5 7.293L8.6465 3.6465C8.84174 3.45127 9.15827 3.45127 9.3535 3.6465C9.54873 3.84173 9.54873 4.15827 9.3535 4.3535L5.35356 8.35345Z"
                        fill="#1A94FF"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            <div className={cx("detail-header-icon")}>
              <div className={cx("detail-icon")}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="https://www.w3.org/2000/svg"
                >
                  <mask
                    id="dots"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="7"
                    width="18"
                    height="4"
                  >
                    <path
                      d="M9 10.5C9.82843 10.5 10.5 9.82843 10.5 9C10.5 8.17157 9.82843 7.5 9 7.5C8.17157 7.5 7.5 8.17157 7.5 9C7.5 9.82843 8.17157 10.5 9 10.5Z"
                      fill="#38383D"
                    ></path>
                    <path
                      d="M2.25 10.5C3.07843 10.5 3.75 9.82843 3.75 9C3.75 8.17157 3.07843 7.5 2.25 7.5C1.42157 7.5 0.75 8.17157 0.75 9C0.75 9.82843 1.42157 10.5 2.25 10.5Z"
                      fill="#38383D"
                    ></path>
                    <path
                      d="M15.75 10.5C16.5784 10.5 17.25 9.82843 17.25 9C17.25 8.17157 16.5784 7.5 15.75 7.5C14.9216 7.5 14.25 8.17157 14.25 9C14.25 9.82843 14.9216 10.5 15.75 10.5Z"
                      fill="#38383D"
                    ></path>
                  </mask>
                  <g mask="url(#dots)">
                    <rect width="18" height="18" fill="#38383D"></rect>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className={cx("message-detail-outer")}>
            <div
              id="message-detail-infinity"
              className={cx("message-detail-inner")}
            >
              <div className={cx("infinite-scroll-component__outerdiv")}>
                <div className={cx("infinite-scroll-component")}>
                  <div className={cx("message-item")}>
                    <div className={cx("message-item-inner")}>
                      <div className={cx("message-item-wrapper-avatar")}>
                        <div size="24" className={cx("avatar-wrapper")}>
                          <div
                            style={{
                              display: "block",
                              overflow: "hidden",
                              position: "absolute",
                              inset: "0px",
                              boxSizing: "border-box",
                              margin: "0px",
                            }}
                          >
                            <img
                              alt="AHABOOKS"
                              className="styles__StyledAvatar-sc-djljgk-1 eizUKP"
                              sizes="100vw"
                              srcSet="https://chat-service.tiki.vn/_next/image?url=https%3A%2F%2Fvcdn.tikicdn.com%2Fts%2Fseller%2F7c%2Fb8%2Fe1%2F357f6a5d18da8daa4e9060a6b7eb9d5f.png&w=828&q=75"
                              src="https://chat-service.tiki.vn/_next/image?url=https%3A%2F%2Fvcdn.tikicdn.com%2Fts%2Fseller%2F7c%2Fb8%2Fe1%2F357f6a5d18da8daa4e9060a6b7eb9d5f.png&w=828&q=75"
                              decoding="async"
                              data-nimg="fill"
                              style={{
                                display: "block",
                                overflow: "hidden",
                                position: "absolute",
                                inset: "0px",
                                boxSizing: "border-box",
                                padding: "0px",
                                border: "none",
                                margin: "auto",
                                height: "0px",
                                width: "0px",
                                maxWidth: "100%",
                                minWidth: "100%",
                                maxHeight: "100%",
                                minHeight: "100%",
                                objectFit: "contain",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className={cx("message-item-wrapper")}>
                        <div className={cx("message-item-content")}>
                          <div className={cx("message-item-text")}>
                            dạ, sách mới, ko có bọc nilon anh ạ
                          </div>
                          <div className={cx("message-bottom-infor")}>
                            <div className={cx("message-item-time")}>11:15</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx("message-item")}>
                    <div className={cx("message-item-inner")}>
                      <div className={cx("message-item-wrapper-sender")}>
                        <div className={cx("message-item-content")}>
                          <div className={cx("message-item-text")}>
                            dạ, sách mới, ko có bọc nilon anh ạ
                          </div>
                          <div className={cx("message-bottom-infor")}>
                            <div className={cx("message-item-time")}>11:15</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx("message-item")}>
                    <div className={cx("message-item-inner")}>
                      <div className={cx("message-item-wrapper-avatar")}>
                        <div size="24" className={cx("avatar-wrapper")}>
                          <div
                            style={{
                              display: "block",
                              overflow: "hidden",
                              position: "absolute",
                              inset: "0px",
                              boxSizing: "border-box",
                              margin: "0px",
                            }}
                          >
                            <img
                              alt="AHABOOKS"
                              className="styles__StyledAvatar-sc-djljgk-1 eizUKP"
                              sizes="100vw"
                              srcSet="https://chat-service.tiki.vn/_next/image?url=https%3A%2F%2Fvcdn.tikicdn.com%2Fts%2Fseller%2F7c%2Fb8%2Fe1%2F357f6a5d18da8daa4e9060a6b7eb9d5f.png&w=828&q=75"
                              src="https://chat-service.tiki.vn/_next/image?url=https%3A%2F%2Fvcdn.tikicdn.com%2Fts%2Fseller%2F7c%2Fb8%2Fe1%2F357f6a5d18da8daa4e9060a6b7eb9d5f.png&w=828&q=75"
                              decoding="async"
                              data-nimg="fill"
                              style={{
                                display: "block",
                                overflow: "hidden",
                                position: "absolute",
                                inset: "0px",
                                boxSizing: "border-box",
                                padding: "0px",
                                border: "none",
                                margin: "auto",
                                height: "0px",
                                width: "0px",
                                maxWidth: "100%",
                                minWidth: "100%",
                                maxHeight: "100%",
                                minHeight: "100%",
                                objectFit: "contain",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className={cx("message-item-wrapper")}>
                        <div className={cx("message-item-content")}>
                          <div className={cx("message-item-text")}>
                            dạ, sách mới, ko có bọc nilon anh ạ
                          </div>
                          <div className={cx("message-bottom-infor")}>
                            <div className={cx("message-item-time")}>11:15</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx("message-item")}>
                    <div className={cx("message-item-inner")}>
                      <div className={cx("message-item-wrapper-sender")}>
                        <div className={cx("message-item-content")}>
                          <div className={cx("message-item-text")}>
                            dạ, sách mới, ko có bọc nilon anh ạ
                          </div>
                          <div className={cx("message-bottom-infor")}>
                            <div className={cx("message-item-time")}>11:15</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="message-inputs" className={cx("message-action-wrapper")}>
            <div className={cx("message-input-inner")}>
              <label className={cx("message-input-btn")}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="https://www.w3.org/2000/svg"
                >
                  <mask
                    id="image"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="18"
                    height="18"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.750006 3C0.750006 1.75736 1.75737 0.75 3.00001 0.75H15C16.2426 0.75 17.25 1.75736 17.25 3V15C17.25 16.2426 16.2426 17.25 15 17.25H13.5007C13.5003 17.25 13.4998 17.25 13.4993 17.25H3.00001C1.75737 17.25 0.750006 16.2426 0.750006 15V11.6284C0.749998 11.6263 0.749998 11.6242 0.750006 11.6221V3ZM2.25001 11.959V15C2.25001 15.4142 2.58579 15.75 3.00001 15.75H11.6893L5.22283 9.28348L2.25001 11.959ZM13.8107 15.75L5.78034 7.71967C5.49827 7.43761 5.04478 7.42568 4.74828 7.69253L2.25001 9.94098V3C2.25001 2.58579 2.58579 2.25 3.00001 2.25H15C15.4142 2.25 15.75 2.58579 15.75 3V15C15.75 15.4142 15.4142 15.75 15 15.75H13.8107ZM12 6C11.5858 6 11.25 6.33579 11.25 6.75C11.25 7.16421 11.5858 7.5 12 7.5C12.4142 7.5 12.75 7.16421 12.75 6.75C12.75 6.33579 12.4142 6 12 6ZM9.75001 6.75C9.75001 5.50736 10.7574 4.5 12 4.5C13.2426 4.5 14.25 5.50736 14.25 6.75C14.25 7.99264 13.2426 9 12 9C10.7574 9 9.75001 7.99264 9.75001 6.75Z"
                      fill="#0B74E5"
                    ></path>
                  </mask>
                  <g mask="url(#image)">
                    <rect width="18" height="18" fill="#0B74E5"></rect>
                  </g>
                </svg>
                <input
                  aria-label="file"
                  multiple=""
                  type="file"
                  accept="image/*"
                  className="styles__StyledMessageInputsFile-sc-vanpsk-2 bAumrE"
                />
              </label>
              <div className={cx("input-message")}>
                <textarea
                  placeholder="Nhập nội dung chat..."
                  id="input-chat"
                ></textarea>
                <div id="input-chat-send" className={cx("input-message-icon")}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.01171 0.93071C1.23685 0.73762 1.55463 0.695347 1.82242 0.822865L17.5724 8.32287C17.8336 8.44724 18 8.71073 18 9.00001C18 9.28929 17.8336 9.55278 17.5724 9.67716L1.82242 17.1772C1.55463 17.3047 1.23685 17.2624 1.01171 17.0693C0.786571 16.8762 0.696372 16.5686 0.7816 16.2845L2.96696 9.00001L0.7816 1.71552C0.696372 1.43143 0.786571 1.1238 1.01171 0.93071ZM4.308 9.75001L2.70424 15.0959L13.9305 9.75001H4.308ZM13.9305 8.25001H4.308L2.70424 2.90417L13.9305 8.25001Z"
                      fill="#C4C4CF"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ChatConservation.getLayout = (page) => (
  <ChatServiceLayout>{page}</ChatServiceLayout>
);

export default ChatConservation;
