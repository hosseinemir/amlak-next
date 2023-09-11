import { NextResponse } from "next/server";
import ConnectDB from "@/utils/ConnectDB";
import { getServerSession } from "next-auth";
import AmlakUser from "@/models/AmlakUser";
import Profile from "@/models/Profile";
import { Types } from "mongoose";

export async function GET() {
  try {
    await ConnectDB();

    const profiles = await Profile.find({published:true}).select("-UserId");

    return NextResponse.json({ data: profiles }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await ConnectDB();

    const body = await req.json();
    const {
      title,
      description,
      location,
      phone,
      price,
      realState,
      constructionDate,
      category,
      rules,
      amenities,
    } = body;

    const session = await getServerSession(req);
    if (!session)
      return NextResponse.json(
        { error: "لطفا ابتدا وارد حساب کاربری شوید" },
        { status: 401 }
      );

    const user = await AmlakUser.findOne({ email: session.user.email });
    if (!user)
      return NextResponse.json(
        { error: "حساب کاربری وجود ندارد" },
        { status: 404 }
      );

    if (
      !title ||
      !description ||
      !location ||
      !phone ||
      !price ||
      !realState ||
      !constructionDate ||
      !category
    ) {
      return NextResponse.json(
        { error: "اطلاعات به درستی وارد نشده است" },
        { status: 403 }
      );
    }

    const newprofile = await Profile.create({
      title,
      description,
      location,
      phone,
      price: +price,
      realState,
      constructionDate,
      category,
      rules,
      amenities,
      UserId: new Types.ObjectId(user._id),
    });
    return NextResponse.json(
      { message: "اطلاعات با موفقیت ثبت شد" },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}
export async function PATCH(req) {
  try {
    await ConnectDB();

    const body = await req.json();
    const {
      _id,
      title,
      description,
      location,
      phone,
      price,
      realState,
      constructionDate,
      category,
      rules,
      amenities,
    } = body;

    const session = await getServerSession(req);
    if (!session)
      return NextResponse.json(
        { error: "لطفا ابتدا وارد حساب کاربری شوید" },
        { status: 401 }
      );

    const user = await AmlakUser.findOne({ email: session.user.email });
    if (!user)
      return NextResponse.json(
        { error: "حساب کاربری وجود ندارد" },
        { status: 404 }
      );

    if (
      !_id ||
      !title ||
      !description ||
      !location ||
      !phone ||
      !price ||
      !realState ||
      !constructionDate ||
      !category
    ) {
      return NextResponse.json(
        { error: "اطلاعات به درستی وارد نشده است" },
        { status: 403 }
      );
    }

    const profile = await Profile.findOne({ _id });
    if (!user._id.equals(profile.UserId)) {
      return NextResponse.json(
        { error: "دسترسی شما به آگهی محدود است" },
        { status: 403 }
      );
    }
    profile.title = title;
    profile.description = description;
    profile.location = location;
    profile.phone = phone;
    profile.realState = realState;
    profile.price = price;
    profile.constructionDate = constructionDate;
    profile.amenities = amenities;
    profile.rules = rules;
    profile.category = category;
    profile.save();

    return NextResponse.json(
      { message: "آگهی با موفیقت ویرایش شد" },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}
