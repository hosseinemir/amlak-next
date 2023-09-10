import Card from "@/module/Card";
import styles from "./BuyResidentialsPage.module.css";
import { HiFilter } from "react-icons/hi";
import Link from "next/link"
export default function BuyResidentialsPage({data}) {
  return <div className={styles.container}>
    <div className={styles.sidebar}>
      <h3>
        <HiFilter/>
        انتخاب  کنید
        </h3>
        <Link href="/buy-residential">همه</Link>
        <Link href="/buy-residential?category=villa">ویلا</Link>
        <Link href="/buy-residential?category=apartment">آپارتمان</Link>
        <Link href="/buy-residential?category=store">مغازه</Link>
        <Link href="/buy-residential?category=office">دفتر</Link>
    </div>
    <div className={styles.main}>
      {data.length ? null : <p>هیچ آگهی ثبت نشده است</p>}
      {data?.map(profile=>(
        <div key={profile._id} className={styles.carddiv}>
        <Card  data={profile}/>
        </div>
      ))}
    </div>
  </div>;
}
