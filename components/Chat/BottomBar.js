const BottomBar = () => {
  return (
    <>
      <div className="flex flex-col p-3  justify-between w-full h-screen">
        <p>bottom bar</p>

        <div>
          <form method="post">
            <input
              type="text"
              id="message-input"
              placeholder="Type a message..."
              class="w-full outline-none py-2 px-4  rounded-full drop-shadow-2xl border-2"
            />
            <button type="submit" hidden></button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BottomBar;
