import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import {
  renderCategorys,
  renderProductsCategory,
} from "@/redux/slice/categoryReducer";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const cx = classNames.bind(styles);
function SideBar() {
  const dispatch = useDispatch();

  const mapStateToProps = useSelector((state) => {
    return {
      categorysArr: state.category.categorysArr,
    };
  });

  const componentDidMount = async () => {
    try {
      dispatch(renderCategorys());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    componentDidMount();
    return () => componentDidMount();
  }, []);
  const router = useRouter();
  const handleClickCategory = (categoryId) => {
    router.push({
      pathname: "/category",
      query: {
        categoryId: categoryId,
      },
    });
  };

  return (
    <div className={cx("sidebar-wrapper")}>
      <div className={cx("sidebar-content")}>
        <div className={cx("category-heading")}>Danh mục</div>
        {mapStateToProps.categorysArr &&
          mapStateToProps.categorysArr.length > 0 &&
          mapStateToProps.categorysArr.map((item, index) => {
            return (
              <a
                key={index}
                title={item.title}
                className={cx("cateogry-item")}
                onClick={() => handleClickCategory(item.id)}
              >
                <div className={cx("item-img")}>
                  <div
                    src="https://salt.tikicdn.com/cache/w10/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png"
                    style={{ width: "32px", height: "32px" }}
                    className="styles__WrapperStyled-sc-p9s3t3-1 ha-dSwz loaded hide-before-load"
                  >
                    <picture className="webpimg-container">
                      <source type="image/webp" srcSet={item.image} />
                      <img
                        srcSet={item.image}
                        loading="lazy"
                        width="32"
                        height="32"
                        alt={item.title}
                        className="styles__StyledImg-sc-p9s3t3-0 hbqSye loaded"
                      />
                    </picture>
                  </div>
                </div>
                <div
                  title={item.title}
                  className="styles__StyledContent-sc-oho8ay-2 bOhmik"
                >
                  {item.title}
                </div>
              </a>
            );
          })}
      </div>
    </div>
  );
}

export default SideBar;
