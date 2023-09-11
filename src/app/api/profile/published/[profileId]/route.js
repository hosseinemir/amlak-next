import AmlakUser from "@/models/AmlakUser";
import Profile from "@/models/Profile";
import ConnectDB from "@/utils/ConnectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PATCH(req, context) {
  try {
    await ConnectDB();
   
    const id = context.params.profileId;
    
    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        { error: "کاربر وارد شده نیست" },
        { status: 401 }
      );
    }
    const user = await AmlakUser.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json({ error: "کاربر یافت نشد" }, { status: 404 });
    }
    if (user.role !== "ADMIN") {
      return NextResponse.json({ error: "دسترسی محدود" }, { status: 403 });
    }
    const profile = await Profile.findOne({ _id: id });
  
    profile.published = true;
    profile.save();
    return NextResponse.json({ message: "آگهی منتشر شد" }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "مشکلی پیش امده است" }, { status: 500 });
  }
}
