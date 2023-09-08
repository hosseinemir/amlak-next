import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AmlakUser from "@/models/AmlakUser";
import MyProfilesPage from "@/template/MyProfilesPage";
import ConnectDB from "@/utils/ConnectDB";
import { getServerSession } from "next-auth";

export default async function page() {
  await ConnectDB();
  const session = await getServerSession(authOptions);

  const [user] = await AmlakUser.aggregate([
    { $match: { email: session.user.email } },
    {
      $lookup: {
        from: "profiles",
        localField: "_id",
        foreignField: "UserId",
        as: "profiles",
      },
    },
  ]);

  return (
    <>
      <MyProfilesPage data={user.profiles} />
    </>
  );
}
