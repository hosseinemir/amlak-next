import styles from "./Card.module.css";
import { RiHome3Line } from "react-icons/ri";
import { MdApartment } from "react-icons/md";
import { BiStore } from "react-icons/bi";
import { GiOfficeChair } from "react-icons/gi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiLeftArrowAlt } from "react-icons/bi";
import { sp } from "@/utils/replaceNumber";
import Link from "next/link";
export default function Card({ data: { category, title, location, price } }) {
  const categoryicon = {
    villa: <RiHome3Line />,
    apartment: <MdApartment />,
    store: <BiStore />,
    office: <GiOfficeChair />,
  };
  return (
    <div className={styles.container}>
      <div className={styles.icondiv}>{categoryicon[category]}</div>
      <p className={styles.title}>{title}</p>
      <p className={styles.location}>
        <HiOutlineLocationMarker />
        {location}
      </p>
      <p className={styles.price}>{sp(price)} تومان</p>
      <div className={styles.more}>
        <Link href="/">
        
        <p>مشاهده آگهی</p>
        <BiLeftArrowAlt/>
        </Link>
      </div>
    </div>
  );
}
