import CheckoutLayout from "@/components/Layouts/CheckoutLayout";
import styles from "./payment.module.scss";
import classNames from "classnames/bind";
import CartDelivery from "@/container/Cart/CartDelivery";
import Promotion from "@/container/Cart/Promotion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { createOrder } from "@/redux/slice/orderReducer";
import { useDispatch } from "react-redux";

const cx = classNames.bind(styles);
function Payment() {
  const router = useRouter();
  const dispatch = useDispatch();
  const array = router.query.array;
  const finalPrice = parseInt(router.query.finalPrice);
  const arrItems = JSON.parse(array);

  const [checkedItems, setCheckedItems] = useState([]);
  const [checkedIdArr, setCheckedIdArr] = useState([]);
  useEffect(() => {
    var checkedArr = [];
    arrItems.map((item) => {
      checkedArr = [...checkedArr, item.cartItem_id];
    });
    setCheckedIdArr(checkedArr);
    setCheckedItems(arrItems);
  }, []);

  const currencyFormat = (num) => {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + " ₫";
  };
  const handlePlaceOrder = () => {
    console.log(checkedIdArr);
    dispatch(createOrder(checkedIdArr, 1));
    router.push({
      pathname: "/checkout/payment/success",
      query: {
        array: array,
        finalPrice: finalPrice,
      },
    });
  };
  return (
    <div className={cx("payment-wrapper")}>
      <div className={cx("payment-container")}>
        <div className={cx("payment-content")}>
          <div className={cx("left-content")}>
            <section className={cx("delivery-method")}>
              <h3 className={cx("payment-heading")}>
                Chọn hình thức giao hàng
              </h3>
              <div className={cx("delivery-method-wrapper")}>
                <div className={cx("delivery-method-container")}>
                  <label className={cx("radio-button")}>
                    <input
                      type="radio"
                      readOnly=""
                      className={cx("shipping-method")}
                      value="11"
                    />
                    <span className={cx("radio-fake")}></span>
                    <span className={cx("label")}>
                      <div className={cx("text-wrapper")}>
                        <span className={cx("method-text")}>
                          Giao tiết kiệm
                        </span>
                        <span className={cx("freeship-badge")}>-30K</span>
                      </div>
                    </span>
                  </label>
                  <div className={cx("text-support")}>
                    Có 3 sản phẩm hỗ trợ hình thức này
                  </div>
                </div>
                <img
                  className={cx("methods-arrow")}
                  src="https://salt.tikicdn.com/ts/upload/05/9e/d8/f13e86df128f19d197397e44924f9616.png"
                  width="32"
                ></img>
              </div>
              <div className={cx("delivery-package-wrapper")}>
                <div className={cx("deliver-item")}>
                  <div className={cx("delivery-timestamp")}>
                    <div className={cx("package-title")}>
                      <img
                        width="24"
                        height="24"
                        alt="icon"
                        src="https://salt.tikicdn.com/ts/upload/ad/b7/93/7094a85d0b6d299f30ed89b03511deb9.png"
                      />
                      Giao thứ 2, trước 19h, 23/10
                    </div>
                  </div>
                  <div className={cx("left-content")}>
                    <div className={cx("package-summary")}>
                      <div className={cx("package-heading")}>
                        <span className={cx("method-text")}>
                          Giao tiết kiệm
                        </span>
                      </div>
                      <div className={cx("shipping-fee")}>
                        <span className={cx("original-fee")}>22.000 ₫</span>
                        <span className={cx("current-fee")}>11.300 ₫</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="info-icon"
                          background="#ffffff"
                          aria-describedby="popup-20"
                        >
                          <path
                            d="M12.75 11.25C12.75 10.8358 12.4142 10.5 12 10.5C11.5858 10.5 11.25 10.8358 11.25 11.25V15.75C11.25 16.1642 11.5858 16.5 12 16.5C12.4142 16.5 12.75 16.1642 12.75 15.75V11.25Z"
                            fill="#808089"
                          ></path>
                          <path
                            d="M12.75 8.25C12.75 8.66421 12.4142 9 12 9C11.5858 9 11.25 8.66421 11.25 8.25C11.25 7.83579 11.5858 7.5 12 7.5C12.4142 7.5 12.75 7.83579 12.75 8.25Z"
                            fill="#808089"
                          ></path>
                          <path
                            fillRule="evenodd"
                            d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12Z"
                            fill="#808089"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className={cx("package-item-list")}>
                      {checkedItems &&
                        checkedItems.length > 0 &&
                        checkedItems.map((item, index) => {
                          return (
                            <div className={cx("package-item")} key={index}>
                              <div className={cx("item-icon")}>
                                <img
                                  src={item.productImage}
                                  alt="icon"
                                  width="48"
                                  height="48"
                                  className={cx("info__price")}
                                />
                              </div>
                              <div className={cx("item-info")}>
                                <div className={cx("item-info__first-line")}>
                                  <span
                                    className={cx("item-info__product-name")}
                                    title={item.productName}
                                  >
                                    {item.productName}
                                  </span>
                                </div>
                                <div className={cx("item-info__second-line")}>
                                  <div className={cx("item-info__qty")}>
                                    SL: x{item.quantity}
                                  </div>
                                  <div className={cx("item-info__price")}>
                                    {currencyFormat(item.productSalePrice)}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                  <div className={cx("right-content")}>
                    <div className={cx("logistic-wrapper")}>
                      <svg
                        className={cx("fulfillment-icon")}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 4.5C3 4.08579 3.33579 3.75 3.75 3.75H10.5C10.9142 3.75 11.25 4.08579 11.25 4.5V6.75H16.5C16.8442 6.75 17.1441 6.98422 17.2276 7.3181L17.8939 9.98345L20.5854 11.3292C20.8395 11.4562 21 11.7159 21 12V16.5C21 16.9142 20.6642 17.25 20.25 17.25H17.25C17.25 18.9069 15.9069 20.25 14.25 20.25C12.5931 20.25 11.25 18.9069 11.25 17.25H10.5C10.0858 17.25 9.75 16.9142 9.75 16.5V5.25H3.75C3.33579 5.25 3 4.91421 3 4.5ZM12.8306 16.7635C12.834 16.7546 12.8372 16.7455 12.8402 16.7364C13.0499 16.1609 13.602 15.75 14.25 15.75C14.898 15.75 15.4501 16.1609 15.6598 16.7364C15.6628 16.7455 15.666 16.7546 15.6694 16.7635C15.7216 16.9161 15.75 17.0797 15.75 17.25C15.75 18.0784 15.0784 18.75 14.25 18.75C13.4216 18.75 12.75 18.0784 12.75 17.25C12.75 17.0797 12.7784 16.9161 12.8306 16.7635ZM16.8487 15.75C16.3299 14.8533 15.3604 14.25 14.25 14.25C13.1396 14.25 12.1701 14.8533 11.6513 15.75H11.25V8.25H15.9144L16.5224 10.6819C16.5755 10.8943 16.7188 11.0729 16.9146 11.1708L19.5 12.4635V15.75H16.8487ZM3 8.25C3 7.83579 3.33579 7.5 3.75 7.5H7.5C7.91421 7.5 8.25 7.83579 8.25 8.25C8.25 8.66421 7.91421 9 7.5 9H3.75C3.33579 9 3 8.66421 3 8.25ZM13.5 9C13.9142 9 14.25 9.33579 14.25 9.75V10.5H15C15.4142 10.5 15.75 10.8358 15.75 11.25C15.75 11.6642 15.4142 12 15 12H13.5C13.0858 12 12.75 11.6642 12.75 11.25V9.75C12.75 9.33579 13.0858 9 13.5 9ZM4.5 12C4.5 11.5858 4.83579 11.25 5.25 11.25H7.5C7.91421 11.25 8.25 11.5858 8.25 12C8.25 12.4142 7.91421 12.75 7.5 12.75H5.25C4.83579 12.75 4.5 12.4142 4.5 12ZM6 15.75C6 15.3358 6.33579 15 6.75 15H7.5C7.91421 15 8.25 15.3358 8.25 15.75C8.25 16.1642 7.91421 16.5 7.5 16.5H6.75C6.33579 16.5 6 16.1642 6 15.75Z"
                          fill="#38383D"
                        ></path>
                      </svg>
                      <div>
                        <p className={cx("fulfillment-text")}>
                          Được giao bởi TikiNOW Smart Logistics (giao từ Hồ Chí
                          Minh)
                        </p>
                        <p className="fulfillment-text fulfillment-text--warning"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={cx("payment-method")}>
              <h3 className={cx("payment-heading")}>
                Chọn hình thức thanh toán
              </h3>
              <div className={cx("payment-method-wrapper")}>
                <label className={cx("payment-method-item")}>
                  <input
                    type="radio"
                    readOnly=""
                    className={cx("payment-method-checkbox")}
                    value="cod"
                  />
                  <span className={cx("radio-fake")}></span>
                  <span className={cx("label")}>
                    <div className={cx("payment-method-box-wrapper")}>
                      <div className={cx("payment-method-box")}>
                        <img
                          className={cx("method-icon")}
                          src="https://salt.tikicdn.com/ts/upload/92/b2/78/1b3b9cda5208b323eb9ec56b84c7eb87.png"
                          width="32"
                          height="32"
                          alt="icon"
                        />
                        <div className={cx("method-content")}>
                          <div className={cx("method-content__title")}>
                            <span>Thanh toán tiền mặt khi nhận hàng</span>
                          </div>
                          <div
                            className={cx(
                              "method-content__sub-title method-content__sub-title--undefined"
                            )}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </span>
                </label>
              </div>
            </section>
          </div>
          <div className={cx("right-content")}>
            <CartDelivery
              name={"Student name"}
              phoneNuber={"0578492192"}
              address={
                "Trường ĐH Công Nghệ Thông Tin KP6, Linh Trung, Tp.Thủ Đức"
              }
            />
            <Promotion />
            <div className={cx("total-amount-area")}>
              <div className={cx("block-header")}>
                <div className={cx("title-row")}>
                  <h3 className={cx("block-header__title")}>Đơn hàng</h3>
                  <a className={cx("block-header__nav")} href="/checkout/cart">
                    Thay đổi
                  </a>
                </div>
                <div className={cx("sub-title-row")}>
                  <p className={cx("sub-title-text")}>1 sản phẩm.</p>
                  <p className={cx("sub-title-link")}>
                    Xem thông tin
                    <svg
                      className={cx("sub-title-link__arrow")}
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.96967 8.46967C10.2626 8.17678 10.7374 8.17678 11.0303 8.46967L14.0303 11.4697C14.3232 11.7626 14.3232 12.2374 14.0303 12.5303L11.0303 15.5303C10.7374 15.8232 10.2626 15.8232 9.96967 15.5303C9.67678 15.2374 9.67678 14.7626 9.96967 14.4697L12.4393 12L9.96967 9.53033C9.67678 9.23744 9.67678 8.76256 9.96967 8.46967Z"
                        fill="#0B74E5"
                      ></path>
                    </svg>
                  </p>
                </div>
              </div>
              <div className={cx("list-wrapper")}>
                <div className={cx("list-container")}>
                  {checkedItems &&
                    checkedItems.length > 0 &&
                    checkedItems.map((item, index) => {
                      return (
                        <div className={cx("list-content")} key={index}>
                          <div className={cx("item-info")}>
                            <div className={cx("item-info__qty")}>1 x</div>
                            <div className={cx("item-info__name")}>
                              {item.productName}
                            </div>
                          </div>
                          <div className={cx("item-price")}>
                            {currencyFormat(item.productSalePrice)}
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className={cx("provisional")}>
                <span>Tạm tính</span>
                <span className={cx("price")}>
                  {currencyFormat(finalPrice)}
                </span>
              </div>
              <div className={cx("total")}>
                <span>Tổng tiền</span>
                <div className={cx("total-price")}>
                  <span className={cx("price-final")}>
                    {finalPrice === 0 ? (
                      <span>Vui lòng chọn sản phẩm</span>
                    ) : (
                      currencyFormat(finalPrice)
                    )}
                  </span>
                  <span>(Đã bao gồm VAT nếu có)</span>
                </div>
              </div>
              <div className={cx("freeship")}>
                <img
                  src="https://salt.tikicdn.com/ts/upload/70/f9/77/3b172be9ee58c8104fe8a4d40c4f5633.png"
                  alt=""
                  width="81"
                  data-selected="true"
                  data-label-id="0"
                  data-metatip="true"
                />
                <span>đã được áp dụng!</span>
              </div>
            </div>
            <button className={cx("btnBtn")} onClick={handlePlaceOrder}>
              Đặt Hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Payment.getLayout = (page) => <CheckoutLayout>{page}</CheckoutLayout>;

export default Payment;
