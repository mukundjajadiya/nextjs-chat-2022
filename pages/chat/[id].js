import Head from "next/head";
import { useRouter } from "next/router";
// Component imports
import Sidebar from "./../../components/Sidebar";
import ChatTopBar from "./../../components/Chat/ChatTopBar";
import BottomBar from "./../../components/Chat/BottomBar";
import UserChats from "./../../components/Chat/UserChats";

// Firebase imports
import { collection, query, orderBy, doc } from "firebase/firestore";

// Firebase Config imports
import { db, auth } from "../../firebase/config";

// React Firebase Hooks imports
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import getOtherEmail from "./../../utils/getOtherEmail";

const Chat = () => {
  const router = useRouter();
  const { id } = router.query;

  const [user] = useAuthState(auth);
  const [chat] = useDocumentData(doc(db, "chats", id));

  const q = query(collection(db, `chats/${id}/messages`), orderBy("timestamp"));
  const [messages] = useCollectionData(q);

  return (
    <>
      <Head>
        <title>Chat App</title>
      </Head>
      <div className="flex w-full h-screen flex-1">
        <Sidebar />

        <div className="flex flex-col w-full h-screen">
          <ChatTopBar email={getOtherEmail(chat?.users, user)} />
          <UserChats user={user} messages={messages} />
          <BottomBar id={id} user={user} />
        </div>
      </div>
    </>
  );
};

export default Chat;
