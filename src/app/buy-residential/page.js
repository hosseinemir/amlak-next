import Profile from '@/models/Profile';
import BuyResidentialsPage from '@/template/BuyResidentialsPage'
import ConnectDB from '@/utils/ConnectDB';
import React from 'react'

export default async function BuyResidential({searchParams}) {
  await ConnectDB();
  const profile = await Profile.find({published:true}).select("-UserId")

  // const res = await fetch("https://amlak-next-hosseinemir.vercel.app/api/profile", {
  //   cache: "no-store",
  // });
  // const data = await res.json()
  if(!profile) return <h3>مشکلی پیش امده است</h3>

let prodata = profile
if(searchParams.category){
  prodata = prodata.filter(item => item.category === searchParams.category)
}
  return (
    <>
    <BuyResidentialsPage data={prodata}/>
    </>
  )
}
