import Sidebar from "./../../components/Sidebar";
import ChatTopBar from "./../../components/Chat/ChatTopBar";
import BottomBar from "./../../components/Chat/BottomBar";
const chat = () => {
  return (
    <>
      <div className="flex w-full h-screen">
        <Sidebar />
        <div className="flex flex-col w-full h-screen ">
          <ChatTopBar />
          <BottomBar />
        </div>
      </div>
    </>
  );
};

export default chat;
