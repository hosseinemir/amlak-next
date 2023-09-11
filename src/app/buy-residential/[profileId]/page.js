import Profile from '@/models/Profile';
import Details from '@/template/Details';
import ConnectDB from '@/utils/ConnectDB'
import React from 'react'

export default async function ProfileDetails({params:{profileId}}) {
    await ConnectDB();
    const data = await Profile.findOne({_id:profileId})
    if(!data)return <h3>مشکلی پیش امده است</h3>
  return (
    <>
    <Details data={data}/>
    </>
  )
}

export  const  generateMetadata = async ({params:{profileId}})=>{
  await ConnectDB();
  const data = await Profile.findOne({_id:profileId})
  return{
    title:data.title,
    description:data.description
  }
}