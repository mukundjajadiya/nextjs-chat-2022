import { FaUserCircle } from "react-icons/fa";


const ChatUser = () => {
  return (
    <>
      <div className="flex items-center p-3 hover:bg-slate-200 hover:cursor-pointer">
        <div className="w-min">
          <FaUserCircle className="text-3xl text-gray-400 mr-3  " />
        </div>
        <p className="break-all">mukundjajadiya2017@gmail.com</p>
      </div>
    </>
  );
};

export default ChatUser;
