import styles from "./Details.module.css";
import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiHome3Line } from "react-icons/ri";
import { MdApartment } from "react-icons/md";
import { BiStore } from "react-icons/bi";
import { GiOfficeChair } from "react-icons/gi";
import { BiCalendarCheck } from "react-icons/bi";
import { e2p, sp } from "@/utils/replaceNumber";
import ShareBtn from "@/module/ShareBtn";
export default function Details({ data }) {
  const categoryicon = {
    villa: <RiHome3Line />,
    apartment: <MdApartment />,
    store: <BiStore />,
    office: <GiOfficeChair />,
  };
  const category = {
    apartment: "آپارتمان",
    villa: "ویلا",
    store: "مغازه",
    office: "دفتر",
  };
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>{data.title}</h1>
        <span>
          <HiOutlineLocationMarker />
          {data.location}
        </span>
        <h3 className={styles.des}>توضیحات</h3>
        <p className={styles.des}>{data.description}</p>
        <span></span>
        <h3>امکانات</h3>
        {data.amenities.length ? (
          <ul>
            {data.amenities.map((i, index) => (
              <li key={index}>{i}</li>
            ))}
          </ul>
        ) : (
          <p>هیچ موردی ذکر نشده است</p>
        )}
        <span></span>
        <h3>قوانین</h3>
        {data.rules.length ? (
          <ul>
            {data.rules.map((i, index) => (
              <li key={index}>{i}</li>
            ))}
          </ul>
        ) : (
          <p>هیچ موردی ذکر نشده است</p>
        )}
      </div>
      <div className={styles.sidebar}>
        <div className={styles.realstate}>
          <p>
            <SiHomebridge />
            {data.realState}
          </p>
          <span>
            <AiOutlinePhone />
            {e2p(data.phone)}
          </span>
        </div>
        <ShareBtn/>
        <div className={styles.price}>
            <p className={styles.category}>
                {categoryicon[data.category]}
                {category[data.category]}
            </p>
            <p className={styles.toman}>
                {sp(data.price)} تومان 
            </p>
            <p className={styles.cal}>
                <BiCalendarCheck/>
                {new Date(data.constructionDate).toLocaleDateString("fa-IR")}
            </p>
        </div>
      </div>
    </div>
  );
}
