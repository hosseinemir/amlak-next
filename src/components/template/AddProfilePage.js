"use client";
import { useState } from "react";
import styles from "./AddProfilePage.module.css";
import TextInput from "@/module/TextInput";
import RadioList from "@/module/RadioList";
import TextList from "@/module/TextList";
import CustomDatePicker from "@/module/CustomDatePicker";

export default function AddProfilePage() {
  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });

  const submitHandler = ()=>{
    console.log(profileData)
  }
  return (
    <div className={styles.container}>
      <p className={styles.title}>ثبت آگهی</p>

      <TextInput
        title="عنوان آگهی:"
        name="title"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="توضیحات :"
        name="description"
        profileData={profileData}
        setProfileData={setProfileData}
        textarea={true}
      />
      <TextInput
        title=" ادرس:"
        name="location"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="شماره تماس :"
        name="phone"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title=" قیمت(تومان):"
        name="price"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="بنگاه :"
        name="realState"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <RadioList profileData={profileData} setProfileData={setProfileData}/>
      <TextList  title="امکانات رفاهی" profileData={profileData} setProfileData={setProfileData} type="amenities"/>
      <TextList  title="قوانین" profileData={profileData} setProfileData={setProfileData} type="rules"/>
      <CustomDatePicker profileData={profileData} setProfileData={setProfileData}/>
  
      <button className={styles.btn} onClick={submitHandler}>ثبت آگهی</button>
    </div>
  );
}
