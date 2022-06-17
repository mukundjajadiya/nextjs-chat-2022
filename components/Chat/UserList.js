import { FaUserCircle } from "react-icons/fa";
import UserAvatar from "./../UserAvatar";
import { useRouter } from "next/router";
const UserList = ({ id, userPhotoURL, userEmail }) => {
  const router = useRouter();

  const handleUserList = () => {
    router.push(`/chat/${id}`);
  };

  return (
    <>
      <div
        onClick={handleUserList}
        className="flex items-center p-3 hover:bg-slate-200 hover:cursor-pointer"
      >
        <div className="w-min">
          <UserAvatar userPhotoURL={userPhotoURL} />
        </div>
        <p className="break-all">{userEmail ? userEmail : ""}</p>
      </div>
    </>
  );
};

export default UserList;
