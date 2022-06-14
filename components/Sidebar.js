import { FaUserCircle } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";

// import components
import ChatUser from './Chat/ChatUser';

const Sidebar = () => {
  return (
    <div>
      <div className="w-80  h-screen border-r-2 border-gray-200">
        <div className="flex h-20 w-full border-b-2  items-center justify-between p-3">
          <div className="flex items-center">
            <FaUserCircle className="text-gray-400 mr-3 text-3xl" />
            <p>mukund jajadiya</p>
          </div>
          <IoLogOutOutline className="text-gray-500 text-3xl hover:cursor-pointer" />
        </div>

        <div className="flex items-center justify-center">
          <button className="m-4 p-4 bg-slate-100 hover:bg-slate-200 w-full rounded-md">
            New Chat
          </button>
        </div>

        <div className="max-h-[75%] flex flex-col overflow-y-auto hide-scrollbar">
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
