import classNames from "classnames/bind";
import styles from "./Section.module.scss";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RatingStarsCourses from "@/components/SVGImg/RatingStarsCoures";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { renderSellingPros } from "@/redux/slice/productReducer";
import { useRouter } from "next/router";
const cx = classNames.bind(styles);
function SellingProducts() {
  const dispatch = useDispatch();

  const mapStateToProps = useSelector((state) => {
    return {
      sellingProsArr: state.product.sellingProsArr,
    };
  });

  const [prosList1, setProsList1] = useState([]);
  const [prosList2, setProsList2] = useState([]);
  const [prosList3, setProsList3] = useState([]);

  const [category1, setCategory1] = useState("");
  const [category2, setCategory2] = useState("");
  const [category3, setCategory3] = useState("");

  const [numArr, setNumArr] = useState([]);

  const notOverlapId = (id) => {
    setNumArr([...numArr, id]);
  };

  const GenerateRandomId = () => {
    do {
      let check = 0;
      const categoryId = Math.floor(Math.random() * (12 - 0) + 0);
      for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] === categoryId) {
          check = 1;
          break;
        }
      }
      if (!check) {
        notOverlapId(categoryId);
        return categoryId;
      }
    } while (check);
  };

  const componentDidMount = async () => {
    try {
      const id = GenerateRandomId();
      if (!prosList1.length) {
        dispatch(renderSellingPros(id));
      } else if (prosList2.length) {
        dispatch(renderSellingPros(id));
      } else if (!prosList3.length) {
        dispatch(renderSellingPros(id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    componentDidMount();
    return () => componentDidMount();
  }, [prosList1.length === 0, prosList2.length === 0, prosList3.length === 0]);

  useEffect(() => {
    try {
      if (!prosList1.length) {
        setProsList1(mapStateToProps.sellingProsArr);
        setCategory1(mapStateToProps.sellingProsArr[0].category);
      } else if (!prosList2.length) {
        setProsList2(mapStateToProps.sellingProsArr);
        setCategory2(mapStateToProps.sellingProsArr[0].category);
      } else if (!prosList3.length) {
        setProsList3(mapStateToProps.sellingProsArr);
        setCategory3(mapStateToProps.sellingProsArr[0].category);
      }
    } catch (error) {
      console.log(error);
    }
  }, [mapStateToProps.sellingProsArr]);

  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidestoscroll: 1,
  };
  const [state, showState] = useState(1);
  const handleChangeState = (value) => {
    showState(value);
  };
  const currencyFormat = (num) => {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + " ₫";
  };
  const router = useRouter();
  const handleClickPros = (productId) => {
    console.log(productId);
    router.push({
      pathname: "/product",
      query: {
        productId: productId,
      },
    });
  };

  return (
    <div className={cx("selling-product-content")}>
      <div className={cx("product-type")}>
        <div
          className={state === 1 ? cx("type-option active") : cx("type-option")}
          onClick={() => handleChangeState(1)}
        >
          {category1}
        </div>
        <div
          className={state === 2 ? cx("type-option active") : cx("type-option")}
          onClick={() => handleChangeState(2)}
        >
          {category2}
        </div>
        <div
          className={state === 3 ? cx("type-option active") : cx("type-option")}
          onClick={() => handleChangeState(3)}
        >
          {category3}
        </div>
      </div>
      <div
        className={
          state === 1 ? cx("products-slider") : cx("products-slider disable")
        }
        onClick={() => handleChangeState(1)}
      >
        <Slider {...settings}>
          {prosList1 &&
            prosList1.length > 0 &&
            prosList1.map((item, index) => {
              return (
                <div
                  className={cx("product-item")}
                  key={index}
                  onClick={() => handleClickPros(item.id)}
                >
                  <img
                    src={item.productImage}
                    className={cx("product-img")}
                  ></img>
                  <div className={cx("product-des")}>
                    <div className={cx("genuine-tag")}></div>
                    <div className={cx("product-title")}>
                      {item.productName}
                    </div>
                    <div className={cx("product-rate")}>
                      <RatingStarsCourses />
                    </div>
                    <div className={cx("product-price")}>
                      <div className={cx("price")}>
                        {currencyFormat(item.productSalePrice)}
                      </div>
                    </div>
                  </div>
                  <div className={cx("product-delivery")}>
                    <span>{item.giao_thu}</span>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>

      <div
        className={
          state === 2 ? cx("products-slider") : cx("products-slider disable")
        }
        onClick={() => handleChangeState(2)}
      >
        <Slider {...settings}>
          {prosList2 &&
            prosList2.length > 0 &&
            prosList2.map((item, index) => {
              return (
                <div
                  className={cx("product-item")}
                  key={index}
                  onClick={() => handleClickPros(item.id)}
                >
                  <img
                    src={item.productImage}
                    className={cx("product-img")}
                  ></img>
                  <div className={cx("product-des")}>
                    <div className={cx("genuine-tag")}></div>
                    <div className={cx("product-title")}>
                      {item.productName}
                    </div>
                    <div className={cx("product-rate")}>
                      <RatingStarsCourses />
                    </div>
                    <div className={cx("product-price")}>
                      <div className={cx("price")}>
                        {currencyFormat(item.productSalePrice)}
                      </div>
                    </div>
                  </div>
                  <div className={cx("product-delivery")}>
                    <span>{item.giao_thu}</span>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>

      <div
        className={
          state === 3 ? cx("products-slider") : cx("products-slider disable")
        }
        onClick={() => handleChangeState(3)}
      >
        <Slider {...settings}>
          {prosList3 &&
            prosList3.length > 0 &&
            prosList3.map((item, index) => {
              return (
                <div
                  className={cx("product-item")}
                  key={index}
                  onClick={() => handleClickPros(item.id)}
                >
                  <img
                    src={item.productImage}
                    className={cx("product-img")}
                  ></img>
                  <div className={cx("product-des")}>
                    <div className={cx("genuine-tag")}></div>
                    <div className={cx("product-title")}>
                      {item.productName}
                    </div>
                    <div className={cx("product-rate")}>
                      <RatingStarsCourses />
                    </div>
                    <div className={cx("product-price")}>
                      <div className={cx("price")}>
                        {currencyFormat(item.productSalePrice)}
                      </div>
                    </div>
                  </div>
                  <div className={cx("product-delivery")}>
                    <span>{item.giao_thu}</span>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    </div>
  );
}

export default SellingProducts;
