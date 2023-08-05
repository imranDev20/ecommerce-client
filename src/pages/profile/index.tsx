import ProfileLayout from "./components/layout";
import MyProfile from "./components/my-profile";

export default function ProfilePage() {
  return (
    <>
      <ProfileLayout>
        <MyProfile />
      </ProfileLayout>
    </>
  );
}
