import ProfileHeader from "./ProfileHeader";

const UserProfile = () => {
  return (
    <div className="bg-[#F3F4F8] h-screen xl:py-12">
      <div className="bg-white max-w-7xl mx-auto h-full py-6 px-6 lg:px-11 lg:py-10 xl:rounded-[20px]">
        <ProfileHeader />
      </div>
    </div>
  );
};

export default UserProfile;
