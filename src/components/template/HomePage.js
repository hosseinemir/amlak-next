import HomeCard from "@/module/HomeCard";
import styles from "./HomePage.module.css";
import { FiCircle } from "react-icons/fi";
import { FaCity } from "react-icons/fa";
export default function HomePage() {
  const services = ["اجاره", "رهن", "فروش", "خرید"];
  const cities = ["تهران", "اصفهان", "شیراز", "مشهد", "بابل", "البرز", "قزوین"];
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.desc}>
          <h1 className={styles.name}>تامین ایکس</h1>
          <h1 className={styles.desch1}>سامانه خرید و اجاره املاک</h1>
          <div className={styles.serv}>
            {services.map((i) => (
              <span key={i}>
                <FiCircle />
                {i}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <HomeCard title="خانه ویلایی" name="villa" />
        <HomeCard title="آپارتمان" name="apartment" />
        <HomeCard title="مغازه" name="store" />
        <HomeCard title="دفتر" name="office" />
      </div>
      <div className={styles.city}>
        <h3>شهر های پربازدید</h3>
        <ul className={styles.citylist}>
          {cities.map((i) => (
            <li className={styles.cityitem} key={i}>
              <FaCity />

              {i}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
