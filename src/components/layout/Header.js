"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import { FiLogIn } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { useSession } from "next-auth/react";
export default function Header() {
  const { data } = useSession();
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <ul>
          <li>
            <Link href={"/"}>صفحه اصلی</Link>
          </li>
          <li>
            <Link href={"/buy-residential"}>آگهی ها</Link>
          </li>
        </ul>
      </div>
      <div className={styles.login}>
        {data ? (
          <Link href={"/dashboard"}>
            <FaUserAlt />
          </Link>
        ) : (
          <Link href={"/signin"}>
            <FiLogIn />
            <span>ورود</span>
          </Link>
        )}
      </div>
    </div>
  );
}
