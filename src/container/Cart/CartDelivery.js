import styles from "./CartContainer.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function CartDelivery({ name, phoneNuber, address }) {
  return (
    <div className={cx("delivery-area")}>
      <div className={cx("delivery-text")}>
        <h3>Giao tới</h3>
        <a className={cx("changeBtn")}>Thay đổi</a>
      </div>
      <div className={cx("delivery-user-infor")}>
        <h3 className={cx("delivery-name")}>{name}</h3>
        <i></i>
        <h3 className={cx("delivery-phone-number")}>{phoneNuber}</h3>
      </div>
      <p className={cx("delivery-address")}>{address}</p>
    </div>
  );
}

export default CartDelivery;
