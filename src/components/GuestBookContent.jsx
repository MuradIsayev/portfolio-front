const GuestBookContent = ({ data }) => {

  const allMessages = [];
  data.forEach((userData) => {
    userData.messages.forEach((message) => {
      allMessages.push({
        userName: userData?.userName,
        photoURL: userData?.photoURL,
        message: message?.message,
        createdAt: message?.createdAt,
        isOnline: userData?.isOnline,
      });
    });
  });

  allMessages.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
 // mb-auto above img container
  return (
    <div>
      {allMessages?.reverse().map((message) => (
        <div key={`${message.userName}-${message.createdAt}`} className="mt-2">
          <div className="flex flex-row justify-start items-center gap-[4px]
                      mt-5 mb-5 md:mt-4 md:mb-4 font-[300] text-[.95rem] md:text-[.63rem]">
            <div className="w-10 h-10 rounded-full object-contain md:w-6 md:h-6 mr-[7px] md:mr-[3px] relative">
              <img
                src={message?.photoURL} alt="Profile photo" className="rounded-full" />
              {message?.isOnline ? <span class="top-0 left-7 absolute w-3 h-3 bg-green-400 border-2 border-white dark:border-[#09090B] rounded-full
                  md:left-4 md:w-[7px] md:h-[7px] md:border-[1px]
              "></span>
                : <span class="top-0 left-7 absolute md:left-4 md:w-[7px] md:h-[7px] md:border-[1px]  w-3 h-3 dark:bg-gray-300 bg-gray-400  border-2 border-white dark:border-[#09090B] rounded-full"></span>}
            </div>
            <div className="flex w-[85%] gap-[.2rem]">
              <span className=" max-w-[20%] md:max-w-[35%] font-[400] md:whitespace-nowrap">{message?.userName}:</span>
              <span className=" w-[85%] md:w-[75%] break-words">{message?.message}</span>
            </div>
          </div>
        </div>
      ))
      }
    </div >
  );
}

export default GuestBookContent;
