"use client";
import styles from "./SignupPage.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { testemail, testpassword } from "@/validation/validators";
import { useRouter } from "next/navigation";
import { ThreeDots } from "react-loader-spinner";
import { signIn } from "next-auth/react";
export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [emailerr, setEmailerr] = useState(false);
  const [passworderr, setPassworderr] = useState(false);
  const [repassworderr, setRepassworderr] = useState(false);

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
    if (repassword === "" || repassword === password) {
      setRepassworderr(false);
    } else {
      setRepassworderr(true);
    }
  }, [email, password, repassword]);

  const submithandler = async (e) => {
    e.preventDefault();
    setLoader(true);

    if (
      emailerr ||
      passworderr ||
      repassworderr ||
      !email ||
      !password ||
      !repassword
    ) {
      toast.error("لطفا مقادیر ورودی را چک کنید");
      setLoader(false);

      return;
    }
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    setLoader(false);

    if (res.status === 201) {
      toast.success("حساب کاربری ایجاد شد");
      await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      router.push("/");
    } else {
      toast.error(data.error);
    }
    console.log({ res, data });
  };
  return (
    <div className={styles.container}>
      <h4>ثبت نام در سایت</h4>
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
        <label htmlFor="repassword">تکرار رمز عبور:</label>
        <input
          type="password"
          id="repassword"
          value={repassword}
          onChange={(e) => setRepassword(e.target.value)}
        />
        {repassworderr ? (
          <p className={styles.err}>رمز و تکرار ان یکسان نیست</p>
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
          <button className={styles.formbtn} onClick={submithandler}>
            ثبت نام
          </button>
        )}
      </form>
      <p className={styles.before}>
        قبلا ثبت نام کردید ؟ <Link href={"./signin"}>ورود</Link>
      </p>
     
      <Toaster />
    </div>
  );
}
