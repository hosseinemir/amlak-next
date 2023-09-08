import Profile from "@/models/Profile";
import AddProfilePage from "@/template/AddProfilePage";
import ConnectDB from "@/utils/ConnectDB";

export default async function Edit({ params: { profileId } }) {
  await ConnectDB();
  const profile = await Profile.findOne({ _id: profileId });
  if (!profile) return <h3>مشکلی پیش امده است ، لطفا مجدد امتحان کنید</h3>;
  return (
    <>
      <AddProfilePage data={profile} />
    </>
  );
}
