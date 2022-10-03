import Image from "next/image"

const ProfileHeader = () => {
    return (
        <div className="relative">
            <div className="bg-[url('/bg-cover-mob.png')] lg:bg-[url('/bg-cover.png')] bg-no-repeat bg-cover bg-center rounded-[20px] w-full h-48" />
            <div className="absolute left-1/2 lg:left-10 lg:-translate-x-0 transform -translate-x-1/2 -bottom-24">
            <Image width={144} height={144} src="/profile-img.png" />
            </div>
        </div>
    )
}

export default ProfileHeader;