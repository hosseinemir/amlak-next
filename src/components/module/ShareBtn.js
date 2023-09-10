"use client";
import { LuShare2 } from "react-icons/lu";
import styles from "./ShareBtn.module.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useEffect, useState } from "react";

export default function ShareBtn() {
    const [url,setUrl]=useState("")
    useEffect(()=>{
        setUrl(window.location.href)
    },[])
  return (
    <CopyToClipboard text={url}>
      <div className={styles.container}>
        <LuShare2 />
        <button>اشتراک گذاری</button>
      </div>
    </CopyToClipboard>
  );
}
