import CheckoutLayout from "@/components/Layouts/CheckoutLayout";
import styles from "./success.module.scss";
import classNames from "classnames/bind";
import { useRouter } from "next/router";

const cx = classNames.bind(styles);
function Success() {
  const currencyFormat = (num) => {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + " ₫";
  };
  const router = useRouter();
  const array = router.query.array;
  const listItems = JSON.parse(array);
  const finalPrice = parseInt(router.query.finalPrice);
  // console.log(finalPrice);
  // console.log(listItems);

  return (
    <div className={cx("success-wrapper")}>
      <div className={cx("success-container")}>
        <div className={cx("left-content")}>
          <div className={cx("order-success-wrapper")}>
            <img
              className={cx("success-icon")}
              src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/tiki-mascot-congrat.svg"
              width="150"
              height="150"
              alt="icon"
            />
            <div className={cx("confetti-background")}></div>
            <div className={cx("success-content")}>
              <div className={cx("success-content__header")}>
                <h1 className={cx("title")}>Yay, đặt hàng thành công!</h1>
                <h3 className={cx("sub-title")}>
                  Chuẩn bị tiền mặt {currencyFormat(finalPrice)}
                </h3>
              </div>
              <div className={cx("success-content__summary")}>
                <div className={cx("summary-item")}>
                  <div className={cx("summary-item__label")}>
                    Phương thức thanh toán
                  </div>
                  <div className={cx("summary-item__value")}>
                    <div className={cx("value-wrapper")}>
                      <div className={cx("method-text")}>
                        Thanh toán tiền mặt
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cx("summary-item")}>
                  <div className={cx("summary-item__label")}>Tổng cộng</div>
                  <div className={cx("summary-item__value")}>
                    {currencyFormat(finalPrice)}
                  </div>
                </div>
              </div>
              <p className={cx("success-content__vat-text")}>
                (Đã bao gồm VAT nếu có)
              </p>
              <div className={cx("success-content__button")}>
                <button
                  className={cx("btn-back-to-homepage")}
                  onClick={() => {
                    router.push("/");
                  }}
                >
                  Quay về trang chủ
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("right-content")}>
          <div className={cx("order-packages")}>
            <div className={cx("order-packages-container")}>
              <div className={cx("order-package-header")}>
                <h4 className={cx("order-package-header__title")}>
                  Mã đơn hàng: 387821350
                </h4>
                <a
                  className={cx("order-package-header__link")}
                  target="_blank"
                  href="/sales/order/view/387821350?source_screen=order_success"
                >
                  Xem đơn hàng
                </a>
              </div>
              <div className={cx("order-package-divider")}></div>
              <div className={cx("order-package-body")}>
                <h4 className={cx("order-package-body__title")}>
                  Giao thứ 6, trước 19h, 27/10
                </h4>
                <div className={cx("order-package-body__items")}>
                  {listItems &&
                    listItems.length > 0 &&
                    listItems.map((item, index) => {
                      return (
                        <div className={cx("item-wrapper")} key={index}>
                          <div className={cx("item-container")}>
                            <div className={cx("item-icon")}>
                              <img
                                src={item.productImage}
                                alt="icon"
                                width="48"
                                height="48"
                                className={cx("webpimg-container")}
                              />
                            </div>
                            <div className={cx("item-name")}>
                              {/* <span className={cx("gift-label")}>Quà tặng</span> */}
                              <span title={item.productName}>
                                {item.productName}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
          <div className={cx("download-app")}>
            <h3 className={cx("downloadapp-title")}>
              Mua sắm tiết kiệm hơn trên ứng dụng Tiki!
            </h3>
            <div className={cx("store-list")}>
              <a
                rel="noreferrer"
                href="https://itunes.apple.com/vn/app/id958100553"
                target="_blank"
              >
                <img
                  className="store-list__item"
                  src="https://salt.tikicdn.com/ts/upload/49/a6/6a/48e5b9307942215d3754a0162e8694f1.png"
                  width="120"
                  height="40"
                  alt="appstore"
                />
              </a>
              <a
                rel="noreferrer"
                href="https://play.google.com/store/apps/details?id=vn.tiki.app.tikiandroid"
                target="_blank"
              >
                <img
                  className="store-list__item"
                  src="https://salt.tikicdn.com/ts/upload/c1/a2/b9/6f367d22657f94dcca9d798274687b42.png"
                  width="120"
                  height="40"
                  alt="playstore"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Success.getLayout = (page) => <CheckoutLayout>{page}</CheckoutLayout>;

export default Success;
