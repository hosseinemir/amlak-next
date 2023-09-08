import AmlakUser from "@/models/AmlakUser";
import Profile from "@/models/Profile";
import ConnectDB from "@/utils/ConnectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
export async function DELETE(req, context) {
  try {
    await ConnectDB();
    const id = context.params.profileId;
    const session =await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        { error: "لطفا وارد حساب کاربری خود شوید" },
        { status: 401 }
      );
    }
    
    const user = await AmlakUser.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        { error: "کاربر وارد شده معتبر نیست" },
        { status: "401" }
      );
    }
    const profile = await Profile.findOne({ _id: id });
    if (!user._id.equals(profile.UserId)) {
      return NextResponse.json(
        { error: "دسترسی شما به این آگهی محدود شده است" },
        { status: 403 }
      );
    }
    await Profile.deleteOne({ _id: id });
    return NextResponse.json({message:"آگهی با موفیقت حذف شد"},{status:200})
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "ارتباط با سرور ممکن نیست" },
      { status: 500 }
    );
  }
}
