import { FaUserCircle } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";

// Firebase imports
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase/config.js";
import { collection, addDoc } from "firebase/firestore";

// React Firebase Hooks imports
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

// Components imports
import UserList from "./Chat/UserList";
import UserAvatar from "./UserAvatar";
import chat from "./../pages/chat/[id]";

// Utils imports
import getOtherEmail from "./../utils/getOtherEmail";
import { validEmail } from "./../utils/validEmail";

const Sidebar = () => {
  const [user] = useAuthState(auth);

  const [snapshot, loading, error] = useCollection(collection(db, "chats"));
  const chats = snapshot?.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const handleLogout = () => {
    signOut(auth);
  };

  const chatUserExist = (email) =>
    chats?.find(
      (chat) => chat.users.includes(user.email) && chat.users.includes(email)
    );

  const handleNewChatButton = async () => {
    const inputEmail = prompt("Enter email of recipient.");
    if (
      !chatUserExist(inputEmail) &&
      inputEmail !== user.email &&
      validEmail(inputEmail)
    ) {
      await addDoc(collection(db, "chats"), {
        users: [user.email, inputEmail],
      });
    } else {
      alert("Enter valid email or user already exist.");
    }
  };

  return (
    <div>
      <div className="w-80  h-screen border-r-2 border-gray-200">
        <div className="flex h-20 w-full border-b-2  items-center justify-between p-3">
          <div className="flex items-center">
            <UserAvatar userPhotoURL={user?.photoURL} />
            <p>{user.displayName}</p>
          </div>
          <IoLogOutOutline
            onClick={handleLogout}
            className="text-gray-500 text-3xl hover:cursor-pointer"
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            onClick={handleNewChatButton}
            className="m-4 p-4 bg-slate-100 hover:bg-slate-200 w-full rounded-md"
          >
            New Chat
          </button>
        </div>

        <div className="max-h-[75%] flex flex-col overflow-y-auto hide-scrollbar flex-1">
          {chats
            ?.filter((chat) => chat.users.includes(user.email))
            .map((chat, id) => {
              return (
                <UserList
                  id={chat.id}
                  userEmail={getOtherEmail(chat.users, user)}
                  key={id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
