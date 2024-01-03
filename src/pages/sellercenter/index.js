import classNames from "classnames/bind";
import styles from "./sellercenter.module.scss";
import React, { useState } from "react";
import FullContentLayout from "@/components/Layouts/FullContentLayout/FullContentLayout";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const cx = classNames.bind(styles);
function SellerCenter() {
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Last name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string().required("password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassWord] = useState("");
  const [repassword, setRepassword] = useState("");

  const handleOnChange = (event, string) => {
    if (string === "email") {
      setEmail(event.target.value);
    } else if (string === "fullname") {
      setFullName(event.target.value);
    } else if (string === "phonenumber") {
      setPhoneNumber(event.target.value);
    } else if (string === "password") {
      setPassWord(event.target.value);
    } else {
      setRepassword(event.target.value);
    }
  };

  return (
    <div className={cx("register-wrapper")}>
      <div
        style={{
          display: " block",
          position: "absolute",
          zIndex: "9",
          background: " rgb(245, 245, 250)",
          top: "0px",
          left: "759.6px",
          width: "759.6px",
          height: "854px",
        }}
      ></div>
      <section>
        <div className={cx("language-chooser-container")}>
          {/* <div className={cx("ant-select")}>
            <div className={cx("ant-select-selector")}>
              <span className="ant-select-selection-search">
                <input
                  autoComplete="off"
                  type="search"
                  className="ant-select-selection-search-input"
                  role="combobox"
                  aria-haspopup="listbox"
                  aria-owns="rc_select_0_list"
                  aria-autoComplete="list"
                  aria-controls="rc_select_0_list"
                  aria-activedescendant="rc_select_0_list_0"
                  readonly=""
                  unselectable="on"
                  value=""
                  id="rc_select_0"
                />
              </span>
              <span className="ant-select-selection-item">
                <div className="LanguageChooser__Row-sc-1337x55-1 joJGgt">
                  <label className="ant-radio-wrapper ant-radio-wrapper-checked">
                    <span className="ant-radio ant-radio-checked">
                      <input
                        type="radio"
                        className="ant-radio-input"
                        value=""
                        checked=""
                      />
                      <span className="ant-radio-inner"></span>
                    </span>
                  </label>
                  <i className="CountryFlag__Flag-sc-1sxah41-0 dascZR"></i>
                  <span>Tiếng Việt</span>
                </div>
              </span>
            </div>
            <span
              className="ant-select-arrow"
              unselectable="on"
              aria-hidden="true"
            >
              <span
                role="img"
                aria-label="down"
                className="anticon anticon-down ant-select-suffix"
              >
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="down"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                </svg>
              </span>
            </span>
          </div> */}
        </div>
      </section>
      <section
        className={cx("register-form-section")}
        style={{ position: "relative" }}
      >
        <div className={cx("left-content")}>
          <div className={cx("intro-wrapper")}>
            <div className={cx("intro-container")}>
              <h1 className={cx("headline")}>
                Đăng ký bán hàng cùng
                <img
                  src="https://salt.tikicdn.com/ts/user/ee/09/6b/27a9c9764d0dbfd497c582e48bdc9c98.png"
                  alt="Tiki"
                  className="RegisterIntro__Logo-sc-148pvbs-2 idwPxb"
                />
              </h1>
              <div className={cx("sub-headline")}>
                <span>
                  Tiếp cận hơn
                  <span className={cx("sc-hl")}>
                    22 triệu lượt truy cập
                  </span>{" "}
                  mỗi tháng!
                </span>
              </div>
              <div className={cx("photo-container")}>
                <img
                  src="https://salt.tikicdn.com/cache/w680/ts/user/dc/e6/b4/fa5101071b365ee2f385fd7d208b309f.jpg"
                  alt="Be successful together with Tiki"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={cx("right-content")}>
          <div
            className={cx("register-form-wrapper")}
            style={{ position: "relative", zIndex: "10" }}
          >
            <div className={cx("register-form-container")}>
              <h2 className={cx("register-headline")}>Đăng ký ngay</h2>
              <form id="register" onSubmit={handleSubmit}>
                <div className={cx("input-area")}>
                  <div className={cx("input-label")}>
                    <div>
                      Địa chỉ email
                      <span className={cx("sc-tip")}>
                        <span
                          role="img"
                          aria-label="info-circle"
                          className={cx("anticon")}
                        >
                          <svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="info-circle"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                            <path d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path>
                          </svg>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className={cx("input-filed")}>
                    <input
                      {...register("email")}
                      name="email"
                      type="email"
                      id="email"
                      htmlFor="email"
                      placeholder="Nhập địa chỉ email"
                      className={cx("input-typing")}
                      value={email}
                      onChange={(e) => handleOnChange(e, "email")}
                    />
                    <span className="RegisterInput__SuffixStatusIcon-sc-b9zh6a-4 cbmaSl">
                      <span
                        role="img"
                        aria-label="close-circle"
                        className="anticon anticon-close-circle"
                      >
                        <svg
                          viewBox="64 64 896 896"
                          focusable="false"
                          data-icon="close-circle"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path>
                        </svg>
                      </span>
                    </span>
                    <div className={cx("text-red-500 ml-2 mt-2")}>
                      {errors.email?.message}
                    </div>
                  </div>
                </div>
                <div className={cx("input-area")}>
                  <div className={cx("input-label")}>
                    <div>Họ và tên</div>
                    <div className={cx("sc-description")}>
                      Điền họ và tên như trên giấy tờ tùy thân.
                      <span className={cx("sc-tip")}>
                        <span
                          role="img"
                          aria-label="info-circle"
                          className={cx("anticon")}
                        >
                          <svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="info-circle"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                            <path d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path>
                          </svg>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className={cx("input-filed")}>
                    <input
                      autoComplete="new-password"
                      placeholder="Nhập đầy đủ họ tên"
                      className={cx("input-typing")}
                      value={fullName}
                      onChange={(e) => handleOnChange(e, "fullname")}
                    />
                    {/* <span className="RegisterInput__SuffixStatusIcon-sc-b9zh6a-4 cbmaSl">
                      <span
                        role="img"
                        aria-label="close-circle"
                        className="anticon anticon-close-circle"
                      >
                        <svg
                          viewBox="64 64 896 896"
                          focusable="false"
                          data-icon="close-circle"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path>
                        </svg>
                      </span>
                    </span> */}
                  </div>
                </div>
                <div className={cx("input-area")}>
                  <div className={cx("input-label")}>
                    <div>Số điện thoại</div>
                  </div>
                  <div className={cx("input-filed")}>
                    <input
                      autoComplete="new-password"
                      type="tel"
                      placeholder="Nhập số điện thoại"
                      className={cx("input-typing")}
                      value={phoneNumber}
                      onChange={(e) => handleOnChange(e, "phonenumber")}
                    />
                  </div>
                </div>
                <div className={cx("input-area")}>
                  <div className={cx("input-label")}>
                    <div>
                      Ngành hàng chủ lực
                      <span className={cx("sc-tip")}>
                        <span
                          role="img"
                          aria-label="info-circle"
                          className={cx("anticon")}
                        >
                          <svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="info-circle"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                            <path d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path>
                          </svg>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className={cx("input-filed")}>
                    <select className={cx("input-select")}>
                      <option>Thiết Bị Số - Phụ Kiện Số</option>
                    </select>
                  </div>
                </div>
                <div className={cx("input-area")}>
                  <div className={cx("input-label")}>
                    <div>Mật khẩu</div>
                  </div>
                  <div className={cx("input-filed")}>
                    <input
                      autoComplete="new-password"
                      type="password"
                      placeholder="Nhập mật khẩu"
                      className={cx("input-typing")}
                      value={password}
                      onChange={(e) => handleOnChange(e, "password")}
                    />
                    <span className="RegisterInput__SuffixIcon-sc-b9zh6a-3 iUrBIW">
                      <span
                        role="img"
                        aria-label="eye-invisible"
                        className="anticon anticon-eye-invisible"
                      >
                        <svg
                          viewBox="64 64 896 896"
                          focusable="false"
                          data-icon="eye-invisible"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"></path>
                          <path d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"></path>
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>
                <div className={cx("input-area")}>
                  <div className={cx("input-label")}>
                    <div>Xác nhận mật khẩu</div>
                  </div>
                  <div className={cx("input-filed")}>
                    <input
                      autoComplete="new-password"
                      type="password"
                      className={cx("input-typing")}
                      value={repassword}
                      onChange={(e) => handleOnChange(e, "repassword")}
                    />
                    <span className="RegisterInput__SuffixIcon-sc-b9zh6a-3 iUrBIW">
                      <span
                        role="img"
                        aria-label="eye-invisible"
                        className="anticon anticon-eye-invisible"
                      >
                        <svg
                          viewBox="64 64 896 896"
                          focusable="false"
                          data-icon="eye-invisible"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"></path>
                          <path d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"></path>
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>
                <div className={cx("signup-are")}>
                  <button type="submit">
                    <span>Đăng ký ngay</span>
                  </button>
                  <div className={cx("footer-singup")}>
                    Đã có tài khoản bán hàng?
                    <a
                      href="/new#/user/login"
                      className="ant-btn ant-btn-link btnLogin"
                    >
                      <span>Đăng nhập</span>
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={cx("footer-container")}>
          <div
            className={cx("footer-content")}
            style={{
              marginLeft: "-32px",
              marginRight: "-32px",
              gap: "50px",
            }}
          >
            <div className={cx("footer-col")} style={{ padding: "0 32px" }}>
              <div className={cx("footer-block")}>
                <div
                  className={cx("footer-illustration")}
                  style={{
                    backgroundImage: `url(https://salt.tikicdn.com/ts/user/fa/31/98/4274d22438e2359f0ff7de1afe2fcf5a.png)`,
                  }}
                ></div>
                <div className={cx("footer-text")}>
                  <h4 className={cx("footer-title")}>
                    Sàn thương mại điện tử được tin tưởng nhất Việt Nam
                  </h4>
                  <p className={cx("footer-des")}>
                    Tiki luôn hoàn thiện mình để mang đến những trải nghiệm tốt
                    nhất cho cả Khách Hàng và Nhà Bán. Với 100% hàng chính hãng
                    và hơn 95% Khách Hàng hài lòng, Tiki xứng đáng là sàn TMĐT
                    được tin tưởng nhất Việt Nam.
                  </p>
                </div>
              </div>
            </div>
            <div className={cx("footer-col")} style={{ padding: "0 32px" }}>
              <div className={cx("footer-block")}>
                <div
                  className={cx("footer-illustration")}
                  style={{
                    backgroundImage: `url(https://salt.tikicdn.com/ts/user/77/10/04/4c528effdbb6f98b15a1536f43a3cf27.png)`,
                  }}
                ></div>
                <div className={cx("footer-text")}>
                  <h4 className={cx("footer-title")}>
                    Chi phí bán hàng cạnh tranh{" "}
                  </h4>
                  <p className={cx("footer-des")}>
                    Tiki mang đến cơ hội kinh doanh online cho Nhà Bán với mức
                    phí chiết khấu và phí thanh toán rẻ nhất thị trường. Đồng
                    thời, phí vận chuyện cực kỳ cạnh tranh sẽ hỗ trợ tỷ lệ
                    chuyển đổi đơn hàng hiệu quả hơn bao giờ hết.
                  </p>
                </div>
              </div>
            </div>
            <div className={cx("footer-col")} style={{ padding: "0 32px" }}>
              <div className={cx("footer-block")}>
                <div
                  className={cx("footer-illustration")}
                  style={{
                    backgroundImage: `url(	https://salt.tikicdn.com/ts/user/b1/06/31/058c5bd5233f3c5558424ba3e371f558.png)`,
                  }}
                ></div>
                <div className={cx("footer-text")}>
                  <h4 className={cx("footer-title")}>Dịch vụ TikiNOW 2h</h4>
                  <p className={cx("footer-des")}>
                    Duy nhất trên thị trường TMĐT, dịch vụ TikiNOW 2h giúp Nhà
                    Bán trong nước giao hàng trăm ngàn sản phẩm cho Khách Hàng
                    chỉ trong 2 giờ.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    // <div className="my-8 mx-8">
    //   <form onSubmit={handleSubmit()} id="reset">
    //     <div className="py-1">
    //       <label className="text-gray-600 font-medium" htmlFor="first_name">
    //         First Name :
    //       </label>
    //       <div className="py-2">
    //         <input
    //           {...register("first_name")}
    //           name="first_name"
    //           type="text"
    //           className="text-md px-2 text-gray-500 border w-[40rem] focus:outline-none focus:border-orange-500 rounded py-1"
    //           id="first_name"
    //         />
    //         <div className="text-red-500 ml-2 mt-2">
    //           {errors.first_name?.message}
    //         </div>
    //       </div>
    //     </div>
    //     <div className="py-1">
    //       <label className="text-gray-600 font-medium" htmlFor="last_name">
    //         Last Name :
    //       </label>
    //       <div className="py-2">
    //         <input
    //           {...register("last_name")}
    //           name="last_name"
    //           type="text"
    //           id="last_name"
    //           className="text-md px-2 text-gray-500 border w-[40rem] focus:outline-none focus:border-orange-500 rounded py-1"
    //         />
    //         <div className="text-red-500 ml-2 mt-2">
    //           {errors.last_name?.message}
    //         </div>
    //       </div>
    //     </div>
    //     <div className="py-1">
    //       <label className="text-gray-600 font-medium" htmlFor="email">
    //         Email :
    //       </label>
    //       <div className="py-2">
    //         <input
    //           {...register("email")}
    //           name="email"
    //           type="text"
    //           id="email"
    //           className="text-md  px-2 text-gray-500 border w-[40rem] focus:outline-none focus:border-orange-500 rounded py-1"
    //         />
    //         <div className="text-red-500 ml-2 mt-2">
    //           {errors.email?.message}
    //         </div>
    //       </div>
    //     </div>
    //     <div className="py-1">
    //       <label className="text-gray-600 font-medium" htmlFor="password">
    //         Password :
    //       </label>
    //       <div className="py-2">
    //         <input
    //           {...register("password")}
    //           name="password"
    //           type="password"
    //           id="password"
    //           className="text-md px-2 text-gray-500 border w-[40rem] focus:outline-none focus:border-orange-500 rounded py-1"
    //         />
    //         <div className="text-red-500 ml-2 mt-2">
    //           {errors.password?.message}
    //         </div>
    //       </div>
    //     </div>
    //     <button
    //       type="submit"
    //       className="border focus:border-1  focus:outline-none focus:border-green-600 px-5 py-1.5 rounded bg-green-500 text-white font-bold hover:bg-green-600"
    //     >
    //       submit
    //     </button>
    //   </form>
    // </div>
  );
}

SellerCenter.getLayout = (page) => (
  <FullContentLayout>{page}</FullContentLayout>
);
export default SellerCenter;
