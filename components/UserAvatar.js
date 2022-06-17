import { FaUserCircle } from "react-icons/fa";

const UserAvatar = ({ userPhotoURL }) => {
  return (
    <>
      <div className="flex mr-3 w-10 h-10 rounded-full items-center justify-center">
        {userPhotoURL ? (
          <img
            src={userPhotoURL}
            alt=""
            className="w-full h-full rounded-full"
          />
        ) : (
          <FaUserCircle className=" text-gray-400 text-3xl" />
        )}
      </div>
    </>
  );
};

export default UserAvatar;
