"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./AddProfilePage.module.css";
import TextInput from "@/module/TextInput";
import RadioList from "@/module/RadioList";
import TextList from "@/module/TextList";
import CustomDatePicker from "@/module/CustomDatePicker";
import { toast, Toaster } from "react-hot-toast";
import { testprice } from "@/validation/validators";
import { ThreeDots } from "react-loader-spinner";
export default function AddProfilePage({ data }) {
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

  const [titleerr, setTitleerr] = useState(false);
  const [descriptionerr, setdescriptionerr] = useState(false);
  const [locationerr, setlocationerr] = useState(false);
  const [phoneerr, setphoneerr] = useState(false);
  const [priceerr, setpriceerr] = useState(false);
  const [realStateerr, setrealStateerr] = useState(false);
  const [categoryerr, setcategoryerr] = useState(true);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (data) setProfileData(data);
  }, []);
  useEffect(() => {
    if ((profileData.title.length < 5) & (profileData.title.length !== 0)) {
      setTitleerr(true);
    } else {
      setTitleerr(false);
    }
    if (
      (profileData.description.length < 25) &
      (profileData.description.length !== 0)
    ) {
      setdescriptionerr(true);
    } else {
      setdescriptionerr(false);
    }
    if (
      (profileData.location.length < 5) &
      (profileData.location.length !== 0)
    ) {
      setlocationerr(true);
    } else {
      setlocationerr(false);
    }
    if ((profileData.phone.length !== 11) & (profileData.phone.length !== 0)) {
      setphoneerr(true);
    } else {
      setphoneerr(false);
    }
    if (!testprice(profileData.price) & (profileData.price.length !== 0)) {
      setpriceerr(true);
    } else {
      setpriceerr(false);
    }
    if (
      (profileData.realState.length < 3) &
      (profileData.realState.length !== 0)
    ) {
      setrealStateerr(true);
    } else {
      setrealStateerr(false);
    }
    if (profileData.category.length < 1) {
      setcategoryerr(true);
    } else {
      setcategoryerr(false);
    }
  }, [profileData]);
  const submitHandler = async () => {
    setLoading(true);
    if (
      !profileData.title ||
      !profileData.description ||
      !profileData.location ||
      !profileData.phone ||
      !profileData.price ||
      !profileData.realState ||
      !profileData.constructionDate ||
      !profileData.category ||
      titleerr ||
      descriptionerr ||
      locationerr ||
      phoneerr ||
      priceerr ||
      realStateerr ||
      categoryerr
    ) {
      toast.error("اطلاعات وارد شده کامل نیست");
      setLoading(false);
      return;
    }
    const res = await fetch("/api/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profileData),
    });
    const data = await res.json();
    if (data.error) {
      setLoading(false);
      return toast.error(data.error);
    }
    setLoading(false);
    return toast.success(data.message);
  };
  const editHandler = async () => {
    setLoading(true);
    const res = await fetch("/api/profile", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profileData),
    });
    const data = await res.json();

    if (data.error) {
      setLoading(false);
      return toast.error(data.error);
    } else {
      toast.success(data.message);
      router.refresh();
      setLoading(false);

      return;
    }
  };
  return (
    <div className={styles.container}>
      <p className={styles.title}>{data ? "ویرایش آگهی" : "ثبت آگهی"}</p>

      <TextInput
        title="عنوان آگهی:"
        name="title"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      {titleerr ? (
        <p className={styles.pelement}>عنوان حداقل شامل پنج حرف میباشد</p>
      ) : null}
      <TextInput
        title="توضیحات :"
        name="description"
        profileData={profileData}
        setProfileData={setProfileData}
        textarea={true}
      />
      {descriptionerr ? (
        <p className={styles.pelement}>توضیحات کامل تر شود</p>
      ) : null}

      <TextInput
        title=" ادرس:"
        name="location"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      {locationerr ? <p className={styles.pelement}>ادرس الزامی است</p> : null}

      <TextInput
        title="شماره تماس :"
        name="phone"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      {phoneerr ? (
        <p className={styles.pelement}>شماره معتبر وارد کنید</p>
      ) : null}

      <TextInput
        title=" قیمت(تومان):"
        name="price"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      {priceerr ? (
        <p className={styles.pelement}>قیمت معتبر وارد کنید</p>
      ) : null}

      <TextInput
        title="بنگاه :"
        name="realState"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      {realStateerr ? (
        <p className={styles.pelement}>نام املاک مورد نظر الزامی است</p>
      ) : null}

      <RadioList profileData={profileData} setProfileData={setProfileData} />
      {categoryerr ? (
        <p className={styles.pelement}>نوع واحد را انتخاب کنید</p>
      ) : null}

      <TextList
        title="امکانات رفاهی"
        profileData={profileData}
        setProfileData={setProfileData}
        type="amenities"
      />
      <TextList
        title="قوانین"
        profileData={profileData}
        setProfileData={setProfileData}
        type="rules"
      />
      <CustomDatePicker
        profileData={profileData}
        setProfileData={setProfileData}
      />
      {loading ? (
        <ThreeDots
          ariaLabel="threedots loader"
          color="#64CCC5"
          visible={true}
          height={45}
          wrapperStyle={{ margin: "auto" }}
        />
      ) : data ? (
        <button className={styles.btn} onClick={editHandler}>
          ویرایش آگهی
        </button>
      ) : (
        <button className={styles.btn} onClick={submitHandler}>
          ثبت آگهی
        </button>
      )}

      <Toaster />
    </div>
  );
}
