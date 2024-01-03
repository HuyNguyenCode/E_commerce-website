import classNames from "classnames/bind";
import styles from "./chatbotiframe.module.scss";
import { useState } from "react";
import ChatServiceLayout from "@/components/Layouts/ChatServiceLayout/ChatServiceLayout";
const cx = classNames.bind(styles);
const ChatService = () => {
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

  const handleCloseIframe = () => {
    window.parent.postMessage("closeIframe", "*");
  };

  return (
    <div className={cx("chatbox-wrapper")}>
      <div className={cx("chatbox-container")}>
        <div className={cx("chatbox-content")}>
          <div className={cx("chatbox-content-wrapper")}>
            <div className={cx("chatbox-content-container")}>
              <div className={cx("chatbox-content-childcontent")}>
                <div className={cx("chatbox-childcontent-wrapper")}>
                  <div className={cx("visible-content")}></div>
                  <div className={cx("chatbox-childcontent-container")}>
                    <div className={cx("chatbox-childcontent-content")}>
                      <div className={cx("chatbox-upcontent")}>
                        <div className={cx("upcontent-container")}>
                          <div className={cx("chatbox-header")}>
                            <div className={cx("chatbox-header-container")}>
                              <div
                                className={cx("chatbox-dropdown")}
                                onClick={handleShowChatMode}
                              >
                                <div className={cx("dropdown-box")}>
                                  <div
                                    spacing="2"
                                    className={cx("dropdown-container")}
                                  >
                                    <div className={cx("avartar-container")}>
                                      <div
                                        id="menu-mode-icons"
                                        className={cx("menu-mode")}
                                      >
                                        <div className={cx("avartar-after")}>
                                          <div className={cx("chat-mode-item")}>
                                            <img
                                              alt="ai"
                                              src="https://salt.tikicdn.com/ts/ta/7f/77/cf/a2b2c31ea7b0ad4b2e7d0e6ef817241b.png"
                                            />
                                          </div>
                                        </div>
                                        <div className={cx("avartar-before")}>
                                          <div className={cx("chat-mode-item")}>
                                            <img
                                              alt="agent"
                                              src="https://salt.tikicdn.com/ts/ta/4e/cd/92/b3593adaf274fc49a6ace088ff96471b.png"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={cx("dropdown-text-container")}
                                    >
                                      <div
                                        className={cx("dropdown-text-content")}
                                      >
                                        <div
                                          className={cx("dropdown-text-box")}
                                        >
                                          <div
                                            spacing="1"
                                            className={cx("dropdown-text-area")}
                                          >
                                            <div
                                              className={cx("dropdown-text")}
                                            >
                                              <span type="default">
                                                Trợ lý AI
                                              </span>
                                            </div>
                                            <div className={cx("dropdown-btn")}>
                                              <div
                                                className={cx("dropdown-icon")}
                                              >
                                                <svg
                                                  width="20"
                                                  height="20"
                                                  viewBox="0 0 20 20"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M16.7071 6.29289C17.0976 6.68342 17.0976 7.31658 16.7071 7.70711L10.7071 13.7071C10.3166 14.0976 9.68342 14.0976 9.29289 13.7071L3.29289 7.70711C2.90237 7.31658 2.90237 6.68342 3.29289 6.29289C3.68342 5.90237 4.31658 5.90237 4.70711 6.29289L10 11.5858L15.2929 6.29289C15.6834 5.90237 16.3166 5.90237 16.7071 6.29289Z"
                                                    fill="#000"
                                                  ></path>
                                                </svg>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={cx("chatbox-btnfc")}>
                                <div
                                  spacing="3"
                                  className={cx("btnfc-wrapper")}
                                >
                                  {/* <div className={cx("btnfc-option")}>
                                    <div className={cx("option-icon")}>
                                      <svg
                                        width="40"
                                        height="40"
                                        viewBox="0 0 40 40"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M15 20C15 20.8284 14.3284 21.5 13.5 21.5C12.6716 21.5 12 20.8284 12 20C12 19.1716 12.6716 18.5 13.5 18.5C14.3284 18.5 15 19.1716 15 20Z"
                                          fill="#515158"
                                        ></path>
                                        <path
                                          d="M28 20C28 20.8284 27.3284 21.5 26.5 21.5C25.6716 21.5 25 20.8284 25 20C25 19.1716 25.6716 18.5 26.5 18.5C27.3284 18.5 28 19.1716 28 20Z"
                                          fill="#515158"
                                        ></path>
                                        <path
                                          d="M20 21.5C20.8284 21.5 21.5 20.8284 21.5 20C21.5 19.1716 20.8284 18.5 20 18.5C19.1716 18.5 18.5 19.1716 18.5 20C18.5 20.8284 19.1716 21.5 20 21.5Z"
                                          fill="#515158"
                                        ></path>
                                      </svg>
                                    </div>
                                  </div>
                                  <div className={cx("btnfc-expand")}>
                                    <div
                                      data-tooltip-id="sa-tooltip-desktop"
                                      data-tooltip-content="Mở rộng khung chat"
                                      className={cx("expand-icon")}
                                    >
                                      <svg
                                        width="40"
                                        height="40"
                                        viewBox="0 0 40 40"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M11 13C11 11.8954 11.8954 11 13 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H13V27H27V23C27 22.4477 27.4477 22 28 22C28.5523 22 29 22.4477 29 23V27C29 28.1046 28.1046 29 27 29H13C11.8954 29 11 28.1046 11 27V13ZM22 13C21.4477 13 21 12.5523 21 12C21 11.4477 21.4477 11 22 11H28C28.5523 11 29 11.4477 29 12V18C29 18.5523 28.5523 19 28 19C27.4477 19 27 18.5523 27 18V14.4142L18.7071 22.7071C18.3166 23.0976 17.6834 23.0976 17.2929 22.7071C16.9024 22.3166 16.9024 21.6834 17.2929 21.2929L25.5858 13H22Z"
                                          fill="#27272A"
                                        ></path>
                                      </svg>
                                    </div>
                                  </div> */}
                                  <div
                                    className={cx("btnfc-close")}
                                    onClick={handleCloseIframe}
                                  >
                                    <div
                                      data-tooltip-id="sa-tooltip-desktop"
                                      data-tooltip-content="Đóng khung chat"
                                      className={cx("close-icon")}
                                    >
                                      <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M3.57739 15.2441C3.25195 15.5695 3.25195 16.0971 3.57739 16.4226C3.90283 16.748 4.43047 16.748 4.7559 16.4226L9.99998 11.1785L15.2441 16.4226C15.5695 16.748 16.0971 16.748 16.4226 16.4226C16.748 16.0971 16.748 15.5695 16.4226 15.2441L11.1785 9.99998L16.4226 4.7559C16.748 4.43047 16.748 3.90283 16.4226 3.57739C16.0971 3.25195 15.5695 3.25195 15.2441 3.57739L9.99998 8.82147L4.7559 3.57739C4.43047 3.25196 3.90283 3.25196 3.57739 3.57739C3.25195 3.90283 3.25195 4.43047 3.57739 4.7559L8.82147 9.99998L3.57739 15.2441Z"
                                          fill="#515158"
                                        ></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className={cx("chatbox-option")}
                            id="select-modes-container"
                          >
                            <div
                              className={
                                chatMode
                                  ? cx("chatbox-option-wrapper")
                                  : cx("chatbox-option-wrapper disable")
                              }
                            >
                              <div className={cx("chatbox-option-item")}>
                                <div className={cx("chatbox-option-text")}>
                                  Chọn trợ lý bạn muốn trò chuyện
                                </div>
                              </div>
                              <div className={cx("chatbox-option-item")}>
                                <div className={cx("chatbox-option-select")}>
                                  <div
                                    className={cx("option-item")}
                                    onClick={() => handleSelectChatMode(1)}
                                  >
                                    <div
                                      className={cx("option-item-content")}
                                      style={
                                        mode === 1
                                          ? {
                                              border:
                                                "2px solid rgb(0, 171, 86)",
                                            }
                                          : {
                                              border:
                                                "2px solid rgb(235, 235, 240)",
                                            }
                                      }
                                    >
                                      <img
                                        className={cx("option-icon")}
                                        alt="ai"
                                        src="https://salt.tikicdn.com/ts/ta/7f/77/cf/a2b2c31ea7b0ad4b2e7d0e6ef817241b.png"
                                      />
                                      <img
                                        className={
                                          mode === 1
                                            ? cx("active-icon")
                                            : cx("active-icon disable")
                                        }
                                        src="https://salt.tikicdn.com/ts/ta/11/89/cf/082e2415ba038f41da030af7400f582f.png"
                                        width="20"
                                        height="20"
                                      />
                                    </div>
                                    <div className={cx("option-item-title")}>
                                      Hỏi Trợ lý AI
                                    </div>
                                  </div>
                                  <div
                                    className={cx("option-item")}
                                    onClick={() => handleSelectChatMode(2)}
                                  >
                                    <div
                                      className={cx("option-item-content")}
                                      style={
                                        mode === 2
                                          ? {
                                              border:
                                                "2px solid rgb(0, 171, 86)",
                                            }
                                          : {
                                              border:
                                                "2px solid rgb(235, 235, 240)",
                                            }
                                      }
                                    >
                                      <img
                                        className={cx("option-icon")}
                                        alt="agent"
                                        src="https://salt.tikicdn.com/ts/ta/4e/cd/92/b3593adaf274fc49a6ace088ff96471b.png"
                                      />
                                      <img
                                        className={
                                          mode === 2
                                            ? cx("active-icon")
                                            : cx("active-icon disable")
                                        }
                                        src="https://salt.tikicdn.com/ts/ta/11/89/cf/082e2415ba038f41da030af7400f582f.png"
                                        width="20"
                                        height="20"
                                      />
                                    </div>
                                    <div className={cx("option-item-title")}>
                                      Hỏi Trợ lý cá nhân
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="chatgpt-infinity"
                        className={cx("chatbox-midcontent")}
                      >
                        <div className={cx("chatbox-message-item")}>
                          <div className={cx("message-item-wrapper")}>
                            <div className={cx("message-item-icon")}>
                              <img
                                src="https://salt.tikicdn.com/ts/ta/7f/77/cf/a2b2c31ea7b0ad4b2e7d0e6ef817241b.png"
                                alt="Bot"
                                width="40"
                                height="40"
                              />
                            </div>
                          </div>
                          <div className={cx("message-item-area")}>
                            <div className={cx("message-bot")}>
                              <div className={cx("message-name")}>
                                <div className={cx("message-name-title")}>
                                  Trợ lý AI
                                </div>
                              </div>
                              <div className={cx("message-content")}>
                                <p>
                                  Xin chào! Mình là trợ lý AI của bạn tại Tiki.
                                  Mình đang phát triển nên không phải lúc nào
                                  cũng đúng. Bạn có thể phản hồi để giúp mình
                                  cải thiện tốt hơn.
                                </p>
                                <p>
                                  Mình sẵn sàng giúp bạn với câu hỏi về chính
                                  sách và tìm kiếm sản phẩm. Hôm nay bạn cần
                                  mình hỗ trợ gì hông? ^^
                                </p>
                              </div>
                            </div>
                            <div className={cx("message-question")}>
                              <div className={cx("message-question-item")}>
                                <div
                                  spacing="2"
                                  className={cx("question-item-container")}
                                >
                                  <div className={cx("question-item-content")}>
                                    <span type="default">
                                      Laptop nào phù hợp cho sinh viên công nghệ
                                      thông tin ?
                                    </span>
                                  </div>
                                  <div className={cx("question-item-content")}>
                                    <div className={cx("question-item-icon")}>
                                      <img
                                        className="fly-icon"
                                        alt="Xem chi tiết"
                                        src="https://salt.tikicdn.com/ts/ta/d7/a7/35/3b1c91d9a47ed359922a5d5ba64783cc.png"
                                        width="16"
                                        height="16"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={cx("message-question-item")}>
                                <div
                                  spacing="2"
                                  className={cx("question-item-container")}
                                >
                                  <div className={cx("question-item-content")}>
                                    <span type="default">
                                      Nên bắt đầu học guitar như thế nào ?
                                    </span>
                                  </div>
                                  <div className={cx("question-item-content")}>
                                    <div className={cx("question-item-icon")}>
                                      <img
                                        className="fly-icon"
                                        alt="Xem chi tiết"
                                        src="https://salt.tikicdn.com/ts/ta/d7/a7/35/3b1c91d9a47ed359922a5d5ba64783cc.png"
                                        width="16"
                                        height="16"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={cx("message-question-item")}>
                                <div
                                  spacing="2"
                                  className={cx("question-item-container")}
                                >
                                  <div className={cx("question-item-content")}>
                                    <span type="default">
                                      Có kem chống nắng nào phù hợp cho da dầu
                                      không ?
                                    </span>
                                  </div>
                                  <div className={cx("question-item-content")}>
                                    <div className={cx("question-item-icon")}>
                                      <img
                                        className="fly-icon"
                                        alt="Xem chi tiết"
                                        src="https://salt.tikicdn.com/ts/ta/d7/a7/35/3b1c91d9a47ed359922a5d5ba64783cc.png"
                                        width="16"
                                        height="16"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={cx("message-question-item")}>
                                <div
                                  spacing="2"
                                  className={cx("question-item-container")}
                                >
                                  <div className={cx("question-item-content")}>
                                    <span type="default">
                                      Làm sao để cải thiện chất lượng không khí
                                      trong nhà ?
                                    </span>
                                  </div>
                                  <div className={cx("question-item-content")}>
                                    <div className={cx("question-item-icon")}>
                                      <img
                                        className="fly-icon"
                                        alt="Xem chi tiết"
                                        src="https://salt.tikicdn.com/ts/ta/d7/a7/35/3b1c91d9a47ed359922a5d5ba64783cc.png"
                                        width="16"
                                        height="16"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={cx("chatbox-scroll-to-bottom")}>
                          <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g filter="url(#filter0_d_321_46221)">
                              <rect
                                x="8"
                                y="4"
                                width="32"
                                height="32"
                                rx="16"
                                fill="white"
                              ></rect>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24.0001 12.5C24.4603 12.5 24.8334 12.8731 24.8334 13.3333V24.6548L28.4108 21.0774C28.7363 20.752 29.2639 20.752 29.5893 21.0774C29.9148 21.4028 29.9148 21.9305 29.5893 22.2559L24.5893 27.2559C24.4331 27.4122 24.2211 27.5 24.0001 27.5C23.7791 27.5 23.5671 27.4122 23.4108 27.2559L18.4108 22.2559C18.0854 21.9305 18.0854 21.4028 18.4108 21.0774C18.7363 20.752 19.2639 20.752 19.5893 21.0774L23.1667 24.6548V13.3333C23.1667 12.8731 23.5398 12.5 24.0001 12.5Z"
                                fill="#515158"
                              ></path>
                              <rect
                                x="8.5"
                                y="4.5"
                                width="31"
                                height="31"
                                rx="15.5"
                                stroke="#DDDDE3"
                              ></rect>
                            </g>
                            <defs>
                              <filter
                                id="filter0_d_321_46221"
                                x="0"
                                y="0"
                                width="48"
                                height="48"
                                filterUnits="userSpaceOnUse"
                                color-interpolationfilters="sRGB"
                              >
                                <feFlood
                                  floodOpacity="0"
                                  result="BackgroundImageFix"
                                ></feFlood>
                                <feColorMatrix
                                  in="SourceAlpha"
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  result="hardAlpha"
                                ></feColorMatrix>
                                <feOffset dy="4"></feOffset>
                                <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                                <feComposite
                                  in2="hardAlpha"
                                  operator="out"
                                ></feComposite>
                                <feColorMatrix
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                                ></feColorMatrix>
                                <feBlend
                                  mode="normal"
                                  in2="BackgroundImageFix"
                                  result="effect1_dropShadow_321_46221"
                                ></feBlend>
                                <feBlend
                                  mode="normal"
                                  in="SourceGraphic"
                                  in2="effect1_dropShadow_321_46221"
                                  result="shape"
                                ></feBlend>
                              </filter>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <div
                        id="chatgpt-messages-input"
                        className={cx("chatbox-downcontent")}
                      >
                        <div className={cx("chatbox-input")}>
                          <textarea
                            autoComplete="off"
                            placeholder="Nhập nội dung chat"
                            rows="1"
                            id="input-chat"
                            className="styles__StyledTextareaAutosize-sc-pby2mu-3 jcfPjh"
                          ></textarea>
                          <div
                            id="input-chat-send"
                            className={cx("chatbox-send")}
                          >
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
                                fill="#c4c4cf"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className={cx("about-us")}>
                          Tích hợp trí tuệ nhân tạo, thông tin mang tính tham
                          khảo
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="styles__StyledWrapper-sc-x1rz36-0 deviFd"></div>
    </div>
  );
};

ChatService.getLayout = (page) => <ChatServiceLayout>{page}</ChatServiceLayout>;

export default ChatService;
