import classNames from "classnames/bind";
import styles from "./auth.module.scss";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { memo } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { SessionProvider } from "next-auth/react";
// import { useSession, signIn, signOut } from "next-auth/react";

const cx = classNames.bind(styles);

function AuthModal({ setCloseModal }) {
  const router = useRouter();
  // const mapStateToProps = useSelector((state) => {
  //   return {
  //     isLoginSuccess: state.user.isLoginSuccess,
  //   };
  // });

  const [pane, switchPane] = useState(1);
  const handleSwitchPane = (num) => {
    if (num === 1) {
      switchPane(1);
    } else {
      switchPane(2);
    }
  };
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const handleSignup = () => {
    const userInfor = {
      fullName,
      email,
      phoneNumber,
      password,
      rePassword,
    };
    console.log(userInfor);
  };

  const handleLogin = async () => {
    // const response = new Promise((resolve, reject) => {
    //   try {
    //     const response = axios.post(
    //       "http://localhost:5000/login",
    //       JSON.stringify({ email, password }),
    //       {
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       }
    //     );
    //     resolve(response);
    //   } catch (error) {
    //     reject(response);
    //   }
    // });
    // const response = await fetch("http://localhost:5000/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ email, password }),
    // });
    // const result = await signIn("credentials", {
    //   email,
    //   password,
    //   redirect: false,
    // });
    // if (result?.error) {
    //   console.error("Login failed:", result.error);
    //   alert("Login failed");
    // } else {
    //   router.push({
    //     pathname: "/",
    //   });
    //   console.log("Login successful");
    // }
    const newEmail= "admin@gmail.com"
    const newPasword= "admin"
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newEmail, newPasword }),
    });
    console.log(response);
    // const userInfor = { email, password };
    // try {
    //   console.log("password in auth");
    //   console.log(password);
    //   dispatch(loginForUser(email, password));
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <div className={cx("main_container")}>
      <div
        className={cx("react-modal-content")}
        tabIndex="-1"
        role="dialog"
        aria-modal="true"
      >
        <div className={cx(pane === 1 ? "login-modal" : "login-modal disable")}>
          <button
            className={cx("btn-close")}
            onClick={() => setCloseModal(true)}
          >
            <img
              className={cx("close-img")}
              src="https://salt.tikicdn.com/ts/upload/fe/20/d7/6d7764292a847adcffa7251141eb4730.png"
              alt="icon"
            />
          </button>
          <div className={cx("styled-left")}>
            <div className={cx("styled-login-with-mail")}>
              <div className={cx("heading-loginsignup")}>
                <h4>Đăng ký tài khoản</h4>
              </div>
              <div className={cx("input")}>
                <input
                  type="fullname"
                  name="fullname"
                  placeholder="Họ tên"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className={cx("input")}>
                <input
                  type="phonenumber"
                  name="phonenumber"
                  placeholder="Số điện thoại"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className={cx("input")}>
                <input
                  type="email"
                  name="email"
                  placeholder="acb@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={cx("input")}>
                <input
                  type="password"
                  placeholder="Mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className={cx("input")}>
                <input
                  type="retype-password"
                  placeholder="Nhập lại mật khẩu"
                  value={rePassword}
                  onChange={(e) => setRePassword(e.target.value)}
                />
              </div>
              <button onClick={handleSignup}>Đăng ký</button>

              <div className={cx("create-account")}>
                Đã có tài khoản?{" "}
                <p onClick={() => handleSwitchPane(2)}>đăng nhập</p>
              </div>
            </div>
          </div>
          <div className={cx("styled-right")}>
            <img
              src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png"
              width="203"
            />
            <div className={cx("content-loginsignup")}>
              <h4>Mua sắm tại Tiki</h4>
              <span>Siêu ưu đãi mỗi ngày</span>
            </div>
          </div>
        </div>
        <div className={cx(pane === 2 ? "login-modal" : "login-modal disable")}>
          <button className={cx("btn-close")}>
            <img
              className={cx("close-img")}
              src="https://salt.tikicdn.com/ts/upload/fe/20/d7/6d7764292a847adcffa7251141eb4730.png"
              alt="icon"
            />
          </button>
          <div className={cx("styled-left")}>
            <div className={cx("styled-login-with-mail")}>
              <div className={cx("heading-loginsignup")}>
                <h4>Đăng nhập bằng email</h4>
                <p>Nhập email và mật khẩu tài khoản Tiki</p>
              </div>

              <div className={cx("input")}>
                <input
                  type="email"
                  name="email"
                  placeholder="acb@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={cx("input")}>
                <input
                  type="password"
                  placeholder="Mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" onClick={handleLogin}>
                Đăng nhập
              </button>

              <p className={cx("forgot-pass")}>Quên mật khẩu?</p>
              <div className={cx("create-account")}>
                Chưa có tài khoản?{" "}
                <p onClick={() => handleSwitchPane(1)}>tạo tài khoản</p>
              </div>
            </div>
          </div>
          <div className={cx("styled-right")}>
            <img
              src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png"
              width="203"
            />
            <div className={cx("content-loginsignup")}>
              <h4>Mua sắm tại Tiki</h4>
              <span>Siêu ưu đãi mỗi ngày</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(AuthModal);
