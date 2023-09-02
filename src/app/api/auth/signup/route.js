import { NextResponse } from "next/server";
import ConnectDB from "@/utils/ConnectDB";
import AmlakUser from "@/models/AmlakUser";
import { hashpassword } from "@/utils/Auth";

export async function POST(req) {
  try {
    await ConnectDB();
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ error: "دیتای نامعتبر" }, { status: 422 });
    }
    console.log({ email, password });
    const existinguser = await AmlakUser.findOne({ email });
    console.log(existinguser);

    if (existinguser) {
      return NextResponse.json(
        { error: "ایمیل وارد شده وجود دارد" },
        { status: 422 }
      );
    }
    const hashedpassword = await hashpassword(password);
    console.log(hashedpassword);
    const newuser = await AmlakUser.create({
      email: email,
      password: hashedpassword,
    });
    console.log(newuser);
    return NextResponse.json(
      { message: "یوزر با موفقیت اضافه شد" },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ error: "خطا در سمت سرور" }, { status: 500 });
  }
}
