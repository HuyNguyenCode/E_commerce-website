import classNames from "classnames/bind";
import styles from "./Homepage.module.scss";
import React from "react";
import InterestedProducts from "@/container/Section/InterestedProducts";
import Banner from "@/container/Section/Banner";
import SellingProducts from "@/container/Section/SellingProducts";
import MayLikeProducts from "@/container/Section/MayLikeProducts";
import HomePageLayout from "@/components/Layouts/HomePageLayout.js";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const cx = classNames.bind(styles);

export default function HomePage() {
  const { data: session } = useSession();

  //Handle Iframe
  const [iframe1Closed, setIframe1Closed] = useState(true);
  const [iframe2Closed, setIframe2Closed] = useState(true);

  const handleIframeMessage = (event) => {
    if (event.data === "closeIframe") {
      setIframe1Closed(true);
      setIframe2Closed(true);
    }
  };

  useEffect(() => {
    window.addEventListener("message", handleIframeMessage);

    return () => {
      window.removeEventListener("message", handleIframeMessage);
    };
  }, []);

  //Handle show chat bot
  const handleShowChatbot = (num) => {
    if (num === 1) {
      setIframe1Closed(false);
      setIframe2Closed(true);
    } else {
      setIframe1Closed(true);
      setIframe2Closed(false);
    }
  };

  return (
    <div className={cx("homepage-wrapper")}>
      {session ? console.log(session) : <p>You are not signed in.</p>}
      <div className={cx("chat-wrapper")}>
        <div
          className={cx("chatbot-container")}
          onClick={() => handleShowChatbot(1)}
        >
          <img
            className="chat-gpt-icon"
            alt="chat-gpt-icon"
            src="https://salt.tikicdn.com/ts/ta/f8/a1/bf/95b4110dc1fba3d9b48dfc6c60be4a90.png"
            height="32"
            width="32"
          />
          <div className={cx("assistant")}>Trợ lý</div>
        </div>
        <div className={cx("chat-seperator")}></div>
        <div
          id="chat-platform"
          className={cx("chat-platform-container")}
          onClick={() => handleShowChatbot(2)}
        >
          <img
            src="https://salt.tikicdn.com/ts/ta/e1/5e/b4/2e33d86e11e2841a6a571de6084ff365.png"
            alt="chat-consumer"
            width="32"
            height="32"
          />
          <div className={cx("new-chat")}>Tin mới</div>
          <span data-total-unread-message="4">4</span>
        </div>
      </div>
      {!iframe1Closed && (
        <iframe
          className={cx("tiki-chatgpt-service")}
          id="chatgpt-service"
          src="./ChatService"
        ></iframe>
      )}

      {!iframe2Closed && (
        <iframe
          className={cx("conversation-service")}
          id="chatgpt-service"
          src="./ChatConservation"
        />
      )}

      <div className={cx("homepage-container")}>
        <div className={cx("homepage-content")}>
          <section className={cx("homepage-banner")}>
            <Banner />
          </section>
          <section className={cx("interested-product")}>
            <h3 className={cx("section-heading")}>Sản phẩm bạn quan tâm</h3>
            <InterestedProducts />
          </section>
          <section className={cx("selling-products")}>
            <h3 className={cx("section-heading")}>Sản phẩm bán chạy</h3>
            <SellingProducts />
          </section>
          <section className={cx("may-like-products")}>
            <h3 className={cx("section-heading")}>Bạn có thể thích</h3>
            <MayLikeProducts />
          </section>
          <div className={cx("moreBtn")}>Xem Thêm</div>
        </div>
      </div>
    </div>
  );
}
HomePage.getLayout = (page) => <HomePageLayout>{page}</HomePageLayout>;
