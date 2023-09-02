import Link from "next/link";
import styles from "./Header.module.css";
import { FiLogIn } from "react-icons/fi";
export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <ul>
          <li>
            <Link href={"./"}>صفحه اصلی</Link>
          </li>
          <li>
            <Link href={"./buy-residential"}>آگهی ها</Link>
          </li>
        </ul>
      </div>
      <div className={styles.login}>
        <Link href={"./signin"}>
          <FiLogIn />
          <span>ورود</span>
        </Link>
      </div>
    </div>
  );
}
