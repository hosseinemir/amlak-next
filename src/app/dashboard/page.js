import DashboardPage from "@/template/DashboardPage";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import AmlakUser from "@/models/AmlakUser";
import ConnectDB from "@/utils/ConnectDB";


export default async function page() {
  await ConnectDB();
  const session = await getServerSession(authOptions)
  const user = await AmlakUser.findOne({email:session.user.email})
  return (
    <DashboardPage createdAt={user.createdAt}/>
  )
}
