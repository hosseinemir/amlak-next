import DashboardSidebar from '@/layout/DashboardSidebar'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
export default async function layout({children}) {
  const session =await getServerSession(authOptions)
  console.log(session)
  if (!session) redirect("/signin")
  return (
    <DashboardSidebar>{children}</DashboardSidebar>
  )
}
