import classNames from "classnames/bind";
import styles from "./CheckoutFooter.module.scss";

const cx = classNames.bind(styles);

function CheckoutFooter() {
  return (
    <footer className={cx("footer-wrapper")}>
      <div className={cx("footer-container")}>
        <p className={cx("terms-text")}>
          Bằng việc tiến hành Đặt Mua, bạn đồng ý với các Điều kiện Giao dịch
          chung:
        </p>
        <p className={cx("terms")}>
          <a href="https://tiki.vn/quy-che-hoat-dong-sgdtmdt" target="_blank">
            Quy chế hoạt động
          </a>
          <i></i>
          <a
            href="https://hotro.tiki.vn/s/article/chinh-sach-giai-quyet-khieu-nai"
            target="_blank"
          >
            Chính sách giải quyết khiếu nại
          </a>
          <i></i>
          <a
            href="https://hotro.tiki.vn/s/article/chinh-sach-bao-hanh-tai-tiki-nhu-the-nao"
            target="_blank"
          >
            Chính sách bảo hành
          </a>
          <i></i>
          <a href="https://tiki.vn/bao-mat-thanh-toan" target="_blank">
            Chính sách bảo mật thanh toán
          </a>
          <i></i>
          <a href="https://tiki.vn/bao-mat-thong-tin-ca-nhan" target="_blank">
            Chính sách bảo mật thông tin cá nhân
          </a>
        </p>
        <p className={cx("copyright")}>
          © 2019 - Bản quyền của Công Ty Cổ Phần Ti Ki - Tiki.vn
        </p>
      </div>
    </footer>
  );
}

export default CheckoutFooter;
