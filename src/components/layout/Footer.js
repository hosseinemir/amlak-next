import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.rdiv}>
        <h3>بهترین و سریع ترین روش پیدا معاملات املاکی </h3>
        <p>
          تیم تامین ایکس با بیش از ده سال سابقه در معرفی ویژه ترین مکان ها با
          بهترن کمیسیون و امن ترین روش های موجود
        </p>
      </div>
      <div className={styles.ldiv}>
        <ul>
          <li>تعرفه قانونی</li>
          <li>بهترین مشاور ها</li>
          <li>پاسخگویی دائمی</li>
          <li>قوی ترین تیم املاک کشور</li>
        </ul>
      </div>
    </div>
  );
}
