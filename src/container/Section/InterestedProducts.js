import classNames from "classnames/bind";
import styles from "./Section.module.scss";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const cx = classNames.bind(styles);
function InterestedProducts() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidestoscroll: 1,
  };

  let InterestedProductInfor = [
    {
      productImg:
        "https://salt.tikicdn.com/cache/280x280/ts/product/b6/4b/05/15eb38df64f85316fc9ed1032927a45e.jpg.webp",
      productName:
        "Điện thoại Samsung Galaxy M14 5G (6GB/128GB) - Đã kích hoạt bảo hành điện tử - Hàng chính hãng",
      productPrice: "₫379,000",
      producrDelivery: "Giao thứ 7, 07/10",
    },

    {
      productImg:
        "https://salt.tikicdn.com/cache/280x280/ts/product/14/8a/b5/7f171a7e1231f6a7f638ffcf8e1b9f58.jpg.webp",
      productName: "Sữa bột Abbott Pediasure 850g cho trẻ từ 1 - 10 tuổi",
      productPrice: "₫279,000",
      producrDelivery: "Giao thứ 7, 07/10",
    },

    {
      productImg:
        "https://salt.tikicdn.com/cache/280x280/ts/product/1e/56/76/5c0a05f44c843286c78388bd260dbc4d.jpg.webp",
      productName: "Apple iPhone 14 Pro Max",
      productPrice: "₫379,000",
      producrDelivery: "Giao thứ 7, 07/10",
    },

    {
      productImg:
        "https://salt.tikicdn.com/cache/280x280/ts/product/66/98/f5/3e89cff4b82546a78ddf8f6ee374916d.jpg",
      productName: "Điện Thoại Oppo A54 (4GB/128GB) - Hàng Chính Hãng",
      productPrice: "₫399,000",
      producrDelivery: "Giao thứ 7, 07/10",
    },

    {
      productImg:
        "https://salt.tikicdn.com/cache/280x280/ts/product/4f/ee/0e/d5a54d53266df6dc712db5fc1858b020.jpg",
      productName: "Giáo Trình C++ Và Lập Trình Hướng Đối Tượng",
      productPrice: "₫329,000",
      producrDelivery: "Giao thứ 7, 07/10",
    },

    {
      productImg:
        "https://salt.tikicdn.com/cache/280x280/ts/product/e6/a5/3a/14338e7ae795f56d66996b611070b173.jpg.webp",
      productName: "Từ Điển Tiếng “Em”",
      productPrice: "₫379,000",
      producrDelivery: "Giao thứ 7, 07/10",
    },

    {
      productImg:
        "https://salt.tikicdn.com/cache/280x280/ts/product/d0/4b/8a/c5e30f8d4f4f1b7958c0dd66cc5d7062.jpg",
      productName: "Nước Rửa Tay Lifebuoy Bạc Bảo Vệ Chai 450g",
      productPrice: "₫279,000",
      producrDelivery: "Giao thứ 7, 07/10",
    },

    {
      productImg:
        "https://salt.tikicdn.com/cache/280x280/ts/product/56/f0/f3/e7cf9f7058e8db1b3967f4c7490ea2d2.jpg",
      productName:
        "Balo chống trộm cao cấp GUBAG chống thấm nước, có cổng sạc USB, thiết kế mới hiện đai, sang trọng, khóa số nâng cấp, bảo mật tốt hơn",
      productPrice: "₫379,000",
      producrDelivery: "Giao thứ 7, 07/10",
    },

    {
      productImg:
        "https://salt.tikicdn.com/cache/280x280/ts/product/df/ce/6b/612b463f30333a152901e7933947f2ee.png",
      productName:
        " Sữa rửa mặt dịu lành cho da nhạy cảm Cetaphil Gentle Skin Cleanser 500ml",
      productPrice: "₫399,000",
      producrDelivery: "Giao thứ 7, 07/10",
    },

    {
      productImg:
        "https://salt.tikicdn.com/cache/280x280/ts/product/88/c1/d7/172c2fb0c966fedcc93884897f4e1ec9.jpg",
      productName:
        " Bộ Đôi Kem Dưỡng Da Ngày Và Đêm Trắng Hồng Rạng Rỡ Pond's White Beauty (50g)",
      productPrice: "₫329,000",
      producrDelivery: "Giao thứ 7, 07/10",
    },
  ];

  return (
    <div className={cx("products-slider")}>
      <Slider {...settings}>
        {InterestedProductInfor.map((item, index) => {
          return (
            <div className={cx("product-item")} key={index}>
              <img src={item.productImg} className={cx("product-img")}></img>
              <div className={cx("product-des")}>
                <div className={cx("product-title")}>{item.productName}</div>
                <div className={cx("product-price")}>
                  <div className={cx("price")}>{item.productPrice}</div>
                </div>
              </div>
              <div className={cx("product-delivery")}>
                <span>{item.producrDelivery}</span>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default InterestedProducts;
