"use client"
import { signOut } from "next-auth/react"
import styles from "./Ebtn.module.css"
import {FiLogOut} from "react-icons/fi"

export default function Ebtn() {
  return (
    <button className={styles.btn} onClick={signOut}>
        <FiLogOut/>
        <p>خروج</p>
    </button>
  )
}
