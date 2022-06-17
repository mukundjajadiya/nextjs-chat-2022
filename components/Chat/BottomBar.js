import { useState } from "react";

// Firebase imports
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

// Firebase Config imports
import { db } from "../../firebase/config";

const BottomBar = ({ id, user }) => {
  const [chatInput, setChatInput] = useState("");

  const handleSendChatButton = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, `chats/${id}/messages`), {
      text: chatInput,
      sender: user.email,
      timestamp: serverTimestamp(),
    });

    setChatInput("");
  };

  return (
    <>
      <div className=" p-3">
        <form method="post">
          <input
            type="text"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            id="message-input"
            placeholder="Type a message..."
            autocompleterd="off"
            className="w-full outline-none py-2 px-4  rounded-full drop-shadow-2xl border-2"
          />
          <button onClick={handleSendChatButton} type="submit" hidden></button>
        </form>
      </div>
    </>
  );
};

export default BottomBar;
