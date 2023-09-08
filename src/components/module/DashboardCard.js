"use client";
import Card from "./Card";
import styles from "./DashboardCard.module.css";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import {useRouter} from "next/navigation"
import { toast, Toaster } from "react-hot-toast";
export default function DashboardCard({ data }) {
  const router = useRouter()
  const edithandler = () => {
    router.push(`/dashboard/my-profiles/${data._id}`)
  };
  const deletehandler = async() => {
    const res = await fetch(`/api/profile/delete/${data._id}`,{
      method:"DELETE"
    })
    const fetchdata = await res.json();

    if(fetchdata.error){
      toast.error(fetchdata.error)
      return
    }
    toast.success(fetchdata.message)
    router.refresh()
  };
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Card data={data} />
      </div>
      <div className={styles.btns}>
        <button onClick={edithandler} className={styles.edit}>
          ویرایش آگهی
          <FiEdit />
        </button>
        <button onClick={deletehandler} className={styles.delete}>
          حذف آگهی
          <AiOutlineDelete />
        </button>
      </div>
      <Toaster/>
    </div>
  );
}
