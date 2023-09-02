import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./Layout.module.css"
export default function Layout({ children }) {
  
  return (
    <>
      <Header />
      <div className={styles.childdiv}>{children}</div>
      <Footer />
    </>
  );
}
