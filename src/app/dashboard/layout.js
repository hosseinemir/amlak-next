import DashboardSidebar from "@/layout/DashboardSidebar";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import ConnectDB from "@/utils/ConnectDB";
import AmlakUser from "@/models/AmlakUser";

export const metadata = {
  title: "تامین ایکس | داشبورد",
};
export default async function layout({ children }) {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (!session) redirect("/signin");
  await ConnectDB();
  const user = await AmlakUser.findOne({ email: session.user.email });
  if (!user) return <h3>مشکلی پیش امده است</h3>;
  return (
    <DashboardSidebar role={user.role} email={user.email}>
      {children}
    </DashboardSidebar>
  );
}
