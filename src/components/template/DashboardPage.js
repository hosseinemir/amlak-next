import styles from "./DashboardPage.module.css";

export default function DashboardPage({createdAt}) {
    console.log(createdAt)
  return (
    <div className={styles.container}>
      <p>سلام</p>
      <p>
        اینجا میتونی هر ملکی که خواستی رو آگهی کنی که بقیه ببین ، یا اینکه
        هزاران آگهی که بقیه گذاشتن رو ببینی.
      </p>
      <p className={styles.date}>
        تاریخ عضویت :<p >{new Date(createdAt).toLocaleDateString("fa-IR")}</p>
      </p>
    </div>
  );
}
