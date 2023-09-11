import BuyResidentialsPage from '@/template/BuyResidentialsPage'
import React from 'react'

export default async function BuyResidential({searchParams}) {
  const res = await fetch("https://amlak-next-hosseinemir.vercel.app/", {
    cache: "no-store",
  });
  const data = await res.json()
  if(data.error) return <h3>مشکلی پیش امده است</h3>

let prodata = data.data
if(searchParams.category){
  prodata = prodata.filter(item => item.category === searchParams.category)
}
  return (
    <>
    <BuyResidentialsPage data={prodata}/>
    </>
  )
}
