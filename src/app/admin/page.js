import ConnectDB from "@/utils/ConnectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import AmlakUser from "@/models/AmlakUser";
import DashboardSidebar from "@/layout/DashboardSidebar";
import AdminPage from "@/template/AdminPage";
import Profile from "@/models/Profile";
export const metadata = {
    title: "تامین ایکس | ادمین",
  };
export default async function Admin() {
  await ConnectDB();
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  const user = await AmlakUser.findOne({ email: session.user.email });
  if (user.role !== "ADMIN") redirect("/dashboard");

  const profiles = await Profile.find({published:false})
  return <DashboardSidebar role={user.role} email={user.email}>
    <AdminPage profiles={profiles}/>
  </DashboardSidebar>;
}
