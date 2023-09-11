"use client";
import { Toaster, toast } from "react-hot-toast";
import styles from "./AdminCard.module.css";
import { sp } from "@/utils/replaceNumber";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminCard({ data }) {
  const router = useRouter();
  const publishedHandler = async () => {
    const res = await fetch(`/api/profile/published/${data._id}`, {
      method: "PATCH",
    });
    const result = await res.json();
    if (result.message) {
      toast.success(result.message);
      router.refresh();
      return;
    }
    if (result.error) return toast.error(result.error);
  };
  const deleteHandler = async () => {
    const res = await fetch(`/api/profile/delete/${data._id}`, {
      method: "DELETE",
    });
    const result = await res.json();
    if (result.message) {
      toast.success(result.message);
      router.refresh();
      return;
    }
    if (result.error) return toast.error(result.error);
  };
  return (
    <div className={styles.container}>
      <h3>{data.title}</h3>
      <p>توضیحات: {data.description}</p>
      <div className={styles.main}>
        <span>لوکیشن: {data.location}</span>
        <span>قیمت: {sp(data.price)} تومان </span>
      </div>
      <div className={styles.btndiv}>
        <button onClick={publishedHandler}>انتشار</button>
        <Link href={`/buy-residential/${data._id}`}>
          <button>جزئیات اگهی</button>
        </Link>

        <button className={styles.dlbtn} onClick={deleteHandler}>
          حذف اگهی
        </button>
      </div>
      <Toaster />
    </div>
  );
}
