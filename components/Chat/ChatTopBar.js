import { FaUserCircle } from "react-icons/fa";
const ChatTopBar = ({ email }) => {
  return (
    <>
      <div className="flex h-20 w-full p-5  items-center border-b-2">
        <FaUserCircle className="text-gray-400 mr-3 text-3xl" />
        <h1 className="text-xl  font-semibold">{email ? email : ""}</h1>
      </div>
    </>
  );
};

export default ChatTopBar;
