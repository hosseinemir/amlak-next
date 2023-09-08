import DashboardCard from "@/module/DashboardCard";
import styles from "./MyProfilesPage.module.css";

export default function MyProfilesPage({ data }) {
  return (
    <div className={styles.container}>
      {data ? null : (
        <p className={styles.noprofilep}>هیچ اگهی ثبت شده ای ندارید</p>
      )}
      <div className={styles.dashcardcontainer}>
        {data?.map((item) => (
          <DashboardCard key={item._id} data={JSON.parse(JSON.stringify(item))}/>
        ))}
      </div>
    </div>
  );
}
