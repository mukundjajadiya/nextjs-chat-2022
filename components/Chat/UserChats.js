import { useRef, useEffect } from "react";

const UserChats = ({ user, messages }) => {
  const bottomOfChatRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      bottomOfChatRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }, [messages]);

  return (
    <>
      <div className="flex flex-col flex-1 pt-4 mx-5 overflow-y-auto hide-scrollbar">
        {messages?.map((msg, id) => {
          const sender = msg.sender === user.email;
          return (
            <p
              key={id}
              className={`bg-blue-100 w-fit min-w-[100px] rounded-lg p-3 m-1 ${
                !sender ? "self-start bg-blue-100" : "self-end bg-green-100"
              }`}
            >
              {msg.text}
            </p>
          );
        })}
        <div ref={bottomOfChatRef}></div>
      </div>
    </>
  );
};

export default UserChats;
