"use client";
import styles from "./SignupPage.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { testemail, testpassword } from "@/validation/validators";
import { useRouter } from "next/navigation";
import { ThreeDots } from "react-loader-spinner";
import { signIn } from "next-auth/react";
export default function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [emailerr, setEmailerr] = useState(false);
  const [passworderr, setPassworderr] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (email === "" || testemail(email)) {
      setEmailerr(false);
    } else {
      setEmailerr(true);
    }
    if (password === "" || testpassword(password)) {
      setPassworderr(false);
    } else {
      setPassworderr(true);
    }
  }, [email, password]);

  const signinHandler = async (e) => {
    e.preventDefault();
    setLoader(true);

    if (emailerr || passworderr || !email || !password) {
      toast.error("لطفا مقادیر ورودی را چک کنید");
      setLoader(false);
      return;
    }
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoader(false);

    if (res.error) {
      console.log("first")
      toast.error(res.error);
    } else {
      router.push("/");
    }
  };
  return (
    <div className={styles.container}>
      <h4> ورود به سایت</h4>
      <form className={styles.form}>
        <label htmlFor="email">ایمیل:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value.toLowerCase())}
        />
        {emailerr ? (
          <p className={styles.err}>ایمیل وارد شده معتبر نیست</p>
        ) : null}

        <label htmlFor="password">رمز عبور:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passworderr ? (
          <p className={styles.err}>حداقل 8 حرف وارد کنید</p>
        ) : null}

        {loader ? (
          <ThreeDots
            ariaLabel="threedots loader"
            color="#64CCC5"
            visible={true}
            height={45}
            wrapperStyle={{ margin: "auto" }}
          />
        ) : (
          <button className={styles.formbtn} onClick={signinHandler}>
            ورود
          </button>
        )}
      </form>
      <p className={styles.before}>
        قبلا ثبت نام نکرده اید ؟ <Link href={"./signup"}>ثبت نام</Link>
      </p>
     
      <Toaster />
    </div>
  );
}
