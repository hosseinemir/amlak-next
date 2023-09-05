import styles from "./DashboardSidebar.module.css"
import {CgProfile} from "react-icons/cg"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import Link from "next/link"
import Ebtn from "@/module/Ebtn"
export default async function DashboardSidebar({children}) {
    const session =await getServerSession(authOptions)

  return (
    <div className={styles.container}>
        <div className={styles.sidebar}>
            <div className={styles.email}>
                <CgProfile/>
                <p>{session?.user.email}</p>
            </div>
            <div className={styles.links}>
                <Link href={"/dashboard"}>حساب کاربری</Link>
                <Link href={"/dashboard/my-profiles"}>آگهی های من</Link>
                <Link href={"/dashboard/add"}>ثبت آگهی</Link>
                <Ebtn/>
            </div>

        </div>
        <div className={styles.dashboard}>{children}</div>
        
    </div>
  )
}
