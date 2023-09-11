import AdminCard from "@/module/AdminCard"
import styles from "./AdminPage.module.css"

export default function AdminPage({profiles}) {
  return (
    <div>
        {profiles.length ? (null):(<p>هیچ اگهی برای تائید وجود ندارد</p>)}
        {profiles.map(i=>(
            <AdminCard key={i._id} data={JSON.parse(JSON.stringify(i))}/>
        ))}
    </div>
  )
}
