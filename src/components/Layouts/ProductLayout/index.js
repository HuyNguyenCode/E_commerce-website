import React from "react";
import Header from "@/components/Headers/MainHeader";
import Footer from "@/components/Footers/MainFooter";

export default function ProductLayout({ children }) {
  return (
    <>
      <Header />
      <main style={{backgroundColor:"#f5f5fa"}}>{ children }</main>
      <Footer />
    </>
  );
}
